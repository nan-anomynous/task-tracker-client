import React, { useState } from "react";

import "./Dashboard.css";

import Stats from "../Stats/Stats";
import SearchBar from "../SearchBar/SearchBar";
import TaskForm from "../TaskForm/TaskForm";
import TaskList from "../TaskList/TaskList";

export default function Dashboard({
  tasks,
  fetchTasks,
  search,
  setSearch,
}) {
  const [sortBy, setSortBy] = useState("newest");

  const filtered = tasks.filter((task) =>
    task.title.toLowerCase().includes(search.toLowerCase())
  );

  const sortedTasks = [...filtered].sort((a, b) => {
    if (sortBy === "priority") {
      const order = { High: 3, Medium: 2, Low: 1 };
      return order[b.priority] - order[a.priority];
    }

    if (sortBy === "newest") {
      return new Date(b.createdAt) - new Date(a.createdAt);
    }

    if (sortBy === "oldest") {
      return new Date(a.createdAt) - new Date(b.createdAt);
    }

    return 0;
  });

  return (
    <div className="dashboard-container">
      <div className="dashboard-wrapper">

        <Stats tasks={tasks} />

        <SearchBar search={search} setSearch={setSearch} />

        <TaskForm fetchTasks={fetchTasks} />

        {/* SORT UI */}
        <select onChange={(e) => setSortBy(e.target.value)} defaultValue="newest" className="sort-select">
          <option value="priority">Priority</option>
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
        </select>

        {/* IMPORTANT: use sortedTasks */}
        <TaskList
          tasks={sortedTasks}
          fetchTasks={fetchTasks}
          search={search}
        />

      </div>
    </div>
  );
}