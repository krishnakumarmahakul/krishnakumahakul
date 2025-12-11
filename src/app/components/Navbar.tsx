import Link from 'next/link'

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-4 flex gap-8">
        <Link href="#home" className="hover:text-blue-600">Home</Link>
        <Link href="#skills" className="hover:text-blue-600">Skills</Link>
        <Link href="#experience" className="hover:text-blue-600">Experience</Link>
        <Link href="#projects" className="hover:text-blue-600">Projects</Link>
        <Link href="#blogs" className="hover:text-blue-600">Blogs</Link>
      </div>
    </nav>
  )
}
