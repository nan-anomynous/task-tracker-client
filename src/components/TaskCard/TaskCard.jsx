import { FaRegCircle, FaCheckCircle } from "react-icons/fa";
import { MdDelete, MdEdit } from "react-icons/md";
import { useState } from "react";

import { updateTask, deleteTask } from "../../services/TaskApi";
import EditTaskModal from "../EditTask/EditTaskModal";

import "./TaskCard.css";

export default function TaskCard({ task, fetchTasks }) {
  const [openModal, setOpenModal] = useState(false);

  const toggleStatus = async () => {
    await updateTask(task._id, {
      ...task,
      status: task.status === "Completed" ? "Pending" : "Completed",
    });

    fetchTasks();
  };

  const removeTask = async () => {
    await deleteTask(task._id);
    fetchTasks();
  };

  const priorityClass = {
    High: "high",
    Medium: "medium",
    Low: "low",
  };

  return (
    <div className="task-card">

      {/* STATUS ICON */}
      <div className="task-status" onClick={toggleStatus}>
        {task.status === "Completed" ? (
          <FaCheckCircle className="icon-completed" />
        ) : (
          <FaRegCircle className="icon-pending" />
        )}
      </div>

      {/* CONTENT */}
      <div className="task-content">

        <h2 className={`task-title ${task.status === "Completed" ? "done" : ""}`}>
          {task.title}
        </h2>

        <p className={`task-desc ${task.status === "Completed" ? "done" : ""}`}>
          {task.description}
        </p>

        <div className="task-badges">

          <span className={`badge priority ${priorityClass[task.priority]}`}>
            {task.priority}
          </span>

          <span
            className={`badge status ${
              task.status === "Completed" ? "completed" : "pending"
            }`}
          >
            {task.status}
          </span>

        </div>
      </div>

      {/* ACTIONS */}
      <div className="task-actions">

        <MdEdit
          onClick={() => setOpenModal(true)}
          className="action edit"
        />

        <MdDelete
          onClick={removeTask}
          className="action delete"
        />

      </div>

      {/* MODAL */}
      {openModal && (
        <EditTaskModal
          task={task}
          fetchTasks={fetchTasks}
          onClose={() => setOpenModal(false)}
        />
      )}

    </div>
  );
}