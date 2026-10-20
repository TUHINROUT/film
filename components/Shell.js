"use client";
import { useState, useEffect } from "react";
import Header from "./Header";
import MenuOverlay from "./MenuOverlay";
import ScrollFX from "./ScrollFX";
import SmoothScroll from "./SmoothScroll";

export default function Shell({ children }) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const k = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, [open]);
  return (
    <>
      <Header open={open} onToggle={() => setOpen(!open)} />
      <MenuOverlay open={open} onClose={() => setOpen(false)} />
      <SmoothScroll />
      <ScrollFX />
      {children}
    </>
  );
}
