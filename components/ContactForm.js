"use client";
import { useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const submit = (e) => { e.preventDefault(); setSent(true); e.target.reset(); };
  return (
    <form className="cform" onSubmit={submit}>
      <label>Name<input name="name" required placeholder="Your name" /></label>
      <label>Email<input name="email" type="email" required placeholder="you@email.com" /></label>
      <label>Project type
        <select name="type" defaultValue="Film Production">
          {["Film Production", "Creative Development", "Ad Films", "Music Videos", "Post-Production", "Visual Storytelling"].map((o) => <option key={o}>{o}</option>)}
        </select>
      </label>
      <label>Message<textarea name="msg" rows={5} required placeholder="Tell us about your story" /></label>
      <button className="btn btn-red" type="submit">Send Message</button>
      {sent && <p className="ok" role="status">Thanks! We will get back to you shortly.</p>}
    </form>
  );
}
