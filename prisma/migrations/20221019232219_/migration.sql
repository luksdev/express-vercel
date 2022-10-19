/*
  Warnings:

  - Added the required column `subject` to the `courses` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `comments` DROP FOREIGN KEY `comments_usersId_fkey`;

-- AlterTable
ALTER TABLE `courses` ADD COLUMN `subject` VARCHAR(191) NOT NULL;
