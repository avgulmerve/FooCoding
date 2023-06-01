
show databases;
CREATE DATABASE  IF NOT EXISTS `todoApp`;
show databases;
use todoapp;
CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`user_id`)
);
CREATE TABLE `reminders` (
  `reminder_id` int(11) NOT NULL,
  `title_reminder` varchar(45) NOT NULL,
  `Date_reminder` date DEFAULT NULL,
  PRIMARY KEY (`reminder_id`)
);

CREATE TABLE `tags` (
  `tag_id` int(11) NOT NULL AUTO_INCREMENT,
  `tag_name` varchar(45) NOT NULL,
  PRIMARY KEY (`tag_id`)
) ;

CREATE TABLE `todolists` (
  `toDoList_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `explanation` varchar(255) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `reminder_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`toDoList_id`),
  FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`),
  FOREIGN KEY (`reminder_id`) REFERENCES `reminders` (`reminder_id`) 
);
describe todolists;

CREATE TABLE `tasks` (
  `task_id` int(11) NOT NULL AUTO_INCREMENT,
  `explanation` varchar(45) NOT NULL,
  `completed` tinyint(4) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `reminder_id` int(11) DEFAULT NULL,
  `todoList_id` int(11) DEFAULT NULL,
  `tag_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`task_id`),
  FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`),
  FOREIGN KEY (`reminder_id`) REFERENCES `reminders` (`reminder_id`),
  FOREIGN KEY (`todoList_id`) REFERENCES `todolists` (`toDoList_id`),
  FOREIGN KEY (`tag_id`) REFERENCES `tags` (`tag_id`)
);

