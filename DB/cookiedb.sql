-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema cookiedb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `cookiedb` ;

-- -----------------------------------------------------
-- Schema cookiedb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `cookiedb` DEFAULT CHARACTER SET utf8 ;
USE `cookiedb` ;

-- -----------------------------------------------------
-- Table `cookie`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `cookie` ;

CREATE TABLE IF NOT EXISTS `cookie` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS cookieuser@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'cookieuser'@'localhost' IDENTIFIED BY 'cookieuser';


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `cookie`
-- -----------------------------------------------------
START TRANSACTION;
USE `cookiedb`;
INSERT INTO `cookie` (`id`, `name`) VALUES (1, 'Oatmeal Scotchies');

COMMIT;

