"use client";

import React, { createContext, useState } from "react";
import Language from "./Q10";

// Define the context type
type LanguageContextType = {
  lang: string;
  setLang: (value: string) => void;
};

// Create context with default value null
const LanguageSwitcher = createContext<LanguageContextType | null>(null);

export default function App() {
  const [lang, setLang] = useState<string>("en");

  return (
    <LanguageSwitcher.Provider value={{ lang, setLang }}>
      <div>
        <Language />
      </div>
    </LanguageSwitcher.Provider>
  );
}

export { LanguageSwitcher };
