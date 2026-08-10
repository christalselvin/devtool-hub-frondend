import { Pie } from "react-chartjs-2";

export default function RoleDistributionChart() {

  const data = {
    labels: [
      "Admin",
      "Moderator",
      "User",
    ],

    datasets: [
      {
        data: [5, 20, 120],
      },
    ],
  };

  return (
    <div className="rounded-xl bg-white p-6 shadow">

      <h2 className="mb-4 text-xl font-bold">
        Role Distribution
      </h2>

      <Pie data={data} />

    </div>
  );
}