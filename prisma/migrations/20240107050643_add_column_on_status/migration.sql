/*
  Warnings:

  - Added the required column `name` to the `appointment_status` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `appointment_status` ADD COLUMN `name` VARCHAR(191) NOT NULL;
