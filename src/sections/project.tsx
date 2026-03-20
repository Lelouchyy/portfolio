import projectPlaceholder from '../assets/pic18.jpeg'

const projects = [
   {
    category: 'Digital Community System',
    title: 'Propsuite',
    accent: '#6effc8',
    tags: ['Web Application', 'Tailwind CSS','Laravel',  'MySQL', 'MariaDB'],
    image: projectPlaceholder,
  },
  {
    category: 'Thesis Project',
    title: 'Bikoman E-commerce System',
    accent: '#6effc8',
    tags: ['Web Application', 'Laravel', 'CSS','PHP', 'Firebase'],
    image: projectPlaceholder,
  },
  {
    category: 'Barangay Management System',
    title: 'BarangayHub',
    accent: '#ff6ef7',
    tags: ['Web Application', 'Laravel', 'CSS','PHP', 'Firebase'],
    image: projectPlaceholder,
  },
  {
    category: 'Attendance Management',
    title: 'EMPLOYEE ATTENDANCE SYSTEM',
    accent: '#ffd36e',
    tags: ['Website','HTML','CSS','PHP', 'MySQL'],
    image: projectPlaceholder,
  },
 {
    category: 'Mental Health Platform',
    title: 'Calm Connection',
    accent: '#6ec8ff',
    tags: ['Web Application',  'Tailwind CSS','Laravel', 'MySQL','MariaDB'],
   image: projectPlaceholder,
  },

   {
    category: 'Barangay Management System',
    title: 'Bactad East',
    accent: '#6ec8ff',
    tags: ['Android Application', 'Kotlin', 'Firebase'],
    image: projectPlaceholder,
  },
   {
    category: 'Atendance Management System',
    title: '  HK Logbook',
    accent: '#6ec8ff',
    tags: ['Website', 'Tailwind CSS','Laravel',  'MySQL', 'React'],
    image: projectPlaceholder,
  },
     {
    category: 'Water Refill Management System',
    title: '  AquaSweet',
    accent: '#6ec8ff',
    tags: ['HTHML', 'CSS', 'PHP', 'MySQL'],
    image: projectPlaceholder,
  },
   
] as const

function ProjectPreview({ image, title, accent }: { image: string; title: string; accent: string }) {
  return (
    <div className="relative mt-8 h-60 overflow-hidden rounded-[2rem] border border-white/8 bg-[linear-gradient(180deg,rgba(18,19,29,0.2),rgba(10,10,16,0.95))]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_55%)]" />
      <div className="absolute left-[50%] top-8 h-20 w-20 -translate-x-1/2 rounded-full blur-3xl" style={{ backgroundColor: `${accent}35` }} />
      <img
        src={image}
        alt={`${title} project preview`}
        className="absolute inset-x-3 bottom-3 h-[calc(100%-1.5rem)] w-[calc(100%-1.5rem)] rounded-[1.5rem] border border-white/10 object-cover object-top shadow-2xl group-hover:blur-[3px]"
      />
      <div className="absolute inset-x-3 bottom-3 h-20 rounded-b-[1.5rem] bg-gradient-to-t from-[#0b0c12]/80 to-transparent" />
      <div className="absolute inset-x-3 bottom-3 top-3 rounded-[1.5rem] bg-[linear-gradient(180deg,rgba(7,9,14,0.2),rgba(7,9,14,0.78))] opacity-0 backdrop-blur-0 group-hover:opacity-100 group-hover:backdrop-blur-sm" />
      <div className="absolute inset-x-3 bottom-3 top-3 rounded-[1.5rem] opacity-0 group-hover:opacity-100" style={{ boxShadow: `inset 0 0 0 1px ${accent}33` }} />
      <div className="pointer-events-none absolute inset-x-3 bottom-3 top-3 flex items-center justify-center">
        <span className="inline-flex items-center justify-center whitespace-nowrap rounded-full border border-white/25 bg-[#11131b]/80 px-5 py-2.5 text-center font-mono text-[10px] uppercase tracking-[0.28em] text-white opacity-0 shadow-[0_10px_30px_rgba(0,0,0,0.32)] backdrop-blur-xl group-hover:opacity-100">
          Click to <br />view project
        </span>
      </div>
    </div>
  )
}

function Project() {
  return (
    <section id="projects" className="relative flex scroll-mt-16 items-center overflow-hidden bg-[#080810] px-6 py-20 sm:px-10 md:px-10 md:py-16 lg:px-16">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(110,255,200,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(110,255,200,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px',
        }}
      />

      <div
        className="absolute left-[-40px] top-[12%] h-[220px] w-[220px] rounded-full pointer-events-none sm:h-[260px] sm:w-[260px] lg:h-[320px] lg:w-[320px]"
        style={{
          background: 'radial-gradient(circle, rgba(110,255,200,0.12), transparent 70%)',
          filter: 'blur(80px)',
        }}
      />
      <div
        className="absolute bottom-[-60px] right-[8%] h-[200px] w-[200px] rounded-full pointer-events-none sm:h-[240px] sm:w-[240px] lg:h-[300px] lg:w-[300px]"
        style={{
          background: 'radial-gradient(circle, rgba(255,110,247,0.1), transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-10 lg:gap-14">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#6effc8]/20 px-4 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#6effc8]" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-[#6effc8]">
              Featured Work
            </span>
          </div>

          <h2 className="mt-6 text-4xl font-extrabold leading-none tracking-tight text-[#e8e8f0] sm:text-5xl lg:text-6xl">
            Project Showcase
            <br />
            <span className="text-[#6effc8]">Built to Ship.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-[#7070a0] sm:text-[15px] md:text-base">
            A selection of projects that highlight how I approach product design,
            implementation, and delivery. Each card represents a real build focus,
            from interface work to backend logic and mobile development.
          </p>
        </div>

        <div className="grid items-stretch gap-6 md:grid-cols-2 2xl:grid-cols-4">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group flex h-full min-h-[30rem] w-full cursor-pointer flex-col rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(28,28,32,0.96),rgba(17,17,20,0.96))] p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.03)] transition-transform duration-300 ease-out hover:scale-[1.02] hover:border-white/16 hover:shadow-[0_18px_40px_rgba(0,0,0,0.24)]"
            >
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-xl border border-white/16 px-3 py-1.5 text-xs text-[#d5d7e2]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-8 text-center">
                <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#8a8fae]">
                  {project.category}
                </p>
                <h3 className="mx-auto mt-4 max-w-[11ch] text-2xl font-semibold leading-[1.05] tracking-tight text-[#f5f5f7] sm:text-xl">
                  {project.title}
                </h3>
              </div>

              <div className="mt-auto">
                <ProjectPreview image={project.image} title={project.title} accent={project.accent} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Project;
