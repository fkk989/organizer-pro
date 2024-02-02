import { User } from "@prisma/client";
import { Response } from "express";
import { NextFncReq } from "../../middleware";
import { z } from "zod";
import bcrypt from "bcrypt";
import { PrismaSingleton } from "../../clients/db";

const prismaClient = PrismaSingleton.getInstance().prisma;

const userInput = z.object({
  name: z.string().max(30).optional(),
  email: z.string().max(40),
  password: z.string().max(30),
});

// env var's
const SALT_ROUNDS = parseInt(process.env.SALT_ROUNDS);

export async function updateUser(req: NextFncReq, res: Response) {
  try {
    const { user, body } = req as {
      user: User;
      body: {
        name: string;
        password: string;
      };
    };

    // hashing password
    const salt = await bcrypt.genSalt(SALT_ROUNDS);
    const hashedPassword = await bcrypt.hash(body.password, salt);

    const updatedUser = await prismaClient.user.update({
      where: { email: user.email },
      data: {
        name: body.name,
        password: hashedPassword,
      },
    });

    return res.status(200).json({
      success: true,
      message: "updated profile",
      user: updatedUser,
    });
  } catch (e: any) {
    return res.status(401).json({
      success: false,
      message: e.message,
    });
  }
}
