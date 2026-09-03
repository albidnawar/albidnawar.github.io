"use client"

import { useState, type FormEvent } from "react"
import { Facebook, Twitter, Instagram, Github, Linkedin, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mjyvrlvp"

export function Footer() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle")

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus("sending")
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: (() => {
          const formData = new FormData()
          formData.append("email", email)
          formData.append("_subject", "New message from portfolio site")
          return formData
        })(),
      })
      if (res.ok) {
        setStatus("sent")
        setEmail("")
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  return (
    <footer className="bg-black text-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 md:mb-16 relative">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
              <div className="w-24 h-24 md:w-36 md:h-36 rounded-full flex items-center justify-center flex-shrink-0 relative">
                <Image
                  src="/images/newsletter-icon.png"
                  alt="Contact"
                  width={180}
                  height={180}
                  className="object-cover"
                />
              </div>

              <form
                onSubmit={handleSubmit}
                className="w-full flex-1 bg-white border-4 border-black rounded-3xl py-4 px-4 md:py-6 md:px-8 flex flex-col md:flex-row items-center gap-4 md:gap-6"
              >
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-xl md:text-2xl font-bold text-black">Send me a message</h3>
                  {status === "sent" && (
                    <p className="text-sm text-green-600 font-semibold mt-1">Thanks! I'll get back to you soon.</p>
                  )}
                  {status === "error" && (
                    <p className="text-sm text-red-600 font-semibold mt-1">
                      Something went wrong. Please try again.
                    </p>
                  )}
                </div>

                <div className="relative w-full md:w-auto md:min-w-[400px] lg:min-w-[480px]">
                  <Input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="border-4 border-black rounded-xl px-4 md:px-6 h-14 md:h-16 pr-32 md:pr-44 text-base md:text-lg text-gray-800 placeholder:text-gray-500"
                  />
                  <Button
                    type="submit"
                    disabled={status === "sending"}
                    className="absolute right-2 top-2 bottom-2 bg-black text-white hover:bg-black/90 rounded-[10px] px-6 md:px-10 text-sm md:text-base font-semibold whitespace-nowrap h-auto disabled:opacity-60"
                  >
                    {status === "sending" ? "Sending..." : "Send"}
                  </Button>
                </div>
              </form>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-lg md:text-xl font-bold">Albid Nawar</span>
              </div>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                AI Product Manager turning ideas into impact through product strategy, data, and design.
              </p>
              <div className="flex gap-3">
                <a
                  href="https://www.facebook.com/nawar.albid"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#2F81F7] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://x.com/NawarAlbid"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#2F81F7] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/albid.n"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#FF6B7A] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/albidnawar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#FF6B7A] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/albidnawar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#FF6B7A] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-4">Pages</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="/#home" className="hover:text-white transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/#about" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="/#experience" className="hover:text-white transition-colors">
                    Experience
                  </a>
                </li>
                <li>
                  <a href="/#portfolio" className="hover:text-white transition-colors">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Contact us</h3>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:albid.nawar@thedataisland.com" className="hover:text-white transition-colors">
                    albid.nawar@thedataisland.com
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <a href="tel:+8801873090851" className="hover:text-white transition-colors">
                    +880-1873-090851
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Albid Nawar. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
