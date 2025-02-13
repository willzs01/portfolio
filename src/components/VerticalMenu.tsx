import Link from 'next/link'
import { Home, User, Briefcase, Linkedin } from 'lucide-react'
export function VerticalMenu() {
  return (
    <nav className="fixed left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-80 p-4 rounded-lg shadow-lg z-50">
      <ul className="space-y-6">
        <MenuItem href="#home" icon={<Home size={24} />} label="Home" />
        <MenuItem href="#about" icon={<User size={24} />} label="About" />
        <MenuItem href="#projects" icon={<Briefcase size={24} />} label="Projects" />
        <MenuItem href="https://www.linkedin.com/in/williams-karina-70b8a7258/" icon={<Linkedin size={24} />} label="Contact" />
      </ul>
    </nav>
  )
}

function MenuItem({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <li>
      <Link href={href} className="text-white hover:text-purple-300 transition-colors duration-200 flex flex-col items-center">
        {icon}
        <span className="sr-only">{label}</span>
      </Link>
    </li>
  )
}

