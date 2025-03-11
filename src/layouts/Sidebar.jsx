import { useState } from "react";
import { LayoutDashboard, BarChart2 } from "lucide-react";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <aside
      className={`bg-gray-900 text-white h-screen p-4 transition-all duration-300 ${
        isCollapsed ? "w-16" : "w-60"
      }`}
    >
      <button
        className="text-gray-400 hover:text-white mb-6 transition-transform duration-300 transform hover:scale-110"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        {isCollapsed ? "☰" : "✖"}
      </button>

      <ul className="space-y-4">
        <li className="transition-all duration-300 hover:translate-x-2">
          <a
            href="#"
            className="flex items-center space-x-3 hover:text-blue-400"
          >
            <LayoutDashboard size={20} />
            {!isCollapsed && <span>Dashboard</span>}
          </a>
        </li>
        <li className="transition-all duration-300 hover:translate-x-2">
          <a
            href="#"
            className="flex items-center space-x-3 hover:text-blue-400"
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
