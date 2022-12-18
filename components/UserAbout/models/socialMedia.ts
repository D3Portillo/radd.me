import type { IconType } from "react-icons"
import type { UserSocialLink } from "@/types/shared"

import {
  FaAngellist,
  FaDiscord,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTelegramPlane,
  FaTwitch,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa"
import { TbWorld } from "react-icons/tb"

export type SocialPlatformConfig = {
  icon: IconType
  color?: string
}

const PLATFORMS = {
  twitter: {
    icon: FaTwitter,
  },
  linkedin: {
    icon: FaLinkedinIn,
  },
  angelco: {
    icon: FaAngellist,
  },
  discord: {
    icon: FaDiscord,
  },
  twitch: {
    icon: FaTwitch,
  },
  youtube: {
    icon: FaYoutube,
  },
  instagram: {
    icon: FaInstagram,
  },
  github: {
    icon: FaGithub,
  },
  website: {
    icon: TbWorld,
  },
  telegram: {
    icon: FaTelegramPlane,
  },
}

export const SOCIAL_PLATFORMS = PLATFORMS as any as {
  [platform: string]: SocialPlatformConfig
}

export const MOCK_USER_SOCIAL_LINKS: UserSocialLink[] = Object.keys(
  PLATFORMS
).map((type: any) => {
  return {
    type,
    url: "/#",
  }
})

export type SocialPlatforms = keyof typeof PLATFORMS
