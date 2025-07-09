'use client';

import { useMemo, useState } from 'react';

export default function StudentList() {
  // Start with one student: "Student 1"
  const [list, setList] = useState<string[]>(['Student 1']);

  // Add new student to the list
  const addStudent = () => {
    setList((prevStudents) => [
      ...prevStudents,
      `Student ${prevStudents.length + 1}`,
    ]);
  };

  // Memoize the student list to avoid unnecessary re-renders
  const memoisedStudents = useMemo(() => list, [list]);

  return (
    <>
      <h1>Student List</h1>
      <ul>
        {memoisedStudents.map((student, index) => (
          <li key={index}>{student}</li>
        ))}
      </ul>

      <button onClick={addStudent}>Add New Student</button>
    </>
  );
}
