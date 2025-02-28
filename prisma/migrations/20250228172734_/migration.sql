/*
  Warnings:

  - You are about to drop the column `usor_id` on the `book` table. All the data in the column will be lost.
  - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[user_id]` on the table `book` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `user_id` to the `book` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "book" DROP CONSTRAINT "book_usor_id_fkey";

-- DropForeignKey
ALTER TABLE "book_list" DROP CONSTRAINT "book_list_list_owner_id_fkey";

-- DropIndex
DROP INDEX "book_usor_id_key";

-- AlterTable
ALTER TABLE "book" DROP COLUMN "usor_id",
ADD COLUMN     "user_id" INTEGER NOT NULL;

-- DropTable
DROP TABLE "user";

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "book_user_id_key" ON "book"("user_id");

-- AddForeignKey
ALTER TABLE "book" ADD CONSTRAINT "book_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "book_list" ADD CONSTRAINT "book_list_list_owner_id_fkey" FOREIGN KEY ("list_owner_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
