create table instructors (
  id int auto_increment,
  name varchar(60) not null,
  created_at timestamp not null default now(),
  primary key (id)
);
create index instructors_created_at_desc on instructors (created_at desc);

create table courses (
  id int auto_increment,
  name varchar(60) not null,
  detail varchar(255) not null default '',
  price int not null,
  teach_by int,
  created_at timestamp not null default now(),
  primary key (id),
  foreign key (teach_by) references instructors (id)
);
create unique index courses_name_key on courses (name);
create index courses_created_at_desc on courses (created_at desc);

create table students (
  id int auto_increment,
  name varchar(60) not null,
  created_at timestamp not null default now(),
  primary key (id)
);
create index students_created_at_desc on students (created_at desc);

create table enrolls (
  student_id int,
  course_id int,
  enrolled_at timestamp not null default now(),
  primary key (student_id, course_id),
  foreign key (student_id) references students (id),
  foreign key (course_id) references courses (id)
);

-- data

insert into instructors (id, name) values
  (1, 'Annie Leibovitz'),
  (2, 'Stephen Curry'),
  (3, 'Gordon Ramsay'),
  (4, 'Deadmau5'),
  (5, 'Aaron Sorkin'),
  (6, 'David Mamet'),
  (7, 'Werner Herzog'),
  (8, 'Shonda Rhimes'),
  (9, 'Steve Martin'),
  (10, 'Hans Zimmer'),
  (11, 'Marc Jacobs'),
  (12, 'Reba Mcentire'),
  (13, 'Herbie Hancock'),
  (14, 'Christina Aguilera'),
  (15, 'Frank Gehry'),
  (16, 'Diane Von Furstenberg'),
  (17, 'James Patterson'),
  (18, 'Usher'),
  (19, 'Serena Williams'),
  (20, 'Dr. Jane Goodall'),
  (21, 'Judy Blume'),
  (22, 'Garry Kasparov'),
  (23, 'Samuel L. Jackson'),
  (24, 'Wolfgang Puck'),
  (25, 'Martin Scorsese'),
  (26, 'Bob Woofward'),
  (27, 'Ron Howard'),
  (28, 'Thomas Keller'),
  (29, 'Alice Waters'),
  (30, 'Helen Mirren'),
  (31, 'Armin Van Buuren')
  ;

alter table instructors auto_increment = 32;

insert into courses (id, name, price, teach_by) values
  (1, 'Cooking', 90, 24),
  (2, 'Acting', 90, 23),
  (3, 'Chess', 90, 22),
  (4, 'Writing', 90, 21),
  (5, 'Conservation', 90, 20),
  (6, 'Tennis', 90, 19),
  (7, 'The Art of Performance', 90, 18),
  (8, 'Writing #2', 90, 17),
  (9, 'Building a Fashion Brand', 90, 16),
  (10, 'Design and Architecture', 90, 15),
  (11, 'Singing', 90, 14),
  (12, 'Jazz', 90, 13),
  (13, 'Country Music', 90, 12),
  (14, 'Fashion Design', 90, 11),
  (15, 'Film Scoring', 90, 10),
  (16, 'Comedy', 90, 9),
  (17, 'Writing for Television', 90, 8),
  (18, 'Filmmaking', 90, 7),
  (19, 'Dramatic Writing', 90, 6),
  (20, 'Screenwriting', 90, 5),
  (21, 'Electronic Music Production', 90, 4),
  (22, 'Cooking #2', 90, 3),
  (23, 'Shooting, Ball Handler, and Scoring', 90, 2),
  (24, 'Photography', 90, 1),
  (25, 'Database System Concept', 30, null),
  (26, 'JavaScript for Beginner', 20, null),
  (27, 'OWASP Top 10', 75, null)
  ;

alter table courses auto_increment = 28;
