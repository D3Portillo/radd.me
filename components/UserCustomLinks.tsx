import Link from "next/link"
import { IoMdArrowForward } from "react-icons/io"
import UserSection from "./UserSection"

function UserCustomLinks() {
  return (
    <UserSection title="MOAR LINKS" className="mt-24">
      <ul className="flex flex-col">
        <CustomLink />
      </ul>
    </UserSection>
  )
}

function CustomLink() {
  return (
    <li>
      <Link
        href="https://twitter.com/go_eliptico"
        className="bg-white flex items-center gap-2 justify-between text-black p-4 rounded-lg font-semibold"
      >
        <span>🤘 Visit my blog</span>
        <IoMdArrowForward className="text-xl" />
      </Link>
    </li>
  )
}

export default UserCustomLinks
