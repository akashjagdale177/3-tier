CREATE DATABASE studentdb;

USE studentdb;

CREATE TABLE students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    course VARCHAR(100),
    email VARCHAR(100)
);

INSERT INTO students (name, course, email)
VALUES
('Akash', 'DevOps', 'akash@test.com'),
('Rahul', 'AWS', 'rahul@test.com');
