import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa6'
import profileImage from '../assets/profile.png'

const profile = {
  name: 'Alfie Reniedo',
} as const

const footerSocials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/alfiereniedo/', icon: FaLinkedinIn },
  { label: 'GitHub', href: 'https://github.com/Lelouchyy', icon: FaGithub },
  { label: 'Facebook', href: 'https://www.facebook.com/alfie.reniedo.79', icon: FaFacebookF },
  { label: 'Instagram', href: 'https://www.instagram.com/lelouchyfck/', icon: FaInstagram },
] as const

function Footer() {
  return (
    <footer className="relative border-t border-white/8 bg-[#080810] px-4 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-10 xl:px-12">
      <div className="mx-auto grid w-full max-w-[96rem] gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(360px,0.85fr)] lg:items-start lg:gap-14 xl:gap-20">
        <div className="min-w-0">
          <div className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-x-4 gap-y-5 sm:gap-x-6 sm:gap-y-6">
            <div className="h-16 w-16 shrink-0 overflow-hidden rounded-full border border-white/10 bg-[#11131b] sm:h-20 sm:w-20 lg:h-32 lg:w-32">
              <img
                src={profileImage}
                alt={profile.name}
                className="h-full w-full object-cover scale-125 object-[50%_12%]"
              />
            </div>

            <div className="min-w-0">
              <h2 className="max-w-[12ch] text-2xl font-extrabold leading-[0.95] tracking-tight text-[#f3f4f7] sm:text-3xl lg:text-[3.4rem]">
                {profile.name}
              </h2>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-[#8a8fae] lg:text-base">
                altr.reniedo.up@phinmaed.com
              </p>
            </div>

            <div className="col-span-2 flex flex-wrap gap-2 sm:gap-3 lg:gap-4">
              {footerSocials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/14 bg-[#10141c] text-sm text-[#f3f4f7] transition-all duration-150 hover:-translate-y-0.5 hover:border-[#6effc8]/35 hover:text-[#6effc8] sm:h-11 sm:w-11 sm:text-base lg:h-14 lg:w-14 lg:text-lg"
                >
                  <social.icon aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="min-w-0 border-t border-white/8 pt-6 lg:justify-self-end lg:w-full lg:max-w-[36rem] lg:border-t-0 lg:pt-0">
          <p className="font-mono text-[11px] uppercase tracking-[0.26em] text-[#6effc8]">Next Step</p>
          <p className="text-2xl font-extrabold tracking-tight text-[#f3f4f7] sm:text-3xl lg:text-[3.2rem]">
            Ready to connect?
          </p>

          <p className="mt-5 max-w-xl text-sm leading-relaxed text-[#8a8fae] sm:text-base">
            Use the Contact section for detailed inquiries about collaborations, or student project opportunities.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl bg-[#6effc8] px-6 py-3 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#080810] transition-all duration-150 hover:-translate-y-0.5 hover:shadow-[0_0_24px_rgba(110,255,200,0.28)]"
            >
              Open Contact
            </a>

            <a
              href="#cv"
              className="inline-flex items-center justify-center rounded-xl border border-white/12 bg-[#10141c] px-6 py-3 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#f3f4f7] transition-all duration-150 hover:-translate-y-0.5 hover:border-[#6effc8]/35 hover:text-[#6effc8]"
            >
              View CV
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer