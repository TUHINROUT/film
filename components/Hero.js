"use client";
import Link from "next/link";
import Icon from "./Icon";
import { slides, services } from "@/lib/data";

export default function Hero({ index, setIndex }) {
  const go = (d) => setIndex((index + d + slides.length) % slides.length);
  return (
    <section className="hero">
      {slides.map((sl, i) => (
        <div key={i} className={`hero-bg ${i === index ? "on" : ""}`} style={{ backgroundImage: `url(${sl.bg})`, backgroundPosition: sl.pos }} />
      ))}
      <div className="hero-shade" />
      <div className="fx" aria-hidden="true">
        <i className="glow g1" /><i className="glow g2" /><i className="sweep" />
        {Array.from({ length: 16 }).map((_, k) => (
          <b key={k} className="bokeh" style={{ "--x": `${(k * 37) % 100}%`, "--s": `${6 + ((k * 7) % 16)}px`, "--d": `${14 + ((k * 5) % 12)}s`, "--dl": `${-((k * 3) % 18)}s` }} />
        ))}
      </div>

      <div className="socials">
        <span className="follow">Follow us</span>
        <i className="line" />
        <a href="#" aria-label="Instagram"><Icon name="ig" size={20} /></a>
        <a href="#" aria-label="YouTube"><Icon name="yt" size={20} /></a>
        <a href="#" aria-label="Facebook"><Icon name="fb" size={18} /></a>
        <a href="#" aria-label="X"><Icon name="x" size={16} /></a>
        <i className="line tall" />
      </div>

      <div className="ring-wrap">
        <div className="ring">
          <span className="ring-tag" key={index}>{slides[index].tag}</span>
          <h1 key={index} aria-live="polite">
            <em><span style={{ "--n": 0 }}>{slides[index].l[0]}</span></em>
            <strong><span style={{ "--n": 1 }}>{slides[index].l[1]}</span></strong>
            <b><span style={{ "--n": 2 }}>{slides[index].l[2]}</span></b>
          </h1>
          <button className="showreel"><span className="play"><Icon name="right" size={18} /></span> Watch Showreel</button>
        </div>
        <div className="scroll"><i /><span>Scroll down</span></div>
      </div>

      <div className="intro">
        <p className="mini">A Creative Studio</p>
        <p>Crafting powerful stories, memorable characters and world-class visual experiences for a global audience.</p>
        <Link href="/work" className="btn btn-red">Explore Our Work <Icon name="arrow" size={16} /></Link>
      </div>

      <ol className="dots" aria-label="Slides">
        {slides.map((_, i) => (
          <li key={i}>
            <button className={i === index ? "on" : ""} onClick={() => setIndex(i)} aria-label={`Slide ${i + 1}`}>
              <i /><span>{String(i + 1).padStart(2, "0")}{i === 0 ? <b>Home</b> : null}</span>
            </button>
          </li>
        ))}
      </ol>

      <div className="counter">
        <span><b>{String(index + 1).padStart(2, "0")}</b> / {String(slides.length).padStart(2, "0")}</span>
        <button onClick={() => go(-1)} aria-label="Previous"><Icon name="left" size={16} /></button>
        <button onClick={() => go(1)} aria-label="Next"><Icon name="right" size={16} /></button>
      </div>

      <div className="strip">
        {services.map((sv, i) => (
          <button key={sv.id} className={`tile ${i === index ? "on" : ""}`} onClick={() => setIndex(i)} style={{ backgroundImage: `url(${sv.img})` }}>
            <span className="tile-in">
              <Icon name={sv.icon} size={30} />
              <span className="tile-label">{sv.label.map((l, k) => <span key={k}>{l}</span>)}</span>
              <span className="tile-go"><Icon name="right" size={12} /></span>
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}
