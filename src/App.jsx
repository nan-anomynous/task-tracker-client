
import { useEffect, useState } from "react";
import Navbar from "./components/NavBar/Navbar";
import Dashboard from "./components/Dashboard/Dashboard";
iim

import {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} from "./services/TaskApi";

function App() {

  const [tasks, setTasks] = useState([]);

  const [search, setSearch] = useState("");

  const fetchTasks = async () => {

    try {

      const res = await getTasks();

      setTasks(res.data.data);

    } catch (err) {

      console.log(err);

    }

  };

  useEffect(() => {

    fetchTasks();

  }, []);

  return (

    <div className="min-h-screen bg-slate-100">

      <Navbar />

      <Dashboard

        tasks={tasks}

        setTasks={setTasks}

        fetchTasks={fetchTasks}

        search={search}

        setSearch={setSearch}

      />

    </div>

  );

}

export default App;