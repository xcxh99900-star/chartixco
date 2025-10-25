"use client";

import { useEffect, useState } from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'spline-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & { url: string }, HTMLElement>;
    }
  }
}

export default function SplineMid() {
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
      <div className="w-full h-full bg-gradient-to-br from-[#00031A] via-[#0A1628] to-[#00031A] rounded-lg" />
    );
  }

  return (
    <div className="w-full h-full spline-container-transparent">
      <spline-viewer
        url="https://prod.spline.design/aJjNosmehKG8r917/scene.splinecode"
        className="spline-transparent"
      />
    </div>
  );
}
