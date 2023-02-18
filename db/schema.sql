DROP DATABASE IF EXISTS movies_db;
CREATE DATABASE movies_db;

USE movies_db;

CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30) NOT NULL                       --to hold department name
);

CREATE TABLE role (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,                   --to hold role title
    salary DECIMAL NOT NULL,                      --to hold role salary
    department_id INT NOT NULL,                   --to hold reference to department role belongs to
    FOREIGN KEY (department_id)                   --local refrence to department id
    REFERENCES department(id)                     --where refrenced data is comming from
    ON DELETE SET NULL
);

CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,              --to hold employee first name
    last_name VARCHAR(30) NOT NULL,               --to hold employee last name
    role_id INT NOT NULL,                         --to hold reference to employee role
    manager_id INT,                               --to hold reference to another employee that is the manager of the current employee (null if the employee has no manager)
    FOREIGN KEY (role_id)                         --local refrence to department id
    REFERENCES role(id)                           --where refrenced data is comming from
    FOREIGN KEY (manager_id)                      --local refrence to department id
    REFERENCES employee(id)                       --where refrenced data is comming from
    ON DELETE SET NULL
);
