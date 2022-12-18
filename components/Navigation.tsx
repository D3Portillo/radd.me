import type { PublicShareElement } from "@/types/shared"

import { FaShareSquare } from "react-icons/fa"
import Section from "@/components/layout/Section"
import { classnames } from "@/lib/helpers"

function Navigation({ isPublic }: PublicShareElement) {
  return (
    <Section isPaddingLess className="px-8">
      <nav
        className={classnames(
          "flex justify-between items-center",
          isPublic ? "py-6" : "py-4"
        )}
      >
        {isPublic || (
          <button className="border-white/10 border text-white px-6 py-3 rounded-full">
            Connect Wallet
          </button>
        )}
        <div className="flex-grow" />
        <button className="py-2">
          <FaShareSquare className="text-xl" />
        </button>
      </nav>
    </Section>
  )
}

export default Navigation
