import jwt from "jsonwebtoken";

interface TokenCreationProp {
  email: string;
  secret: string;
  options?: any;
}

export const signAsync = ({ email, secret, options }: TokenCreationProp) => {
  return new Promise((resolve, reject) => {
    jwt.sign(email, secret, options, (err, token) => {
      if (err) {
        reject(err);
      } else {
        resolve(token);
      }
    });
  });
};
