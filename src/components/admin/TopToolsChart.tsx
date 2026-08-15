import { Bar } from "react-chartjs-2";

export default function TopToolsChart() {
  const data = {
    labels: ["JSON", "JWT", "Regex", "Hash", "Base64"],
    datasets: [
      {
        label: "Usage",
        data: [150, 110, 90, 60, 45],
        backgroundColor: ["#6366f1", "#8b5cf6", "#10b981", "#f59e0b", "#ef4444"],
        borderRadius: 8,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: { color: "rgba(148, 163, 184, 0.15)" },
      },
      x: {
        grid: { display: false },
      },
    },
  };

  return (
    <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
      <h2 className="mb-4 text-xl font-bold text-slate-900">Top Used Tools</h2>
      <div className="h-72">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}