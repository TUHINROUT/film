"use client";
import Link from "next/link";
import Icon from "./Icon";

export default function Header({ open, onToggle }) {
  return (
    <header className="header">
      <div className="header-left">
        <button className={`burger ${open ? "is-open" : ""}`} onClick={onToggle} aria-label="Toggle menu" aria-expanded={open}>
          <span /><span /><span />
        </button>
        <Link href="/" className="brand" aria-label="Arena Film Production House">
          <img src="/images/logo.png" alt="Arena Film Production House" />
        </Link>
      </div>
      <div className="header-right">
        <button className="search" aria-label="Search"><Icon name="search" size={20} /></button>
        <Link href="/contact" className="btn btn-red">Let&apos;s Create <Icon name="arrow" size={16} /></Link>
      </div>
    </header>
  );
}
