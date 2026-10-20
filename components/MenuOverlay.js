"use client";
import Link from "next/link";
import { pages } from "@/lib/data";

export default function MenuOverlay({ open, onClose }) {
  const items = Object.values(pages);
  return (
    <nav className={`menu ${open ? "is-open" : ""}`} aria-hidden={!open} data-lenis-prevent>
      <div className="menu-panel p1" /><div className="menu-panel p2" /><div className="menu-panel p3" />
      <ul className="menu-list">
        {items.map((it, i) => (
          <li key={it.href} style={{ "--i": i }}>
            <Link href={it.href} onClick={onClose} tabIndex={open ? 0 : -1}>
              <small>0{i + 1}</small><span>{it.title}</span>
            </Link>
          </li>
        ))}
      </ul>
      <p className="menu-foot">Ideas | People | Stories</p>
    </nav>
  );
}
