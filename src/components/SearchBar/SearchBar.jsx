import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";

export default function SearchBar({ search, setSearch }) {
  return (
    <div className="searchbar-card">

      <FaSearch className="searchbar-icon" />

      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search tasks..."
        className="searchbar-input"
      />

    </div>
  );
}