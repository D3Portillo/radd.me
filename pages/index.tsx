import { Fragment } from "react"
import Image from "next/image"
import Link from "next/link"

import { HiArrowRight } from "react-icons/hi"
import Section from "@/components/layout/Section"
import SeoTags from "@/components/SeoTags"
import asset_rock from "@/assets/rock-on.gif"
import asset_rock_blur_data from "@/assets/rock-on-blur-data.png"

export default function Home() {
  return (
    <Fragment>
      <SeoTags />
      <Section className="min-h-screen py-8 flex items-center">
        <section className="max-w-lg z-10 mb-12 md:mb-0">
          <h1>
            The place to showcase your{" "}
            <span className="text-pink-400">buildor</span> skills 🚀
          </h1>
          <p className="text-zinc-500 md:text-lg mt-2">
            Connect. Share with everyone what you are building.
            <br className="hidden md:inline" /> The in-bio platform for software
            crafters
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
        <section className="fixed md:relative bottom-0 right-0 translate-x-[25%] translate-y-[15%] md:translate-x-0 md:translate-y-0 flex-grow flex justify-end">
          <figure>
            <Image
              placeholder="blur"
              blurDataURL={asset_rock_blur_data.blurDataURL}
              src={asset_rock}
              alt="🤘"
            />
          </figure>
        </section>
      </Section>
    </Fragment>
  )
}
