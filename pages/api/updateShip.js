// pages/api/updateTask.js

import { PrismaClient } from '@prisma/client';

export default async function handler(req, res) {
  if (req.method === 'PUT') {
    const prisma = new PrismaClient();

    try {
      const { ShipmentId, Shipment_Status, ActualDeliveryDate } = req.body; // Assuming you want to update title and content

      // Update the task by ID
      const updatedTask = await prisma.shipment.update({
        where: { ShipmentId:Number(ShipmentId) },
        data: {
            Shipment_Status,
            ActualDeliveryDate,
        },
      });

      res.status(200).json(updatedTask);
    } catch (error) {
      console.error('Error updating task:', error);
      res.status(500).json({ message: 'Internal server error' });
    } 
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
