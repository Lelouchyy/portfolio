import { useEffect, useState, type CSSProperties } from 'react'
import { FaJava } from 'react-icons/fa6'
import type { IconType } from 'react-icons'
import {
  SiCplusplus,
  SiFirebase,
  SiFigma,
  SiJavascript,
  SiKotlin,
  SiLaravel,
  SiMysql,
  SiPhp,
  SiPython,
  SiReact,
  SiTypescript,
} from 'react-icons/si'
import profileImage from '../assets/profile.png'

const floatingTech = [
  { icon: SiReact, name: 'React', accent: '#61dafb', glow: 'rgba(97,218,251,0.14)', x: '52%', y: '16%', duration: '8.6s', delay: '0.7s', size: '50px' },
  { icon: SiTypescript, name: 'TypeScript', accent: '#3178c6', glow: 'rgba(49,120,198,0.18)', x: '4%', y: '72%', duration: '9s', delay: '0s', size: '46px' },
  { icon: SiLaravel, name: 'Laravel', accent: '#ff2d20', glow: 'rgba(255,45,32,0.16)', x: '63%', y: '8%', duration: '9.8s', delay: '2.2s', size: '46px' },
  { icon: SiPhp, name: 'PHP', accent: '#777bb3', glow: 'rgba(119,123,179,0.18)', x: '30%', y: '82%', duration: '10.7s', delay: '1.8s', size: '48px' },
  { icon: SiKotlin, name: 'Kotlin', accent: '#a97bff', glow: 'rgba(169,123,255,0.16)', x: '30%', y: '12%', duration: '10.5s', delay: '1.2s', size: '48px' },
  { icon: FaJava, name: 'Java', accent: '#f89820', glow: 'rgba(248,152,32,0.15)', x: '33%', y: '48%', duration: '11s', delay: '0.4s', size: '48px' },
  { icon: SiCplusplus, name: 'C++', accent: '#659ad2', glow: 'rgba(101,154,210,0.15)', x: '48%', y: '86%', duration: '8.9s', delay: '1.4s', size: '46px' },
  { icon: SiJavascript, name: 'JavaScript', accent: '#f7df1e', glow: 'rgba(247,223,30,0.16)', x: '58%', y: '82%', duration: '9.4s', delay: '2.1s', size: '46px' },
  { icon: SiPython, name: 'Python', accent: '#ffd43b', glow: 'rgba(255,212,59,0.15)', x: '10%', y: '78%', duration: '10.2s', delay: '2.9s', size: '46px' },
  { icon: SiFirebase, name: 'Firebase', accent: '#ffca28', glow: 'rgba(255,202,40,0.16)', x: '75%', y: '58%', duration: '9.3s', delay: '2.6s', size: '50px' },
  { icon: SiMysql, name: 'MySQL', accent: '#00bcd4', glow: 'rgba(0,188,212,0.16)', x: '88%', y: '66%', duration: '8.8s', delay: '1.1s', size: '44px' },
  { icon: SiFigma, name: 'Figma', accent: '#f24e1e', glow: 'rgba(242,78,30,0.14)', x: '82%', y: '28%', duration: '9.7s', delay: '1.6s', size: '46px' },
] as const satisfies ReadonlyArray<{
  icon: IconType
  name: string
  accent: string
  glow: string
  x: string
  y: string
  duration: string
  delay: string
  size: string
}>

const marqueeTech = floatingTech.map(({ icon, name, accent }) => ({ icon, name, accent }))

function Home() {
  const roles = ['Back-End Developer', 'Lead Developer', 'Front-End Developer']
  const focusAreas = ['Responsive UI', 'Backend Systems', 'Mobile Projects']
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

      <div className="tech-orbit pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        {floatingTech.map((tech) => (
          <div
            key={`${tech.name}-${tech.x}-${tech.y}`}
            className="tech-orbit-item"
            style={{
              '--orbit-x': tech.x,
              '--orbit-y': tech.y,
              '--orbit-duration': tech.duration,
              '--orbit-delay': tech.delay,
            } as CSSProperties}
          >
            <div
              className="tech-orbit-badge"
              title={tech.name}
              style={{
                '--orbit-accent': tech.accent,
                '--orbit-glow': tech.glow,
                width: tech.size,
                height: tech.size,
              } as CSSProperties}
            >
              <tech.icon aria-hidden="true" />
            </div>
          </div>
        ))}
      </div>

      <div className="relative z-10 w-full max-w-xl text-center md:max-w-lg md:text-left lg:max-w-[38rem]">

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

        <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-[#858ba7] sm:text-[15px] md:mx-0 md:text-base">
          I build clean digital experiences with a strong focus on
          <strong className="font-semibold text-[#e8e8f0]"> responsive interfaces</strong>,
          reliable backend logic, and practical project execution. My work is centered
          on shipping student and personal projects that feel polished, usable, and clear.
        </p>

        <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap md:justify-start">
          <a
            href="#contact"
            className="group relative w-full overflow-hidden rounded-md bg-[#6effc8] px-8 py-3 text-[13px] font-semibold uppercase tracking-widest text-[#080810] transition-all duration-150 active:scale-95 hover:-translate-y-0.5 hover:shadow-[0_0_28px_rgba(110,255,200,0.45)] sm:w-auto"
          >
            <span
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: "linear-gradient(135deg, #ff6ef7, #6effc8)" }}
            />
            <span className="relative z-10">Contact Me</span>
          </a>

          <a
            href="#projects"
            className="w-full rounded-md border border-[#6effc8]/40 bg-[#6effc8]/[0.07] px-8 py-3 text-[13px] font-semibold uppercase tracking-widest text-[#6effc8] transition-all duration-150 active:scale-95 hover:-translate-y-0.5 hover:border-[#6effc8] hover:bg-[#6effc8]/[0.13] hover:shadow-[0_0_20px_rgba(110,255,200,0.2)] sm:w-auto"
          >
            View My Work →
          </a>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          {focusAreas.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/8 bg-[#0d1118]/80 px-4 py-4 text-left backdrop-blur-sm"
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#6effc8]">
                Focus
              </p>
              <p className="mt-2 text-sm font-medium text-[#dfe3ef]">{item}</p>
            </div>
          ))}
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

  <div className="absolute bottom-1 right-0 rounded-xl border border-[#6effc8]/25 bg-[#0e0e1a] px-3 py-2 text-[10px] font-mono text-[#7070a0] sm:bottom-2 sm:px-4 sm:py-2.5 sm:text-[11px] md:right-2">
    <strong className="block text-lg text-[#6effc8] sm:text-xl">BSCS</strong>
    Graduate
  </div>
</div>
      <div className="marquee-wrap absolute inset-x-0 bottom-0 z-20">
        <div className="marquee-track">
          {[...marqueeTech, ...marqueeTech].map((tech, index) => (
            <span key={`${tech.name}-${index}`} className="marquee-item">
              <span
                className="marquee-icon"
                style={{ '--marquee-accent': tech.accent } as CSSProperties}
                aria-hidden="true"
              >
                <tech.icon />
              </span>
              <span>{tech.name}</span>
            </span>
          ))}
        </div>
      </div>
    </section>

    
  )
}

export default Home