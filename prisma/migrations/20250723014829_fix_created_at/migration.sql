/*
  Warnings:

  - You are about to drop the column `createAt` on the `Manager` table. All the data in the column will be lost.
  - You are about to drop the column `createAt` on the `Project` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Manager" DROP COLUMN "createAt",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Project" DROP COLUMN "createAt",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
