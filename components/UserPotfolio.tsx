import UserSection from "./UserSection"

function UserPorfolio() {
  return (
    <UserSection title="PORTFOLIO" className="mt-24">
      <ul className="flex flex-wrap -mx-8">
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
      </ul>
    </UserSection>
  )
}

function Project() {
  return (
    <li className="w-full lg:w-1/2">
      <section className="px-8 py-4">
        <h3 className="text-lg mb-2">Yearn Today</h3>
        <figure className="bg-white h-40 sm:h-56 lg:h-36 rounded-lg overflow-hidden"></figure>
      </section>
    </li>
  )
}

export default UserPorfolio
