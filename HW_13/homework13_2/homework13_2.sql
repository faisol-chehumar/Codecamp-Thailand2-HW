# Q1
INSERT INTO students (name) VALUES
('Kim'),
('John'),
('Bernard'),
('Dolores'),
('Jobb'),
('Elon'),
('Tesla'),
('Edison'),
('Quantum'),
('Ford');

# Q2
INSERT INTO enrolls (student_id, course_id) VALUE
(1, 2),
(2, 10),
(3, 5),
(4, 2),
(5, 8),
(6, 7),
(7, 7),
(8, 20),
(9, 13),
(10, 1);

# Q3
SELECT DISTINCT courses.name FROM courses
RIGHT JOIN enrolls ON courses.id = enrolls.course_id;

# Q4
SELECT courses.name FROM courses
LEFT JOIN enrolls ON courses.id = enrolls.course_id
WHERE enrolls.course_id IS NULL;


#-----------------------------------------------------

SELECT * FROM enrolls;
SELECT * FROM students;
SELECT * FROM courses;
DESC students;
DESC enrolls;