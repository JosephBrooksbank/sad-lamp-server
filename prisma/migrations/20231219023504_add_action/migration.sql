/*
  Warnings:

  - You are about to drop the column `reoccurring` on the `Alarm` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "Action" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "day" TEXT NOT NULL,
    "alarmId" INTEGER NOT NULL,
    CONSTRAINT "Action_alarmId_fkey" FOREIGN KEY ("alarmId") REFERENCES "Alarm" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Alarm" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "time" DATETIME NOT NULL
);
INSERT INTO "new_Alarm" ("id", "time") SELECT "id", "time" FROM "Alarm";
DROP TABLE "Alarm";
ALTER TABLE "new_Alarm" RENAME TO "Alarm";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
