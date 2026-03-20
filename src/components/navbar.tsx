import { useState } from 'react'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const links = ['Home', 'Expertise', 'Projects', 'CV']

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
            {links.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="group relative shrink-0 text-sm font-medium uppercase tracking-widest text-[#7070a0] transition-colors duration-200 hover:text-[#6effc8] md:text-[0.8rem]"
              >
                {item}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#6effc8] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>
        </div>

        {isMenuOpen ? (
          <div className="absolute inset-x-4 top-[calc(100%+0.75rem)] rounded-2xl border border-[#6effc8]/15 bg-[#12121d]/95 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:hidden">
            <div className="flex flex-col gap-2">
              {links.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="rounded-md px-3 py-2 text-sm font-medium uppercase tracking-[0.2em] text-[#7070a0] transition-colors duration-200 hover:bg-[#6effc8]/8 hover:text-[#6effc8]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </nav>
  )
}

export default Navbar