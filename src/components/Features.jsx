import { motion } from 'framer-motion'
import { Check, Zap, Shield, Sparkles } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'Blazing performance',
    desc: 'Optimized React + Vite setup with buttery-smooth parallax and 3D rendering.'
  },
  {
    icon: Shield,
    title: 'Secure foundation',
    desc: 'Production-ready patterns with environment-based API access and safe defaults.'
  },
  {
    icon: Sparkles,
    title: 'Delightful motion',
    desc: 'Framer Motion transitions and soft glows for a premium feel.'
  },
]

export default function Features() {
  return (
    <section id="features" className="relative z-10 bg-slate-950 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Everything you need to ship fast</h2>
          <p className="mt-3 text-slate-300">A complete SaaS landing with interactive hero, parallax, and polished sections.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:bg-white/10"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/20 text-cyan-300">
                <Icon size={20} />
              </div>
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-slate-300">{desc}</p>
              <div className="mt-4 inline-flex items-center gap-2 text-cyan-300/90">
                <Check size={16} />
                <span className="text-xs">Included by default</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
