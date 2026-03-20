import cvImage from '../assets/pic18.jpeg'

const highlights = [
  { value: 'Entry-Level', label: 'Career stage' },
  { value: '10+', label: 'Academic projects' },
  { value: '3', label: 'Core tech stacks' },
  { value: '1', label: 'Degree completed' },
] as const

const topSkills = [
  { name: 'Back-End Development', level: 90 },
  { name: 'Front-End Development', level: 80 },
  { name: 'Android Development', level: 85 },
  { name: 'Project Management', level: 75 },
  { name: 'SQL / Database Design', level: 82 },
] as const

function Cv() {
  return (
    <section id="cv" className="relative flex min-h-screen scroll-mt-16 items-center overflow-hidden bg-[#080810] px-6 py-24 sm:px-10 md:px-10 md:py-20 lg:px-16">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(110,255,200,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(110,255,200,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px',
        }}
      />

      <div
        className="pointer-events-none absolute left-[-40px] top-[12%] h-[220px] w-[220px] rounded-full sm:h-[260px] sm:w-[260px] lg:h-[320px] lg:w-[320px]"
        style={{
          background: 'radial-gradient(circle, rgba(110,255,200,0.12), transparent 70%)',
          filter: 'blur(80px)',
        }}
      />
      <div
        className="pointer-events-none absolute bottom-[-60px] right-[8%] h-[200px] w-[200px] rounded-full sm:h-[240px] sm:w-[240px] lg:h-[300px] lg:w-[300px]"
        style={{
          background: 'radial-gradient(circle, rgba(255,110,247,0.1), transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-5xl">
        <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(23,24,35,0.94),rgba(10,10,16,0.96))] p-8 shadow-[0_18px_60px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:p-10 lg:p-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#6effc8]/20 px-4 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#6effc8]" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-[#6effc8]">
              Curriculum Vitae
            </span>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <h2 className="text-4xl font-extrabold leading-none tracking-tight text-[#e8e8f0] sm:text-5xl lg:text-6xl">
                Want the full picture?
                <br />
                <span className="text-[#6effc8]">Download my CV.</span>
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-relaxed text-[#7070a0] sm:text-[15px] md:text-base">
                Click the download button to review my curriculum vitae and explore my academic
                projects, technical skills, leadership experience, and educational background in one place.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-[#6effc8]/15 bg-[#0f111b]/80 p-6 backdrop-blur-sm">
              <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#8a8fae]">
                Quick Access
              </p>
              <p className="mt-4 text-sm leading-relaxed text-[#7070a0]">
                Use the button below to open or download my CV and get a clearer view of my student projects and strengths.
              </p>

              <a
                href={cvImage}
                download="Alfie-Reniedo-CV.jpeg"
                className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-[#6effc8] px-6 py-3 text-center text-[13px] font-semibold uppercase tracking-[0.2em] text-[#080810] transition-all duration-150 hover:-translate-y-0.5 hover:shadow-[0_0_28px_rgba(110,255,200,0.35)] active:scale-95"
              >
              Download My CV
              </a>
            </div>
          </div>

          <div className="mt-10 border-t border-white/8 pt-8 sm:mt-12 sm:pt-10">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#8a8fae]">
                Career Highlights
              </p>

              <div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {highlights.map((item) => (
                  <article
                    key={item.label}
                    className="rounded-[1.35rem] border border-white/8 bg-[#161a23]/85 px-5 py-6 text-center shadow-[0_0_0_1px_rgba(255,255,255,0.02)]"
                  >
                    <p className="text-3xl font-extrabold leading-none text-[#43ffb2] sm:text-[2rem]">
                      {item.value}
                    </p>
                    <p className="mt-3 text-sm text-[#8a8fae]">{item.label}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="mt-8 rounded-[1.5rem] border border-white/8 bg-[#161a23]/85 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] sm:p-7">
              <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[#8a8fae]">
                Top Skills
              </p>

              <div className="mt-6 space-y-5">
                {topSkills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between gap-4 text-sm">
                      <span className="font-semibold text-[#f3f4f7]">{skill.name}</span>
                      <span className="font-mono text-[#43ffb2]">{skill.level}%</span>
                    </div>

                    <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
                      <div
                        className="h-full rounded-full bg-[linear-gradient(90deg,#29d6a2,#43ffb2)]"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cv