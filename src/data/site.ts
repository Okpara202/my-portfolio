/**
 * Every word and fact on the site lives here, so copy changes never mean
 * hunting through JSX. Sections are numbered the way the page reads.
 */

// TODO(favour): confirm this handle — it is guessed from your email, not verified.
export const MEDIUM_URL = "https://medium.com/@okparafavour202";

export const profile = {
  name: "Favour Okpara",
  fullName: "Okpara Favour Chinecherem",
  role: "Fullstack Developer",
  roleLong: "Fullstack developer & technical writer",
  location: "Enugu, Nigeria",
  status: "At Netsprin — still listening",
  email: "okparafavour202@gmail.com",
  phone: "+234 913 177 2736",
  phoneHref: "+2349131772736",
  whatsapp: "https://wa.me/2349131772736",
  cv: "/Favour_Okpara_CV.docx",
  photo: "/image/okpara.png",
};

export const socials = [
  { label: "GitHub", href: "https://github.com/okpara202", icon: "github" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/favour-okpara-8a14a4309",
    icon: "linkedin",
  },
  { label: "Medium", href: MEDIUM_URL, icon: "medium" },
  {
    label: "X",
    href: "https://twitter.com/messages/compose?recipient_id=1633576892191195136",
    icon: "x",
  },
] as const;

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Journey", href: "#journey" },
  { label: "Work", href: "#work" },
  { label: "Toolkit", href: "#toolkit" },
  { label: "Writing", href: "#writing" },
  { label: "Contact", href: "#contact" },
];

/* ── Hero ─────────────────────────────────────────────────────────────── */

export const hero = {
  /** Rotates through the typewriter. Each is a real thing he has shipped. */
  clauses: [
    "interfaces that hold up on a bad connection",
    "the Express API sitting behind them",
    "a twelve-week React Native curriculum",
    "or whatever the brief turns out to actually need",
  ],
  intro: "Fullstack developer. I build",
  supporting:
    "Four years of it now, and the part I still like best is the bit I haven't figured out yet.",
  ctaPrimary: { label: "See what I've built", href: "#work" },
  ctaSecondary: { label: "Come talk to me", href: "#contact" },
};

/* ── 01 · About ───────────────────────────────────────────────────────── */

export const about = {
  index: "01",
  kicker: "About",
  title: "Anatomy, then this",
  paragraphs: [
    "I spent four years learning how the human body is put together, which mostly meant learning to ask one question over and over: what is this part for, and what breaks if it stops? Then I pointed the same question at software and never really stopped.",
    "Since then it's been production UI in Next.js, REST endpoints in Express, a React Native curriculum I wrote and taught end to end, and a stack of pull requests I've argued about politely. Right now that's full-time frontend at Netsprin, freelance work at Simbi, and two side projects that refuse to leave me alone.",
    "What I'm after next is less about a particular stack and more about a problem I haven't met before — ideally with people who'd rather review the code than take my word for it.",
  ],
  traits: [
    {
      title: "Frontend first, backend when it's needed.",
      body: "React and Next are home. Express, Nest and Postgres are where I go when the interface needs something real to talk to.",
    },
    {
      title: "I taught it before I claimed it.",
      body: "Fifty-odd students through a full-stack curriculum. Nothing exposes a shaky mental model faster than a room waiting for the answer.",
    },
    {
      title: "Nothing on here I can't defend.",
      body: "If a tool isn't on this page, it's because I haven't earned it yet. That list is shorter than it was last year and will be shorter again.",
    },
  ],
};

/* ── 02 · Journey ─────────────────────────────────────────────────────── */

export const journey = {
  index: "02",
  kicker: "The road so far",
  title: "Not a straight line",
  roles: [
    {
      title: "Frontend Engineer",
      org: "Netsprin",
      place: "Enugu, Nigeria",
      period: "Jun 2026 — Present",
      type: "Full-time",
      current: true,
      points: [
        "Build and maintain production UI in Next.js, turning designs into responsive, accessible components.",
        "Wire up REST endpoints and own the unglamorous half — loading states, error states, empty states.",
        "Review pull requests and get reviewed, which is where most of what I know actually came from.",
        "Sit with the backend engineers early enough to argue about the API contract before it's built.",
      ],
    },
    {
      title: "Frontend Developer",
      org: "Simbi",
      place: "Remote",
      period: "2024 — Present",
      type: "Freelance",
      current: true,
      points: [
        "Integrated REST APIs and reworked data fetching until page loads stopped being the complaint.",
        "Shipped UI features alongside designers and backend engineers on a working agile cadence.",
        "Kept cross-browser and mobile parity honest — the same features, working, on the devices people own.",
      ],
    },
    {
      title: "Mobile Dev Instructor",
      org: "Loctech Institute of Technology",
      place: "Port Harcourt, Nigeria",
      period: "Jan 2026 — Jun 2026",
      type: "Contract",
      points: [
        "Wrote and taught a twelve-week React Native and Expo curriculum, from JavaScript fundamentals to production builds with EAS Build.",
        "Ran live sessions that took students from an empty folder to their first app on a real phone.",
        "Sat one-on-one through the parts that actually stop people: environment setup, debugging, Expo Router, TypeScript.",
        "Reviewed their code the way I'd want mine reviewed.",
      ],
    },
    {
      title: "Frontend Developer",
      org: "Genesys Tech Hub",
      place: "Enugu, Nigeria",
      period: "2024 — 2025",
      type: "Full-time",
      points: [
        "Built and shipped responsive applications in React, Next.js and Redux Toolkit for enterprise clients.",
        "Cut a meaningful chunk of load time out of the apps through better API integration and state management.",
        "Built the reusable component library in Chakra UI and Tailwind that everything after it was faster for.",
        "Introduced React Hook Form and Zod as the validation layer, which quietly ended a whole class of bad data.",
      ],
    },
    {
      title: "Web Development Mentor & Tutor",
      org: "LanceySoft Technologies",
      place: "Abuja, Nigeria",
      period: "2022 — 2024",
      type: "Full-time",
      points: [
        "Designed a full-stack curriculum — React, Next.js, Express, Nest.js, modern JavaScript — and took 50+ students through it.",
        "Taught the hard middle: state management, API integration, auth, performance. Through projects, not slides.",
        "Ran live coding sessions, workshops and one-on-one mentoring for people who'd never opened a terminal.",
        "Set the team standards — Git workflow, accessibility, agile habits — that they carried out with them.",
      ],
    },
  ],
  education: {
    title: "BSc, Human Anatomy",
    org: "Enugu State University of Science and Technology",
    period: "2018 — 2022",
    note: "Not the obvious runway into this. Turned out to be a good one anyway — four years of taking systems apart to see what each piece was doing there.",
  },
};

/* ── 03 · Work ────────────────────────────────────────────────────────── */

export type Project = {
  title: string;
  blurb: string;
  role: string;
  stack: string[];
  src?: string;
  link?: string;
  note?: string;
};

export const work = {
  index: "03",
  kicker: "Selected work",
  title: "Six I'd happily be quizzed on",
  lead: "Live links where there are live links. Where a client's work is under NDA, it isn't here at all.",
  featured: [
    {
      title: "Tutera",
      blurb:
        "An LMS built so educators across Africa can teach, own their material and get paid without a middleman taking the difference. Server-rendered so the courses are actually findable.",
      role: "Fullstack Developer",
      stack: ["Next.js", "Tailwind", "Zustand", "Node.js", "Express"],
      src: "/image/tutera.jpeg",
      link: "https://tuteraafrica.xyz/",
    },
    {
      title: "BB Tutors",
      blurb:
        "A tutor's storefront: browse the maths lessons, buy one, watch it. Payments through Beepay, with the Express backend behind the whole purchase flow.",
      role: "Fullstack Developer",
      stack: ["Next.js", "Express", "Beepay"],
      src: "/image/bbtutors.png",
      link: "https://www.bbtutors.org/",
    },
    {
      title: "VibeCraft",
      blurb:
        "A website builder you talk to. I built the frontend — the chat surface and the live editing state — and wired it to the LLM work the backend developer owned.",
      role: "Frontend Developer",
      stack: ["Next.js", "TypeScript"],
      link: "https://vibecraft.today",
      note: "Frontend only — the model integration was someone else's work.",
    },
    {
      title: "Simbi AI",
      blurb:
        "A study companion that plans your week and then answers for it. Chat interface over a schedule, so the plan and the questions live in the same place.",
      role: "Frontend Developer",
      stack: ["React", "TypeScript", "Tailwind"],
      src: "/image/simbi.png",
      link: "https://simbi-ai.vercel.app/",
    },
    {
      title: "Adaptly",
      blurb:
        "Drop in a document in a language you don't read, pick the one you do, and get the summary, the action points and a chatbot that stays on the document. Built on Chrome's built-in AI.",
      role: "Frontend Developer",
      stack: ["React", "Chrome Built-in AI", "Tailwind"],
      src: "/image/Adaptly.png",
      link: "https://adaptly.onrender.com/",
    },
    {
      title: "Griggs Specialist Hospital",
      blurb:
        "A public hospital site that had to work for people who are worried and in a hurry. Appointments and contact, validated properly, accessible by default.",
      role: "Collaborator — frontend",
      stack: ["React", "Node.js", "Express", "Tailwind"],
      src: "/image/griggs image.png",
      link: "https://griggsspecialisthospital.com.ng/",
    },
  ] satisfies Project[],
  more: [
    {
      title: "HashAd",
      blurb:
        "Ad-banner manager and portfolio builder for students selling into their own campus.",
      role: "Fullstack",
      stack: ["React", "Node.js"],
      src: "/image/HashAd.png",
      link: "https://hash-ad.onrender.com/",
    },
    {
      title: "The Pivot",
      blurb:
        "Analytics platform — responsive UI, data visualisations and the collaboration layer.",
      role: "Frontend",
      stack: ["React", "Tailwind"],
      src: "/image/pivot.jpg",
      link: "https://thepivotsite.netlify.app/",
    },
    {
      title: "The Pivot Challenge",
      blurb:
        "Digital transformation platform for Nigerian entrepreneurs — tools plus a community around them.",
      role: "Frontend",
      stack: ["React", "Tailwind"],
      src: "/image/challenge.jpg",
      link: "https://thepivot.netlify.app/",
    },
    {
      title: "GitProfile Viewer",
      blurb:
        "Type a GitHub username, get the bio, the followers and every public repo, linked.",
      role: "Frontend",
      stack: ["React", "REST"],
      src: "/image/IMG_20250327_134436.jpg",
      link: "https://okpara-git-profile.netlify.app/",
    },
    {
      title: "Assembly Endgame",
      blurb:
        "Word game where every wrong guess deletes a programming language. Get to Assembly and you've lost.",
      role: "Frontend",
      stack: ["React"],
      src: "/image/IMG_20250327_133822.jpg",
      link: "https://okparaendgame.netlify.app/",
    },
    {
      title: "RoleGuard Auth",
      blurb:
        "Role-based access done properly — viewer, editor, admin — over Context, Zod and React Hook Form.",
      role: "Frontend",
      stack: ["React", "Zod", "RHF"],
      src: "/image/IMG_20250327_134005.jpg",
      link: "https://okpara-simple.netlify.app/",
    },
  ] satisfies Project[],
};

/* ── 04 · On my desk ──────────────────────────────────────────────────── */

export const now = {
  index: "04",
  kicker: "Right now",
  title: "On my desk this month",
  lead: "Neither is finished. That's rather the point of listing them.",
  items: [
    {
      title: "Ahia",
      blurb:
        "A marketplace with the hard parts left in: real-time chat between buyer and seller, escrow so neither has to trust the other first, and a notification pipeline that doesn't drop things.",
      stack: [
        "Express",
        "Postgres",
        "Redis",
        "BullMQ",
        "Next.js",
        "Render",
        "Oracle Cloud",
      ],
      status: "In build",
    },
    {
      title: "MyCompound",
      blurb:
        "Rent tracking for landlords who currently do it in a notebook. Landlord, property, unit, tenant, payment — modelled out properly, with the technical requirements written down before the code.",
      stack: ["MongoDB", "Node.js", "Next.js"],
      status: "Schema & TRD drafted",
    },
  ],
};

/* ── 05 · Toolkit ─────────────────────────────────────────────────────── */

export const toolkit = {
  index: "05",
  kicker: "Toolkit",
  title: "What I reach for",
  lead: "Grouped by what I'd actually be doing, not by how impressive the list looks.",
  groups: [
    {
      label: "Frontend",
      items: [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript (ES6+)",
        "Redux Toolkit",
        "Zustand",
        "React Router",
        "React Hook Form",
        "Zod",
      ],
    },
    {
      label: "Mobile",
      items: [
        "React Native",
        "Expo",
        "Expo Router",
        "Expo SDK",
        "EAS Build",
        "AsyncStorage",
      ],
    },
    {
      label: "Styling",
      items: [
        "Tailwind CSS",
        "Chakra UI",
        "CSS-in-JS",
        "Flexbox & Grid",
        "Mobile-first",
        "Framer Motion",
      ],
    },
    {
      label: "Backend & data",
      items: [
        "Node.js",
        "Express",
        "Nest.js",
        "REST API design",
        "PostgreSQL",
        "MongoDB",
        "Redis",
        "BullMQ",
      ],
    },
    {
      label: "Ways of working",
      items: [
        "Code review",
        "Git & GitHub",
        "Agile / Scrum",
        "Performance work",
        "Core Web Vitals",
        "Accessibility (WCAG)",
      ],
    },
    {
      label: "Build & infra",
      items: ["Vite", "Webpack", "npm / yarn", "Vercel", "Netlify", "Render"],
    },
  ],
  marquee: [
    "React",
    "Next.js",
    "TypeScript",
    "React Native",
    "Expo",
    "Node.js",
    "Express",
    "Nest.js",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "Tailwind",
    "Zustand",
    "Redux Toolkit",
    "Zod",
    "Framer Motion",
  ],
};

/* ── 06 · Writing ─────────────────────────────────────────────────────── */

export const writing = {
  index: "06",
  kicker: "Writing",
  title: "I explain things for a living too",
  paragraphs: [
    "Two years of teaching left me with a habit I can't shake: if I can't write the explanation down plainly, I don't understand it yet. So I write it down.",
    "Mostly on Medium — React and Next.js, React Native and Expo, and the specific things that go wrong between a frontend and the API it's talking to. Written for the developer who is stuck on it right now, not for the algorithm.",
  ],
  offer: {
    title: "Available for paid writing",
    body: "Developer documentation, technical blog posts, tutorials, curriculum. If you have a product engineers need to understand and nobody on the team has time to write it up — that's the job I want.",
    cta: { label: "Commission a piece", href: "#contact" },
  },
  topics: [
    "React & Next.js",
    "React Native & Expo",
    "TypeScript",
    "API integration",
    "Developer docs",
    "Curriculum design",
  ],
};

/* ── 07 · Testimonials ────────────────────────────────────────────────── */

export const testimonials = {
  index: "07",
  kicker: "Kind words",
  title: "People who've had to work with me",
  items: [
    {
      quote:
        "Collaborating with Okpara on multiple projects has been an incredible experience. His technical expertise and problem-solving consistently elevate our work. What stands out most is how quickly he integrates into a team and starts contributing meaningfully — the quality of his code and his attention to detail make him an invaluable asset.",
      name: "Ezinne Edmund",
      role: "Software Engineer",
      org: "Genesys Tech Hub",
      photo: "/image/zinny.jpeg",
    },
    {
      quote:
        "Okpara's teaching transformed our students' learning experience. His ability to break complex frontend concepts into understandable lessons helped them grasp difficult topics with ease. The practical, real-world approach he brings has significantly improved our students' skills and confidence, and our programme's success rate has risen sharply since he started teaching with us.",
      name: "Abua Lawrence Abua",
      role: "Chief Executive Officer",
      org: "LanceySoft Technologies",
      photo: "/image/lawrence.jpeg",
    },
  ],
};

/* ── 08 · Contact ─────────────────────────────────────────────────────── */

export const contact = {
  index: "08",
  kicker: "Contact",
  title: "Come tell me what you're building",
  lead: "Frontend and fullstack roles, freelance builds, or a technical writing brief. I read everything and I answer.",
  availability: [
    { label: "Full-time", detail: "At Netsprin — open to the right move." },
    { label: "Freelance", detail: "Taking select frontend engagements." },
    { label: "Writing", detail: "Docs, tutorials and curriculum, for pay." },
  ],
};

export const footer = {
  line: "Still the same habit — take it apart, see what each piece was doing there.",
};
