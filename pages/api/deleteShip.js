// pages/api/deleteTask.js

import { PrismaClient } from '@prisma/client';

export default async function handler(req, res) {
  if (req.method === 'DELETE') {
    const prisma = new PrismaClient();

    try {
        const { ShipmentId } = req.body;

        // Delete the task by ID
        await prisma.shipment.delete({
          where: { ShipmentId: Number(ShipmentId) },
        });
      res.status(200).json({ message: 'Task deleted successfully' });
    } catch (error) {
      console.error('Error deleting task:', error);
      res.status(500).json({ message: 'Internal server error' });
    } 
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
