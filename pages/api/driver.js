import { PrismaClient } from '@prisma/client';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).end(); // Method Not Allowed
      }
    
      const prisma = new PrismaClient();
    
  
      const { VehicleNumber,LicenseNumber,ContactNumber} = req.body;
  try {
    // Insert three values into the 'Item' table
    const createdItems = await prisma.drivers.create({
        data: {
            VehicleNumber,
            LicenseNumber,
            ContactNumber
          },
    });

    res.status(200).json({ message: 'Data inserted successfully', data: createdItems });
  } catch (error) {
    console.error('Error inserting data:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};






