-- CreateTable
CREATE TABLE "Alarm" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "time" DATETIME NOT NULL,
    "reoccurring" TEXT NOT NULL
);
