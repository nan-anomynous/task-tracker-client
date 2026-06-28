import {
  FaTasks,
  FaClock,
  FaCheckCircle,
} from "react-icons/fa";

import "./Stats.css";

export default function Stats({ tasks }) {
  const total = tasks.length;

  const completed = tasks.filter(
    (task) => task.status === "Completed"
  ).length;

  const pending = total - completed;

  const Card = ({ title, value, icon, colorClass }) => (
    <div className="stats-card">

      <div className="stats-left">

        <p className="stats-title">{title}</p>

        <h1 className="stats-value">{value}</h1>

      </div>

      <div className={`stats-icon ${colorClass}`}>
        {icon}
      </div>

    </div>
  );

  return (
    <div className="stats-grid">

      <Card
        title="Total"
        value={total}
        icon={<FaTasks size={28} />}
        colorClass="indigo"
      />

      <Card
        title="Pending"
        value={pending}
        icon={<FaClock size={28} />}
        colorClass="orange"
      />

      <Card
        title="Completed"
        value={completed}
        icon={<FaCheckCircle size={28} />}
        colorClass="green"
      />

    </div>
  );
}