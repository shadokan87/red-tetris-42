/*
  Warnings:

  - Changed the type of `lhsScore` on the `Game` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `rhsScore` on the `Game` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Game" DROP COLUMN "lhsScore",
ADD COLUMN     "lhsScore" JSONB NOT NULL,
DROP COLUMN "rhsScore",
ADD COLUMN     "rhsScore" JSONB NOT NULL;
