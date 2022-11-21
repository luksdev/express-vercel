-- CreateTable
CREATE TABLE `finishedClasses` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_course` INTEGER NOT NULL,
    `id_module` INTEGER NOT NULL,
    `id_class` INTEGER NOT NULL,
    `id_user` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `finishedClasses` ADD CONSTRAINT `finishedClasses_id_course_fkey` FOREIGN KEY (`id_course`) REFERENCES `courses`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `finishedClasses` ADD CONSTRAINT `finishedClasses_id_module_fkey` FOREIGN KEY (`id_module`) REFERENCES `modules`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `finishedClasses` ADD CONSTRAINT `finishedClasses_id_class_fkey` FOREIGN KEY (`id_class`) REFERENCES `classes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
