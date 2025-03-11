import { useState } from "react";
import { LayoutDashboard, BarChart2 } from "lucide-react";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <aside
      className={`bg-gray-900 text-white h-screen p-4 transition-all ${
        isCollapsed ? "w-16" : "w-60"
      }`}
    >
      {/* Toggle Button */}
      <button
        className="text-gray-400 hover:text-white mb-6 transition"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        {isCollapsed ? "☰" : "✖"}
      </button>

      {/* Sidebar Links */}
      <ul className="space-y-4">
        <li>
          <a
            href="#"
            className="flex items-center space-x-3 hover:text-blue-400 transition"
          >
            <LayoutDashboard size={20} />
            {!isCollapsed && <span>Dashboard</span>}
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center space-x-3 hover:text-blue-400 transition"
          >
            <BarChart2 size={20} />
            {!isCollapsed && <span>Reports</span>}
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
