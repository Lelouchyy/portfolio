import { useEffect, useState, type CSSProperties } from 'react'
import profileImage from '../assets/profile.png'

function Home() {
  const roles = ['Back-End Developer', 'Lead Developer', 'Front-End Developer']
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setRoleIndex((currentIndex) => (currentIndex + 1) % roles.length)
    }, 5000)

    return () => window.clearInterval(intervalId)
  }, [roles.length])

  const currentRole = roles[roleIndex]
  const typingStyle = {
    '--typing-width': `${currentRole.length}ch`,
  } as CSSProperties

  return (
    <section id="home" className="relative flex min-h-screen scroll-mt-16 flex-col-reverse items-center justify-center gap-10 overflow-hidden bg-[#080810] px-6 pb-32 pt-24 sm:px-10 sm:pb-36 md:flex-row md:gap-12 md:px-10 md:pb-32 md:pt-20 lg:gap-20 lg:px-16">

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(110,255,200,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(110,255,200,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />

      <div className="absolute right-[10%] top-[-80px] h-[220px] w-[220px] rounded-full pointer-events-none animate-pulse sm:h-[280px] sm:w-[280px] md:right-[8%] md:h-[300px] md:w-[300px] lg:right-[15%] lg:h-[360px] lg:w-[360px]"
        style={{ background: "radial-gradient(circle, rgba(110,255,200,0.1), transparent 70%)", filter: "blur(80px)" }} />
      <div className="absolute bottom-[-40px] left-[5%] h-[200px] w-[200px] rounded-full pointer-events-none sm:h-[240px] sm:w-[240px] md:h-[250px] md:w-[250px] lg:h-[280px] lg:w-[280px]"
        style={{ background: "radial-gradient(circle, rgba(255,110,247,0.08), transparent 70%)", filter: "blur(80px)" }} />

      <div className="relative z-10 w-full max-w-xl text-center md:max-w-lg md:text-left lg:max-w-xl">

        {/* Name */}
        <h1 className="text-4xl font-extrabold leading-none tracking-tight text-[#e8e8f0] sm:text-5xl md:text-[3.25rem] lg:text-6xl">
          Alfie<br />
          <span className="text-[#6effc8]">Reniedo.</span>
        </h1>

        {/* Role */}
        <p className="mt-3 flex flex-wrap items-center justify-center gap-3 font-mono text-sm tracking-widest text-[#7070a0] sm:text-base lg:justify-start">
          <span className="w-7 h-px bg-[#6effc8]" />
          <span key={currentRole} className="typing inline-block tracking-normal" style={typingStyle}>
            {currentRole}
          </span>
        </p>

        {/* Description */}
        <p className="mx-auto mt-5 max-w-lg text-sm leading-relaxed text-[#7070a0] sm:text-[15px] md:mx-0 md:text-base">
          I am a passionate web developer who enjoys building{" "}
          <strong className="text-[#e8e8f0] font-semibold">responsive and user-friendly</strong>{" "}
          websites. I specialize in modern web technologies and love turning ideas
          into functional, visually appealing digital experiences. Constantly
          learning new tools to deliver{" "}
          <strong className="text-[#e8e8f0] font-semibold">high-quality work.</strong>
        </p>

        {/* Buttons */}
        <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap md:justify-start">

          {/* Primary */}
          <button
            className="group relative w-full overflow-hidden rounded-md bg-[#6effc8] px-8 py-3 text-[13px] font-semibold uppercase tracking-widest text-[#080810] transition-all duration-150 active:scale-95 hover:-translate-y-0.5 hover:shadow-[0_0_28px_rgba(110,255,200,0.45)] sm:w-auto"
          >
            <span
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: "linear-gradient(135deg, #ff6ef7, #6effc8)" }}
            />
            <span className="relative z-10">Contact Me</span>
          </button>

          {/* Ghost */}
          <button
            className="w-full rounded-md border border-[#6effc8]/40 bg-[#6effc8]/[0.07] px-8 py-3 text-[13px] font-semibold uppercase tracking-widest text-[#6effc8] transition-all duration-150 active:scale-95 hover:-translate-y-0.5 hover:border-[#6effc8] hover:bg-[#6effc8]/[0.13] hover:shadow-[0_0_20px_rgba(110,255,200,0.2)] sm:w-auto"
          >
            View My Work →
          </button>

        </div>
      </div>

      {/* AVATAR SIDE */}
      {/* Avatar with pulsing glow — no rotation */}
<div className="relative z-10 flex-shrink-0 md:self-center">
  <div
    className="h-52 w-52 rounded-full p-[3px] sm:h-64 sm:w-64 md:h-72 md:w-72 lg:h-80 lg:w-80"
    style={{
      background: "linear-gradient(135deg, #6effc8, #ff6ef7, #6ec8ff)",
      animation: "glowPulse 3s ease-in-out infinite",
    }}
  >
    <div className="w-full h-full rounded-full bg-[#0e0e1a] overflow-hidden">
      <img
        src={profileImage}
        alt="Alfie Reniedo"
        className="w-full h-full object-cover scale-150 object-[50%_5%]"
      />
    </div>
  </div>

  {/* Floating badge */}
  <div className="absolute bottom-1 right-0 rounded-xl border border-[#6effc8]/25 bg-[#0e0e1a] px-3 py-2 text-[10px] font-mono text-[#7070a0] sm:bottom-2 sm:px-4 sm:py-2.5 sm:text-[11px] md:right-2">
    <strong className="block text-lg text-[#6effc8] sm:text-xl">BSCS</strong>
    Graduate
  </div>
</div>
      <div className="marquee-wrap absolute inset-x-0 bottom-0 z-20">
        <div className="marquee-track">
          <span className="marquee-item">React</span>
          <span className="marquee-item">TypeScript</span>
          <span className="marquee-item">Laravel</span>
          <span className="marquee-item">PHP</span>
          <span className="marquee-item">Kotlin</span>
          <span className="marquee-item">Java</span>
          <span className="marquee-item">C++</span>
          <span className="marquee-item">Python</span>
          <span className="marquee-item">Firebase</span>
          <span className="marquee-item">MySQL</span>
          <span className="marquee-item">Figma</span>
          <span className="marquee-item">React</span>
          <span className="marquee-item">TypeScript</span>
          <span className="marquee-item">Laravel</span>
          <span className="marquee-item">PHP</span>
          <span className="marquee-item">Kotlin</span>
          <span className="marquee-item">Java</span>
          <span className="marquee-item">C++</span>
          <span className="marquee-item">Python</span>
          <span className="marquee-item">Firebase</span>
          <span className="marquee-item">MySQL</span>
          <span className="marquee-item">Figma</span>


        </div>
      </div>
    </section>

    
  )
}

export default Home