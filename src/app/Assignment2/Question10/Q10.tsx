import React, { useContext } from "react";
import { LanguageSwitcher } from "./page";

export default function Language() {
  const context = useContext(LanguageSwitcher);

  // Handle null context (shouldn't happen if used inside provider)
  if (!context) {
    return <p>Error: Language context not available.</p>;
  }

  const { lang, setLang } = context;

  return (
    <main>
      <h1>{lang === "en" ? "Hello" : "Hola"}</h1>
      <button
        onClick={() => {
          if (lang === "en") {
            setLang("span");
          }
        }}
      >
        Translate to Spanish
      </button>
      <button
        onClick={() => {
          if (lang === "span") {
            setLang("en");
          }
        }}
      >
        Translate to English
      </button>
    </main>
  );
}
