
INSERT INTO witness VALUES
('testPerson@email.com','Test', 'Person', 123456789),
('BevanMuirhead@gmail.com','Bevan', 'Muirhead', 987654321);

INSERT INTO accidenttype values
(1,"Car Crash");

INSERT INTO severity values
("Minor"),
("Major"),
("Severe");

INSERT INTO location VALUES
(1,'1', "wellgate Ave" ,"Kellyville",2155, "NSW", "-33.68359941231308", "150.93210341670581" );

INSERT INTO accident VALUES
(1,2,"2023-06-15", "08:15:12","Two car major crash in middle of road",1,1 ,'testPerson@email.com',"Major" );