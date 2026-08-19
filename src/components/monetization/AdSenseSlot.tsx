import { useEffect, useRef } from "react";

const clientId = import.meta.env.VITE_ADSENSE_CLIENT_ID as string | undefined;
const slotId = import.meta.env.VITE_ADSENSE_SLOT_ID as string | undefined;

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

export default function AdSenseSlot() {
  const adRef = useRef<HTMLModElement | null>(null);

  useEffect(() => {
    if (!clientId || !slotId) return;

    const existing = document.querySelector('script[data-devtoolshub-adsense="true"]');
    if (!existing) {
      const script = document.createElement("script");
      script.async = true;
      script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${clientId}`;
      script.crossOrigin = "anonymous";
      script.dataset.devtoolshubAdsense = "true";
      document.head.appendChild(script);
    }

    const timer = window.setTimeout(() => {
      try {
        window.adsbygoogle = window.adsbygoogle || [];
        window.adsbygoogle.push({});
      } catch {
        // AdSense can be unavailable during local development or before approval.
      }
    }, 250);

    return () => window.clearTimeout(timer);
  }, []);

  if (!clientId || !slotId) return null;

  return (
    <div className="my-8 min-h-[90px] overflow-hidden rounded-xl border border-slate-200 bg-white p-3">
      <p className="mb-2 text-center text-[10px] font-medium uppercase tracking-widest text-slate-400">
        Advertisement
      </p>
      <ins
        ref={adRef}
        className="adsbygoogle block"
        style={{ display: "block", minHeight: 60 }}
        data-ad-client={clientId}
        data-ad-slot={slotId}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
