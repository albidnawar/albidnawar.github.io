export function LogoMarquee() {
  const items = [
    { logo: "/images/Icons/white/figma.png", alt: "Figma" },
    { logo: "/images/Icons/white/React.png", alt: "React" },
    { logo: "/images/Icons/white/python.png", alt: "Python" },
    { logo: "/images/Icons/white/SQL.png", alt: "SQL" },
    { logo: "/images/Icons/white/api.png", alt: "REST APIs" },
    { logo: "/images/Icons/white/js.png", alt: "JavaScript", rounded: true },
    { logo: "/images/Icons/white/typescript.png", alt: "TypeScript", rounded: true },
    { logo: "/images/Icons/white/excel.png", alt: "Excel" },
  ]

  return (
    <div className="overflow-hidden">
      <div className="relative overflow-hidden bg-black py-16 -rotate-[5deg] mt-32 mb-16 min-w-[120vw] -mx-[10vw] left-0">
        <div className="flex items-center gap-16 animate-marquee whitespace-nowrap">
          {[...items, ...items, ...items, ...items].map((item, index) => (
            <div key={index} className="flex items-center gap-5 shrink-0">
              <img
                src={item.logo || "/placeholder.svg"}
                alt={item.alt}
                className={`h-16 w-16 object-contain ${item.rounded ? "rounded-xl" : ""}`}
              />
              <span className="text-white font-semibold text-2xl">{item.alt}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
