-- View all roles:

SELECT role.id, role.title, department.name AS department,role.salary
FROM role
JOIN department
ON role.department_id = department.id
ORDER BY role.id;

SELECT employee.id, employee.first_name, employee.last_name, role.title AS title, department.name AS department, salary AS role.salary, employee.manager_id AS manager
FROM employee
JOIN role
ON employee.role_id = role.
ORDER BY role.id;
-- SELECT movies.movie_name AS movie, reviews.review
-- FROM reviews
-- LEFT JOIN movies
-- ON reviews.movie_id = movies.id
-- ORDER BY movies.movie_name;
