import Navbar from "./layouts/Navbar";
import Sidebar from "./layouts/Sidebar";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <main className="p-6">
          <Dashboard />
        </main>
      </div>
    </div>
  );
}

export default App;
