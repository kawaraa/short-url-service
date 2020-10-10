
CREATE DATABASE IF NOT EXISTS `db`;
USE `db`;

CREATE TABLE `url` (
  `short` VARCHAR(50) NOT NULL UNIQUE,
  `original` TEXT NOT NULL UNIQUE,
  `accessCount` INT NOT NULL,
  PRIMARY KEY(short)
);

