"use client";
import { useState, useEffect } from "react";
import Hero from "@/components/Hero";
import { slides } from "@/lib/data";

export default function Home() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => setIndex((i) => (i + 1) % slides.length), 6500);
    return () => clearTimeout(t);
  }, [index]);
  return <main><Hero index={index} setIndex={setIndex} /></main>;
}
