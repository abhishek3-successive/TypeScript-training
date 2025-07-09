interface Data{
    data : []
}
export default function TaskList({ data } : Data) {
  

  const taskList = data.map((task, index) => (
    <li key={index}>
      {task}
    </li>
  ));

  return (
    <div >
      <h2 >Task List</h2>
      <ul>{taskList}</ul>
    </div>
  );
}