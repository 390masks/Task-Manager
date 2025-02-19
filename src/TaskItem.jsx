function TaskItem({ task, deleteTask, toggleComplete }) {
  return (
    <li className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
      <span
        className={`flex-1 ${task.completed ? "line-through text-gray-400" : ""}`}
      >
        {task.text}
      </span>
      <div className="flex gap-2">
        <button
          onClick={() => toggleComplete(task.id)}
          className="px-3 py-1 bg-green-500 hover:bg-green-600 text-white rounded-lg"
        >
          ✔
        </button>
        <button
          onClick={() => deleteTask(task.id)}
          className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded-lg"
        >
          ❌
        </button>
      </div>
    </li>
  );
}

export default TaskItem;
