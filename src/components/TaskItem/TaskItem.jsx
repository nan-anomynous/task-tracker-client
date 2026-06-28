import { MdDeleteOutline } from "react-icons/md";
import { FaCheckCircle, FaRegCircle } from "react-icons/fa";

import { deleteTask, updateTask } from "../../services/TaskApi";
import "./TaskItem.css";

export default function TaskItem({ task, fetchTasks }) {
  const handleDelete = async () => {
    try {
      await deleteTask(task._id);
      fetchTasks();
    } catch (error) {
      console.log(error);
    }
  };

  const handleToggleStatus = async () => {
    try {
      await updateTask(task._id, {
        ...task,
        status: task.status === "Completed" ? "Pending" : "Completed",
      });

      fetchTasks();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="task-item">

      <div className="task-check" onClick={handleToggleStatus}>
        {task.status === "Completed" ? (
          <FaCheckCircle className="icon done" />
        ) : (
          <FaRegCircle className="icon" />
        )}
      </div>

      <p className={`task-text ${task.status === "Completed" ? "completed" : ""}`}>
        {task.title}
      </p>

      <MdDeleteOutline
        onClick={handleDelete}
        className="delete-icon"
      />

    </div>
  );
}