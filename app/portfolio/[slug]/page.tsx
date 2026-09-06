import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { caseStudies, getCaseStudy } from "@/lib/case-studies"

export function generateStaticParams() {
  return caseStudies.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = getCaseStudy(slug)
  return {
    title: project ? `${project.title} - Albid Nawar` : "Case study - Albid Nawar",
    description: project?.description,
  }
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = getCaseStudy(slug)

  if (!project) {
    notFound()
  }

  const currentIndex = caseStudies.findIndex((item) => item.slug === project.slug)
  const nextProject = caseStudies[(currentIndex + 1) % caseStudies.length]

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      <section className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-5xl mx-auto">
          <a
            href="/#portfolio"
            className="inline-flex items-center gap-2 font-semibold text-[#0B0B0B] hover:gap-3 transition-all mb-8 text-sm md:text-base"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to portfolio
          </a>

          <div className="flex items-center gap-3 mb-6">
            <Image
              src={project.logo || "/placeholder.svg"}
              alt={`${project.title} logo`}
              width={120}
              height={32}
              className="h-7 md:h-8 w-auto"
            />
            <span className="inline-block bg-black text-white text-xs font-semibold px-4 py-1.5 rounded-full w-fit">
              {project.tag}
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6 text-[#0B0B0B]">{project.title}</h1>

          <p className="text-base md:text-lg text-[#393939] leading-relaxed max-w-2xl mb-10 font-medium">
            {project.description}
          </p>

          <div
            className={`${project.bgColor} relative overflow-hidden min-h-[280px] md:min-h-[480px] border-[3px] border-black rounded-[32px] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]`}
          >
            <Image src={project.illustration || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          <div className="bg-white border-[3px] border-black rounded-[32px] p-8 md:p-10">
            <h2 className="text-xl md:text-2xl font-bold mb-4 text-[#0B0B0B]">Overview</h2>
            <p className="text-[#393939] leading-relaxed">{project.overview}</p>
          </div>
          <div className="bg-white border-[3px] border-black rounded-[32px] p-8 md:p-10">
            <h2 className="text-xl md:text-2xl font-bold mb-4 text-[#0B0B0B]">The challenge</h2>
            <p className="text-[#393939] leading-relaxed">{project.challenge}</p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-5xl mx-auto bg-white border-[3px] border-black rounded-[32px] p-8 md:p-12">
          <h2 className="text-xl md:text-2xl font-bold mb-4 text-[#0B0B0B]">The approach</h2>
          <p className="text-[#393939] leading-relaxed mb-8 max-w-3xl">{project.solution}</p>

          <div className="grid sm:grid-cols-2 gap-6">
            {project.highlights.map((highlight) => (
              <div key={highlight.title} className="flex gap-4 items-start">
                <div className={`w-5 h-5 ${highlight.color} border-2 border-black rounded-[5px] flex-shrink-0 mt-1`} />
                <div>
                  <h3 className="text-lg font-bold mb-2 text-[#0B0B0B]">{highlight.title}</h3>
                  <p className="text-[#393939] text-sm md:text-base">{highlight.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {project.impact && (
        <section className="container mx-auto px-4 py-8 md:py-12">
          <div className="max-w-5xl mx-auto bg-white border-[3px] border-black rounded-[32px] p-8 md:p-12">
            <h2 className="text-xl md:text-2xl font-bold mb-6 text-[#0B0B0B]">Business impact</h2>
            <div className="overflow-x-auto -mx-2 px-2">
              <table className="w-full min-w-[560px] border-collapse">
                <thead>
                  <tr className="bg-black text-white">
                    <th className="text-left text-sm md:text-base font-semibold px-4 py-3 rounded-l-xl">Operational area</th>
                    <th className="text-left text-sm md:text-base font-semibold px-4 py-3">Legacy workflow</th>
                    <th className="text-left text-sm md:text-base font-semibold px-4 py-3 rounded-r-xl">With U-lens</th>
                  </tr>
                </thead>
                <tbody>
                  {project.impact.map((row) => (
                    <tr key={row.area} className="border-b-2 border-black last:border-b-0">
                      <td className="px-4 py-4 font-bold text-sm md:text-base text-[#0B0B0B] align-top">{row.area}</td>
                      <td className="px-4 py-4 text-sm md:text-base text-[#393939] align-top">{row.before}</td>
                      <td className="px-4 py-4 text-sm md:text-base font-semibold text-[#0B0B0B] align-top">{row.after}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      <section className="container mx-auto px-4 py-8 md:py-16">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-6 bg-[#FFC224] border-[3px] border-black rounded-[32px] p-8 md:p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-2 text-[#0B0B0B]">Next up</h2>
            <p className="text-[#393939] font-medium">{nextProject.title}</p>
          </div>
          <Button
            asChild
            className="bg-black text-white hover:bg-black/90 rounded-[16px] px-8 h-14 font-medium w-full sm:w-auto"
          >
            <a href={`/portfolio/${nextProject.slug}`}>
              Next case study
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
