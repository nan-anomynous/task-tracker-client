import TaskCard from "../TaskCard/TaskCard";
import "./TaskList.css";

export default function TaskList({ tasks, fetchTasks, search }) {
  const filtered = tasks.filter((task) =>
    task.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="task-list">

      {filtered.length === 0 ? (
        <div className="empty-state">
          No tasks found
        </div>
      ) : (
        filtered.map((task) => (
          <TaskCard
            key={task._id}
            task={task}
            fetchTasks={fetchTasks}
          />
        ))
      )}

    </div>
  );
}