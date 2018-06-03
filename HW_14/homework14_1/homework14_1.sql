# Q1
SELECT enrolls.course_id, courses.name, courses.price FROM enrolls
INNER JOIN courses on enrolls.course_id = courses.id
UNION
SELECT '', '' , SUM(courses.price) FROM enrolls
INNER JOIN courses on enrolls.course_id = courses.id;

SELECT SUM(courses.price) FROM enrolls
INNER JOIN courses on enrolls.course_id = courses.id;

# Q2
SELECT enrolls.student_id, SUM(courses.price) FROM enrolls
INNER JOIN courses on enrolls.course_id = courses.id
GROUP BY enrolls.student_id;

# Q3


# Q4

#-----------------------------------------------------

SELECT * FROM instructors;
SELECT * FROM courses;
SELECT * FROM enrolls;
SELECT * FROM students;
SELECT * FROM courses;
DESC students;
DESC enrolls;