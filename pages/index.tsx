import { Fragment } from "react"
import Image from "next/image"
import { ConnectButton } from "@rainbow-me/rainbowkit"
import SeoTags from "@/components/SeoTags"

export default function Home() {
  return (
    <Fragment>
      <SeoTags />
      <main className="min-h-screen p-8">
        <h1 className="text-[calc(3vw+2rem)] font-bold mb-2">
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <ConnectButton />
      </main>
      <footer className="p-8 flex justify-center border-t">
        <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">
          Powered by{" "}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer>
    </Fragment>
  )
}
