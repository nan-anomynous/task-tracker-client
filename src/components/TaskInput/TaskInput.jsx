import { useState } from "react";
import { createTask } from "../../services/TaskApi";
import "./TaskInput.css";

export default function TaskInput({ fetchTasks }) {
  const [title, setTitle] = useState("");

  const handleSubmit = async () => {
    if (!title.trim()) return;

    try {
      await createTask({
        title,
        description: "",
        priority: "Medium",
        status: "Pending",
      });

      setTitle("");
      fetchTasks();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="task-input-wrapper">

      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="What do you need to do?"
        className="task-input"
      />

      <button onClick={handleSubmit} className="task-btn">
        ADD
      </button>

    </div>
  );
}    