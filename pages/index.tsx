import { Fragment } from "react"
import Image from "next/image"

import { HiArrowRight } from "react-icons/hi"
import SeoTags from "@/components/SeoTags"
import asset_rock from "@/assets/rock-on.gif"

export default function Home() {
  return (
    <Fragment>
      <SeoTags />
      <main className="min-h-screen p-8 max-w-screen-xl mx-auto flex items-center">
        <section className="max-w-2xl">
          <h1 className="text-5xl font-bold">
            A place for buildors to showcase their skills
          </h1>
          <p className="text-zinc-500 text-lg mt-2 max-w-lg">
            Share with anyone the Web3 projects you are shiping. This is the
            platform for software crafters.
          </p>
          <div className="flex items-center mt-8">
            <button className="bg-violet-700 flex items-center gap-2 text-lg px-4 py-3 rounded-lg">
              <span>Get started now</span>
              <HiArrowRight />
            </button>
          </div>
        </section>
        <section className="flex-grow flex justify-center">
          <figure>
            <Image src={asset_rock} alt="🤘" />
          </figure>
        </section>
      </main>
    </Fragment>
  )
}
