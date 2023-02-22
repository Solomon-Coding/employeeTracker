-- View all roles:

-- SELECT role.id, role.title, department.name AS department,role.salary
-- FROM role
-- JOIN department
-- ON role.department_id = department.id
-- ORDER BY role.id;

SELECT e1.id, e1.first_name, e1.last_name, role.title AS title, department.name AS department, role.salary AS salery, CONCAT(e2.first_name, e2.last_name) AS manager
FROM employee AS e1
JOIN role ON e1.role_id = role.id
JOIN department ON role.department_id = department.id
JOIN employee As e2 ON e1.manager_id = e2.id
ORDER BY e1.id;
-- ORDER BY role.id;

--, salary AS role.salary, employee.manager_id AS manager
-- SELECT movies.movie_name AS movie, reviews.review
-- FROM reviews
-- LEFT JOIN movies
-- ON reviews.movie_id = movies.id
-- ORDER BY movies.movie_name;
