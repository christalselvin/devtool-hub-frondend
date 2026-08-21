import { Outlet } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";
import ToolInstructions from "../components/tools/ToolInstructions";

export default function MainLayout() {
  return (
    <div className="flex h-screen bg-slate-100">

      <Sidebar />

      <div className="flex flex-1 flex-col">

        <Navbar />

        <main className="flex-1 overflow-auto p-6">
          <ToolInstructions />
          <Outlet />
        </main>

      </div>

    </div>
  );
}