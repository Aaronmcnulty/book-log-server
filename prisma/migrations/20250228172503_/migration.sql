/*
  Warnings:

  - You are about to drop the column `user_id` on the `book` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[usor_id]` on the table `book` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `usor_id` to the `book` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "book" DROP CONSTRAINT "book_user_id_fkey";

-- DropIndex
DROP INDEX "book_user_id_key";

-- AlterTable
ALTER TABLE "book" DROP COLUMN "user_id",
ADD COLUMN     "usor_id" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "book_usor_id_key" ON "book"("usor_id");

-- AddForeignKey
ALTER TABLE "book" ADD CONSTRAINT "book_usor_id_fkey" FOREIGN KEY ("usor_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
