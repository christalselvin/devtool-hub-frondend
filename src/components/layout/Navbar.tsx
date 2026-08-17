import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";

export default function Navbar() {
  const navigate = useNavigate();

  const logout = useAuthStore((state) => state.logout);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-6 shadow-sm">
      <h1 className="text-2xl font-bold text-blue-600">DevTools Hub</h1>

      <button
        onClick={handleLogout}
        className="rounded-lg bg-red-500 px-4 py-2 text-white hover:bg-red-600"
      >
        Logout
      </button>
    </header>
  );
}