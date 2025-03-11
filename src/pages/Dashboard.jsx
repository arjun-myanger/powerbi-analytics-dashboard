import AnalyticsChart from "../components/AnalyticsChart";
import { motion } from "framer-motion"; // eslint-disable-line no-unused-vars

const Dashboard = () => {
  return (
    <motion.div
      className="p-6"
      initial={{ opacity: 0, y: 20 }} // Fade-in + slide-up animation
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <AnalyticsChart />
    </motion.div>
  );
};

export default Dashboard;
