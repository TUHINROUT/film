import Link from "next/link";
import { notFound } from "next/navigation";
import ContactForm from "@/components/ContactForm";
import { heroBg, titles, serviceList, works, team, values } from "@/lib/content";
import { pages, services } from "@/lib/data";

export function generateStaticParams() {
  return Object.keys(titles).map((slug) => ({ slug }));
}
export function generateMetadata({ params }) {
  return { title: `${pages[params.slug]?.title || "Arena"} | Arena Film Production House` };
}

function Body({ slug }) {
  if (slug === "about") return (
    <>
      <section className="sec split">
        <div>
          <h2>A creative studio for a global audience</h2>
          <p>{pages.about.text}</p>
          <p>From first idea to final grade, Arena brings writers, directors, cinematographers and editors together to make work that competes at the highest level.</p>
          <Link href="/work" className="btn btn-red">See Our Work</Link>
        </div>
        <img src="/images/film_production.webp" alt="Arena film set" />
      </section>
      <section className="sec grid3">
        {values.map((v) => <article key={v.t} className="card"><h3>{v.t}</h3><p>{v.d}</p></article>)}
      </section>
    </>
  );
  if (slug === "services") return (
    <section className="sec grid3">
      {serviceList.map((s) => (
        <article key={s.t} className="card photo" style={{ backgroundImage: `url(${s.img})` }}>
          <div><h3>{s.t}</h3><p>{s.d}</p></div>
        </article>
      ))}
    </section>
  );
  if (slug === "work") return (
    <section className="sec grid3">
      {works.map((w) => (
        <article key={w.t} className="card photo tall" style={{ backgroundImage: `url(${w.img})` }}>
          <div><span className="chip">{w.c}</span><h3>{w.t}</h3></div>
        </article>
      ))}
    </section>
  );
  if (slug === "team") return (
    <section className="sec grid3">
      {team.map((m, i) => (
        <article key={i} className="card person">
          <div className="avatar">{m.r[0]}</div>
          <h3>{m.n}</h3><p>{m.r}</p>
        </article>
      ))}
    </section>
  );
  return (
    <section className="sec split">
      <div>
        <h2>Have a story to tell?</h2>
        <p>{pages.contact.text}</p>
        <ul className="info"><li>hello@arenafilms.com</li><li>+91 00000 00000</li><li>Mumbai, India</li></ul>
      </div>
      <ContactForm />
    </section>
  );
}

export default function Inner({ params }) {
  const { slug } = params;
  if (!titles[slug]) notFound();
  const [a, b] = titles[slug];
  return (
    <main className="page">
      <section className="phero" style={{ backgroundImage: `url(${heroBg[slug]})` }}>
        <div className="phero-in">
          <p className="crumb"><Link href="/">Home</Link> / {pages[slug].title}</p>
          <h1><em>{a}</em> <b>{b}</b></h1>
        </div>
      </section>
      <Body slug={slug} />
      <div className="marquee" aria-hidden="true"><div>{[0, 1].map((k) => <span key={k}>{services.map((s) => <b key={s.id}>{s.label.join(" ")}</b>)}</span>)}</div></div>
      <section className="cta">
        <h2>Ready to create something extraordinary?</h2>
        <Link href="/contact" className="btn btn-red">Let&apos;s Create</Link>
      </section>
      <footer className="foot">
        <img src="/images/logo.png" alt="Arena" />
        <p>Ideas | People | Stories</p>
        <small>© {new Date().getFullYear()} Arena Film Production House</small>
      </footer>
    </main>
  );
}
