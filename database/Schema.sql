CREATE DATABASE photos;
USE photos;

CREATE TABLE phones(
  phoneId int NOT NULL AUTO_INCREMENT,
  phoneName VARCHAR(20),
  PRIMARY KEY (phoneId)
);

CREATE TABLE images(
  imageId int NOT NULL AUTO_INCREMENT,
  imageUrl VARCHAR(40),
  PRIMARY KEY (imageId)
);

CREATE TABLE phones_images(
  phoneId int,
  imageId int,
  FOREIGN KEY (phoneId) REFERENCES phones(phoneId),
  FOREIGN KEY (imageId) REFERENCES images(imageId)
);