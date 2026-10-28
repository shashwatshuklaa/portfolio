"use client";

import { useEffect, useState, useCallback, useRef } from "react";

/**
 * In-memory module flag to avoid replaying the intro during Next.js client-side
 * in-site navigation (e.g. clicking between "/" and "/projects"), while ensuring
 * it always plays on fresh page load and page reload.
 */
let introPlayedInSession = false;

/**
 * ============================================================================
 * ENTRY / LOADING ANIMATION CONFIGURATION
 * Pacing, durations, and timing values easy to find and adjust.
 * Inspired by Codédex's retro pixel coin animation and deliberate pacing.
 * ============================================================================
 */
export const LOADER_CONFIG = {
  // Duration in milliseconds to display the intro before initiating transition
  displayDurationMs: 1800,

  // Duration in milliseconds for the smooth fade transition into the portfolio
  fadeDurationMs: 350,

  // Hard safety timeout in milliseconds to guarantee the user is never stuck
  safetyTimeoutMs: 3500,

  // Fast display duration if user has prefers-reduced-motion active
  reducedMotionDurationMs: 250,
};

export default function PageLoader() {
  const [isVisible, setIsVisible] = useState(() => !introPlayedInSession);
  const [isExiting, setIsExiting] = useState(false);

  const timersRef = useRef<NodeJS.Timeout[]>([]);
  const isTerminatedRef = useRef(false);

  const cleanupAndDismiss = useCallback(() => {
    if (isTerminatedRef.current) return;
    isTerminatedRef.current = true;

    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];

    // Trigger smooth fade transition into the page
    setIsExiting(true);

    const finishTimer = setTimeout(() => {
      setIsVisible(false);
      document.body.style.overflow = "";
    }, LOADER_CONFIG.fadeDurationMs);

    timersRef.current.push(finishTimer);
  }, []);

  useEffect(() => {
    // If it already played during this client-side session (in-site navigation), do nothing
    if (introPlayedInSession) {
      return;
    }

    introPlayedInSession = true;

    // Check prefers-reduced-motion
    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const duration = reducedMotionQuery.matches
      ? LOADER_CONFIG.reducedMotionDurationMs
      : LOADER_CONFIG.displayDurationMs;

    // Lock page scrolling while the overlay is visible
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Play intro for duration, then smoothly exit
    const timer = setTimeout(() => {
      cleanupAndDismiss();
    }, duration);
    timersRef.current.push(timer);

    // Hard safety timeout cap to guarantee the user is never trapped
    const safetyTimer = setTimeout(() => {
      cleanupAndDismiss();
    }, LOADER_CONFIG.safetyTimeoutMs);
    timersRef.current.push(safetyTimer);

    // Keyboard skip listener (Escape key)
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        cleanupAndDismiss();
      }
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      timersRef.current.forEach(clearTimeout);
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [cleanupAndDismiss]);

  if (!isVisible) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Loading portfolio"
      onClick={cleanupAndDismiss}
      className={`page-loader-overlay fixed inset-0 z-[9999] w-full h-[100dvh] min-h-[100svh] bg-[#060b19] flex items-center justify-center select-none cursor-pointer transition-opacity duration-350 ease-out ${
        isExiting ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <span className="sr-only">Loading</span>

      {/* Stepped vertical Y-axis coin flip (static when prefers-reduced-motion is active) */}
      <div className="pixel-coin-flip">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 28"
          className="w-[28px] h-[32px] drop-shadow-[0_4px_16px_rgba(250,204,21,0.5)]"
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
          <path d="M11 11h2v6h-2v-6z" fill="#fef08a" />
          {/* Inner core accent */}
          <rect x="11" y="13" width="2" height="2" fill="#facc15" />
        </svg>
      </div>
    </div>
  );
}
