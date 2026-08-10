import { Bar } from "react-chartjs-2";

export default function TopToolsChart() {

  const data = {
    labels: [
      "JSON",
      "JWT",
      "Regex",
      "Hash",
      "Base64",
    ],

    datasets: [
      {
        label: "Usage",
        data: [150, 110, 90, 60, 45],
      },
    ],
  };

  return (
    <div className="rounded-xl bg-white p-6 shadow">

      <h2 className="mb-4 text-xl font-bold">
        Top Used Tools
      </h2>

      <Bar data={data} />

    </div>
  );
}