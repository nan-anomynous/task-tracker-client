import { useEffect, useState } from "react";
import { updateTask } from "../../services/TaskApi";
import "./EditTaskModal.css";

export default function EditTaskModal({ task, onClose, fetchTasks }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [status, setStatus] = useState("Pending");

  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setDescription(task.description || "");
      setPriority(task.priority);
      setStatus(task.status);
    }
  }, [task]);

  const handleUpdate = async () => {
    if (!title.trim()) return;

    await updateTask(task._id, {
      title,
      description,
      priority,
      status,
    });

    fetchTasks();
    onClose();
  };

  if (!task) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-box">

        <h2 className="modal-title">Edit Task</h2>

        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="modal-input"
          placeholder="Title"
        />

        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="modal-textarea"
          placeholder="Description"
          rows={4}
        />

        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="modal-select"
        >
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="modal-select"
        >
          <option>Pending</option>
          <option>Completed</option>
        </select>

        <div className="modal-actions">
          <button onClick={onClose} className="btn-cancel">
            Cancel
          </button>

          <button onClick={handleUpdate} className="btn-save">
            Save Changes
          </button>
        </div>

      </div>
    </div>
  );
}