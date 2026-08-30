import { useIsMobile } from "@/hooks/use-mobile"
import { cn } from "@/lib/utils"
import { type ReactNode } from "react"
import { Heading } from "./heading"
import { Image } from "./image"

type BlogProps = {
  sectionId: string
  title: string
  children: ReactNode
  images?: string[]
  reversed?: boolean
}

export function Blog({
  sectionId,
  title,
  children,
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
        <Heading level={1} className="text-3xl font-semibold sm:hidden">
          {title}
        </Heading>
        <Image images={images ?? []} />
        <div className="flex flex-col">
          <Heading level={1} className="hidden text-3xl font-semibold sm:block">
            {title}
          </Heading>
          <div className="pt-2">{children}</div>
        </div>
      </div>
    </section>
  )
}
