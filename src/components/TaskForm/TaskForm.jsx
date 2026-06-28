import { useState } from "react";
import { createTask } from "../../services/TaskApi";
import "./TaskForm.css";

export default function TaskForm({ fetchTasks }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Medium");

  const handleSubmit = async () => {
    if (!title.trim()) return;

    await createTask({
      title,
      description,
      priority,
      status: "Pending",
    });

    setTitle("");
    setDescription("");
    setPriority("Medium");

    fetchTasks();
  };

  return (
    <div className="task-form">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter Task..."
        className="input"
      />

      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Enter Description..."
        className="textarea"
        rows={4}
      />

      <div className="bottom-row">
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="select"
        >
          <option value="" disabled>
            Select Priority
          </option>

          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>

        <button onClick={handleSubmit} className="btn">
          Add Task
        </button>
      </div>
    </div>
  );
}
