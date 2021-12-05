/*
  Warnings:

  - Added the required column `fecha` to the `Momentazo` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Momentazo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT,
    "publicador" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "fecha" TEXT NOT NULL
);
INSERT INTO "new_Momentazo" ("descripcion", "id", "nombre", "publicador", "url") SELECT "descripcion", "id", "nombre", "publicador", "url" FROM "Momentazo";
DROP TABLE "Momentazo";
ALTER TABLE "new_Momentazo" RENAME TO "Momentazo";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
