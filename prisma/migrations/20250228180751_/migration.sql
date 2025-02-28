/*
  Warnings:

  - A unique constraint covering the columns `[cover_url]` on the table `book` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `cover_url` to the `book` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "book" ADD COLUMN     "cover_url" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "book_cover_url_key" ON "book"("cover_url");
