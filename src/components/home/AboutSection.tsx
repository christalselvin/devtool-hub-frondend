import { motion } from "framer-motion";
import {
  SparklesIcon,
  RocketIcon,
  UserGroupIcon,
  CheckCircleIcon,
} from "lucide-react";

export function AboutSection() {
  const features = [
    {
      icon: SparklesIcon,
      title: "Quality Tools",
      description: "Carefully crafted developer tools designed with precision and attention to detail",
    },
    {
      icon: RocketIcon,
      title: "Lightning Fast",
      description: "Optimized for speed and performance to get your work done instantly",
    },
    {
      icon: UserGroupIcon,
      title: "Developer Community",
      description: "Built by developers, for developers with features you actually need",
    },
    {
      icon: CheckCircleIcon,
      title: "Reliable & Secure",
      description: "Enterprise-grade security and reliability for your critical operations",
    },
  ];

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
            About DevTools Hub
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We believe developers deserve tools that just work. That's why we built
            DevTools Hub – a comprehensive suite of utilities to streamline your
            workflow and boost productivity.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, staggerChildren: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <Icon className="w-8 h-8 text-indigo-600 mb-3" />
                <h3 className="font-semibold text-slate-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-600">{feature.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-8 md:p-12 border border-indigo-100"
        >
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
          <p className="text-slate-700 leading-relaxed mb-4">
            DevTools Hub is dedicated to eliminating friction from developer workflows.
            Every tool on our platform is meticulously designed with user experience
            at its core, featuring intuitive interfaces and powerful functionality.
          </p>
          <p className="text-slate-700 leading-relaxed">
            We continuously innovate and expand our toolkit to meet the evolving needs
            of modern developers, ensuring you have access to the most reliable and
            performant utilities available online.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
