import { PrismaClient } from '@prisma/client';

export default async (req, res) => {
  if (req.method !== 'GET') {
    return res.status(405).end(); // Method Not Allowed
  }

  const prisma = new PrismaClient();

  try {
    // Retrieve all values from the table
    const allData = await prisma.drivers.findMany();

    res.status(200).json({ data: allData });
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ message: 'Internal server error' });
  
  }
};
