import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import type { CSSProperties } from "react";
import { D, Lang, Localized, Project } from "./data";

const t = (value: Localized, lang: Lang) => typeof value === "string" ? value : value[lang] ?? value.pt;
const ui = (key: string, lang: Lang) => D.ui[lang][key] ?? D.ui.pt[key] ?? key;
const sectionLinks = [["sobre", "navAbout"], ["experiencia", "navExp"], ["projetos", "navProjects"], ["skills", "navSkills"], ["formacao", "navEdu"], ["contato", "navContact"]] as const;

function useReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(".reveal");
    if (!("IntersectionObserver" in window)) {
      elements.forEach(el => el.classList.add("visible"));
      return;
    }
    const observer = new IntersectionObserver((entries, obs) => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add("visible"); obs.unobserve(entry.target); }
    }), { threshold: 0.1 });
    elements.forEach((el, i) => { el.style.transitionDelay = `${Math.min((i % 4) * 70, 210)}ms`; observer.observe(el); });
    return () => observer.disconnect();
  }, []);
}

function Icon({ type }: { type: "moon" | "sun" | "menu" | "close" | "copy" }) {
  if (type === "menu") return <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16" /></svg>;
  if (type === "close") return <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" /></svg>;
  if (type === "copy") return <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><rect x="8" y="8" width="11" height="11" rx="2" /><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" /></svg>;
  return type === "moon" ? <svg className="i-moon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" /></svg> : <svg className="i-sun" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></svg>;
}

function Header({ lang, setLang }: { lang: Lang; setLang: (lang: Lang) => void }) {
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const [theme, setTheme] = useState(() => document.documentElement.getAttribute("data-theme") || "dark");
  const toggleTheme = () => { const next = theme === "dark" ? "light" : "dark"; setTheme(next); document.documentElement.setAttribute("data-theme", next); localStorage.setItem("theme", next); };
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => { if (event.key === "Escape") { setOpen(false); menuButtonRef.current?.focus(); } };
    const onPointerDown = (event: PointerEvent) => { if (!headerRef.current?.contains(event.target as Node)) setOpen(false); };
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => { document.removeEventListener("keydown", onKeyDown); document.removeEventListener("pointerdown", onPointerDown); };
  }, [open]);
  return <header className="nav" id="nav" ref={headerRef}>
    <a href="#inicio" className="logo" aria-label="Luciano Júnior">lm<span>.</span></a>
    <nav id="primary-navigation" className={`nav__links${open ? " open" : ""}`} aria-label={ui("navLabel", lang)}>
      {sectionLinks.map(([id, key]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{ui(key, lang)}</a>)}
    </nav>
    <div className="nav__actions">
      <button className="icon-btn lang-btn" type="button" onClick={() => setLang(lang === "pt" ? "en" : "pt")} aria-label={ui("langLabel", lang)}>{ui("langShort", lang)}</button>
      <button className="icon-btn" type="button" onClick={toggleTheme} aria-label={ui("themeLabel", lang)} aria-pressed={theme === "light"}><Icon type="moon" /><Icon type="sun" /></button>
      <button ref={menuButtonRef} className="icon-btn menu-btn" type="button" onClick={() => setOpen(!open)} aria-label={ui(open ? "closeMenuLabel" : "menuLabel", lang)} aria-expanded={open} aria-controls="primary-navigation"><Icon type={open ? "close" : "menu"} /></button>
    </div>
  </header>;
}

function Layers({ lang }: { lang: Lang }) { return <div className="layers" role="img" aria-label={ui("layersAlt", lang)}>{D.layers.map((layer, i) => <div className="layer" style={{ "--i": i } as CSSProperties} key={i}><b>0{i + 1}</b>{t(layer, lang)}</div>).reverse()}</div>; }
function Cover({ project, lang }: { project: Project; lang: Lang }) {
  if (project.cover === "layers") return <Layers lang={lang} />;
  const coverImage = project.coverImages?.[lang] ?? project.coverImage;
  if (coverImage) return <img src={coverImage.src} alt={t(coverImage.alt, lang)} loading="lazy" onError={e => e.currentTarget.style.display = "none"} />;
  if (project.images.length) return <img src={project.images[0].src} alt="" loading="lazy" onError={e => e.currentTarget.style.display = "none"} />;
  return <div className="art" style={{ "--h": project.hue } as CSSProperties} aria-hidden="true"><span>{project.glyph}</span></div>;
}
function Tags({ items, lang, core }: { items: Localized[]; lang: Lang; core?: boolean[] }) { return <div className="tags">{items.map((item, i) => <span className={core?.[i] ? "tag--core" : ""} key={i}>{t(item, lang)}</span>)}</div>; }
function StackDisplay({ project, lang }: { project: Project; lang: Lang }) {
  if (!project.stackGroups?.length) return <Tags items={project.stack} lang={lang} />;
  return <div className="stack-groups">{project.stackGroups.map(group => <div className="stack-group" key={String(group.title)}><h5>{t(group.title, lang)}</h5><Tags items={group.items} lang={lang} /></div>)}</div>;
}

function isValidExternalUrl(value?: string) {
  if (!value) return false;
  try { const url = new URL(value); return url.protocol === "https:" || url.protocol === "http:"; } catch { return false; }
}

function ProjectModal({ project, lang, trigger, onClose }: { project: Project; lang: Lang; trigger: HTMLElement; onClose: () => void }) {
  const [imageIndex, setImageIndex] = useState(0);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const image = project.images[imageIndex];
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    dialog.showModal();
    document.body.classList.add("noscroll");
    dialog.querySelector<HTMLElement>(".modal__close")?.focus();
    const restoreFocus = () => { document.body.classList.remove("noscroll"); trigger.focus(); };
    dialog.addEventListener("close", restoreFocus);
    return () => { dialog.removeEventListener("close", restoreFocus); document.body.classList.remove("noscroll"); if (trigger.isConnected) trigger.focus(); };
  }, [trigger]);
  const closeModal = () => { dialogRef.current?.close(); onClose(); };
  const media = project.images.length > 0 ? <div className="gallery" aria-label={ui("galleryLabel", lang)}>
    <div className="gallery__main">
      <img src={image.src} alt={t(image.alt, lang)} onError={e => e.currentTarget.parentElement?.classList.add("is-missing")} />
      <div className="gallery__missing">{ui("imgMissing", lang)}</div>
      {project.images.length > 1 && <>
        <button className="gallery__nav gallery__nav--prev" onClick={() => setImageIndex((imageIndex - 1 + project.images.length) % project.images.length)} aria-label={ui("prev", lang)}>‹</button>
        <button className="gallery__nav gallery__nav--next" onClick={() => setImageIndex((imageIndex + 1) % project.images.length)} aria-label={ui("next", lang)}>›</button>
      </>}
    </div>
    {project.images.length > 1 && <>
      <p className="gallery__count">{ui("imgCount", lang).replace("{n}", String(imageIndex + 1)).replace("{m}", String(project.images.length))}</p>
      <p className="gallery__caption">{t(image.alt, lang)}</p>
      <div className="thumbs">{project.images.map((item, i) => <button type="button" className="thumb" aria-label={t(item.alt, lang)} aria-current={i === imageIndex} onClick={() => setImageIndex(i)} key={item.src}><img src={item.src} alt="" /></button>)}</div>
    </>}
  </div> : <div className="modal__cover"><Cover project={project} lang={lang} /></div>;
  return <dialog ref={dialogRef} className="modal" aria-labelledby="modalTitle" onCancel={closeModal} onClick={e => e.target === e.currentTarget && closeModal()}>
    <button className="modal__close" type="button" onClick={closeModal} aria-label={ui("close", lang)}><Icon type="close" /></button>
    <div className="modal__inner">
      <div className="modal__media">{media}</div>
      <div className="modal__intro">
          <div className="card__top"><span className="badge">{t(project.badge, lang)}</span>{project.year && <span className="year">{project.year}</span>}</div>
          <h3 id="modalTitle">{project.title}</h3><p className="modal__summary">{t(project.summary, lang)}</p>
          <div><h4 className="modal__h">{ui("stack", lang)}</h4><StackDisplay project={project} lang={lang} /></div>
      </div>
      <div className="modal__details">
          <div className="modal__editorial"><div><h4 className="modal__h">{ui("problem", lang)}</h4><p>{t(project.problem, lang)}</p></div><div><h4 className="modal__h">{ui("solution", lang)}</h4><p>{t(project.solution, lang)}</p></div>{project.architecture && <div><h4 className="modal__h">{ui("architecture", lang)}</h4><p>{t(project.architecture, lang)}</p></div>}<div><h4 className="modal__h">{ui("status", lang)}</h4><p>{t(project.status, lang)}</p></div></div>
          <h4 className="modal__h">{ui("features", lang)}</h4><ul className="bullets">{project.details[lang].map(item => <li key={item}>{item}</li>)}</ul>
          {project.challenges?.length && <><h4 className="modal__h">{ui("challenges", lang)}</h4><ul className="bullets">{project.challenges.map(item => <li key={String(item)}>{t(item, lang)}</li>)}</ul></>}
          {(isValidExternalUrl(project.repo) || isValidExternalUrl(project.demo)) && <div className="modal__links">{isValidExternalUrl(project.repo) && <a className="btn btn--primary" href={project.repo} target="_blank" rel="noreferrer">{ui("repoBtn", lang)}</a>}{isValidExternalUrl(project.demo) && <a className="btn btn--ghost" href={project.demo} target="_blank" rel="noreferrer">{ui("demoBtn", lang)}</a>}</div>}
      </div>
    </div>
  </dialog>;
}

function Contact({ lang }: { lang: Lang }) {
  const [status, setStatus] = useState(""); const [error, setError] = useState(false); const [copyFeedback, setCopyFeedback] = useState<"success" | "error" | null>(null);
  const submit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); const form = event.currentTarget; const data = new FormData(form); const name = String(data.get("name") || "").trim(); const email = String(data.get("email") || "").trim(); const message = String(data.get("message") || "").trim(); if (!name || !/^\S+@\S+\.\S+$/.test(email) || !message) { setError(true); setStatus(ui("formErr", lang)); return; } setError(false); if (!D.config.formEndpoint) { setStatus(ui("formMailto", lang)); window.location.href = `mailto:${D.config.email}?subject=${encodeURIComponent(`${ui("formSubject", lang)} — ${name}`)}&body=${encodeURIComponent(`${message}\n\n— ${name} (${email})`)}`; } };
  const copy = async (value: string) => {
    try {
      if (navigator.clipboard?.writeText) await navigator.clipboard.writeText(value);
      else { const area = document.createElement("textarea"); area.value = value; area.style.position = "fixed"; area.style.opacity = "0"; document.body.appendChild(area); area.select(); document.execCommand("copy"); area.remove(); }
      setCopyFeedback("success");
    } catch { setCopyFeedback("error"); }
    window.setTimeout(() => setCopyFeedback(null), 2800);
  };
  const contacts = [
    { label: "E-mail", detail: D.config.email, href: `mailto:${D.config.email}`, value: D.config.email },
    { label: "LinkedIn", detail: "/in/luciano-júnior", href: D.config.linkedin, value: D.config.linkedin },
    { label: "GitHub", detail: "/lucianomenezesjr", href: D.config.github, value: D.config.github },
    { label: "WhatsApp", detail: "+55 11 99942-2998", href: D.config.whatsapp, value: D.config.whatsapp }
  ];
  return <section className="section container contact" id="contato" aria-labelledby="t-contact"><p className="eyebrow reveal">{ui("contactEyebrow", lang)}</p><h2 className="contact__title reveal" id="t-contact">{ui("contactTitle", lang)}</h2><p className="lead reveal">{ui("contactLead", lang)}</p><div className="contact__grid reveal"><form className="form" onSubmit={submit} noValidate><div className="field"><label htmlFor="fName">{ui("formName", lang)}</label><input id="fName" name="name" type="text" autoComplete="name" required /></div><div className="field"><label htmlFor="fEmail">{ui("formEmail", lang)}</label><input id="fEmail" name="email" type="email" autoComplete="email" required /></div><div className="field"><label htmlFor="fMsg">{ui("formMessage", lang)}</label><textarea id="fMsg" name="message" rows={5} required /></div><input className="hp" name="_gotcha" tabIndex={-1} autoComplete="off" aria-hidden="true" /><button className="btn btn--primary" type="submit">{ui("formSend", lang)}</button><p className={`form__status${error ? " err" : ""}`} role="status">{status}</p></form><div className="direct"><p className="mini-label">{ui("direct", lang)}</p>{contacts.map(contact => <div className="direct__row" key={contact.label}><a className="direct__link" href={contact.href} target={contact.label === "E-mail" ? undefined : "_blank"} rel={contact.label === "E-mail" ? undefined : "noreferrer"}><span>{contact.label}</span><small>{contact.detail}</small></a><button className="copy-btn" type="button" onClick={() => void copy(contact.value)} aria-label={`${ui("copyLabel", lang)}: ${contact.label}`} title={ui("copyLabel", lang)}><Icon type="copy" /></button></div>)}</div></div>{copyFeedback && <div className={`copy-toast${copyFeedback === "error" ? " copy-toast--error" : ""}`} role="status" aria-live="polite">{ui(copyFeedback === "success" ? "copySuccess" : "copyError", lang)}</div>}</section>;
}

export default function App() {
  const [lang, setLang] = useState<Lang>(() => localStorage.getItem("lang") === "en" || navigator.language.toLowerCase().startsWith("en") ? "en" : "pt");
  const [filter, setFilter] = useState("all"); const [selected, setSelected] = useState<{ project: Project; trigger: HTMLElement } | null>(null); const [typed, setTyped] = useState("");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches; useReveal();
  useEffect(() => { localStorage.setItem("lang", lang); document.documentElement.lang = lang === "en" ? "en" : "pt-BR"; document.title = ui("metaTitle", lang); }, [lang]);
  useEffect(() => { if (reduceMotion) { setTyped(D.typed[lang][0]); return; } let word = 0, index = 0, erasing = false, timeout = 0; const tick = () => { const currentWord = D.typed[lang][word]; setTyped(currentWord.slice(0, index)); let wait = 65; if (!erasing && index < currentWord.length) index++; else if (!erasing) { erasing = true; wait = 1600; } else if (index > 0) { index--; wait = 45; } else { erasing = false; word = (word + 1) % D.typed[lang].length; wait = 300; } timeout = window.setTimeout(tick, wait); }; tick(); return () => clearTimeout(timeout); }, [lang, reduceMotion]);
  useEffect(() => { const onMove = (e: PointerEvent) => { document.querySelector<HTMLElement>(".spotlight")?.style.setProperty("--mx", `${e.clientX}px`); document.querySelector<HTMLElement>(".spotlight")?.style.setProperty("--my", `${e.clientY}px`); }; window.addEventListener("pointermove", onMove); return () => window.removeEventListener("pointermove", onMove); }, []);
  useEffect(() => { const onKey = (e: KeyboardEvent) => e.key === "Escape" && setSelected(null); window.addEventListener("keydown", onKey); return () => window.removeEventListener("keydown", onKey); }, []);
  const kinds = ["all", "web", "api", "cloud", "iot", "ai"]; const projects = useMemo(() => D.projects.filter(project => filter === "all" || project.kinds.includes(filter)), [filter]);
  const title = (number: string, key: string) => <h2 id={`t-${key.replace("sec", "").toLowerCase()}`} className="section__title reveal"><span aria-hidden="true">{number}.</span><span>{ui(key, lang)}</span></h2>;
  return <><a className="skip" href="#main">{ui("skip", lang)}</a><div className="spotlight" aria-hidden="true" /><Header lang={lang} setLang={next => { setLang(next); localStorage.setItem("lang", next); }} /><main id="main">
    <section className="hero container" id="inicio"><div className="hero__grid"><div className="hero__text"><h1 className="reveal">Luciano Júnior<span className="grad">.</span></h1><h2 className="reveal"><span className="sr-only">{ui("heroRole", lang)}</span><span aria-hidden="true">{typed}<span className="caret" /></span></h2><p className="lead reveal" dangerouslySetInnerHTML={{ __html: ui("lead", lang) }} /><div className="cta reveal"><a href="#projetos" className="btn btn--primary">{ui("btnProjects", lang)} →</a><a href="#contato" className="btn btn--ghost">{ui("btnContact", lang)}</a><a href={lang === "en" ? D.config.cvEn : D.config.cv} className="btn btn--ghost" download>{ui("btnCv", lang)}</a></div></div><figure className="portrait reveal"><div className="portrait__frame"><img src="assets/me.jpg" alt={ui("photoAlt", lang)} width="900" height="1202" decoding="async" onError={e => e.currentTarget.parentElement?.parentElement?.classList.add("is-missing")} /><span className="portrait__fallback">LM</span></div><figcaption className="portrait__chip"><span className="dot" />{t(D.chip, lang)}</figcaption></figure></div><ul className="stats reveal">{D.stats.map(stat => <li key={stat.v}><strong>{stat.v} <small>{t(stat.u, lang)}</small></strong><span>{t(stat.l, lang)}</span></li>)}</ul></section>
    <section className="section container" id="sobre" aria-labelledby="t-about">{title("01", "secAbout")}<div className="about reveal"><div className="about__text">{D.about.paragraphs[lang].map(text => <p key={text}>{text}</p>)}<p className="mini-label">{ui("factsInterests", lang)}</p><Tags items={D.about.interests[lang]} lang={lang} /></div><ul className="about__facts">{D.about.facts.map(fact => <li key={String(fact.label)}><span>{t(fact.label, lang)}</span>{t(fact.value, lang)}</li>)}</ul></div></section>
    <section className="section container" id="experiencia" aria-labelledby="t-exp">{title("02", "secExp")}<div className="timeline reveal">{D.experience.map(job => <article className="job" key={job.company}><div className="job__meta">{job.roles.map(item => <div className="job__role" key={String(item.role)}><strong>{t(item.role, lang)}</strong><span>{t(item.period, lang)}</span></div>)}</div><div className="job__body"><h3>{job.company}</h3><ul>{job.highlights[lang].map(item => <li key={item}>{item}</li>)}</ul><Tags items={job.tags} lang={lang} /></div></article>)}</div></section>
    <section className="section container" id="projetos" aria-labelledby="t-projects">{title("03", "secProjects")}<div className="filters reveal" role="group" aria-label={ui("filtersLabel", lang)}>{kinds.filter(kind => kind === "all" || D.projects.some(project => project.kinds.includes(kind))).map(kind => <button className="chip" type="button" aria-pressed={filter === kind} onClick={() => setFilter(kind)} key={kind}>{ui(kind === "all" ? "fAll" : `f${kind}`, lang)}</button>)}</div>{(["featured", "other"] as const).map(category => { const group = projects.filter(project => project.category === category).sort((a, b) => (a.priority ?? 999) - (b.priority ?? 999)); if (!group.length) return null; return <div className={`project-group project-group--${category}`} key={category}><h3 className="project-group__title">{ui(category === "featured" ? "featuredProjects" : "otherProjects", lang)}</h3><div className="grid">{group.map(project => <article className="card" key={project.id}><div className="card__cover"><Cover project={project} lang={lang} /></div><div className="card__body"><div className="card__top"><span className="badge">{t(project.badge, lang)}</span>{project.year && <span className="year">{project.year}</span>}</div><h4><button type="button" className="card__open" onClick={event => setSelected({ project, trigger: event.currentTarget })}>{project.title}</button></h4><p>{t(project.summary, lang)}</p><Tags items={project.stack.slice(0, 3)} lang={lang} /><span className="card__more">{ui("details", lang)} →</span></div></article>)}</div></div>; })}</section>
    <section className="section container" id="skills" aria-labelledby="t-skills">{title("04", "secSkills")}<p className="legend reveal"><span className="tag tag--core">Aa</span>{ui("coreLegend", lang)}</p><div className="skills reveal">{D.skills.map(group => <div className="skill" key={String(group.title)}><h3>{t(group.title, lang)}</h3><Tags items={group.items.map(item => item.n)} lang={lang} core={group.items.map(item => Boolean(item.core))} /></div>)}</div></section>
    <section className="section container" id="formacao" aria-labelledby="t-edu">{title("05", "secEdu")}<div className="edu reveal"><div className="edu__col"><h3>{ui("eduTitle", lang)}</h3><ul>{D.education.map(item => <li key={String(item.title)}><strong>{t(item.title, lang)}</strong><span>{t(item.place, lang)} · {t(item.period, lang)}</span></li>)}</ul></div><div className="edu__col"><h3>{ui("certTitle", lang)}</h3><ul>{D.certs.map(item => <li key={String(item.title)}><strong>{t(item.title, lang)}</strong><span>{t(item.meta, lang)}</span>{item.url && <a href={item.url}>{ui("verify", lang)}</a>}</li>)}</ul></div></div></section>
    <Contact lang={lang} />
  </main><footer className="footer">© {new Date().getFullYear()} Luciano Júnior · {ui("footer", lang)}</footer>{selected && <ProjectModal project={selected.project} lang={lang} trigger={selected.trigger} onClose={() => setSelected(null)} />}</>;
}
