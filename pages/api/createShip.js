// pages/api/users.js

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async (req, res) => {
  if (req.method === 'POST') {
    // Create a new user
    const { CustomerName, DestinationAddress,Shipment_Status } = req.body;
    const user = await prisma.shipment.create({
      data: {
        CustomerName,
        DestinationAddress,
        Shipment_Status
      },
    });
    res.json(user);
  } else if (req.method === 'GET') {
    // Fetch all users
    const users = await prisma.shipment.findMany();
    res.json(users);
  } else {
    res.status(405).end(); // Method Not Allowed
  }
};
