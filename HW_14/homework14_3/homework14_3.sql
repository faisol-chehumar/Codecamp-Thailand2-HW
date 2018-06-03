CREATE VIEW enroll_details AS
SELECT
	students.name AS student_name,
    courses.name AS course_name,
    COALESCE(NULL, ' ') AS Detail,
    courses.price AS price,
    COALESCE(instructors.name, 'No instructor') AS instructors
FROM
	enrolls
LEFT JOIN
	students ON students.id = enrolls.student_id
LEFT JOIN
	courses ON courses.id =  enrolls.course_id
LEFT JOIN
	instructors ON instructors.id = courses.teach_by;

SELECT * FROM enroll_details
UNION
SELECT 'Total', '', '', SUM(enroll_details.price), '' FROM enroll_details;

DROP VIEW enroll_details;

#--------------------------------------------------

SELECT * FROM students;
SELECT * FROM enrolls;
SELECT * FROM courses;



	
    