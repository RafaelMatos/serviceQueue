/*
  Warnings:

  - A unique constraint covering the columns `[cpf]` on the table `Employee` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE `Gender` (
    `type` INTEGER NOT NULL,
    `description` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Gender_type_key`(`type`),
    PRIMARY KEY (`type`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `Employee_cpf_key` ON `Employee`(`cpf`);

-- CreateIndex
CREATE INDEX `Employee_gender_idx` ON `Employee`(`gender`);

-- CreateIndex
CREATE INDEX `patients_gender_idx` ON `patients`(`gender`);
