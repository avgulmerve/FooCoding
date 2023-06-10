CREATE DATABASE IF NOT EXISTS todoappdb;
USE todoappdb;
show tables;
CREATE TABLE `users` (
  `user_id` INT AUTO_INCREMENT NOT NULL,
  `username` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`user_id`)
);
CREATE TABLE `reminders` (
  `reminder_id` int(11) NOT NULL AUTO_INCREMENT,
  `title_reminder` varchar(45) NOT NULL,
  `date_reminder` date DEFAULT NULL,
  PRIMARY KEY (`reminder_id`)
);

CREATE TABLE `tags` (
  `tag_id` INT(11) NOT NULL AUTO_INCREMENT,
  `tag_name` varchar(45) NOT NULL,
  PRIMARY KEY (`tag_id`)
) ;

CREATE TABLE `todolists` (
  `list_id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `explanation` varchar(255) NOT NULL,
  `user_id` INT NOT NULL,
  `reminder_id`INT(11) DEFAULT NULL,
  PRIMARY KEY (`list_id`),
  FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`),
  FOREIGN KEY (`reminder_id`) REFERENCES `reminders` (`reminder_id`) 
);

CREATE TABLE `items` (
  `item_id` int(11) NOT NULL AUTO_INCREMENT,
  `explanation` varchar(45) NOT NULL,
  `completed` tinyint(4) DEFAULT NULL,
  `reminder_id` int(11) DEFAULT NULL,
  `list_id` int(11) DEFAULT NULL,
  `tag_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`item_id`),
  FOREIGN KEY (`reminder_id`) REFERENCES `reminders` (`reminder_id`),
  FOREIGN KEY (`list_id`) REFERENCES `todolists` (`list_id`),
  FOREIGN KEY (`tag_id`) REFERENCES `tags` (`tag_id`)
);
