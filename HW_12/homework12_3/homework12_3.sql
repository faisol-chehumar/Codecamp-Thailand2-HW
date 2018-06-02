#Q1
SELECT book_title FROM tbl_book
WHERE book_title LIKE '%mar%';

#Q2
SELECT book_title FROM tbl_book
WHERE book_title LIKE '%O%' LIMIT 2;

#Q3
INSERT INTO tbl_book (book_isbn, book_title, book_price) VALUES
(3456198726354, 'Animal Farm', 450),
(1001000111001, 'Foundation', 850),
(4451728930405, 'I Robot', 350),
(0981692847779, '1984', 250),
(0981726484950, 'Brave new world', 750),
(1213232343433, 'Lolita', 500),
(0534975439584, 'Selfish Gene', 455),
(2323343587730, 'Principle', 190),
(2325879094578, 'Rise of the robot', 499),
(3432965481003, 'Justice', 550);

#Q4
SELECT SUM(sale_order) FROM tbl_sale_record;

#Q5
SELECT sale_isbn FROM tbl_sale_record
WHERE sale_order > 0;

#Q6
SELECT SUM(sale_order * sale_book_price)  FROM tbl_sale_record
WHERE sale_order > 0;

SELECT * FROM tbl_staff;
SELECT * FROM tbl_book;
SELECT * FROM tbl_sale_record;