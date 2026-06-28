import "./TaskTabs.css";

export default function TaskTabs({ activeTab, setActiveTab }) {
  return (
    <div className="task-tabs">

      <button
        onClick={() => setActiveTab("Personal")}
        className={`tab ${activeTab === "Personal" ? "active" : ""}`}
      >
        Personal
      </button>

      <button
        onClick={() => setActiveTab("Professional")}
        className={`tab ${activeTab === "Professional" ? "active" : ""}`}
      >
        Professional
      </button>

    </div>
  );
}