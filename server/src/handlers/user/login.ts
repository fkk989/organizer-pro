import { User } from "@prisma/client";
import { Request, Response } from "express";
import { z } from "zod";
import { PrismaSingleton } from "../../clients/db";
import { signAsync, verifyPassword } from "../../helpers";

const prismaClient = PrismaSingleton.getInstance().prisma;

const userInput = z.object({
  name: z.string().max(30).optional(),
  email: z.string().max(40),
  password: z.string().max(30),
});

// env var's
const SALT_ROUNDS = parseInt(process.env.SALT_ROUNDS);
const secret = process.env.JWT_SECRET;

export async function loginUser(req: Request, res: Response) {
  try {
    const reqBody = req.body;

    const parsedInput = await userInput.safeParse(reqBody);
    if (!parsedInput.success) {
      return res.status(401).json({
        success: false,
        message: "Invalid Input",
      });
    }

    const { email, password } = parsedInput.data;

    const userInDb = await prismaClient.user.findUnique({ where: { email } });

    if (!userInDb) {
      return res.status(401).json({
        success: false,
        message: "no user found with that email",
      });
    }

    const validPassword = await verifyPassword(password, userInDb.password);

    if (!validPassword) {
      return res.status(401).json({
        success: false,
        message: "incorrect password",
      });
    }
    const signedToken = await signAsync({ email: userInDb.email, secret });
    res.cookie("organizer_pro_user", signedToken);

    // deleting user password before sending as a response
    userInDb.password = "";
    return res.status(200).json({
      success: true,
      message: "login successfull",
      user: userInDb,
    });
  } catch (e: any) {
    return res.status(401).json({
      success: false,
      message: e.message,
    });
  }
}
