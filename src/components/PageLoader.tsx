"use client";

import { useEffect, useState } from "react";

export default function PageLoader() {
  const [isVisible, setIsVisible] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Show only on initial website open; skip on in-site navigation
    try {
      if (sessionStorage.getItem("portfolio_initial_loaded")) {
        setIsVisible(false);
        return;
      }
      sessionStorage.setItem("portfolio_initial_loaded", "true");
    } catch {
      // sessionStorage unavailable or restricted
    }

    // Lock page scrolling while the overlay is visible
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Show for two seconds (2000ms), then exit cleanly with swift 75ms fade
    const timer = setTimeout(() => {
      setIsExiting(true);
      setTimeout(() => {
        setIsVisible(false);
        document.body.style.overflow = originalOverflow;
      }, 75);
    }, 2000);

    // Hard safety cap (4s) so the overlay can never trap the user
    const safetyTimer = setTimeout(() => {
      setIsVisible(false);
      document.body.style.overflow = originalOverflow;
    }, 4000);

    return () => {
      clearTimeout(timer);
      clearTimeout(safetyTimer);
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      role="status"
      aria-label="Loading"
      className={`page-loader-overlay fixed inset-0 z-[9999] w-full h-[100dvh] min-h-[100svh] bg-[#060b19] flex items-center justify-center select-none transition-opacity duration-75 ${
        isExiting ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <span className="sr-only">Loading</span>

      {/* Stepped vertical Y-axis coin flip (static when prefers-reduced-motion is active) */}
      <div className="pixel-coin-flip">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 28"
          className="w-[26px] h-[30px]"
          fill="none"
          aria-hidden="true"
          shapeRendering="crispEdges"
        >
          {/* Outer dark pixel border */}
          <path
            d="M8 0h8v2h4v2h2v4h2v12h-2v4h-2v2h-4v2H8v-2H4v-2H2v-4H0V8h2V4h2V2h4V0z"
            fill="#040714"
          />
          {/* Outer bright gold rim */}
          <path
            d="M8 2h8v2h4v4h2v12h-2v4h-4v2H8v-2H4v-4H2V8h2V4h4V2z"
            fill="#facc15"
          />
          {/* Top/left highlight edge */}
          <path
            d="M8 2h8v2H8V2zm-4 2h4v2H4V4zm-2 4h2v6H2V8z"
            fill="#fef08a"
          />
          {/* Warm amber coin face */}
          <path
            d="M8 4h8v2h2v2h2v8h-2v2h-2v2H8v-2H6v-2H4V8h2V6h2V4z"
            fill="#eab308"
          />
          {/* Lower/right shading facet */}
          <path
            d="M16 18h2v-8h-2v8zm-2 2h2v-2h-2v2zm-4 0h4v2h-4v-2z"
            fill="#b45309"
          />
          {/* Center vertical emblem outline */}
          <path
            d="M10 9h4v2h2v6h-2v2h-4v-2H8v-6h2V9z"
            fill="#78350f"
          />
          {/* Center emblem slot highlight */}
          <path
            d="M11 11h2v6h-2v-6z"
            fill="#fef08a"
          />
          {/* Inner core accent */}
          <rect x="11" y="13" width="2" height="2" fill="#facc15" />
        </svg>
      </div>
    </div>
  );
}
