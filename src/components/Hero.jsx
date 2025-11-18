import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  const [scrollY, setScrollY] = useState(0)
  const tickingRef = useRef(false)

  useEffect(() => {
    const onScroll = () => {
      if (!tickingRef.current) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY || window.pageYOffset)
          tickingRef.current = false
        })
        tickingRef.current = true
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Parallax factors
  const splineTranslate = Math.min(scrollY * 0.35, 500) // Move down as user scrolls
  const titleTranslate = -(scrollY * 0.15)
  const glowOpacity = Math.max(0, 1 - scrollY / 500)

  return (
    <section className="relative min-h-[140vh] w-full overflow-hidden bg-slate-950">
      {/* Background gradient accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[60rem] w-[60rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.25),transparent_60%)] blur-3xl" />
        <div className="absolute top-40 right-0 h-[40rem] w-[40rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.25),transparent_60%)] blur-3xl" />
      </div>

      {/* Content container */}
      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 pt-24 sm:pt-28">
        {/* Headline + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ transform: `translateY(${titleTranslate}px)` }}
          className="z-10 text-center"
        >
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200 backdrop-blur">
            <span className="inline-block h-2 w-2 rounded-full bg-cyan-400" />
            Live 3D • Parallax Scroll
          </div>
          <h1 className="mt-6 bg-gradient-to-br from-white via-white to-cyan-200 bg-clip-text text-5xl font-extrabold leading-[1.1] text-transparent sm:text-6xl md:text-7xl">
            Launch your SaaS with immersive 3D
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base text-slate-300 sm:text-lg">
            A modern landing experience with a responsive parallax hero and an interactive 3D centerpiece that gently drifts as you scroll.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center rounded-xl bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-900 shadow-[0_0_30px_rgba(34,211,238,0.4)] transition hover:bg-cyan-400"
            >
              Get started
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/10"
            >
              See features
            </a>
          </div>
        </motion.div>

        {/* Spline 3D Scene with parallax translate */}
        <div className="relative mt-16 h-[700px] w-full max-w-6xl">
          <div
            className="absolute inset-0 rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent shadow-2xl"
            style={{ transform: `translateY(${splineTranslate}px)` }}
          >
            <Spline scene="https://prod.spline.design/N8g2VNcx8Rycz93J/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            {/* Top sheen */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-cyan-500/10 to-transparent" />
          </div>

          {/* Soft glow behind 3D */}
          <div
            className="pointer-events-none absolute inset-x-10 -bottom-10 h-40 rounded-full bg-cyan-400/30 blur-3xl"
            style={{ opacity: glowOpacity }}
          />
        </div>

        {/* Scroll cue */}
        <div className="mt-14 flex items-center gap-2 text-slate-400">
          <div className="h-5 w-3 rounded-full border border-slate-600">
            <div className="mx-auto mt-1 h-1.5 w-1 rounded bg-slate-400 animate-bounce" />
          </div>
          Scroll
        </div>
      </div>
    </section>
  )
}
