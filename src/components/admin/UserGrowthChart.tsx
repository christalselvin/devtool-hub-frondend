import { Line } from "react-chartjs-2";

export default function UserGrowthChart() {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "New users",
        data: [28, 42, 58, 74, 112, 136, 180],
        borderColor: "#4f46e5",
        backgroundColor: "rgba(79, 70, 229, 0.15)",
        tension: 0.4,
        fill: true,
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
      <h2 className="mb-4 text-xl font-bold text-slate-900">User Growth</h2>
      <div className="h-72">
        <Line data={data} options={options} />
      </div>
    </div>
  );
}