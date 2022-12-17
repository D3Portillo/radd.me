import { Fragment } from "react"
import { ConnectButton } from "@rainbow-me/rainbowkit"
import SeoTags from "@/components/SeoTags"

export default function Profile() {
  return (
    <Fragment>
      <SeoTags />
      <main className="min-h-screen p-8">
        <ConnectButton />
      </main>
    </Fragment>
  )
}
