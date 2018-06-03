# Q1 นักเรียนแต่ละคน ซื้อคอร์สไปคนละเท่าไร และจำนวนกี่คอร์ส
SELECT students.name, COUNT(*) AS 'quantity', SUM(courses.price) AS 'Total price' FROM enrolls
INNER JOIN courses on enrolls.course_id = courses.id
INNER JOIN students on students.id = enrolls.student_id
GROUP BY enrolls.student_id;

# Q2 นักเรียนแต่ละคน ซื้อคอร์สไหน ราคาแพงสุด

SELECT
	students.name AS std_name, 
	courses.name AS course_name,
    courses.price FROM courses
INNER JOIN enrolls on enrolls.course_id = courses.id
INNER JOIN students on students.id = enrolls.student_id
INNER JOIN (
	SELECT student_id, MAX(courses.price) AS max_price FROM enrolls
	INNER JOIN courses on enrolls.course_id = courses.id
	INNER JOIN students on students.id = enrolls.student_id
	GROUP BY students.id
) AS t2 ON t2.student_id = enrolls.student_id
WHERE courses.price = t2.max_price;

# Q3 นักเรียนแต่ละคนซื้อคอร์สราคาเฉลี่ยคนละเท่าไหร่
SELECT student_id, students.name, AVG(courses.price) AS 'Avg. Price' FROM enrolls
INNER JOIN courses on enrolls.course_id = courses.id
INNER JOIN students on students.id = enrolls.student_id
GROUP BY enrolls.student_id;

#-----------------------------------------------------

INSERT INTO enrolls (student_id, course_id) VALUES (5, 26);

SELECT @@sql_mode;

SELECT * FROM instructors;
SELECT * FROM courses;
SELECT * FROM enrolls;
SELECT * FROM students;
SELECT * FROM courses;
DESC students;
DESC enrolls;

# Test Q2
SELECT student_id, MIN(courses.price) FROM enrolls
INNER JOIN courses on enrolls.course_id = courses.id
INNER JOIN students on students.id = enrolls.student_id
GROUP BY students.id;