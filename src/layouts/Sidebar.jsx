const Sidebar = () => {
  return (
    <aside className="bg-gray-800 text-white w-60 h-screen p-4">
      <ul>
        <li className="mb-4">
          <a href="#" className="hover:text-blue-400">
            Dashboard
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-blue-400">
            Reports
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
