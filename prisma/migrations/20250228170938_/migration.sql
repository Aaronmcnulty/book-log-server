-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "book" (
    "book_id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "pages" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "book_pkey" PRIMARY KEY ("book_id")
);

-- CreateTable
CREATE TABLE "book_list" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "list_owner_id" INTEGER NOT NULL,

    CONSTRAINT "book_list_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_bookTobook_list" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_bookTobook_list_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_username_key" ON "user"("username");

-- CreateIndex
CREATE UNIQUE INDEX "book_title_key" ON "book"("title");

-- CreateIndex
CREATE UNIQUE INDEX "book_user_id_key" ON "book"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "book_list_name_key" ON "book_list"("name");

-- CreateIndex
CREATE UNIQUE INDEX "book_list_list_owner_id_key" ON "book_list"("list_owner_id");

-- CreateIndex
CREATE INDEX "_bookTobook_list_B_index" ON "_bookTobook_list"("B");

-- AddForeignKey
ALTER TABLE "book" ADD CONSTRAINT "book_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "book_list" ADD CONSTRAINT "book_list_list_owner_id_fkey" FOREIGN KEY ("list_owner_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_bookTobook_list" ADD CONSTRAINT "_bookTobook_list_A_fkey" FOREIGN KEY ("A") REFERENCES "book"("book_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_bookTobook_list" ADD CONSTRAINT "_bookTobook_list_B_fkey" FOREIGN KEY ("B") REFERENCES "book_list"("id") ON DELETE CASCADE ON UPDATE CASCADE;
