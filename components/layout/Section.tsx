import type { PropsWithChildrenCx } from "@/types/shared"

function Section({ children, className }: PropsWithChildrenCx) {
  return (
    <main className={`px-8 max-w-screen-lg mx-auto ${className}`}>
      {children}
    </main>
  )
}

export default Section
