"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

interface ActiveContextType {
  active: string;
  setActive: (value: string) => void;
}

const ActiveContext = createContext<ActiveContextType>({
  active: "",
  setActive: () => {},
});

export function ActiveProvider({ children }: { children: ReactNode }) {
  const [active, setActiveState] = useState<string>("");

  // Quando clicar e mudar o active
  const setActive = (value: string) => {
    setActiveState(value);
    if (typeof window !== "undefined") {
      localStorage.setItem("activeTab", value);
    }
  };

  // Quando abrir o site, recupera do localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedActive = localStorage.getItem("activeTab");
      if (storedActive) {
        setActiveState(storedActive);
      }
    }
  }, []);

  return (
    <ActiveContext.Provider value={{ active, setActive }}>
      {children}
    </ActiveContext.Provider>
  );
}

export function useActive() {
  const context = useContext(ActiveContext);
  if (!context) {
    throw new Error("useActive deve ser usado dentro de um ActiveProvider");
  }
  return context;
}
