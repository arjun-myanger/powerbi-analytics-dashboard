const PowerBIEmbed = () => {
  return (
    <div className="bg-white shadow-md p-4 rounded-lg">
      <h2 className="text-xl font-bold mb-4">Power BI Report</h2>
      <iframe
        title="Power BI Report"
        width="100%"
        height="600px"
        src="https://app.powerbi.com/view?r=eyJrIjoiODkxNWEyYjgtNDk1My00NzliLTkyYWEtZmFlNmFkYmQ5ZDA1IiwidCI6ImJjYTQ2MmJhLTA5NTktNDQyNC04ZjBhLTQ2YmNkZjJjNzVkMCIsImMiOjF9"
        allowFullScreen
        className="border rounded-lg shadow-md"
      ></iframe>
    </div>
  );
};

export default PowerBIEmbed;
