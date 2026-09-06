import type { ReactNode } from "react"

function renderInline(text: string, keyPrefix: string): ReactNode {
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g).filter((part) => part !== "")

  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={`${keyPrefix}-${i}`} className="font-semibold text-[#0B0B0B]">
          {part.slice(2, -2)}
        </strong>
      )
    }
    if (part.startsWith("*") && part.endsWith("*")) {
      return <em key={`${keyPrefix}-${i}`}>{part.slice(1, -1)}</em>
    }
    return part
  })
}

function parseTable(lines: string[]) {
  const rows = lines
    .map((line) => line.trim())
    .filter((line) => line.startsWith("|"))
    .filter((line) => !/^\|?\s*:?-{2,}:?\s*(\|\s*:?-{2,}:?\s*)*\|?$/.test(line))
    .map((line) =>
      line
        .replace(/^\|/, "")
        .replace(/\|$/, "")
        .split("|")
        .map((cell) => cell.trim()),
    )

  const [header, ...body] = rows
  return { header, body }
}

export function ArticleContent({ blocks }: { blocks: string[] }) {
  return (
    <div className="max-w-3xl space-y-6">
      {blocks.map((block, index) => {
        const lines = block.split("\n")
        const first = lines[0]

        if (block.trim() === "---") {
          return <hr key={index} className="border-t-2 border-black/10" />
        }

        if (first.startsWith("### ")) {
          return (
            <h3 key={index} className="text-lg md:text-xl font-bold text-[#0B0B0B] pt-2">
              {renderInline(first.slice(4), `${index}`)}
            </h3>
          )
        }

        if (first.startsWith("## ")) {
          return (
            <h2 key={index} className="text-xl md:text-2xl font-bold text-[#0B0B0B] pt-4">
              {renderInline(first.slice(3), `${index}`)}
            </h2>
          )
        }

        if (first.trim().startsWith("|")) {
          const { header, body } = parseTable(lines)
          return (
            <div key={index} className="overflow-x-auto -mx-2 px-2">
              <table className="w-full min-w-[480px] border-collapse">
                <thead>
                  <tr className="bg-black text-white">
                    {header.map((cell, i) => (
                      <th
                        key={i}
                        className={`text-left text-sm md:text-base font-semibold px-4 py-3 ${
                          i === 0 ? "rounded-l-xl" : i === header.length - 1 ? "rounded-r-xl" : ""
                        }`}
                      >
                        {renderInline(cell, `${index}-h-${i}`)}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {body.map((row, r) => (
                    <tr key={r} className="border-b-2 border-black last:border-b-0">
                      {row.map((cell, c) => (
                        <td key={c} className="px-4 py-4 text-sm md:text-base text-[#393939] align-top">
                          {renderInline(cell, `${index}-${r}-${c}`)}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )
        }

        const isBulletList = lines.every((line) => line.trim().startsWith("- "))
        if (isBulletList) {
          return (
            <ul key={index} className="list-disc pl-5 space-y-2 text-[#393939] leading-relaxed">
              {lines.map((line, i) => (
                <li key={i}>{renderInline(line.trim().slice(2), `${index}-${i}`)}</li>
              ))}
            </ul>
          )
        }

        const isOrderedList = lines.every((line) => /^\d+\.\s/.test(line.trim()))
        if (isOrderedList) {
          return (
            <ol key={index} className="list-decimal pl-5 space-y-2 text-[#393939] leading-relaxed">
              {lines.map((line, i) => (
                <li key={i}>{renderInline(line.trim().replace(/^\d+\.\s/, ""), `${index}-${i}`)}</li>
              ))}
            </ol>
          )
        }

        return (
          <p key={index} className="text-[#393939] leading-relaxed">
            {lines.map((line, i) => (
              <span key={i}>
                {renderInline(line, `${index}-${i}`)}
                {i < lines.length - 1 && <br />}
              </span>
            ))}
          </p>
        )
      })}
    </div>
  )
}
