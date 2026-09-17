export type CaseStudy = {
  slug: string
  title: string
  tag: string
  description: string
  logo: string
  bgColor: string
  illustration: string
  overview: string
  challenge: string
  solution: string
  highlights: { title: string; description: string; color: string }[]
  impact?: { area: string; before: string; after: string }[]
  gallery?: { src: string; alt: string; caption: string }[]
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "ulens",
    title: "U-lens: AI-Powered Retail Execution Platform",
    tag: "AI Product Management",
    description:
      "An enterprise-grade retail intelligence platform for FMCG shelf auditing, turning a single smartphone photo into real-time, verified shelf and POSM compliance across hundreds of thousands of retail touchpoints.",
    logo: "/images/ulens-logo.png",
    bgColor: "bg-[#6366F1]",
    illustration: "/images/ulens-mockup.png",
    overview:
      "For enterprise FMCG manufacturers operating in dense, fragmented retail environments, shelf visibility and trade marketing compliance are critical revenue drivers. U-lens was engineered as an enterprise-grade retail intelligence platform that eliminates audit lag and revenue leakage by combining on-device and cloud computer vision with automated field force management, converting simple smartphone photos into real-time, verified shelf intelligence.",
    challenge:
      "Traditional retail auditing relied on manual field reports: auditors recorded shelf presence, Share of Shelf, and POSM by hand on paper or static forms, leading to high error rates and subjective reporting. HQ teams faced one to two weeks of latency before consolidated performance analytics were available, preventing real-time corrective action. High investments in branded displays and shelf talkers were difficult to verify at scale, and calculating performance-based incentives for large field teams manually created administrative overhead and frequent disputes over execution accuracy.",
    solution:
      "U-lens connects field agents, supervisors, and central brand management through three unified layers: a merchandiser mobile app with a sub-second AI shelf scan and dynamic Permanent Journey Plan routing, a supervisor app with GPS-verified check-ins and an AI challenge mechanism that feeds continuous model retraining, and a central executive portal with live territorial coverage analytics and fully automated incentive payroll. Computer vision models detect and segment hundreds of SKUs per photo to calculate Share of Shelf in real time, verify POSM placement and condition, and flag competitor encroachment into contracted display zones, with offline-first capture for low-connectivity rural areas.",
    highlights: [
      {
        title: "Sub-second shelf audits",
        description: "Cut audit time from 10–15 minutes of manual logging per store to under 1 second per AI shelf scan.",
        color: "bg-[#6366F1]",
      },
      {
        title: "98%+ data accuracy",
        description: "Replaced subjective paper and form entries with computer-vision-verified shelf and POSM data.",
        color: "bg-[#FF6B7A]",
      },
      {
        title: "Real-time visibility",
        description: "Cut HQ reporting latency from 1–2 weeks to real-time dashboard streaming.",
        color: "bg-[#2F81F7]",
      },
      {
        title: "100% automated payroll",
        description: "Performance incentives now calculate automatically from verified execution data, removing manual disputes.",
        color: "bg-[#FFC224]",
      },
    ],
    impact: [
      { area: "Audit speed", before: "10–15 minutes per store (manual logging)", after: "Under 1 second per shelf scan" },
      { area: "Data integrity", before: "Subjective, unverified paper/form entries", after: "98%+ accuracy via computer vision" },
      { area: "Visibility latency", before: "1–2 weeks for consolidated HQ reports", after: "Real-time dashboard streaming" },
      { area: "Incentive calculation", before: "Manual processing prone to disputes", after: "100% automated based on verified photo data" },
    ],
  },
  {
    slug: "aingpt",
    title: "AinGPT: AI-powered legal help marketplace",
    tag: "Product Design & Full-Stack Development",
    description:
      "A legal-help marketplace for Bangladesh: a free AI intake chat for the public, a token-gated case pipeline for lawyers, and one Supabase backend holding both sides together.",
    logo: "/aingpt/aingpt-logo.png",
    bgColor: "bg-[#1E7A5A]",
    illustration: "/aingpt/images/my-cases.jpg",
    overview:
      "Most people who need a lawyer in Bangladesh don't know where to start, and most lawyers don't have a reliable channel for qualified leads. AinGPT sits between them: a free AI chat triages a visitor's question, then routes them toward filing a formal case or browsing a directory of practicing lawyers, while lawyers work a case marketplace on the other side of the same database.",
    challenge:
      "The product had to support two structurally different users, the public and licensed lawyers, from one codebase, with separate sign-up flows, separate dashboards, and a shared case object that both sides can see, act on, and chat about once a match is made.",
    solution:
      "The landing page leads with a guest chat box rather than a pricing page or sign-up wall, so anyone can ask a legal question before creating an account. Signing up asks a visitor to declare a side up front, Normal User or Lawyer, each with its own dashboard. A filed case becomes something a lawyer can find in their Find Cases feed; accepting one costs tokens and unlocks a scoped chat thread between that lawyer and that client, with attachments moving through per-case storage. A separate admin surface rolls the whole marketplace up into the totals an operator would actually watch week to week.",
    highlights: [
      {
        title: "Free AI triage chat",
        description: "No account required to ask a legal question, framed as informational guidance that funnels toward filing a case or browsing lawyers.",
        color: "bg-[#1E7A5A]",
      },
      {
        title: "Two-sided marketplace, one schema",
        description: "Users and lawyers get separate dashboards, but share the same case object end to end.",
        color: "bg-[#9C7A2E]",
      },
      {
        title: "Token-based marketplace economy",
        description: "Filing a case, proposing to a lawyer, and accepting a case each cost tokens and write to a ledger, keeping both sides deliberate.",
        color: "bg-[#2F81F7]",
      },
      {
        title: "Operator-facing analytics",
        description: "An admin dashboard tracks users, active lawyers, chat volume and content library size with live trend charts.",
        color: "bg-[#FFC224]",
      },
    ],
    impact: [
      { area: "Access to legal guidance", before: "Word-of-mouth referrals, no upfront guidance", after: "Free AI triage chat available instantly, no signup" },
      { area: "Lawyer lead generation", before: "Informal referral networks", after: "Structured case marketplace with token-gated proposals" },
      { area: "Case handoff", before: "Phone calls and paperwork outside any system", after: "Scoped in-app chat thread created automatically on acceptance" },
      { area: "Platform oversight", before: "No centralized view of usage", after: "Admin dashboard tracking growth, chat volume and content mix" },
    ],
    gallery: [
      {
        src: "/aingpt/images/landing.jpg",
        alt: "AinGPT landing page with guest AI chat box, feature grid, and Free/Bronze/Gold pricing tiers",
        caption: "Guest chat input above the fold, with Free / Bronze / Gold pricing tiers below.",
      },
      {
        src: "/aingpt/images/auth.jpg",
        alt: "Login and signup modal with a toggle between Normal User and Lawyer roles",
        caption: "One modal, two roles: the Lawyer path collects a Bar ID, practice areas and consultation fee before it reaches Supabase Auth.",
      },
      {
        src: "/aingpt/images/chat.jpg",
        alt: "AI legal chat interface with a user question about small claims filing and an AI response",
        caption: "Free-tier chat stays general and ends with an offer to search the lawyer directory, a funnel rather than a substitute for counsel.",
      },
      {
        src: "/aingpt/images/lawyer-directory.jpg",
        alt: "Lawyer directory listing showing a lawyer card with practice areas, experience, and a propose button",
        caption: "Card view: availability badge, practice-area tags, years of experience and a token-priced Propose action.",
      },
      {
        src: "/aingpt/images/lawyer-profile.jpg",
        alt: "Full lawyer profile page with experience, consultation fee, average rating, chamber and education sections",
        caption: "Full profile: experience, fee, rating, chamber and practice, and education sourced straight from Supabase.",
      },
      {
        src: "/aingpt/images/find-cases.jpg",
        alt: "Lawyer's Find Cases page listing a public property dispute case with an Accept button costing 5 tokens",
        caption: "The exact case filed on the user side, now visible to lawyers with an Accept (5 tokens) action.",
      },
      {
        src: "/aingpt/images/admin.jpg",
        alt: "Admin dashboard with total users, active lawyers, chat sessions and content items, plus growth trend and content distribution charts",
        caption: "Platform totals, a growth-trend line chart and a content-mix breakdown, built with Recharts.",
      },
    ],
  },
]

export function getCaseStudy(slug: string) {
  return caseStudies.find((project) => project.slug === slug)
}
