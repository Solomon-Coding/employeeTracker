SELECT employee.role_id 
FROM employee
WHERE department_id = VAL


SELECT SUM(role.salary)
FROM role
WHERE role.id = employee.role_id IN (SELECT employee.role_id 
                                    FROM employee
                                    WHERE department_id = VAL)