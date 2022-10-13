/*
  Warnings:

  - You are about to drop the column `id_course` on the `images_instructors` table. All the data in the column will be lost.
  - Added the required column `id_instructor` to the `images_instructors` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `images_instructors` DROP COLUMN `id_course`,
    ADD COLUMN `id_instructor` INTEGER NOT NULL;
