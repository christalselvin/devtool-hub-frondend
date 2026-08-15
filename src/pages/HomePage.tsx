import { useSEO, useStructuredData } from "../hooks/useSEO";
import { HeroSection } from "../components/home/HeroSection";
import { ToolsSection } from "../components/home/ToolsSection";
import { AboutSection } from "../components/home/AboutSection";
import { TestimonialsSection } from "../components/home/TestimonialsSection";
import { motion } from "framer-motion";

export default function HomePage() {
  // SEO Configuration
  useSEO({
    title: "DevTools Hub v2 - Essential Developer Tools & Utilities",
    description:
      "DevTools Hub provides a comprehensive suite of essential developer tools including Base64 encoding, JWT decoding, JSON formatting, QR code generation, UUID generation, and more.",
    keywords:
      "developer tools, base64, jwt, json formatter, qr code, uuid, password generator, regex tester, timestamp converter",
    author: "DevTools Hub",
  });

  // JSON-LD Structured Data
  useStructuredData({
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "DevTools Hub",
    description:
      "A comprehensive suite of essential developer tools for encoding, decoding, and conversion",
    url: "https://devtoolshub.com",
    applicationCategory: "DeveloperApplication",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "250",
    },
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection />

      {/* Tools Section */}
      <ToolsSection />

      {/* About Section */}
      <div id="about-section">
        <AboutSection />
      </div>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="py-16 md:py-24 bg-gradient-to-r from-indigo-600 to-purple-600"
      >
        <div className="mx-auto max-w-4xl px-5 sm:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Supercharge Your Development Workflow?
          </h2>
          <p className="text-lg text-indigo-100 mb-8">
            Join thousands of developers who use DevTools Hub daily to boost their
            productivity and streamline their workflow.
          </p>
          <button className="px-8 py-4 bg-white text-indigo-600 font-bold rounded-lg hover:bg-slate-50 transition-colors shadow-lg">
            Get Started Now →
          </button>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-white font-bold text-lg mb-2">
                DevTools Hub
              </h3>
              <p className="text-sm text-slate-400">
                Essential tools for modern developers
              </p>
            </motion.div>

            {/* Product */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="text-white font-semibold mb-3">Product</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Documentation
                  </a>
                </li>
              </ul>
            </motion.div>

            {/* Company */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-white font-semibold mb-3">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
              </ul>
            </motion.div>

            {/* Legal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h4 className="text-white font-semibold mb-3">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Bottom */}
          <div className="border-t border-slate-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
              <p>© 2024 DevTools Hub. All rights reserved.</p>
              <div className="flex gap-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-white transition-colors">
                  Twitter
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  GitHub
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}