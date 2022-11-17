-- CreateTable
CREATE TABLE `rating_course` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `rating_text` VARCHAR(191) NOT NULL,
    `is_favorite` BOOLEAN NOT NULL DEFAULT false,
    `id_user` INTEGER NOT NULL,
    `id_course` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `rating_course` ADD CONSTRAINT `rating_course_id_user_fkey` FOREIGN KEY (`id_user`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `rating_course` ADD CONSTRAINT `rating_course_id_course_fkey` FOREIGN KEY (`id_course`) REFERENCES `courses`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
