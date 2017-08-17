-- Creating the burger database
CREATE DATABASE burgers2;
USE burgers2;

-- Create the table burgers.
CREATE TABLE burgers
(
id int NOT NULL AUTO_INCREMENT,
burger_name varchar(255) NOT NULL,
devoured boolean,
date TIMESTAMP,
PRIMARY KEY (id)
);
