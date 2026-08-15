import type { ReactNode } from "react";
import { X } from "lucide-react";
import { useState, useEffect } from "react";

export type AdPlacement = "top" | "between" | "bottom" | "sidebar";

interface AdBannerProps {
  placement?: AdPlacement;
  className?: string;
  slotId?: string;
  format?: "auto" | "horizontal" | "vertical" | "rectangle";
}

/**
 * Reusable AdBanner component for displaying Google AdSense ads.
 *
 * IMPORTANT: This component requires the VITE_ADSENSE_CLIENT_ID environment variable.
 *
 * Usage:
 * <AdBanner placement="top" />
 * <AdBanner placement="sidebar" />
 *
 * Environment variables:
 * VITE_ADSENSE_CLIENT_ID: Your Google AdSense client ID (e.g., ca-pub-xxxxxxxxxxxxxxxx)
 *
 * If the environment variable is missing, the component renders nothing.
 * Never insert fake ads or placeholder ads.
 */
export function AdBanner({
  placement = "between",
  className = "",
  slotId = "0",
  format = "auto",
}: AdBannerProps) {
  const [isVisible, setIsVisible] = useState(true);
  const clientId = import.meta.env.VITE_ADSENSE_CLIENT_ID;

  // If AdSense client ID is not configured, render nothing
  if (!clientId) {
    return null;
  }

  // Define layout classes based on placement
  const placementClasses: Record<AdPlacement, string> = {
    top: "w-full mb-8 bg-slate-100 rounded-lg p-4 border border-slate-200",
    between: "w-full my-8 bg-slate-100 rounded-lg p-4 border border-slate-200",
    bottom: "w-full mt-8 bg-slate-100 rounded-lg p-4 border border-slate-200",
    sidebar: "w-full bg-slate-100 rounded-lg p-3 border border-slate-200 sticky top-6",
  };

  // Load AdSense script on mount
  useEffect(() => {
    if (!clientId || !isVisible) return;

    const adsByGoogle = (window as typeof window & { adsbygoogle?: unknown[] })
      .adsbygoogle;

    // Only load the script once
    if (adsByGoogle) {
      try {
        adsByGoogle.push({});
      } catch (e) {
        console.debug("AdSense not ready yet");
      }
    } else {
      // Load the AdSense script
      const script = document.createElement("script");
      script.async = true;
      script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${clientId}`;
      script.crossOrigin = "anonymous";
      document.head.appendChild(script);
    }
  }, [clientId, isVisible]);

  if (!isVisible) {
    return null;
  }

  return (
    <div className={`ad-container ${placementClasses[placement]} ${className}`}>
      <div className="flex items-center justify-between">
        <div className="flex-1">
          {/* AdSense ad slot */}
          <ins
            className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client={clientId}
            data-ad-slot={slotId}
            data-ad-format={format}
            data-full-width-responsive="true"
          />
        </div>
        {placement !== "sidebar" && (
          <button
            onClick={() => setIsVisible(false)}
            className="ml-2 p-1 text-slate-400 hover:text-slate-600 flex-shrink-0"
            aria-label="Close ad"
            title="Close advertisement"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
}

/**
 * Responsive ad container that adapts to different screen sizes
 */
export function AdContainer({
  placement,
  children,
}: {
  placement?: AdPlacement;
  children?: ReactNode;
}) {
  return (
    <>
      <AdBanner placement={placement} />
      {children}
    </>
  );
}

/**
 * Hook to check if ads should be shown (useful for disabling ads on certain pages)
 */
export function useAdSense() {
  const clientId = import.meta.env.VITE_ADSENSE_CLIENT_ID;

  return {
    isConfigured: !!clientId,
    clientId,
  };
}
