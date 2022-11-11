/*
  Warnings:

  - You are about to drop the column `date` on the `comments` table. All the data in the column will be lost.
  - You are about to drop the column `id_comment` on the `comments` table. All the data in the column will be lost.
  - You are about to drop the column `usersId` on the `comments` table. All the data in the column will be lost.
  - Added the required column `duration` to the `classes` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `comments_usersId_fkey` ON `comments`;

-- AlterTable
ALTER TABLE `classes` ADD COLUMN `duration` DOUBLE NOT NULL;

-- AlterTable
ALTER TABLE `comments` DROP COLUMN `date`,
    DROP COLUMN `id_comment`,
    DROP COLUMN `usersId`,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AddForeignKey
ALTER TABLE `courses` ADD CONSTRAINT `courses_id_category_fkey` FOREIGN KEY (`id_category`) REFERENCES `categories`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `courses` ADD CONSTRAINT `courses_id_instructor_fkey` FOREIGN KEY (`id_instructor`) REFERENCES `instructors`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `modules` ADD CONSTRAINT `modules_id_course_fkey` FOREIGN KEY (`id_course`) REFERENCES `courses`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `classes` ADD CONSTRAINT `classes_id_module_fkey` FOREIGN KEY (`id_module`) REFERENCES `modules`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `library` ADD CONSTRAINT `library_id_class_fkey` FOREIGN KEY (`id_class`) REFERENCES `classes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `comments` ADD CONSTRAINT `comments_id_class_fkey` FOREIGN KEY (`id_class`) REFERENCES `classes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `comments` ADD CONSTRAINT `comments_id_user_fkey` FOREIGN KEY (`id_user`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
