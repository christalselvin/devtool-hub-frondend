import { Line } from "react-chartjs-2";

export default function UserGrowthChart() {

  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
    ],
    datasets: [
      {
        label: "Users",
        data: [12, 24, 42, 65, 91, 120],
      },
    ],
  };

  return (
    <div className="rounded-xl bg-white p-6 shadow">

      <h2 className="mb-4 text-xl font-bold">
        User Growth
      </h2>

      <Line data={data} />

    </div>
  );
}