# Q1
SELECT DISTINCT courses.name, instructors.name, courses.price FROM courses
RIGHT JOIN enrolls ON courses.id = enrolls.course_id
INNER JOIN instructors ON instructors.id = courses.teach_by;

# Q2
SELECT courses.name, instructors.name, courses.price FROM courses
LEFT JOIN enrolls ON courses.id = enrolls.course_id
INNER JOIN instructors ON instructors.id = courses.teach_by
WHERE enrolls.course_id IS NULL;

# Q3
SELECT courses.name, instructors.name, courses.price FROM courses
LEFT JOIN enrolls ON courses.id = enrolls.course_id
INNER JOIN instructors ON instructors.id = courses.teach_by
WHERE enrolls.course_id IS NOT NULL;


#-----------------------------------------------------

SELECT * FROM instructors;
SELECT * FROM courses;
SELECT * FROM enrolls;
SELECT * FROM students;
SELECT * FROM courses;
DESC students;
DESC enrolls;