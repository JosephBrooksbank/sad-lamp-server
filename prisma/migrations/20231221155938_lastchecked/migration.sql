-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Alarm" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "enabled" BOOLEAN NOT NULL DEFAULT true,
    "time" TEXT NOT NULL,
    "lastRun" TEXT NOT NULL DEFAULT ''
);
INSERT INTO "new_Alarm" ("enabled", "id", "time") SELECT "enabled", "id", "time" FROM "Alarm";
DROP TABLE "Alarm";
ALTER TABLE "new_Alarm" RENAME TO "Alarm";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
