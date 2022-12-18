import { Fragment } from "react"

import SeoTags from "@/components/SeoTags"
import Section from "@/components/layout/Section"
import Navigation from "@/components/Navigation"
import UserAbout from "@/components/UserAbout/UserAbout"
import UserPorfolio from "@/components/UserPotfolio"
import UserCustomLinks from "@/components/UserCustomLinks"
import UserBanner from "@/components/UserBanner"
import Footer from "@/components/Footer"

export default function Dashboard() {
  return (
    <Fragment>
      <SeoTags title="Radd / Dashboard" />
      <UserBanner />
      <Navigation />
      <Section isPaddingLess className="min-h-screen px-8 mt-16">
        <UserAbout />
        <UserCustomLinks />
        <UserPorfolio />
      </Section>
      <Footer />
    </Fragment>
  )
}
