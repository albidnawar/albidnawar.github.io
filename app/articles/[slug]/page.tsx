import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { articles, getArticle } from "@/lib/articles"

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const article = getArticle(slug)
  return {
    title: article ? `${article.title} - Albid Nawar` : "Article - Albid Nawar",
    description: article?.excerpt,
  }
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const article = getArticle(slug)

  if (!article) {
    notFound()
  }

  const currentIndex = articles.findIndex((item) => item.slug === article.slug)
  const nextArticle = articles[(currentIndex + 1) % articles.length]

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      <section className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-5xl mx-auto">
          <a
            href="/#articles"
            className="flex items-center gap-2 font-semibold text-[#0B0B0B] hover:gap-3 transition-all mb-8 text-sm md:text-base w-fit"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to articles
          </a>

          <span className="inline-block bg-black text-white text-xs font-semibold px-4 py-1.5 rounded-full w-fit mb-6">
            {article.category}
          </span>

          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6 text-[#0B0B0B]">{article.title}</h1>

          <p className="text-base md:text-lg text-[#393939] leading-relaxed max-w-2xl mb-8 font-medium">
            {article.excerpt}
          </p>

          <div className="flex items-center gap-3 md:gap-4 mb-10">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-[#FDB927] border-2 border-black rounded-full overflow-hidden flex-shrink-0">
              <Image
                src={article.authorImage || "/placeholder.svg"}
                alt={article.author}
                width={64}
                height={64}
                className="object-cover"
              />
            </div>
            <div>
              <div className="font-bold text-base md:text-lg text-[#0B0B0B]">{article.author}</div>
              <div className="text-sm md:text-base text-gray-600">{article.date}</div>
            </div>
          </div>

          <div className="bg-[#EDEDED] relative overflow-hidden min-h-[280px] md:min-h-[480px] border-[3px] border-black rounded-[32px] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-5xl mx-auto bg-white border-[3px] border-black rounded-[32px] p-8 md:p-12">
          <div className="max-w-3xl space-y-6">
            {article.content.map((paragraph, index) => (
              <p key={index} className="text-[#393939] leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-8 md:py-16">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-6 bg-[#FFC224] border-[3px] border-black rounded-[32px] p-8 md:p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-2 text-[#0B0B0B]">Next up</h2>
            <p className="text-[#393939] font-medium">{nextArticle.title}</p>
          </div>
          <Button
            asChild
            className="bg-black text-white hover:bg-black/90 rounded-[16px] px-8 h-14 font-medium w-full sm:w-auto"
          >
            <a href={`/articles/${nextArticle.slug}`}>
              Next article
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
