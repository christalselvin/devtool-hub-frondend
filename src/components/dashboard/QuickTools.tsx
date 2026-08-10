const tools = [
  "JSON",
  "Base64",
  "JWT",
  "UUID",
  "Password",
  "Hash",
  "URL",
  "Timestamp",
  "QR",
  "Regex",
];

export default function QuickTools() {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
      {tools.map((tool) => (
        <div
          key={tool}
          className="cursor-pointer rounded-lg bg-white p-6 text-center shadow hover:bg-blue-600 hover:text-white"
        >
          {tool}
        </div>
      ))}
    </div>
  );
}