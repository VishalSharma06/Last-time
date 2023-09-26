// pages/api/getAllData.js

import { PrismaClient } from '@prisma/client';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const prisma = new PrismaClient();

    try {
      // Retrieve all data from the table (e.g., 'tasks' if your model is 'Task')
      const allData = await prisma.shipment.findMany();

      res.status(200).json(allData);
    } catch (error) {
      console.error('Error retrieving data:', error);
      res.status(500).json({ message: 'Internal server error' });
    } 
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
