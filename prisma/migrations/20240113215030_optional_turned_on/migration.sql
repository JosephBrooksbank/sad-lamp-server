-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Lamp" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "isOn" BOOLEAN NOT NULL,
    "lastChecked" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "turnedOn" DATETIME
);
INSERT INTO "new_Lamp" ("id", "isOn", "lastChecked", "turnedOn") SELECT "id", "isOn", "lastChecked", "turnedOn" FROM "Lamp";
DROP TABLE "Lamp";
ALTER TABLE "new_Lamp" RENAME TO "Lamp";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
