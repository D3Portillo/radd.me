import type { PropsWithChildren } from "react"
import type { SocialPlatforms } from "@/components/UserAbout/models/socialMedia"

export type PropsWithChildrenCx<Props = unknown> = PropsWithChildren<Props> & {
  className?: string
}

export type PublicShareElement = { isPublic?: boolean }

export type UserSocialLink = {
  type: SocialPlatforms
  url: string
}
