/*
  Warnings:

  - You are about to drop the column `nombre` on the `Momentazo` table. All the data in the column will be lost.
  - Added the required column `titulo` to the `Momentazo` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Momentazo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "titulo" TEXT NOT NULL,
    "descripcion" TEXT,
    "publicador" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "fecha" TEXT NOT NULL
);
INSERT INTO "new_Momentazo" ("descripcion", "fecha", "id", "publicador", "url") SELECT "descripcion", "fecha", "id", "publicador", "url" FROM "Momentazo";
DROP TABLE "Momentazo";
ALTER TABLE "new_Momentazo" RENAME TO "Momentazo";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
