import { motion } from "framer-motion";
import { Copy } from "lucide-react";
import type { ReactNode } from "react";
import { useState } from "react";
import toast from "react-hot-toast";

interface SEOToolPageProps {
  title: string;
  description: string;
  icon: ReactNode;
  children: ReactNode; // Tool component
  howToUse: string[];
  examples: Array<{
    title: string;
    input: string;
    output: string;
  }>;
  useCases: string[];
  faq: Array<{
    question: string;
    answer: string;
  }>;
  relatedTools: Array<{
    name: string;
    url: string;
  }>;
  onCopy?: (text: string) => void;
}

export function SEOToolPageLayout({
  title,
  description,
  icon,
  children,
  howToUse,
  examples,
  useCases,
  faq,
  relatedTools,
  onCopy,
}: SEOToolPageProps) {
  const [activeTab, setActiveTab] = useState<"tool" | "examples" | "faq">("tool");

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    if (onCopy) onCopy(text);
    toast.success("Copied to clipboard!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-12 md:py-16"
      >
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-white/20 rounded-lg">{icon}</div>
            <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">
              Free Tool
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
          <p className="text-lg text-indigo-100 max-w-2xl">{description}</p>
        </div>
      </motion.section>

      {/* Main Content */}
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Tool Area */}
          <div className="lg:col-span-2">
            {/* Tabs */}
            <div className="flex gap-4 mb-8 border-b border-slate-200">
              {(
                ["tool", "examples", "faq"] as const
              ).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-4 font-semibold transition-colors ${
                    activeTab === tab
                      ? "text-indigo-600 border-b-2 border-indigo-600"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {tab === "tool" ? "Tool" : tab === "examples" ? "Examples" : "FAQ"}
                </button>
              ))}
            </div>

            {/* Tool Tab */}
            {activeTab === "tool" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-6">
                  {children}
                </div>

                {/* How to Use */}
                <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-6">
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">
                    How to Use
                  </h2>
                  <ol className="space-y-3">
                    {howToUse.map((step, idx) => (
                      <li key={idx} className="flex gap-4">
                        <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-700 font-bold text-sm">
                          {idx + 1}
                        </span>
                        <p className="text-slate-700 pt-1">{step}</p>
                      </li>
                    ))}
                  </ol>
                </div>
              </motion.div>
            )}

            {/* Examples Tab */}
            {activeTab === "examples" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {examples.map((example, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-lg border border-slate-200 shadow-sm p-6"
                  >
                    <h3 className="text-lg font-bold text-slate-900 mb-4">
                      Example {idx + 1}: {example.title}
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm font-semibold text-slate-600 mb-2">
                          Input:
                        </p>
                        <div className="bg-slate-50 rounded p-3 font-mono text-sm text-slate-900 overflow-x-auto flex items-start justify-between gap-4">
                          <code className="flex-1">{example.input}</code>
                          <button
                            onClick={() => handleCopy(example.input)}
                            className="flex-shrink-0 p-1 hover:bg-slate-200 rounded transition-colors"
                            title="Copy input"
                          >
                            <Copy className="w-4 h-4 text-slate-600" />
                          </button>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-600 mb-2">
                          Output:
                        </p>
                        <div className="bg-slate-50 rounded p-3 font-mono text-sm text-slate-900 overflow-x-auto flex items-start justify-between gap-4">
                          <code className="flex-1">{example.output}</code>
                          <button
                            onClick={() => handleCopy(example.output)}
                            className="flex-shrink-0 p-1 hover:bg-slate-200 rounded transition-colors"
                            title="Copy output"
                          >
                            <Copy className="w-4 h-4 text-slate-600" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {/* FAQ Tab */}
            {activeTab === "faq" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                {faq.map((item, idx) => (
                  <details
                    key={idx}
                    className="bg-white rounded-lg border border-slate-200 shadow-sm p-6 cursor-pointer group"
                  >
                    <summary className="font-bold text-slate-900 flex justify-between items-center">
                      {item.question}
                      <span className="transition-transform group-open:rotate-180">
                        ▼
                      </span>
                    </summary>
                    <p className="mt-4 text-slate-700">{item.answer}</p>
                  </details>
                ))}
              </motion.div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Use Cases */}
            <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-6 sticky top-6">
              <h3 className="text-lg font-bold text-slate-900 mb-4">
                Common Use Cases
              </h3>
              <ul className="space-y-2">
                {useCases.map((useCase, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span className="text-indigo-600 font-bold flex-shrink-0">
                      •
                    </span>
                    <span className="text-slate-700 text-sm">{useCase}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Related Tools */}
            <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-4">
                Related Tools
              </h3>
              <ul className="space-y-2">
                {relatedTools.map((tool, idx) => (
                  <li key={idx}>
                    <a
                      href={tool.url}
                      className="text-indigo-600 hover:text-indigo-700 font-medium text-sm"
                    >
                      {tool.name} →
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg border border-indigo-200 shadow-sm p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Need More?
              </h3>
              <p className="text-sm text-slate-700 mb-4">
                Create a free account to access all tools without limits, save your work, and track history.
              </p>
              <a
                href="/register"
                className="inline-block w-full text-center px-4 py-2 bg-indigo-600 text-white font-semibold rounded hover:bg-indigo-700 transition-colors"
              >
                Sign Up Free
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
