/**
 * Reusable Affiliate Recommendation Component
 *
 * This component displays recommended developer resources with affiliate links.
 * All affiliate URLs and details should be configurable via environment variables
 * or a configuration file, NOT hardcoded.
 *
 * Environment variables example:
 * VITE_AFFILIATE_RESOURCES_JSON={"resources":[{"name":"","url":"","logo":""}]}
 *
 * Or use a config file at src/config/affiliates.ts
 */

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export interface AffiliateResource {
  id: string;
  name: string;
  description: string;
  category: "hosting" | "analytics" | "monitoring" | "database" | "cdn" | "other";
  affiliateUrl: string;
  logoUrl?: string;
  badgeText?: string;
  disclaimer?: string;
}

interface AffiliateRecommendationProps {
  title?: string;
  subtitle?: string;
  resources: AffiliateResource[];
  showDisclaimer?: boolean;
  maxItems?: number;
  columns?: 1 | 2 | 3;
}

/**
 * Default affiliate disclosure text (FTC compliance)
 */
const DEFAULT_DISCLOSURE =
  "We may earn a commission when you make a purchase through our affiliate links. This helps support our free tools.";

export function AffiliateRecommendation({
  title = "Recommended Developer Resources",
  subtitle = "Tools and services we recommend",
  resources,
  showDisclaimer = true,
  maxItems = 6,
  columns = 3,
}: AffiliateRecommendationProps) {
  const displayedResources = resources.slice(0, maxItems);

  if (displayedResources.length === 0) {
    return null;
  }

  const gridClasses: Record<number, string> = {
    1: "grid-cols-1",
    2: "md:grid-cols-2",
    3: "md:grid-cols-2 lg:grid-cols-3",
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="py-12 md:py-16 bg-gradient-to-b from-slate-50 to-white rounded-lg border border-slate-200"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">{title}</h2>
          <p className="text-lg text-slate-600">{subtitle}</p>

          {/* FTC Disclosure */}
          {showDisclaimer && (
            <div className="mt-4 inline-block">
              <p className="text-xs text-slate-500 italic bg-slate-100 px-3 py-2 rounded">
                {DEFAULT_DISCLOSURE}
              </p>
            </div>
          )}
        </div>

        {/* Resources Grid */}
        <div className={`grid grid-cols-1 ${gridClasses[columns]} gap-6`}>
          {displayedResources.map((resource, idx) => (
            <motion.a
              key={resource.id}
              href={resource.affiliateUrl}
              target="_blank"
              rel="noopener noreferrer sponsored"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              className="group relative block h-full"
            >
              <div className="h-full flex flex-col bg-white rounded-lg border border-slate-200 hover:border-indigo-300 hover:shadow-lg transition-all duration-200 overflow-hidden">
                {/* Logo/Header Area */}
                {resource.logoUrl && (
                  <div className="h-32 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center overflow-hidden">
                    <img
                      src={resource.logoUrl}
                      alt={resource.name}
                      className="h-24 object-contain group-hover:scale-110 transition-transform"
                    />
                  </div>
                )}

                {/* Content */}
                <div className="flex-1 p-4 flex flex-col">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors">
                      {resource.name}
                    </h3>
                    <ExternalLink className="w-4 h-4 text-slate-400 flex-shrink-0 group-hover:text-indigo-600 transition-colors" />
                  </div>

                  {/* Category Badge */}
                  <div className="mb-2">
                    <span className="inline-block px-2 py-1 bg-slate-100 text-slate-700 text-xs font-semibold rounded">
                      {resource.category}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-600 flex-1 mb-3">
                    {resource.description}
                  </p>

                  {/* Badge */}
                  {resource.badgeText && (
                    <div className="mb-3">
                      <span className="inline-block px-2 py-1 bg-indigo-100 text-indigo-700 text-xs font-semibold rounded">
                        {resource.badgeText}
                      </span>
                    </div>
                  )}

                  {/* CTA Button */}
                  <button className="w-full px-4 py-2 bg-indigo-600 text-white font-semibold rounded hover:bg-indigo-700 transition-colors text-sm">
                    Learn More
                  </button>
                </div>

                {/* Disclaimer */}
                {resource.disclaimer && (
                  <div className="px-4 pb-2 border-t border-slate-200">
                    <p className="text-xs text-slate-500">{resource.disclaimer}</p>
                  </div>
                )}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

/**
 * Hook to load affiliates from environment or config
 */
export function useAffiliateResources() {
  const envConfig = import.meta.env.VITE_AFFILIATE_RESOURCES_JSON;

  if (envConfig) {
    try {
      return JSON.parse(envConfig);
    } catch (error) {
      console.error("Failed to parse affiliate resources:", error);
      return [];
    }
  }

  return [];
}

/**
 * Example usage:
 *
 * import { AffiliateRecommendation } from "@/components/affiliate/AffiliateRecommendation";
 *
 * const resources = [
 *   {
 *     id: "vercel",
 *     name: "Vercel",
 *     description: "Deploy frontend apps with zero configuration",
 *     category: "hosting",
 *     affiliateUrl: "https://vercel.com?utm_source=devtoolshub",
 *     logoUrl: "https://assets.vercel.com/image/upload/...",
 *     badgeText: "Recommended"
 *   },
 *   // ... more resources
 * ];
 *
 * export function ToolPage() {
 *   return (
 *     <>
 *       <YourTool />
 *       <AffiliateRecommendation resources={resources} />
 *     </>
 *   );
 * }
 */
