"use client"

import { useState } from "react"
import { usePathname } from "next/navigation"
import { Mail, Menu, X } from "lucide-react"
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
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="container mx-auto px-4 pt-8 pb-4">
      <nav className="bg-white border-4 border-black rounded-xl px-4 py-3 sm:px-5 max-w-2xl mx-auto shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
        <div className="flex items-center justify-between">
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

          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className="md:hidden flex items-center justify-center w-11 h-11 border-[3px] border-black rounded-sm hover:bg-gray-50 transition-colors flex-shrink-0"
            >
              {menuOpen ? <X className="w-5 h-5" strokeWidth={2.5} /> : <Menu className="w-5 h-5" strokeWidth={2.5} />}
            </button>

            <Button
              asChild
              className="bg-black text-white hover:bg-black/90 rounded-sm px-4 sm:px-5 h-11 md:h-12 min-w-[44px] flex-shrink-0"
            >
              <a href="/contact">
                <Mail className="w-8 h-8 md:w-10 md:h-10" strokeWidth={2.5} />
              </a>
            </Button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden mt-3 pt-3 border-t-[3px] border-black flex flex-col">
            {navLinks.map((link) => (
              <a
                key={link.anchor}
                href={isHome ? `#${link.anchor}` : `/#${link.anchor}`}
                onClick={() => setMenuOpen(false)}
                className="text-[18px] font-bold py-2.5 px-1 hover:opacity-70 transition-opacity"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="text-[18px] font-bold py-2.5 px-1 hover:opacity-70 transition-opacity"
            >
              Contact
            </a>
          </div>
        )}
      </nav>
    </div>
  )
}
