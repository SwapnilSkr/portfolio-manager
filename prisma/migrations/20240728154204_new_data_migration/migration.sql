/*
  Warnings:

  - You are about to drop the column `name` on the `Chamber` table. All the data in the column will be lost.
  - Added the required column `chamberName` to the `Chamber` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Chamber" DROP COLUMN "name",
ADD COLUMN     "chamberName" TEXT NOT NULL,
ALTER COLUMN "timings" SET NOT NULL,
ALTER COLUMN "timings" SET DATA TYPE TEXT;
