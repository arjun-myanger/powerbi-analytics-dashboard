import { useEffect, useState } from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

const AnalyticsChart = () => {
  const [salesData, setSalesData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch(
        "https://fakestoreapi.com/products/categories"
      );
      const categoryList = await response.json();
      setCategories(categoryList);
      setSelectedCategory(categoryList[0]); // Default to first category
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    if (!selectedCategory) return;

    const fetchSalesData = async () => {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/category/${selectedCategory}`
        );
        const products = await response.json();

        // Normalize data
        const maxPrice = Math.max(...products.map((p) => p.price));
        const formattedData = products.slice(0, 6).map((product, index) => ({
          month: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"][index],
          sales: Math.round((product.price / maxPrice) * 8000),
          profit: Math.round((product.price / maxPrice) * 4000),
        }));

        setSalesData(formattedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchSalesData();
  }, [selectedCategory]);

  return (
    <div className="bg-white shadow-md p-6 rounded-lg transition-transform duration-300 hover:scale-105">
      <h2 className="text-xl font-bold mb-4">
        Sales & Profit Analysis (Live Data)
      </h2>

      {/* Dropdown for Category Selection */}
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">
          Select Category:
        </label>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="p-2 border rounded-md transition-all duration-300 hover:border-blue-400"
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category.toUpperCase()}
            </option>
          ))}
        </select>
      </div>

      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={salesData}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="sales"
            fill="#3182CE"
            isAnimationActive={true}
            animationDuration={800}
          />
          <Bar
            dataKey="profit"
            fill="#2ECC71"
            isAnimationActive={true}
            animationDuration={800}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AnalyticsChart;
