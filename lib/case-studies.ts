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
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "studio-user-research-and-analysis",
    title: "Studio user research and analysis",
    tag: "UI/UX Design",
    description:
      "In ultricies viverra sed at hendrerit drogon nunc scelerisque nisl pellentesque et dignissim at aenean tempor adipiscing eget mi diam at tempus.",
    logo: "/images/studio-logo.svg",
    bgColor: "bg-[#6366F1]",
    illustration: "/images/studio-workspace.svg",
    overview:
      "In ultricies viverra sed at hendrerit drogon nunc scelerisque nisl pellentesque et dignissim at aenean tempor adipiscing eget mi diam at tempus, working closely with the studio team to understand how people actually use the product day to day.",
    challenge:
      "Nunc scelerisque nisl pellentesque et dignissim at aenean tempor, the studio had years of anecdotal feedback but no structured way to validate what to build next or why users were dropping off mid-workflow.",
    solution:
      "Ran a mix of moderated interviews, contextual inquiries, and usage-data analysis, then translated the findings into a prioritized set of journey maps and wireframes the product team could act on immediately.",
    highlights: [
      {
        title: "User interviews & surveys",
        description: "Structured research sessions to surface real pain points instead of assumptions.",
        color: "bg-[#6366F1]",
      },
      {
        title: "Journey mapping",
        description: "Translated raw findings into clear, prioritized opportunities for the product team.",
        color: "bg-[#FF6B7A]",
      },
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
