import { useEffect, useState } from "react";
import { ResponsiveContainer, PieChart, Pie, Tooltip, Cell } from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const SalesPieChart = () => {
  const [salesData, setSalesData] = useState([]);

  useEffect(() => {
    const fetchSalesData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const products = await response.json();

        const categoryData = products.reduce((acc, product) => {
          const category = product.category;
          acc[category] = (acc[category] || 0) + product.price * 100;
          return acc;
        }, {});

        setSalesData(
          Object.keys(categoryData).map((category, index) => ({
            name: category.toUpperCase(),
            value: categoryData[category],
            color: COLORS[index % COLORS.length],
          }))
        );
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchSalesData();
  }, []);

  return (
    <div className="bg-white shadow-md p-6 rounded-lg">
      <h2 className="text-xl font-bold mb-4">Sales Breakdown by Category</h2>
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={salesData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={120}
            fill="#8884d8"
            label
          >
            {salesData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesPieChart;
