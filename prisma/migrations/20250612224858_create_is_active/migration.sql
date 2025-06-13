/*
  Warnings:

  - Added the required column `is_active` to the `developy` table without a default value. This is not possible if the table is not empty.
  - Added the required column `created_at` to the `techs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `techs` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "developy" ADD COLUMN     "is_active" BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE "techs" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;
