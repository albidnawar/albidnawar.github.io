import { Mail, Github, Linkedin, Facebook, Instagram, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const socialLinks = [
  {
    label: "Email",
    value: "albidnawar@gmail.com",
    href: "mailto:albidnawar@gmail.com",
    icon: Mail,
    color: "bg-[#FF6B7A]",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/albidnawar",
    href: "https://www.linkedin.com/in/albidnawar/",
    icon: Linkedin,
    color: "bg-[#2F81F7]",
  },
  {
    label: "GitHub",
    value: "github.com/albidnawar",
    href: "https://github.com/albidnawar",
    icon: Github,
    color: "bg-[#0B0B0B]",
  },
  {
    label: "Facebook",
    value: "facebook.com/nawar.albid",
    href: "https://www.facebook.com/nawar.albid",
    icon: Facebook,
    color: "bg-[#6366F1]",
  },
  {
    label: "Instagram",
    value: "@albid.n",
    href: "https://www.instagram.com/albid.n",
    icon: Instagram,
    color: "bg-[#FFC224]",
  },
  {
    label: "X (Twitter)",
    value: "@NawarAlbid",
    href: "https://x.com/NawarAlbid",
    icon: Twitter,
    color: "bg-[#2F81F7]",
  },
]

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#FFFFFF]">
      <Navigation />

      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-[42px] leading-[50px] md:text-[72px] font-bold md:leading-[85px] mb-6">
              Let's <span className="bg-[#FF6B7A] text-white px-3 py-1 inline-block">get in touch</span>
            </h1>
            <p className="text-[#393939] text-[16px] md:text-[18px] font-medium leading-[28px] md:leading-[30px] max-w-xl mx-auto">
              Have a project in mind or just want to say hello? Reach out through email or find me on any of the
              platforms below.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 mb-16">
            {socialLinks.map((link) => {
              const Icon = link.icon
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-4 bg-white border-[3px] border-black rounded-[24px] p-6 hover:translate-y-[-4px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300"
                >
                  <div
                    className={`w-14 h-14 ${link.color} border-2 border-black rounded-full flex items-center justify-center flex-shrink-0 text-white`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-lg font-bold text-[#0B0B0B]">{link.label}</h3>
                    <p className="text-[#393939] text-sm truncate">{link.value}</p>
                  </div>
                </a>
              )
            })}
          </div>

          <div className="bg-[#FFC224] border-[3px] border-black rounded-[32px] p-8 md:p-12 flex flex-col items-center text-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="text-2xl md:text-[32px] font-bold mb-4 text-[#0B0B0B]">Prefer email?</h2>
            <p className="text-[18px] leading-[30px] font-medium text-[#393939] mb-8 max-w-lg">
              Drop me a message directly and I'll get back to you as soon as I can.
            </p>
            <Button
              asChild
              className="bg-black text-white hover:bg-black/90 rounded-[16px] px-12 py-6 font-medium text-[18px] w-full max-w-[340px] h-[64px]"
            >
              <a href="mailto:albidnawar@gmail.com">
                <Mail className="w-5 h-5 mr-2" />
                Email me
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
