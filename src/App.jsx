import { useState } from "react";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center pt-10">
      <h1 className="text-3xl font-bold mb-6">Task Manager</h1>
      <div className="w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-lg">
        <TaskInput addTask={addTask} />
        <TaskList tasks={tasks} deleteTask={deleteTask} toggleComplete={toggleComplete} />
      </div>
    </div>
  );
}

export default App;
