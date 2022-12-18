import Link from "next/link"

function Footer() {
  return (
    <footer
      aria-label="Site Footer"
      className="p-8 mt-24 text-sm flex justify-center"
    >
      <Link className="text-zinc-600" target="_blank" href="/">
        Powered by radd.me
      </Link>
    </footer>
  )
}

export default Footer
