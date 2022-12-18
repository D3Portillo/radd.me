import type { PropsWithChildrenCx } from "@/types/shared"

function Section({
  children,
  className,
  isPaddingLess,
}: PropsWithChildrenCx<{
  /** When true, `p-8` tw class is removed */
  isPaddingLess?: boolean
}>) {
  return (
    <main
      className={`${
        isPaddingLess || "p-8"
      } max-w-screen-lg mx-auto ${className}`}
    >
      {children}
    </main>
  )
}

export default Section
