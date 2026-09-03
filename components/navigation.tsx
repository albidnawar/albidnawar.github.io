"use client"

import { usePathname } from "next/navigation"
import { Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { label: "Home", anchor: "home" },
  { label: "About", anchor: "about" },
  { label: "Experience", anchor: "experience" },
  { label: "Portfolio", anchor: "portfolio" },
]

export function Navigation() {
  const pathname = usePathname()
  const isHome = pathname === "/"

  return (
    <div className="container mx-auto px-4 pt-8 pb-4">
      <nav className="flex items-center justify-between bg-white border-4 border-black rounded-xl px-5 py-3 max-w-2xl mx-auto shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
        <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center flex-shrink-0">
          <div className="w-6 h-6 bg-white rounded-full"></div>
        </div>

        <div className="hidden md:flex items-center gap-6 flex-1 justify-center">
          {navLinks.map((link) => (
            <a
              key={link.anchor}
              href={isHome ? `#${link.anchor}` : `/#${link.anchor}`}
              className="text-[18px] font-bold leading-[20px] hover:opacity-70 transition-opacity"
            >
              {link.label}
            </a>
          ))}
          <a href="/contact" className="text-[18px] font-bold leading-[20px] hover:opacity-70 transition-opacity">
            Contact
          </a>
        </div>

        <Button asChild className="bg-black text-white hover:bg-black/90 rounded-sm px-5 h-12 min-w-[48px] flex-shrink-0">
          <a href="/contact">
            <Mail className="w-10 h-10" strokeWidth={2.5} />
          </a>
        </Button>
      </nav>
    </div>
  )
}
