/*
  Warnings:

  - You are about to drop the `userpeep` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "book" DROP CONSTRAINT "book_user_id_fkey";

-- DropForeignKey
ALTER TABLE "book_list" DROP CONSTRAINT "book_list_list_owner_id_fkey";

-- DropTable
DROP TABLE "userpeep";

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

-- AddForeignKey
ALTER TABLE "book" ADD CONSTRAINT "book_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "book_list" ADD CONSTRAINT "book_list_list_owner_id_fkey" FOREIGN KEY ("list_owner_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
