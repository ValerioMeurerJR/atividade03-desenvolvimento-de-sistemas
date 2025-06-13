/*
  Warnings:

  - You are about to drop the column `Nome` on the `techs` table. All the data in the column will be lost.
  - Added the required column `nome` to the `techs` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "techs" DROP COLUMN "Nome",
ADD COLUMN     "nome" TEXT NOT NULL;
