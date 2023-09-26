-- CreateTable
CREATE TABLE "Shipment" (
    "ShipmentId" SERIAL NOT NULL,
    "CustomerName" TEXT,
    "DestinationAddress" TEXT,
    "AssignedDriverId" INTEGER NOT NULL,
    "Shipment_Status" TEXT NOT NULL DEFAULT 'In_Transit',
    "PlannedDriverDate" TIMESTAMP(3) NOT NULL,
    "ActualDeliveryDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Shipment_pkey" PRIMARY KEY ("ShipmentId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Shipment_ShipmentId_key" ON "Shipment"("ShipmentId");
