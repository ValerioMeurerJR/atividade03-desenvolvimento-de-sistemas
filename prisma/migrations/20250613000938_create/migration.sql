/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `techs` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "techs_developyId_key";

-- CreateIndex
CREATE UNIQUE INDEX "techs_name_key" ON "techs"("name");
