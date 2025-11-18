import { motion } from 'framer-motion'

const tiers = [
  { name: 'Starter', price: '$0', desc: 'Great for trying things out', features: ['Basic components', 'Email support', 'Community'] },
  { name: 'Pro', price: '$19', highlight: true, desc: 'Everything to launch', features: ['All Starter', '3D Hero & Parallax', 'Priority support'] },
  { name: 'Scale', price: '$49', desc: 'For growing teams', features: ['All Pro', 'Custom sections', 'SLAs'] },
]

export default function Pricing() {
  return (
    <section id="pricing" className="relative z-10 bg-slate-950 py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-12 max-w-xl text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Simple pricing</h2>
          <p className="mt-3 text-slate-300">Choose a plan that fits. Upgrade anytime.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`rounded-2xl border p-6 backdrop-blur ${t.highlight ? 'border-cyan-400/40 bg-cyan-400/10 shadow-[0_0_40px_rgba(34,211,238,0.25)]' : 'border-white/10 bg-white/5'}`}
            >
              <div className="flex items-baseline justify-between">
                <h3 className="text-xl font-semibold text-white">{t.name}</h3>
                <span className="text-3xl font-extrabold text-white">{t.price}</span>
              </div>
              <p className="mt-2 text-sm text-slate-300">{t.desc}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                {t.features.map(f => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#" className={`mt-6 inline-flex w-full items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold transition ${t.highlight ? 'bg-cyan-400 text-slate-900 hover:bg-cyan-300' : 'border border-white/15 bg-white/5 text-white/90 hover:bg-white/10'}`}>
                Choose {t.name}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
