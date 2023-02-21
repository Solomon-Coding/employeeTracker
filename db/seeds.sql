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

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (1, "Fred", "Bob", 2, NULL)


-- INSERT INTO movies (movie_name)
-- VALUES ("Lion King"),
--        ("The Godfather"),
--        ("West Side Story"),
--        ("Parasite"),
--        ("The Wizard of Oz");

-- INSERT INTO reviews (movie_id, review)
-- VALUES (1, "Zazu is underrated. Give that hornbill a sequel!"),
--        (2, "I'm gonna make him an offer you can't refuse, watch this movie"),
--        (1, "Scar is the lion everyone loves to hate"),
--        (3, "Ten years of ballet and three years of tap to join a gang in this neighborhood"),
--        (5, "The tin man gave a metallic, hollow performance"),
--        (1, "Hakuna matata"),
--        (5, "Those flying monkeys are nightmare fuel!");
       
