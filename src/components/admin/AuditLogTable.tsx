import { useState } from "react";

interface Props {
  logs: any[];
}

export default function AuditLogTable({
  logs,
}: Props) {
  const [search, setSearch] = useState("");

  const filtered = logs.filter((log) =>
    `${log.action} ${log.resource} ${log.details}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="space-y-4">

      <input
        className="w-full rounded-lg border p-3"
        placeholder="Search logs..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
      />

      <div className="overflow-hidden rounded-xl bg-white shadow">

        <table className="min-w-full">

          <thead className="bg-slate-100">

            <tr>

              <th className="px-6 py-3 text-left">
                Time
              </th>

              <th className="px-6 py-3 text-left">
                Action
              </th>

              <th className="px-6 py-3 text-left">
                Resource
              </th>

              <th className="px-6 py-3 text-left">
                Details
              </th>

              <th className="px-6 py-3 text-left">
                IP
              </th>

            </tr>

          </thead>

          <tbody>

            {filtered.map((log: any) => (

              <tr
                key={log.id}
                className="border-t hover:bg-slate-50"
              >

                <td className="px-6 py-4">
                  {new Date(
                    log.created_at
                  ).toLocaleString()}
                </td>

                <td className="px-6 py-4 font-semibold">
                  {log.action}
                </td>

                <td className="px-6 py-4">
                  {log.resource}
                </td>

                <td className="px-6 py-4">
                  {log.details}
                </td>

                <td className="px-6 py-4">
                  {log.ip_address}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}