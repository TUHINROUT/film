export default function Icon({ name, size = 34 }) {
  const p = { width: size, height: size, viewBox: "0 0 32 32", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" };
  const m = {
    reel: <><circle cx="16" cy="16" r="12" /><circle cx="16" cy="9" r="2" /><circle cx="16" cy="23" r="2" /><circle cx="9" cy="16" r="2" /><circle cx="23" cy="16" r="2" /><circle cx="16" cy="16" r="1.2" /></>,
    clap: <><path d="M4 12h24v15H4z" /><path d="M4 12l3-7 5 2 3-1 4 2 5-1 4 5" /><path d="M10 12l3-6M17 12l3-6M24 12l3-6" /><path d="M13 17l5 3-5 3z" /></>,
    cam: <><rect x="4" y="9" width="24" height="17" rx="3" /><path d="M11 9l2-3h6l2 3" /><circle cx="16" cy="17.5" r="4.5" /></>,
    note: <><path d="M12 24V7l14-3v17" /><circle cx="9" cy="24" r="3" /><circle cx="23" cy="21" r="3" /></>,
    play: <><rect x="3" y="5" width="26" height="19" rx="2" /><path d="M13 10.5v8l7-4z" /><path d="M10 28h12" /></>,
    search: <><circle cx="14" cy="14" r="8" /><path d="M20 20l7 7" /></>,
    arrow: <path d="M6 16h20M18 8l8 8-8 8" />,
    left: <path d="M20 6l-10 10 10 10" />,
    right: <path d="M12 6l10 10-10 10" />,
    ig: <><rect x="5" y="5" width="22" height="22" rx="6" /><circle cx="16" cy="16" r="5" /><circle cx="23" cy="9" r=".8" fill="currentColor" /></>,
    yt: <><rect x="3" y="7" width="26" height="18" rx="5" /><path d="M13 12v8l7-4z" fill="currentColor" /></>,
    fb: <path d="M18 28V17h4l1-5h-5V9c0-1.5.6-2.5 2.6-2.5H23V2.2C22.5 2.1 21 2 19.5 2 15.5 2 13 4.4 13 8.500V12H9v5h4v11z" fill="currentColor" stroke="none" />,
    x: <path d="M5 5l22 22M27 5L5 27" />,
  };
  return <svg {...p} aria-hidden="true">{m[name]}</svg>;
}
