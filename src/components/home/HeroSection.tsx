import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";

export function HeroSection() {
  const navigate = useNavigate();
  const token = useAuthStore((state) => state.token);
  const isAuthenticated = !!token;

  const handleGetStarted = () => {
    if (isAuthenticated) {
      navigate("/dashboard");
    } else {
      navigate("/login");
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-5 sm:px-8 max-w-4xl mx-auto"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300">
            <Zap className="w-4 h-4" />
            <span className="text-sm font-medium">v2.0 - Powerful & Fast</span>
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
        >
          Essential Developer{" "}
          <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Tools
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed max-w-2xl mx-auto"
        >
          A comprehensive suite of utilities to streamline your development workflow.
          Encode, decode, format, and convert – all in one place.
        </motion.p>

        {/* Features List */}
        <motion.div
          variants={itemVariants}
          className="mb-10 flex flex-wrap justify-center gap-4 text-slate-300"
        >
          {[
            "✨ No Ads",
            "⚡ Lightning Fast",
            "🔒 Secure",
            "📱 Mobile Friendly",
          ].map((feature, idx) => (
            <span
              key={idx}
              className="px-4 py-2 rounded-lg bg-slate-800/40 border border-slate-700/40 backdrop-blur-sm text-sm"
            >
              {feature}
            </span>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <button
            onClick={handleGetStarted}
            className="group relative px-8 py-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-indigo-500/50"
          >
            Get Started
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => {
              const aboutSection = document.getElementById("about-section");
              aboutSection?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-4 bg-slate-800/50 text-white font-semibold rounded-lg hover:bg-slate-800 transition-colors border border-slate-700 backdrop-blur-sm"
          >
            Learn More
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto pt-12 border-t border-slate-700/40"
        >
          <div>
            <p className="text-3xl font-bold text-indigo-400">10+</p>
            <p className="text-sm text-slate-400">Tools Available</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-purple-400">100k+</p>
            <p className="text-sm text-slate-400">Active Users</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-pink-400">99.9%</p>
            <p className="text-sm text-slate-400">Uptime</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
