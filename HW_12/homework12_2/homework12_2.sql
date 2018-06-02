CREATE DATABASE book_stroe_db;

CREATE TABLE tbl_staff
(
	staff_id INT(13) PRIMARY KEY NOT NULL AUTO_INCREMENT,
    staff_firstname VARCHAR(32) NOT NULL,
    staff_lastname VARCHAR(32) NOT NULL,
    staff_age INT(3) NOT NULL,
    time_stamp TIMESTAMP DEFAULT NOW()
);
DROP TABLE tbl_staff;

CREATE TABLE tbl_book
(
	book_isbn VARCHAR(13) PRIMARY KEY NOT NULL,
    book_title VARCHAR(32) NOT NULL,
    book_price INT(4) NOT NULL,
    time_stamp TIMESTAMP DEFAULT NOW()
);
DROP TABLE tbl_book;

CREATE TABLE tbl_sale_record
(
	sale_isbn VARCHAR(13) NOT NULL,
    sale_staff_id VARCHAR(32) NOT NULL,
    sale_book_price INT(3) NOT NULL,
    sale_order INT(3) NOT NULL,
    time_stamp TIMESTAMP DEFAULT NOW()
);
DROP TABLE tbl_sale_record;

INSERT INTO tbl_book (book_isbn, book_title, book_price) VALUES
(9783598215933, 'The Marquis and I', 250),
(9783598215957, 'Blood on the Tongue', 352),
(9783598215995, 'A Higher Loyalty', 157),
(9783598215919, 'The Mars Room', 199),
(9783598215766, 'His Toy', 289);

INSERT INTO tbl_staff (staff_firstname, staff_lastname, staff_age) VALUES
('Noah', 'Armstrong', 34),
('Leslie', 'Ellis', 34),
('Sandra', 'Hoffman', 34),
('Cameron', 'Meyer', 19),
('Cameron', 'Moore', 27);

INSERT INTO tbl_sale_record (sale_isbn, sale_staff_id, sale_book_price, sale_order) VALUES
(9783598215766, 'Noah Armstrong', 289, 3),
(9783598215919, 'Cameron Moore', 199, 5),
(9783598215957, 'Sandra Hoffman', 352, 1),
(9783598215933, 'Cameron Meyer', 250, 19),
(9783598215957, 'Leslie Ellis', 352, 2),
(9783598215766, 'Noah Armstrong', 289, 3),
(9783598215919, 'Cameron Moore', 199, 5),
(9783598215957, 'Sandra Hoffman', 352, 1),
(9783598215933, 'Cameron Meyer', 250, 19),
(9783598215957, 'Leslie Ellis', 352, 2);

#Q1
DELETE FROM tbl_staff
WHERE staff_id = 5;

#Q2
ALTER TABLE tbl_staff
ADD staff_address VARCHAR(32) DEFAULT NULL;

ALTER TABLE tbl_staff
DROP staff_address;

UPDATE tbl_staff
SET staff_address = 'Paris'
WHERE staff_id = 1;

UPDATE tbl_staff
SET staff_address = 'Rome'
WHERE staff_id = 3;

#Q3
SELECT COUNT(staff_id) FROM tbl_staff;

#Q4
SELECT staff_firstname, staff_lastname FROM tbl_staff
WHERE staff_age < 20;

#Q5
SELECT staff_firstname, staff_lastname, staff_age FROM tbl_staff;

#Q6
UPDATE tbl_staff
SET staff_firstname = 'Neil'
WHERE staff_firstname = 'Noah' AND staff_id = 1;

SELECT * FROM tbl_staff;
SELECT * FROM tbl_book;
SELECT * FROM tbl_sale_record;