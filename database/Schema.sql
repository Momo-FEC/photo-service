CREATE DATABASE photos;
USE photos;

CREATE TABLE images(
  imageId int NOT NULL AUTO_INCREMENT,
  imageUrl VARCHAR(100),
  phoneId INT,
  PRIMARY KEY (imageId)
);

/*sudo mysql -u root < database/Schema.sql