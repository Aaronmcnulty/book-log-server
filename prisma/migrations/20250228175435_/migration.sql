/*
  Warnings:

  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "book" DROP CONSTRAINT "book_user_id_fkey";

-- DropForeignKey
ALTER TABLE "book_list" DROP CONSTRAINT "book_list_list_owner_id_fkey";

-- DropTable
DROP TABLE "users";

-- CreateTable
CREATE TABLE "Users" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_username_key" ON "Users"("username");

-- AddForeignKey
ALTER TABLE "book" ADD CONSTRAINT "book_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "book_list" ADD CONSTRAINT "book_list_list_owner_id_fkey" FOREIGN KEY ("list_owner_id") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
