-- AlterTable
ALTER TABLE `classes` ADD COLUMN `is_finished` BOOLEAN NULL DEFAULT false;

-- CreateTable
CREATE TABLE `started_courses` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_course` INTEGER NOT NULL,
    `id_user` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `started_courses` ADD CONSTRAINT `started_courses_id_course_fkey` FOREIGN KEY (`id_course`) REFERENCES `courses`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `started_courses` ADD CONSTRAINT `started_courses_id_user_fkey` FOREIGN KEY (`id_user`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
