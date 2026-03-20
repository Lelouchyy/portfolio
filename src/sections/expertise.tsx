function Expertise() {
  return (
    <section id="expertise" className="relative flex min-h-screen scroll-mt-16 items-center overflow-hidden bg-[#080810] px-6 py-24 sm:px-10 md:px-10 md:py-20 lg:px-16">
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
        className="absolute left-[-40px] top-[10%] h-[220px] w-[220px] rounded-full pointer-events-none sm:h-[260px] sm:w-[260px] lg:h-[320px] lg:w-[320px]"
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
        <div className="max-w-2xl text-center md:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#6effc8]/20 px-4 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#6effc8]" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-[#6effc8]">
              What I Bring
            </span>
          </div>

          <h2 className="mt-6 text-4xl font-extrabold leading-none tracking-tight text-[#e8e8f0] sm:text-5xl lg:text-6xl">
            Expertise Built
            <br />
            <span className="text-[#6effc8]">For Real Projects.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-[#7070a0] sm:text-[15px] md:mx-0 md:text-base">
            I build practical systems with a focus on clean architecture, reliable APIs,
            responsive interfaces, and maintainable code. My work centers on shipping
            products that feel polished for users and stable for teams.
          </p>
        </div>

        <div className="grid items-stretch gap-4 md:grid-cols-2 xl:grid-cols-3">
          <article className="h-full w-full rounded-3xl border border-[#6effc8]/15 bg-[#0f111b]/80 p-6 backdrop-blur-sm">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#6effc8]">Back-End</p>
            <h3 className="mt-4 text-xl font-semibold text-[#e8e8f0]">Backend Engineering</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#7070a0]">
                Develop secure and scalable backend services using JavaScript, TypeScript, Python, Java, and PHP with SQL and NoSQL databases.
            </p>
          </article>

          <article className="h-full w-full rounded-3xl border border-[#6effc8]/15 bg-[#0f111b]/80 p-6 backdrop-blur-sm">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#ff6ef7]">Front-End</p>
            <h3 className="mt-4 text-xl font-semibold text-[#e8e8f0]">Responsive UI</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#7070a0]">
              Passionate about UI/UX. Proficient in HTML, CSS, JavaScript/TypeScript, React and NextJS framework.
            </p>
          </article>

          <article className="h-full w-full rounded-3xl border border-[#6effc8]/15 bg-[#0f111b]/80 p-6 backdrop-blur-sm">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#ff6ef7]">Android Development</p>
            <h3 className="mt-4 text-xl font-semibold text-[#e8e8f0]">Mobile App Solutions</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#7070a0]">
              Skilled in developing mobile app solutions using Android Studio.
            </p>
          </article>

          <article className="h-full w-full rounded-3xl border border-[#6effc8]/15 bg-[#0f111b]/80 p-6 backdrop-blur-sm">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#6ec8ff]">Leadership</p>
            <h3 className="mt-4 text-xl font-semibold text-[#e8e8f0]">Technical Leadership</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#7070a0]">
              Experience leading teams, aligning development goals, and helping projects move forward with clear direction and accountability.
            </p>
          </article>

          <article className="h-full w-full rounded-3xl border border-[#6effc8]/15 bg-[#0f111b]/80 p-6 backdrop-blur-sm">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#ffd36e]">Project Management</p>
            <h3 className="mt-4 text-xl font-semibold text-[#e8e8f0]">Project Coordination</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#7070a0]">
              Comfortable planning timelines, organizing deliverables, and coordinating execution to keep projects on track from start to launch.
            </p>
          </article>


          <article className="h-full w-full rounded-3xl border border-[#6effc8]/15 bg-[#0f111b]/80 p-6 backdrop-blur-sm">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#ffd36e]">Workflow</p>
            <h3 className="mt-4 text-xl font-semibold text-[#e8e8f0]">Team Delivery</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#7070a0]">
              Working with version control, debugging, deployment flows, and organized collaboration practices.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Expertise;
