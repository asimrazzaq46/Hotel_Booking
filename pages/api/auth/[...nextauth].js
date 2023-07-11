import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

import User from "../../../models/userModel";
import dbConnect from "../../../config/dbConnect";

export default NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        dbConnect();
        const { email, password } = credentials;
        //CHECK IF EMAIL AND PASSWORD IS ENTERED
        if (!email || !password) {
          throw new Error("Please enter email or password.");
        }

        // FIND USER IN DATABASE

        const user = await User.findOne({ email }).select("+password");
        if (!user) {
          throw new Error("Invalid email or password.");
        }

        //CHECK IF PASSWORD IS CORRECT.

        const isPasswordMAtch = await user.comparePassword(password);
        if (!isPasswordMAtch) {
          throw new Error("Invalid email or password.");
        }
        return Promise.resolve(user);
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      user && (token.user = user);
      return Promise.resolve(token);
    },
    session: async ({ session, user }) => {
      session.user = user;
      return Promise.resolve(session);
    },
  },
});
