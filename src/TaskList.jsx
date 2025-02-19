import TaskItem from "./TaskItem";

function TaskList({ tasks, deleteTask, toggleComplete }) {
  return (
    <ul className="space-y-2">
      {tasks.length === 0 ? (
        <p className="text-gray-400 text-center">No tasks yet. Add some! 😊</p>
      ) : (
        tasks.map((task) => (
          <TaskItem key={task.id} task={task} deleteTask={deleteTask} toggleComplete={toggleComplete} />
        ))
      )}
    </ul>
  );
}

export default TaskList;
