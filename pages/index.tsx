import { Fragment } from "react"
import Image from "next/image"
import Link from "next/link"

import { HiArrowRight } from "react-icons/hi"
import SeoTags from "@/components/SeoTags"
import asset_rock from "@/assets/rock-on.gif"
import asset_rock_blur_data from "@/assets/rock-on-blur-data.png"

export default function Home() {
  return (
    <Fragment>
      <SeoTags />
      <main className="min-h-screen p-8 max-w-screen-lg mx-auto flex items-center">
        <section className="max-w-2xl">
          <h1 className="text-5xl font-bold">
            A place for <span className="text-pink-400">buildors</span> to
            showcase their skills 🚀
          </h1>
          <p className="text-zinc-500 text-lg mt-2 max-w-lg">
            The platform for software crafters. Share with everyone the Web3
            projects you are shiping.
          </p>
          <div className="flex items-center mt-12">
            <Link
              href="/dashboard"
              className="group bg-violet-700 flex items-center gap-2 text-lg px-4 py-3 rounded-lg ring-white/20 hover:ring-2"
            >
              <span>Get started now</span>
              <HiArrowRight className="group-hover:translate-x-px" />
            </Link>
          </div>
        </section>
        <section className="flex-grow flex justify-center">
          <figure>
            <Image
              placeholder="blur"
              blurDataURL={asset_rock_blur_data.blurDataURL}
              src={asset_rock}
              alt="🤘"
            />
          </figure>
        </section>
      </main>
    </Fragment>
  )
}
