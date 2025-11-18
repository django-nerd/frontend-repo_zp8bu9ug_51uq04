import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'

function App() {
  return (
    <div className="min-h-screen w-full bg-slate-950 text-white">
      {/* Nav */}
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <a href="#" className="flex items-center gap-2">
            <span className="inline-block h-3 w-3 rounded-sm bg-cyan-400" />
            <span className="font-semibold tracking-tight">Parallax SaaS</span>
          </a>
          <nav className="hidden gap-6 text-sm text-slate-300 sm:flex">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="/test" className="hover:text-white">System Test</a>
          </nav>
          <a href="#pricing" className="rounded-lg bg-cyan-500 px-3 py-1.5 text-sm font-semibold text-slate-900 hover:bg-cyan-400">Get started</a>
        </div>
      </header>

      <main className="pt-16">
        <Hero />
        <Features />
        <Pricing />

        {/* Footer */}
        <footer className="border-t border-white/10 bg-slate-950 py-10 text-center text-sm text-slate-400">
          © {new Date().getFullYear()} Parallax SaaS. All rights reserved.
        </footer>
      </main>
    </div>
  )
}

export default App
