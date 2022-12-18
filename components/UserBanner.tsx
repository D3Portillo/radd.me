import Link from "next/link"

function UserBanner() {
  return (
    <Link
      target="_blank"
      href="https://twitter.com/YearnToday"
      className="block bg-violet-700 text-white px-8 py-2 text-center"
    >
      Test out my latest project ― YearnToday 🚀
    </Link>
  )
}

export default UserBanner
