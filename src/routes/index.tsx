import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import writingDeskImg from "@/assets/writing-desk.jpg";
import codeScreenImg from "@/assets/code-screen.jpg";
import stageImg from "@/assets/stage.jpg";
import heroAsset from "@/assets/hero-charuvikash.png.asset.json";
import narayanaAsset from "@/assets/narayanamurthy.jpg.asset.json";
import kannadasanAsset from "@/assets/kannadasan.jpg.asset.json";
import rockefellerAsset from "@/assets/rockefeller.jpg.asset.json";
import portraitAsset from "@/assets/charuvikash.png.asset.json";

const NAV = [
  { href: "#about", label: "About" },
  { href: "#education", label: "Academics" },
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#hobbies", label: "Hobbies" },
  { href: "#inspirations", label: "Inspirations" },
  { href: "#vision", label: "Vision" },
  { href: "#contact", label: "Contact" },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Charuvikash E — Portfolio" },
      { name: "description", content: "Portfolio of Charuvikash E — Coimbatore-based student, Computer Science centum holder, freelance lyricist, Python + AI learner and marketer." },
      { property: "og:title", content: "Charuvikash E — Portfolio" },
      { property: "og:description", content: "Centum in Computer Science, runner-up author, freelance lyricist, 100+ real-time sales." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@300;400;500;600&display=swap" },
    ],
  }),
  component: Index,
});

function Index() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const fmt = () =>
      new Intl.DateTimeFormat("en-IN", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
      }).format(new Date());
    setTime(fmt());
    const id = setInterval(() => setTime(fmt()), 30_000);
    return () => clearInterval(id);
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground font-sans antialiased">
      {/* Top nav */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3 sm:px-6">
          <a href="#top" className="flex items-center gap-2.5 rounded-full border border-border bg-card px-2 py-1.5 pr-4">
            <span className="h-8 w-8 overflow-hidden rounded-full bg-muted ring-1 ring-border">
              <img src={portraitAsset.url} alt="Charuvikash E" className="h-full w-full object-cover object-top" />
            </span>
            <span className="text-sm font-medium tracking-tight">Charuvikash E</span>
          </a>
          <nav className="ml-auto hidden items-center gap-1 md:flex">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} className="rounded-full px-3 py-1.5 text-xs uppercase tracking-[0.16em] text-muted-foreground transition hover:bg-card hover:text-foreground">
                {n.label}
              </a>
            ))}
          </nav>
          <span className="ml-auto hidden text-xs uppercase tracking-[0.16em] text-muted-foreground md:ml-3 md:inline">{time || "—"}</span>
          <a href="#contact" className="ml-auto rounded-full bg-primary px-4 py-2 text-xs font-medium text-primary-foreground md:ml-0">Connect</a>
        </div>
        <nav className="flex gap-1 overflow-x-auto border-t border-border/60 px-4 py-2 md:hidden">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="shrink-0 rounded-full border border-border bg-card px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
              {n.label}
            </a>
          ))}
        </nav>
      </header>


      {/* Hero */}
      <section id="top" className="mx-auto max-w-6xl px-6 pt-12 pb-20 sm:pt-20 sm:pb-28">
        <div className="grid gap-12 sm:grid-cols-5 sm:items-center">
          <div className="sm:col-span-3">
            <p className="text-xs uppercase tracking-[0.22em] text-ochre">Portfolio · 2026</p>
            <h1 className="mt-5 font-serif text-[3rem] leading-[0.95] tracking-tight sm:text-[5.5rem]">
              Charuvikash E
            </h1>
            <p className="mt-4 font-serif text-2xl italic text-muted-foreground sm:text-3xl">
              Student. Web Developer. Creative thinker.
            </p>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              A recent higher-secondary graduate from <span className="text-foreground">Bharathi Matriculation Hr. Sec. School, Coimbatore</span>, with a <span className="text-foreground">centum in Computer Science</span>. I build small AI models in Python, learn fast, and have closed 100+ real-time sales. On the side, I write Tamil poems and freelance as a lyricist.
            </p>
            <dl className="mt-10 grid max-w-md grid-cols-3 gap-4 border-t border-border pt-6 text-sm">
              <Stat k="100" label="Centum in Computer Science" />
              <Stat k="88.8%" label="HSC overall" />
              <Stat k="100+" label="Sales closed" />
            </dl>
          </div>
          <div className="sm:col-span-2">
            <div className="relative mx-auto aspect-[3/4] w-full max-w-xs overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-card to-muted shadow-sm sm:max-w-sm">
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background/40 to-transparent" />
              <img
                src={heroAsset.url}
                alt="Creative workspace with notebook, fountain pen, and code on laptop"
                width={1024}
                height={1280}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>


      <Divider />

      {/* About */}
      <Section id="about" eyebrow="01 — About">
        <div className="grid gap-10 sm:grid-cols-2">
          <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              I studied the ICSE syllabus until grade 10 — scoring 87% — where I sharpened my problem-solving and learned to apply ideas to real situations, not just to a textbook. That groundwork is what made a centum in Computer Science possible in grade 12.
            </p>
            <p>
              I learn fastest by building — Python notebooks, small AI models, a working prototype end-to-end. Writing Tamil poetry is the quieter side of the same instinct: take a messy idea and shape it into something clean.
            </p>
          </div>
          <ul className="space-y-3 border-l border-border pl-6 text-sm text-muted-foreground">
            <li><span className="text-foreground">Based in</span> — Coimbatore, India</li>
            <li><span className="text-foreground">Languages</span> — English, Tamil</li>
            <li><span className="text-foreground">Currently</span> — Learning Python &amp; AI, freelancing as a lyricist on the side</li>
            <li><span className="text-foreground">Focus areas</span> — Computer Science, Python &amp; AI, Marketing</li>
          </ul>
        </div>
      </Section>

      <Divider />

      {/* Education */}
      <Section id="education" eyebrow="02 — Academics">
        <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2">
          <EduCard
            period="Grades 11–12"
            school="Bharathi Matriculation Hr. Sec. School"
            location="Coimbatore"
            highlight="Centum (100/100) in Computer Science"
            score="88.8% overall"
          />
          <EduCard
            period="Up to Grade 10"
            school="ICSE Syllabus"
            location="India"
            highlight="Application-driven, real-time problem solving"
            score="87% overall"
          />
        </div>
      </Section>

      <Divider />

      {/* Highlights */}
      <Section id="work" eyebrow="03 — Selected Work & Recognition">
        <div className="grid gap-6 md:grid-cols-2">
          <Highlight
            number="01"
            title="Centum in Computer Science"
            body="Scored a perfect 100/100 in Computer Science in the HSC board exams — the strongest single result of my school years and the foundation I'm building everything else on."
            image={codeScreenImg}
            imageAlt="Code on a dark monitor"
          />
          <Highlight
            number="02"
            title="Python + AI Certification"
            body="Completed a Python with AI certification at Sprout Knowledge and Solutions, shipping several working models end-to-end inside Google Colab — from data wrangling to a runnable notebook."
            image={writingDeskImg}
            imageAlt="Workspace with notebook and laptop"
          />
          <Highlight
            number="03"
            title="Quiz Master — School Finals"
            body="Hosted the finals of the inter-house school quiz as the quiz master, owning the stage, the timing and the room."
            image={stageImg}
            imageAlt="Microphone in soft stage spotlight"
          />
          <Highlight
            number="04"
            title="Student Election Campaign"
            body="Personally campaigned across 25+ classrooms — speaking, canvassing and mobilising voters. Finished a close second with strong floor support."
          />
          <Highlight
            number="05"
            title="Runner-up — Teentales by iamanauthor"
            body="On the writing side: authored a short story published in the Teentales anthology by iamanauthor, and was selected as a runner-up in the accompanying competition."
          />
        </div>
      </Section>

      <Divider />

      {/* Work / Skills */}
      <Section id="skills" eyebrow="04 — What I do">
        <div className="grid gap-10 sm:grid-cols-3">
          <Craft
            title="Python &amp; AI"
            italic="(primary craft)"
            body="Centum in Computer Science and a Python + AI certification from Sprout Knowledge and Solutions. Built several small models in Google Colab end-to-end — notebooks, data wrangling, working prototypes. This is what I'm doubling down on."
          />
          <Craft
            title="Marketing &amp; Sales"
            italic="(in person)"
            body="Closed 100+ real-time sales with customers face to face. Confident pitching, handling objections, and reading a room — skills I plan to carry into the products I build."
          />
          <Craft
            title="Lyricist"
            italic="(on the side)"
            body="Freelance lyricist with projects in the pipeline. Original Tamil poems are published on a verified social page — a creative outlet that sharpens how I think, not the main career track."
          />
        </div>

        <div className="mt-14 flex flex-wrap gap-2">
          {[
            "Computer Science","Python","Web Development","Google Colab","AI / ML basics","Problem Solving","Fast Learner",
            "Marketing","Sales","Public Speaking","Leadership","Quiz Hosting","Campaigning",
            "Tamil Poetry","Lyrics Writing","Storytelling","Graphic Design",
          ].map((s) => (
            <span key={s} className="rounded-full border border-border bg-card px-3 py-1.5 text-sm">
              {s}
            </span>
          ))}
        </div>
      </Section>

      <Divider />

      {/* Hobbies */}
      <Section id="hobbies" eyebrow="05 — Hobbies">
        <div className="grid gap-6 sm:grid-cols-3">
          <Craft
            title="Reading Books"
            italic="(quiet hours)"
            body="Non-fiction, biographies and the occasional Tamil classic — reading is how I borrow other people's decades of experience in an afternoon."
          />
          <Craft
            title="Listening to Melodies"
            italic="(reset button)"
            body="Old Tamil melodies and soft instrumentals are my default soundtrack — they clear the head between deep work sessions."
          />
          <Craft
            title="Graphic Designing"
            italic="(visual side)"
            body="I enjoy designing posters, social-media creatives and small brand visuals — a calmer way to keep the creative muscle warm."
          />
        </div>
      </Section>

      <Divider />

      {/* Inspirations */}
      <Section id="inspirations" eyebrow="06 — Inspirations">
        <div className="grid gap-6 sm:grid-cols-3">
          <Inspiration
            name="N. R. Narayana Murthy"
            field="Founder · Infosys"
            body="Started Infosys in 1981 with just $250 borrowed from his wife and grew it into a multi-billion-dollar global IT giant. He set the gold standard for compassionate capitalism, ethical leadership and turning a small Indian software shop into a brand the world respects — exactly the arc I want to walk."
            image={narayanaAsset.url}
          />
          <Inspiration
            name="Kaviperarasu Kannadasan"
            field="Tamil Poetry &amp; Lyrics"
            body="The standard for every Tamil line I write — economy of words, depth of feeling, music inside the meaning."
            image={kannadasanAsset.url}
          />
          <Inspiration
            name="John D. Rockefeller"
            field="Business &amp; Discipline"
            body="A reminder that a long, patient compounding of small advantages eventually becomes an empire."
            image={rockefellerAsset.url}
          />
        </div>
      </Section>

      <Divider />

      {/* Vision */}
      <Section id="vision" eyebrow="07 — Vision">
        <div className="grid gap-10 sm:grid-cols-5 sm:items-start">
          <div className="sm:col-span-3">
            <h2 className="font-serif text-3xl leading-tight sm:text-5xl">
              The next <span className="italic text-ochre">ten years.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              I intend to be the first among my cohort to be placed in campus recruitment — and from there, to keep compounding. Within a ten-year horizon, my goal is to be the founder of a multipurpose MNC that operates across writing, technology and enterprise. I'm building the habits, the network and the work to make that the natural outcome, not the surprise one.
            </p>
          </div>
          <ul className="sm:col-span-2 space-y-4 border-l border-border pl-6 text-sm text-muted-foreground">
            <li><span className="text-foreground">Near term</span> — First placement of the batch.</li>
            <li><span className="text-foreground">Mid term</span> — Operator-level depth across product, sales &amp; capital.</li>
            <li><span className="text-foreground">Ten-year mark</span> — Founder, multipurpose MNC.</li>
          </ul>
        </div>
      </Section>

      <Divider />

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24 sm:py-32">
        <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">08 — Contact</p>
        <h2 className="mt-4 font-serif text-5xl leading-[1] sm:text-7xl">
          Let's <span className="italic text-ochre">work together.</span>
        </h2>
        <p className="mt-8 max-w-xl text-muted-foreground">
          The fastest way to reach me is on the number and email I've shared with you directly. I'm happy to walk through any of the work above in detail.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href="mailto:"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90"
          >
            Email me
            <span aria-hidden>→</span>
          </a>
        </div>
      </section>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} · Charuvikash E</span>
          <span>Coimbatore, India.</span>
        </div>
      </footer>
    </main>
  );
}

function Stat({ k, label }: { k: string; label: string }) {
  return (
    <div>
      <dt className="font-serif text-3xl text-foreground sm:text-4xl">{k}</dt>
      <dd className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{label}</dd>
    </div>
  );
}

function Divider() {
  return <div className="mx-auto h-px max-w-6xl bg-border" />;
}

function Section({ eyebrow, id, children }: { eyebrow: string; id?: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20 sm:py-28">
      <p className="mb-10 text-xs uppercase tracking-[0.18em] text-muted-foreground">{eyebrow}</p>
      {children}
    </section>
  );
}

function EduCard({
  period, school, location, highlight, score,
}: { period: string; school: string; location: string; highlight: string; score: string }) {
  return (
    <div className="bg-card p-8">
      <p className="text-xs uppercase tracking-wider text-muted-foreground">{period}</p>
      <h3 className="mt-3 font-serif text-2xl leading-snug">{school}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{location}</p>
      <div className="mt-6 flex items-end justify-between gap-4 border-t border-border pt-4">
        <p className="text-sm">{highlight}</p>
        <p className="font-serif text-2xl italic text-ochre">{score}</p>
      </div>
    </div>
  );
}

function Highlight({
  number, title, body, image, imageAlt,
}: { number: string; title: string; body: string; image?: string; imageAlt?: string }) {
  return (
    <article className="group relative overflow-hidden rounded-lg border border-border bg-card transition hover:border-foreground/30">
      {image && (
        <img
          src={image}
          alt={imageAlt ?? ""}
          loading="lazy"
          width={1280}
          height={896}
          className="h-44 w-full object-cover"
        />
      )}
      <div className="p-8">
        <span className="font-serif text-sm italic text-ochre">{number}</span>
        <h3 className="mt-2 font-serif text-2xl leading-tight sm:text-3xl">{title}</h3>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{body}</p>
      </div>
    </article>
  );
}

function Craft({ title, italic, body }: { title: string; italic: string; body: string }) {
  return (
    <div>
      <h3 className="font-serif text-2xl">
        {title} <span className="italic text-muted-foreground">{italic}</span>
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
    </div>
  );
}

function Inspiration({ name, field, body, image }: { name: string; field: string; body: string; image?: string }) {
  return (
    <article className="overflow-hidden rounded-lg border border-border bg-card">
      {image && (
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="h-64 w-full object-cover object-top grayscale"
        />
      )}
      <div className="p-8">
        <p className="text-xs uppercase tracking-wider text-muted-foreground" dangerouslySetInnerHTML={{ __html: field }} />
        <h3 className="mt-3 font-serif text-2xl leading-tight">{name}</h3>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{body}</p>
      </div>
    </article>
  );
}
