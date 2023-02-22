DROP DATABASE IF EXISTS company_db;
CREATE DATABASE company_db;

USE company_db;

CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30) NOT NULL                       
);

CREATE TABLE role (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,                   
    salary DECIMAL NOT NULL,                      
    department_id INT,                   
    FOREIGN KEY (department_id)                   
    REFERENCES department(id)                     
    ON DELETE SET NULL
);

-- CREATE TABLE employee (
--     id INT NOT NULL AUTO_INCREMENT,
--     first_name VARCHAR(30) NOT NULL,              
--     last_name VARCHAR(30) NOT NULL,               
--     role_id INT,
--     department_id INT,                       
--     manager_id INT,  
--     FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE SET NULL                  
--     FOREIGN KEY (role_id) REFERENCES role(id) ON DELETE SET NULL          
--     ON DELETE SET NULL
-- );


CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,              
    last_name VARCHAR(30) NOT NULL,               
    role_id INT,
    department_id INT,                       
    manager_id INT,  
    FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE SET NULL                  
    FOREIGN KEY (role_id) REFERENCES role(id) ON DELETE SET NULL          
    FOREIGN KEY (manager_id) REFERENCES employee(id) ON DELETE SET NULL    
    ON DELETE SET NULL
);
-- DROP DATABASE IF EXISTS movies_db;
-- CREATE DATABASE movies_db;

-- USE movies_db;

-- CREATE TABLE movies (
--   id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--   movie_name VARCHAR(100) NOT NULL
-- );

-- CREATE TABLE reviews (
--     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     movie_id INT,
--     review TEXT NOT NULL,
--     FOREIGN KEY (movie_id)
--     REFERENCES movies(id)
--     ON DELETE SET NULL
-- );

