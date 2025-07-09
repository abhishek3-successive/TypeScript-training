// 16.Create a functional component named EmployeeSalary that displays the average salary of a list of employees.
// Define an array of employee objects, where each object has a name and salary property.
// Use the useMemo hook to calculate the average salary of employees.
// Ensure that the useMemo hook has a dependency on the employee data so that it recalculates when the employee data changes.
// Render the average salary on the screen.
// Include a button that, when clicked, updates the employee data with new salaries.
'use client'

import { useState, useMemo } from "react";

export default function EmployeeSalary() {
  const [employees, setEmployees] = useState([
    { name: "Employee1", salary: 10000 },
    { name: "Employee2", salary: 50000 },
    { name: "Employee3", salary: 30000 },
    { name: "Employee4", salary: 70000 },
  ]);

  // useMemo to calculate average salary
  const averageSalary = useMemo(() => {
    const total = employees.reduce((sum, emp) => sum + emp.salary, 0);
    return (total / employees.length).toFixed(2);
  }, [employees]);

  // Function to update salaries randomly
  const updateSalaries = () => {
    const updatedEmployees = employees.map(emp => ({
      ...emp,
      salary: Math.floor(Math.random() * 90000) + 10000, // Random salary between 10k and 100k
    }));
    setEmployees(updatedEmployees);
  };

  return (
    <div>
      <h1>Average Salary: ₹{averageSalary}</h1>
      <button onClick={updateSalaries}>Update Salaries</button>

      <ul>
        {employees.map((emp, index) => (
          <li key={index}>{emp.name}: ₹{emp.salary}</li>
        ))}
      </ul>
    </div>
  );
}
