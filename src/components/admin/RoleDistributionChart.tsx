import { Pie } from "react-chartjs-2";

export default function RoleDistributionChart() {
  const data = {
    labels: ["Admin", "Pro users", "Free users"],
    datasets: [
      {
        data: [8, 54, 118],
        backgroundColor: ["#4f46e5", "#14b8a6", "#f59e0b"],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom" as const,
      },
    },
  };

  return (
    <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
      <h2 className="mb-4 text-xl font-bold text-slate-900">Role Distribution</h2>
      <div className="h-72">
        <Pie data={data} options={options} />
      </div>
    </div>
  );
}