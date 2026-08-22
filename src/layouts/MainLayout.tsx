import { Outlet } from "react-router-dom";
import { useState } from "react";

import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";
import ToolInstructions from "../components/tools/ToolInstructions";

export default function MainLayout() {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-slate-100">

      <Sidebar
        mobileOpen={mobileSidebarOpen}
        onClose={() => setMobileSidebarOpen(false)}
      />

      {mobileSidebarOpen && (
        <button
          type="button"
          aria-label="Close navigation"
          onClick={() => setMobileSidebarOpen(false)}
          className="fixed inset-0 z-40 bg-slate-950/30 lg:hidden"
        />
      )}

      <div className="flex min-w-0 flex-1 flex-col">

        <Navbar onMenuToggle={() => setMobileSidebarOpen((open) => !open)} />

        <main className="min-w-0 flex-1 overflow-auto px-3 pb-5 pt-5 sm:px-5 sm:pb-7 sm:pt-7 lg:px-6 lg:pb-8 lg:pt-8">
          <ToolInstructions />
          <Outlet />
        </main>

      </div>

    </div>
  );
}