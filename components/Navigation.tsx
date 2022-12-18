import { FaShareSquare } from "react-icons/fa"
import Section from "@/components/layout/Section"

function Navigation() {
  return (
    <Section isPaddingLess className="px-8 mb-2">
      <nav className="flex justify-between items-center bg-gradient-to-r from-transparent via-zinc-400/10 py-4">
        <button className="border-white/10 border text-white px-6 py-3 rounded-full">
          Connect Wallet
        </button>
        <button>
          <FaShareSquare className="text-xl" />
        </button>
      </nav>
    </Section>
  )
}

export default Navigation
