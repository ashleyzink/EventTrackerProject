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
  `name` VARCHAR(200) NOT NULL,
  `description` VARCHAR(5000) NULL,
  `ingredient_list` TEXT NULL,
  `instructions` TEXT NULL,
  `prep_time_minutes` INT NULL,
  `bake_time_minutes` INT NULL,
  `yield` INT NULL,
  `texture` VARCHAR(200) NULL,
  `comment` VARCHAR(5000) NULL,
  `source` VARCHAR(5000) NULL,
  `image_url` VARCHAR(5000) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS cookieuser@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'cookieuser'@'localhost' IDENTIFIED BY 'cookieuser';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'cookieuser'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `cookie`
-- -----------------------------------------------------
START TRANSACTION;
USE `cookiedb`;
INSERT INTO `cookie` (`id`, `name`, `description`, `ingredient_list`, `instructions`, `prep_time_minutes`, `bake_time_minutes`, `yield`, `texture`, `comment`, `source`, `image_url`) VALUES (1, 'Oatmeal Scotchies', 'Oatmeal Scotchies are a deliciously chewy cookie, with just the right amount of sweetness. ', '1 1/4 cups all-purpose flour 1 teaspoon baking soda 1/2 teaspoon salt 1/2 teaspoon ground cinnamon 1 cup (2 sticks) butter or margarine, softened 3/4 cup granulated sugar 3/4 cup packed brown sugar 2 large eggs 1 teaspoon vanilla extract or grated peel of 1 orange 3 cups quick or old-fashioned oats 1 2/3 cups (11-ounce package) NESTLÉ® TOLL HOUSE® Butterscotch Flavored Morsels', '1. Preheat oven to 375° F. 2. Combine flour, baking soda, salt and cinnamon in small bowl. Beat butter, granulated sugar, brown sugar, eggs and vanilla extract in large mixer bowl. Gradually beat in flour mixture. Stir in oats and morsels. Drop by rounded tablespoon onto ungreased baking sheets. 3. Bake for 7 to 8 minutes for chewy cookies. Cool on baking sheets for 2 minutes; remove to wire racks to cool completely.', 10, 8, 48, 'chewy', 'Bake for 9 to 10 minutes for a crispier cookie.', 'https://www.verybestbaking.com/toll-house/recipes/oatmeal-scotchies-2/', 'https://www.crazyforcrust.com/wp-content/uploads/2011/05/BEST-Oatmeal-Scotchies-recipe-1.jpg');
INSERT INTO `cookie` (`id`, `name`, `description`, `ingredient_list`, `instructions`, `prep_time_minutes`, `bake_time_minutes`, `yield`, `texture`, `comment`, `source`, `image_url`) VALUES (2, 'Pumpkin Snickerdoodles', 'These decadent cookies will melt in your mouth.', '1 cup shortening\n1 cup white sugar  ½ cup light brown sugar ¾ cup pumpkin puree 1 large egg 2 teaspoons vanilla extract\n3 ¾ cups all-purpose flour\n1 ½ teaspoons baking powder\n1 ½ teaspoons ground cinnamon 1 teaspoon cream of tartar\n1 teaspoon salt\n¼ teaspoon ground nutmeg\nTopping: ½ cup white sugar  1 teaspoon ground cinnamon ¼ teaspoon allspice 1 teaspoon baking soda 1/2 teaspoon salt1/2 teaspoon ground cinnamon 1 cup (2 sticks) butter or margarine, softened 3/4 cup granulated sugar 3/4 cup packed brown sugar 2 large eggs 1 teaspoon vanilla extract or grated peel of 1 orange 3 cups quick or old-fashioned oats 1 2/3 cups (11-ounce package) NESTLÉ® TOLL HOUSE® Butterscotch Flavored Morsels', '1. Beat shortening, 1 cup white sugar, and light brown sugar together in a bowl until light and fluffy. Stir in pumpkin puree; beat in eggs and vanilla extract. 2. Whisk flour, baking powder, 1 1/2 teaspoons cinnamon, cream of tartar, salt, and nutmeg together in a bowl. Gradually stir flour mixture into pumpkin mixture until dough is just-combined. Cover the bowl with plastic wrap and refrigerate until chilled, at least 1 hour. 3. Preheat oven to 350 degrees F (175 degrees C). Line baking sheets with parchment paper. 4.  Whisk 1/2 cup white sugar, 1 teaspoon cinnamon, and allspice together in a small bowl. Roll dough into 1-inch balls; roll balls in cinnamon-sugar mixture and place 2 inches apart on prepared baking sheets. Slightly flatten each ball with a flat-bottomed glass. Bake in the preheated oven until golden and set, 12 to 13 minutes. Cool on the baking sheet for 5 minutes before transferring to a wire rack to cool completely.', 15, 15, 24, 'cakey', 'Try a cream cheese glaze to change it up.', 'https://www.allrecipes.com/recipe/239577/pumpkin-snickerdoodles/', 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F4081843.jpg&w=596&h=596&c=sc&poi=face&q=85');
INSERT INTO `cookie` (`id`, `name`, `description`, `ingredient_list`, `instructions`, `prep_time_minutes`, `bake_time_minutes`, `yield`, `texture`, `comment`, `source`, `image_url`) VALUES (3, 'Pfeffernusse', 'A spice cookie with a peppery twist', '1/2 cup butter softened 3/4 cup light brown sugar 1/4 cup molasses 1 egg 2 1/4 cups all purpose flour 1/2 teaspoon baking soda 1/2 teaspoon kosher salt 1/2 teaspoon cinnamon 1/2 teaspoon anise seed as finely crushed as possible 1/2 teaspoon freshly ground black pepper 1/4 teaspoon ground nutmeg 1/4 teaspoon ground allspice 1/8 teaspoon ground cardamom 1/8 teaspoon ground cloves 1 1/2 cups powdered sugar', 'Combine the butter, brown sugar and molasses in a large mixing bowl and beat until smooth. Add the egg and beat to combine. Whisk together the flour, baking soda and all of the spices. Slowly add the dry ingredients to the wet ingredients and beat to combine. Chill the dough in the refrigerator for at least 1 hour. \nPreheat oven to 350 degrees. Scoop about 2 tablespoons of cookie dough and roll into a ball between your palms. Place the dough balls on a parchment or silpat lined baking sheet. Bake for 13-14 minutes, until firm to the touch. Remove from the oven and let the cookies cool on the sheets for 3 minutes. \nPlace the powdered sugar in a medium sized container with a lid. Drop a few cookies at a time into the powdered sugar. Cover with a lid and shake gently to coat. Transfer the coated cookies to a wire cooling rack and let cool completely. Repeat with all the cookies. Store in an airtight container. Enjoy!', 15, 14, 36, 'cakey', NULL, 'https://barefeetinthekitchen.com/pfeffernusse-german-pepper-nut-cookie-recipe/?fbclid=IwAR0DO5piPqs2rqJthZeZYR--SvQ-sbYtH-q-jiTtUf5_4CXRkqWExUTxS-I', 'https://barefeetinthekitchen.com/wp-content/uploads/2013/09/pfeffernusse-cookies-7-small-in-jar-small-331x346.jpg');
INSERT INTO `cookie` (`id`, `name`, `description`, `ingredient_list`, `instructions`, `prep_time_minutes`, `bake_time_minutes`, `yield`, `texture`, `comment`, `source`, `image_url`) VALUES (4, 'Mexican Wedding Cake Cookies', 'A shortbread base, mixed with nuts, typically pecans, then tossed in powdered sugar. ', '1\ncup butter, softened\n1⁄2\ncup powdered sugar\n1\nteaspoon vanilla\n2 1⁄4\ncups sifted flour\n1⁄4\nteaspoon salt\n3⁄4\ncup chopped walnuts or 3/4 cup pecans\npowdered sugar (for rolling baked cookies in)', 'Cream together butter and powdered sugar until light and fluffy; stir in vanilla.\nWhisk together flour and salt; add gradually to butter mixture; stir in chopped nuts.\nChill dough if it seems too soft.\nForm dough into 1 1/4\" balls and place onto parchment-lined or ungreased baking sheets.\nBake at 400° for 10-12 minutes or just until the cookies start to turn light golden-brown; remove from oven and allow to cool slightly; while cookies are still warm (but NOT hot) remove them from baking sheets and roll, a few at a time, in powdered sugar until evenly coated; cool cookies completely on wire racks.\nCookies may (optionally) be rolled in powdered sugar a second time once cooled to room temperature.', 10, 10, 36, 'crisp', NULL, NULL, NULL);

COMMIT;

