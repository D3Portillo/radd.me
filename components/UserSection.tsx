import type { PropsWithChildrenCx } from "@/types/shared"

function UserSection({
  title,
  className,
  children,
}: PropsWithChildrenCx<{ title: string }>) {
  return (
    <section className={`max-w-xl mx-auto ${className}`}>
      <div className="border-b mb-4 pb-2 border-zinc-800">
        <h3 className="text-sm text-zinc-600">{title}</h3>
      </div>
      {children}
    </section>
  )
}

export default UserSection
