/* DROP TABLE IF EXISTS student;
CREATE TABLE student (
  sid int AUTO_INCREMENT PRIMARY KEY,
  fName varchar(255) DEFAULT NULL,
  lName varchar(255) DEFAULT NULL
); */

--drop tables in order
DROP TABLE IF EXISTS accident;
DROP TABLE IF EXISTS location;
DROP TABLE IF EXISTS accidenttype;
DROP TABLE IF EXISTS witness;

-- create tables
CREATE TABLE witness (
  witness_email VARCHAR(40) PRIMARY KEY,
  first_name varchar(20) DEFAULT NULL,
  last_name varchar(20) DEFAULT NULL,
  mobile int
);

CREATE TABLE accidenttype(
  accident_type_id int AUTO_INCREMENT PRIMARY KEY, 
  accident_type VARCHAR(20) DEFAULT NULL
);

CREATE TABLE location(
 location_id int AUTO_INCREMENT PRIMARY KEY,
 street_number varchar(5),
 street_name varchar(30),
 suburb VARCHAR(20),
 postcode int NOT NULL,
 loc_state VARCHAR(3) NOT NULL,
 latitude double ,
 longitude double 
);

CREATE TABLE accident(
 accident_id int AUTO_INCREMENT PRIMARY KEY,
 vehicle_count int DEFAULT NULL,
 accident_date DATE DEFAULT NULL,
 accident_time TIME DEFAULT NULL,
 acccident_desc VARCHAR(100) DEFAULT NULL, 
 location_id int NOT NULL,
 accident_type_id int NOT NULL,
 witness_email VARCHAR(40) NOT NULL, 
 
 CONSTRAINT FK_acc_type FOREIGN KEY (accident_type_id) REFERENCES accidenttype(accident_type_id),
 CONSTRAINT FK_witness FOREIGN KEY (witness_email) REFERENCES witness(witness_email),
 CONSTRAINT FK_location FOREIGN KEY (location_id) REFERENCES location(location_id)
 
);