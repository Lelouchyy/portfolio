import { useEffect, useState } from 'react'

const links = [
  { label: 'Home', href: '#home', sectionId: 'home' },
  { label: 'Expertise', href: '#expertise', sectionId: 'expertise' },
  { label: 'Projects', href: '#projects', sectionId: 'projects' },
  { label: 'Resume', href: '#cv', sectionId: 'cv' },
  { label: 'Contact', href: '#contact', sectionId: 'contact' },
] as const

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<(typeof links)[number]['sectionId']>('home')

  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.sectionId))
      .filter((section): section is HTMLElement => section !== null)

    const updateActiveSection = () => {
      const viewportMarker = window.scrollY + window.innerHeight * 0.35

      let currentSectionId = sections[0]?.id as (typeof links)[number]['sectionId'] | undefined

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 96

        if (viewportMarker >= sectionTop) {
          currentSectionId = section.id as (typeof links)[number]['sectionId']
        }
      })

      if (currentSectionId) {
        setActiveSection(currentSectionId)
      }
    }

    updateActiveSection()
    window.addEventListener('scroll', updateActiveSection, { passive: true })
    window.addEventListener('resize', updateActiveSection)

    return () => {
      window.removeEventListener('scroll', updateActiveSection)
      window.removeEventListener('resize', updateActiveSection)
    }
  }, [])

  return (
    <nav className="sticky top-0 z-50 border-b border-[#6effc8]/10 bg-[#080810]/80 backdrop-blur-md sm:overflow-visible">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between sm:justify-center">
          <button
            type="button"
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[#6effc8]/20 text-[#6effc8] transition-colors duration-200 hover:border-[#6effc8]/50 hover:bg-[#6effc8]/10 sm:hidden"
            onClick={() => setIsMenuOpen((currentValue) => !currentValue)}
          >
            <span className="sr-only">Open main menu</span>
            <span className="flex w-5 flex-col gap-1.5">
              <span className={`h-0.5 w-full bg-current transition-transform duration-200 ${isMenuOpen ? 'translate-y-2 rotate-45' : ''}`} />
              <span className={`h-0.5 w-full bg-current transition-opacity duration-200 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
              <span className={`h-0.5 w-full bg-current transition-transform duration-200 ${isMenuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
            </span>
          </button>

          <div className="hidden items-center justify-center gap-6 sm:flex md:gap-7 lg:gap-8">
            {links.map((item) => {
              const isActive = activeSection === item.sectionId

              return (
              <a
                key={item.label}
                href={item.href}
                className={`group relative shrink-0 text-sm font-medium uppercase tracking-widest transition-colors duration-200 md:text-[0.8rem] ${isActive ? 'text-[#6effc8]' : 'text-[#7070a0] hover:text-[#6effc8]'}`}
                onClick={() => setActiveSection(item.sectionId)}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 h-px bg-[#6effc8] transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </a>
              )
            })}
          </div>
        </div>

        {isMenuOpen ? (
          <div className="absolute inset-x-4 top-[calc(100%+0.75rem)] rounded-2xl border border-[#6effc8]/15 bg-[#12121d]/95 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:hidden">
            <div className="flex flex-col gap-2">
              {links.map((item) => {
                const isActive = activeSection === item.sectionId

                return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`rounded-md px-3 py-2 text-sm font-medium uppercase tracking-[0.2em] transition-colors duration-200 ${isActive ? 'bg-[#6effc8]/10 text-[#6effc8]' : 'text-[#7070a0] hover:bg-[#6effc8]/8 hover:text-[#6effc8]'}`}
                  onClick={() => {
                    setActiveSection(item.sectionId)
                    setIsMenuOpen(false)
                  }}
                >
                  {item.label}
                </a>
                )
              })}
            </div>
          </div>
        ) : null}
      </div>
    </nav>
  )
}

export default Navbar