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
    slug: "venture-workspace-web-app-redesign",
    title: "Venture Workspace web app redesign",
    tag: "UI/UX Design",
    description:
      "In ultricies viverra sed at hendrerit drogon nunc scelerisque nisl pellentesque et dignissim at aenean tempor adipiscing eget mi diam at tempus.",
    logo: "/images/venture-logo.svg",
    bgColor: "bg-[#2F81F7]",
    illustration: "/images/venture-workspace.svg",
    overview:
      "In ultricies viverra sed at hendrerit drogon nunc scelerisque nisl pellentesque et dignissim at aenean tempor adipiscing eget mi diam at tempus, modernizing a dated workspace app used daily by internal teams.",
    challenge:
      "Nunc scelerisque nisl pellentesque et dignissim at aenean tempor, the existing interface had grown inconsistent over time, slowing teams down and making onboarding new users harder than it needed to be.",
    solution:
      "Rebuilt the core workspace flows around a single component system, simplifying navigation and cutting the number of steps needed to complete the most common tasks.",
    highlights: [
      {
        title: "Component system",
        description: "A consistent set of reusable patterns that scaled across every screen in the app.",
        color: "bg-[#2F81F7]",
      },
      {
        title: "Simplified workflows",
        description: "Reduced the steps required for the most common daily tasks.",
        color: "bg-[#FFC224]",
      },
    ],
  },
]

export function getCaseStudy(slug: string) {
  return caseStudies.find((project) => project.slug === slug)
}
