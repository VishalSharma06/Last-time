import { PrismaClient } from "@prisma/client";
import { compare } from "bcrypt"; // For comparing hashed passwords
import bcrypt from "bcrypt";
import cookieParser, { cookie } from "cookie-parser";
// import { Jwt } from 'jsonwebtoken';
const jwt = require("jsonwebtoken");

const prisma = new PrismaClient();



// api/login.js (or api/login.ts for TypeScript)

// import { PrismaClient } from '@prisma/client';


export default async (req, res) => {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    try {
      const user = await prisma.user.findUnique({
        where: { email },
      });

      if (!user) {
        return res.status(401).json({ message: 'Authentication failed' });
      }

      // Compare the provided password with the hashed password stored in the database
      // You may want to use a library like bcrypt for this
      const passwordMatch =await bcrypt.compare(password, user.password);

      if (!passwordMatch) {
        const token = jwt.sign(
          { email: prisma.user.email, role: prisma.user.role },
          "jwt-secret-key",
          { expiresIn: "1d" }
        );
         res.cookie("token",token)
         return res.json({Status:"Success",role:user.role})
      }

      // Authentication successful
      res.status(200).json({ message: 'Login successful', user });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ message: 'Server error' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};
