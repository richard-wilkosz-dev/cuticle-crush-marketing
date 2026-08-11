import type { ReactNode } from "react"

type BlogProps = {
  sectionId: string
  title: string
  content: ReactNode
}

export function Blog({ sectionId, title, content }: BlogProps) {
  return (
    <article className="m-auto w-full max-w-2xl scroll-mt-24" id={sectionId}>
      <h1 className="text-3xl font-semibold">{title}</h1>
      <section>{content}</section>
    </article>
  )
}
