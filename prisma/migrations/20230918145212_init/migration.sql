-- CreateTable
CREATE TABLE "Drivers" (
    "DriverID" SERIAL NOT NULL,
    "VehicleNumber" INTEGER,
    "LicenseNumber" INTEGER,
    "ContactNumber" INTEGER,

    CONSTRAINT "Drivers_pkey" PRIMARY KEY ("DriverID")
);

-- CreateIndex
CREATE UNIQUE INDEX "Drivers_DriverID_key" ON "Drivers"("DriverID");
