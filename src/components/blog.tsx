import { useIsMobile } from "@/hooks/use-mobile"
import { cn } from "@/lib/utils"
import { type ReactNode } from "react"
import { Image } from "./image"

type BlogProps = {
  sectionId: string
  title: string
  content: ReactNode
  images?: string[]
  reversed?: boolean
}

export function Blog({
  sectionId,
  title,
  content,
  images,
  reversed,
}: BlogProps) {
  const isMobile = useIsMobile()

  return (
    <section className="scroll-mt-24" id={sectionId}>
      <div
        className={cn(
          "flex flex-col gap-2 sm:gap-8",
          isMobile
            ? "flex-col"
            : reversed
              ? "sm:flex-row-reverse"
              : "sm:flex-row"
        )}
      >
        <h2 className="text-3xl font-semibold sm:hidden">{title}</h2>
        <Image images={images ?? []} />
        <div className="flex flex-col">
          <h2 className="hidden text-3xl font-semibold sm:block">{title}</h2>
          <div className="pt-4 sm:pt-2">{content}</div>
        </div>
      </div>
    </section>
  )
}
