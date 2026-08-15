import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  CodeIcon,
  HashIcon,
  BracesIcon,
  KeyIcon,
  QrIcon,
  FingerprintIcon,
  LockIcon,
  RegexIcon,
  ClockIcon,
  LinkIcon,
} from "../ui/Icons";
import { useAuthStore } from "../../store/authStore";

const TOOLS = [
  { icon: CodeIcon, label: "Base64 & URL", path: "/tools/base64" },
  { icon: HashIcon, label: "Hashing", path: "/tools/hash" },
  { icon: BracesIcon, label: "JSON Formatter", path: "/tools/json" },
  { icon: KeyIcon, label: "JWT Decoder", path: "/tools/jwt" },
  { icon: QrIcon, label: "QR Codes", path: "/tools/qr" },
  { icon: FingerprintIcon, label: "UUID Generator", path: "/tools/uuid" },
  { icon: LockIcon, label: "Password Generator", path: "/tools/password" },
  { icon: RegexIcon, label: "Regex Tester", path: "/tools/regex" },
  { icon: ClockIcon, label: "Timestamp Converter", path: "/tools/timestamp" },
  { icon: LinkIcon, label: "URL Encoder", path: "/tools/url" },
];

export function ToolsSection() {
  const navigate = useNavigate();
  const token = useAuthStore((state) => state.token);
  const isAuthenticated = !!token;

  const handleToolClick = (path: string) => {
    if (isAuthenticated) {
      navigate(path);
    } else {
      navigate(`/login?redirect=${encodeURIComponent(path)}`);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Powerful Tools at Your Fingertips
          </h2>
          <p className="text-lg text-slate-600">
            Access all your essential developer utilities in one place
          </p>
        </motion.div>

        {/* Tools Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4"
        >
          {TOOLS.map((tool, index) => {
            const Icon = tool.icon;
            return (
              <motion.button
                key={index}
                variants={itemVariants}
                onClick={() => handleToolClick(tool.path)}
                className="group relative p-6 bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-200 overflow-hidden border border-slate-200 hover:border-indigo-300"
              >
                {/* Gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center">
                  <Icon className="w-8 h-8 text-indigo-600 mb-3 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-semibold text-slate-900 text-center">
                    {tool.label}
                  </span>
                </div>

                {/* Arrow on hover */}
                <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg
                    className="w-4 h-4 text-indigo-600 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 16l-4-4m0 0l4-4m-4 4h18"
                    />
                  </svg>
                </div>
              </motion.button>
            );
          })}
        </motion.div>

        {/* CTA for more tools */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-slate-600 mb-4">More tools coming soon...</p>
          <button
            onClick={handleToolClick("/dashboard")}
            className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Explore All Tools
          </button>
        </motion.div>
      </div>
    </section>
  );
}
