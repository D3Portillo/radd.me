import { useMemo } from "react"
import { NextSeo } from "next-seo"

const BASE_URL = "https://d3portillo.me"
const TWITTER_HANDLE = "d3portillo"
export const DEFAULT_SEO = {
  title: "D3Portillo / Template NextJs ⚡",
  url: BASE_URL,
  imageURL: `${BASE_URL}/seo.png`,
  description: "A template repo that hosts my day-to-day used tech stack.",
}

type SeoDefinitions = typeof DEFAULT_SEO
function SeoTags(props: Partial<SeoDefinitions> = {}) {
  const SEO = useMemo(() => {
    return Object.keys(DEFAULT_SEO).reduce((currentDef, _key: any) => {
      const key = _key as keyof SeoDefinitions
      return {
        ...currentDef,
        [key]: props[key] || currentDef[key],
      }
    }, DEFAULT_SEO)
  }, [props])

  return (
    <NextSeo
      title={SEO.title}
      additionalLinkTags={[
        {
          rel: "icon",
          type: "image/png",
          // located at -> /public/favicon.png
          href: "/favicon.png",
        },
      ]}
      twitter={{
        cardType: "summary_large_image",
        handle: TWITTER_HANDLE,
        site: SEO.url,
      }}
      openGraph={{
        type: "website",
        url: SEO.url,
        title: SEO.title,
        description: SEO.description,
        images: [
          {
            // located at -> /public/seo.png
            url: SEO.imageURL,
            alt: SEO.imageURL,
            width: 1200,
            height: 630,
          },
        ],
      }}
      description={SEO.description}
    />
  )
}

export default SeoTags
