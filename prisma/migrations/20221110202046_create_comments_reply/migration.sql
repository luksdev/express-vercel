-- DropIndex
DROP INDEX `courses_id_category_fkey` ON `courses`;

-- CreateTable
CREATE TABLE `comments_reply` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `comment_reply` VARCHAR(191) NOT NULL,
    `id_comment` INTEGER NOT NULL,
    `id_user` INTEGER NOT NULL,
    `is_reply` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `comments_reply` ADD CONSTRAINT `comments_reply_id_comment_fkey` FOREIGN KEY (`id_comment`) REFERENCES `comments`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `comments_reply` ADD CONSTRAINT `comments_reply_id_user_fkey` FOREIGN KEY (`id_user`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
