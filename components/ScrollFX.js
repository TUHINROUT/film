"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollFX() {
  const path = usePathname();
  useEffect(() => {
    const els = document.querySelectorAll(".page .card, .page .split > *, .page .cta, .page .marquee");
    if (!("IntersectionObserver" in window)) { els.forEach((e) => e.classList.add("in")); return; }
    const io = new IntersectionObserver((en) => en.forEach((x) => { if (x.isIntersecting) { x.target.classList.add("in"); io.unobserve(x.target); } }), { threshold: 0.12 });
    els.forEach((e, i) => { e.classList.add("r"); e.style.transitionDelay = `${(i % 3) * 90}ms`; io.observe(e); });
    return () => io.disconnect();
  }, [path]);
  return null;
}
