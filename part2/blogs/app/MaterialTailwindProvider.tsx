"use client";

import React, { createContext } from "react";

// Create a safe, native React context fallback
const SafeThemeContext = createContext({});

export default function MaterialTailwindProvider({ children }: { children: React.ReactNode }) {
  return (
    <SafeThemeContext.Provider value={{}}>
      {children}
    </SafeThemeContext.Provider>
  );
}
