import { MOCK_USER_SOCIAL_LINKS } from "./models/socialMedia"
import getSocialMediaLink from "./getSocialMediaLink"

function UserAbout() {
  return (
    <section className="w-full mt-8">
      <div className="max-w-lg mx-auto">
        <div className="flex justify-center">
          <figure className="bg-white rounded-full overflow-hidden w-20 h-20"></figure>
        </div>
        <h1 className="mt-4 text-center text-xl">Denny Portillo</h1>
        <p className="mt-1 text-center text-zinc-400">
          👋 Hey, Denny here. Love Javascript, Guillermo Rauch and playing
          around with Web Things. I{"'"}m 24. Frontend-ish buildor.
        </p>
      </div>
      <div className="flex justify-center mt-4">
        <nav className="flex items-center flex-wrap justify-center gap-3 p-1 rounded-full">
          {MOCK_USER_SOCIAL_LINKS.map((socialItem) => {
            const SocialLink = getSocialMediaLink(socialItem)
            return (
              <SocialLink
                key={`social-item-${socialItem.type}-${socialItem.url}`}
              />
            )
          })}
        </nav>
      </div>
    </section>
  )
}

export default UserAbout
