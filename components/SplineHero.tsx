"use client";

import { useEffect, useState } from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'spline-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & { url: string }, HTMLElement>;
    }
  }
}

export default function SplineHero() {
  const [isMounted, setIsMounted] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const handleError = () => setHasError(true);
    window.addEventListener('error', handleError, true);

    return () => {
      window.removeEventListener('error', handleError, true);
    };
  }, []);

  if (!isMounted || hasError) {
    return (
      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#00031A] via-[#0A1628] to-[#00031A]" />
    );
  }

  return (
    <div className="absolute inset-0 w-full h-full">
      <spline-viewer url="https://prod.spline.design/QVFKfjmsVIBE4E4o/scene.splinecode" />
    </div>
  );
}
