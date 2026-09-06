export type Article = {
  slug: string
  title: string
  category: string
  excerpt: string
  image: string
  author: string
  authorImage: string
  date: string
  content: string[]
}

export const articles: Article[] = [
  {
    slug: "right-design-tool-2023",
    title: "What is the right design tool to choose in 2023?",
    category: "Resources",
    excerpt:
      "A practical look at how to pick a design tool based on your team size, workflow, and the kind of product you're building, rather than which one is trending.",
    image: "/images/article-design-tools.png",
    author: "John Carter",
    authorImage: "/images/design-mode/63407fbdc2d4ac5270385fd4_home-he.png",
    date: "Oct 28, 2022",
    content: [
      "Every year brings a fresh wave of design tools promising to be the one that finally fixes your workflow. In reality, the right choice has less to do with feature lists and more to do with how your team actually works together.",
      "Start with collaboration. If designers, product managers, and engineers all need to review and comment on the same file in real time, a browser-based tool with live multiplayer editing will save far more time than a desktop app with the deepest feature set.",
      "Next, consider handoff. A tool is only as good as how cleanly it gets specs, assets, and interaction details into the hands of engineering. Look for auto-generated redlines, exportable assets, and inspect modes that reduce back-and-forth over pixel values.",
      "Component and design-system support matters more as a product grows. Tools that treat components, variants, and tokens as first-class citizens make it far easier to keep a growing product consistent without duplicating work across every screen.",
      "Finally, weigh the learning curve against your team's timeline. The most powerful tool is worthless if it takes months to onboard a team that needed to ship in weeks. Pick the tool that gets out of the way fastest for the problem you have right now, and revisit the decision as your needs change.",
    ],
  },
  {
    slug: "font-sizes-ui-design-guide",
    title: "Font sizes in UI design: The complete guide to follow",
    category: "Articles",
    excerpt:
      "How to choose a type scale that stays readable across devices, keeps hierarchy clear, and holds up as a product grows from a handful of screens to hundreds.",
    image: "/images/article-font-sizes.png",
    author: "John Carter",
    authorImage: "/images/design-mode/63407fbdc2d4ac5270385fd4_home-he.png",
    date: "Nov 12, 2022",
    content: [
      "Type is the backbone of almost every interface, yet font-size decisions are often made screen by screen instead of as part of a system. That's how products end up with a dozen near-identical sizes that all mean something slightly different.",
      "Start with a base size for body copy, usually somewhere between 14px and 16px for most digital products, and build a scale around it using a consistent ratio. A modest ratio (around 1.2x to 1.25x) keeps steps feeling deliberate rather than jarring.",
      "Limit yourself to a small number of steps: something like caption, body, subtitle, title, and display. Every additional one-off size you introduce is one more decision every designer on the team has to make from scratch.",
      "Pair size with weight and color instead of relying on size alone to carry hierarchy. Two lines of the same size can still read as clearly different levels of importance if one is bold and dark and the other is regular and muted.",
      "Test your scale on the smallest screen you support first. It's far easier to scale a type system up for larger viewports than to discover on a phone that your \"small\" text is unreadable.",
    ],
  },
  {
    slug: "practical-exercises-ui-ux-pro",
    title: "6 practical exercises to learn become a pro UI/UX designer",
    category: "News",
    excerpt:
      "Six hands-on exercises that build real design judgment faster than tutorials alone, from redesigning an existing screen to critiquing your own past work.",
    image: "/images/article-exercises.png",
    author: "John Carter",
    authorImage: "/images/design-mode/63407fbdc2d4ac5270385fd4_home-he.png",
    date: "Dec 3, 2022",
    content: [
      "Reading about design principles only gets you so far. The designers who improve fastest are the ones who put those principles under pressure with real, hands-on exercises. Here are six worth adding to a regular practice routine.",
      "1. Redesign a screen you use daily. Pick an app you already know well and rebuild one screen from scratch. Because you understand the problem intimately, you can focus entirely on craft instead of research.",
      "2. Recreate a design from a screenshot. Rebuilding an interface pixel-for-pixel forces you to notice spacing, alignment, and type choices you'd otherwise skim past.",
      "3. Design the same screen three different ways. Constraint breeds creativity. Forcing yourself into three distinct directions for one problem stops you from settling for the first idea that comes to mind.",
      "4. Critique your own work from six months ago. Nothing shows growth like an honest, structured critique of an old project, listing what you'd change today and why.",
      "5. Design for a constraint you don't normally have, like a one-handed mobile flow, a low-bandwidth connection, or a screen reader. Designing outside your default context sharpens judgment everywhere else.",
      "6. Explain a design decision out loud to someone outside design. If you can't justify a choice in plain language, it usually means the decision wasn't as deliberate as it felt.",
    ],
  },
]

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug)
}
