import type { UserSocialLink } from "@/types/shared"
import Link from "next/link"
import { SOCIAL_PLATFORMS } from "./models/socialMedia"

const DEFAULT_LINK_COLOR = "#ffffff0e"
function getSocialMediaLink({ type: socialType, url }: UserSocialLink) {
  const social = SOCIAL_PLATFORMS[socialType]
  if (!social) return () => null

  return function SocialLinkElement() {
    const { color: background = DEFAULT_LINK_COLOR, icon: Icon } = social
    return (
      <Link
        title={socialType}
        target="_blank"
        style={{
          background,
        }}
        rel="noopener noreferrer"
        className="p-3 rounded-full"
        href="/#"
      >
        <Icon className="text-xl text-white" />
      </Link>
    )
  }
}

export default getSocialMediaLink
