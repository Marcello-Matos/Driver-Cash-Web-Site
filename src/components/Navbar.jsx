import { useState, useEffect } from 'react'

const links = [
  { href: '#inicio', label: 'Início' },
  { href: '#como-funciona', label: 'Como funciona' },
  { href: '#recursos', label: 'Recursos' },
  { href: '#beneficios', label: 'Benefícios' },
  { href: '#planos', label: 'Planos' },
  { href: '#faq', label: 'FAQ' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0F172A]/95 backdrop-blur-md shadow-lg shadow-black/20 border-b border-[#2D3748]/60' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-2 flex-shrink-0">
          <img src="/logo.png" alt="Driver Cash" className="h-10 w-auto" />
        </a>

        {/* Links desktop */}
        <ul className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-gray-300 hover:text-[#22C55E] transition-colors duration-200"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA desktop */}
        <a
          href="#planos"
          className="hidden md:inline-flex items-center gap-2 bg-[#22C55E] text-black font-bold px-5 py-2.5 rounded-lg text-sm hover:bg-[#16A34A] transition-colors duration-200"
        >
          Começar agora
        </a>

        {/* Menu hambúrguer */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 rounded-md hover:bg-white/5 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? 'opacity-0' : ''}`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`}
          />
        </button>
      </div>

      {/* Menu mobile */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } bg-[#111827] border-b border-[#2D3748]`}
      >
        <ul className="px-4 py-4 space-y-1">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-3 text-gray-300 hover:text-[#22C55E] hover:bg-white/5 rounded-lg transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href="#planos"
              onClick={() => setOpen(false)}
              className="block text-center bg-[#22C55E] text-black font-bold px-4 py-3 rounded-lg hover:bg-[#16A34A] transition-colors"
            >
              Começar agora
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
