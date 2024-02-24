DROP DATABASE storage;
CREATE DATABASE storage;
USE storage;

CREATE TABLE house
(
    address varchar(100) NOT NULL,
    city varchar(100) NOT NULL,
    state varchar(100) NOT NULL,
    zipcode int NOT NULL,
    proximity float NOT NULL,
    beds int NOT NULL DEFAULT 1,
    baths int NOT NULL,
    rent int NOT NULL,
    safetyRating int NOT NULL,
    leaseTerm int NOT NULL,
    #interest is boolean. If user likes the house interest is true. Else it is false
    interest BOOL DEFAULT FALSE NOT NULL,
    id int NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (id)

);

CREATE TABLE image
(   id int NOT NULL AUTO_INCREMENT,
    houseID int NOT NULL,
    imageData BLOB NOT NULL,

    primary key (id),
    CONSTRAINT fk_1
        FOREIGN KEY (houseID) REFERENCES house (id)
);