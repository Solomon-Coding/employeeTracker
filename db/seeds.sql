INSERT INTO department (id, name)
VALUES (1, "Engineering"),
       (2, "Finance"),
       (3, "Legal"),
       (4, "Sales"),
       (5, "Service");

INSERT INTO role (id, title, salary, department_id)
VALUES (1, "Sales Lead", 100000, 4),
       (2, "Salesperson", 80000, 4),
       (3, "Lead Engineer", 150000, 1),
       (4, "Software Engineer", 120000, 1),
       (5, "Account Manager", 16000, 2),
       (6, "Accountant", 125000, 2),
       (7, "Legal Team Lead", 250000, 3),
       (8, "Lawyer", 190000, 3);

INSERT INTO employee (id, first_name, last_name, role_id, department_id, manager_id)
VALUES (1, "Fred", "Bob", 2, 4, 1),
       (2, "George", "Sal", 3, 1, 1),
       (3, "Sally", "Johnson", 8, 3, 1),
       (4, "Faith", "Rooney", 4, 1, 2);
