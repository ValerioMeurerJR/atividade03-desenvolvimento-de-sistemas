/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `developy` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[developyId]` on the table `techs` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "developy_name_key" ON "developy"("name");

-- CreateIndex
CREATE UNIQUE INDEX "techs_developyId_key" ON "techs"("developyId");
