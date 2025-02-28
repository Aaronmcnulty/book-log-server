/*
  Warnings:

  - You are about to drop the `_bookTobook_list` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `book` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `book_list` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_bookTobook_list" DROP CONSTRAINT "_bookTobook_list_A_fkey";

-- DropForeignKey
ALTER TABLE "_bookTobook_list" DROP CONSTRAINT "_bookTobook_list_B_fkey";

-- DropForeignKey
ALTER TABLE "book" DROP CONSTRAINT "book_user_id_fkey";

-- DropForeignKey
ALTER TABLE "book_list" DROP CONSTRAINT "book_list_list_owner_id_fkey";

-- DropTable
DROP TABLE "_bookTobook_list";

-- DropTable
DROP TABLE "book";

-- DropTable
DROP TABLE "book_list";

-- CreateTable
CREATE TABLE "Book" (
    "book_id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "pages" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "Book_pkey" PRIMARY KEY ("book_id")
);

-- CreateTable
CREATE TABLE "Book_list" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "list_owner_id" INTEGER NOT NULL,

    CONSTRAINT "Book_list_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_BookToBook_list" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_BookToBook_list_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "Book_title_key" ON "Book"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Book_user_id_key" ON "Book"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "Book_list_name_key" ON "Book_list"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Book_list_list_owner_id_key" ON "Book_list"("list_owner_id");

-- CreateIndex
CREATE INDEX "_BookToBook_list_B_index" ON "_BookToBook_list"("B");

-- AddForeignKey
ALTER TABLE "Book" ADD CONSTRAINT "Book_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Book_list" ADD CONSTRAINT "Book_list_list_owner_id_fkey" FOREIGN KEY ("list_owner_id") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BookToBook_list" ADD CONSTRAINT "_BookToBook_list_A_fkey" FOREIGN KEY ("A") REFERENCES "Book"("book_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BookToBook_list" ADD CONSTRAINT "_BookToBook_list_B_fkey" FOREIGN KEY ("B") REFERENCES "Book_list"("id") ON DELETE CASCADE ON UPDATE CASCADE;
