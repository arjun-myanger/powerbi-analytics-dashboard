import { useEffect, useState } from "react";

const KPICards = () => {
  const [totalSales, setTotalSales] = useState(0);
  const [totalProfit, setTotalProfit] = useState(0);
  const [averageOrderValue, setAverageOrderValue] = useState(0);

  useEffect(() => {
    const fetchKPIs = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const products = await response.json();

      // Calculate KPIs
      const sales = products.reduce((acc, item) => acc + item.price * 100, 0);
      const profit = sales * 0.3; // Assuming 30% profit margin
      const avgOrderValue = sales / products.length;

      setTotalSales(sales.toFixed(2));
      setTotalProfit(profit.toFixed(2));
      setAverageOrderValue(avgOrderValue.toFixed(2));
    };

    fetchKPIs();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-6 mb-6">
      <div className="bg-blue-600 text-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold">Total Sales</h3>
        <p className="text-2xl font-bold">${totalSales}</p>
      </div>
      <div className="bg-green-600 text-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold">Total Profit</h3>
        <p className="text-2xl font-bold">${totalProfit}</p>
      </div>
      <div className="bg-purple-600 text-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold">Avg Order Value</h3>
        <p className="text-2xl font-bold">${averageOrderValue}</p>
      </div>
    </div>
  );
};

export default KPICards;
