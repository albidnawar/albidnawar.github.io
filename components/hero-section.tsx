import { Mail, FolderOpen } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section id="home" className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 min-w-0">
          <h1 className="text-[28px] leading-[36px] sm:text-[44px] sm:leading-[52px] md:text-[32px] md:leading-[40px] lg:text-[44px] lg:leading-[54px] xl:text-[58px] xl:leading-[70px] 2xl:text-[72px] 2xl:leading-[85px] font-bold">
            I'm <span className="bg-[#FF6B7A] text-white px-3 py-1 inline-block">Albid Nawar</span>,{" "}
            <span className="whitespace-nowrap">a Product Manager</span>{" "}
            <span className="bg-[#2F81F7] text-white px-3 py-1 inline-block whitespace-nowrap text-[18px] leading-[26px] sm:text-[40px] sm:leading-[50px] md:text-[21px] md:leading-[30px] lg:text-[30px] lg:leading-[40px] xl:text-[40px] xl:leading-[50px] 2xl:text-[49px] 2xl:leading-[60px]">
              Turning Ideas into Impact.
            </span>
          </h1>

          <p className="text-[#393939] text-[16px] md:text-[18px] font-medium leading-[28px] md:leading-[30px] max-w-xl">
I turn ideas into meaningful products through strategy, design, technology, and a deep understanding of what people truly need.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-7 pt-4">
            <Button
              asChild
              className="bg-[#0B0B0B] text-white hover:bg-black/90 rounded-lg py-5 px-8 md:py-[22px] md:px-[62px] text-base md:text-lg font-semibold h-auto w-full sm:w-auto sm:min-w-[240px]"
            >
              <a href="/contact">
                <Mail className="w-5 h-5" />
                Get in touch
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="bg-white border-[3px] border-black hover:bg-gray-50 rounded-lg py-5 px-8 md:py-[22px] md:px-[62px] text-base md:text-lg font-semibold h-auto w-full sm:w-auto sm:min-w-[240px]"
            >
              <a href="#portfolio">
                <FolderOpen className="w-5 h-5" />
                View portfolio
              </a>
            </Button>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative w-full max-w-md aspect-square bg-[#FDB927] border-4 border-black rounded-3xl overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <img
              src="/images/design-mode/63407fbdc2d4ac5270385fd4_home-he.png"
              alt="Illustrated character avatar"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
