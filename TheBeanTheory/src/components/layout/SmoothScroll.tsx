'use client';

import React from 'react';

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  // Removed Lenis to keep the site lightweight as requested.
  // Native smooth scrolling is handled via CSS in globals.css (scroll-behavior: smooth).
  return <>{children}</>;
}
