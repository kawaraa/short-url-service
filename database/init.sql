
CREATE DATABASE IF NOT EXISTS `urlService`;
USE `urlService`;

CREATE TABLE `url` (
  `id` VARCHAR(250) NOT NULL UNIQUE,
  `original` TEXT NOT NULL,
  `short` VARCHAR(250) NOT NULL,
  `accessCount` INIT NOT NULL,
  PRIMARY KEY(id)
);

