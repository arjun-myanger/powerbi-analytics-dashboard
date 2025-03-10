import Navbar from "./layouts/Navbar";
import Sidebar from "./layouts/Sidebar";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
