import React from 'react'
import Hero3D from './components/Hero3D'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Nav */}
      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-slate-950/50 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10">
          <a href="#home" className="text-lg font-semibold tracking-tight">
            <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-400 bg-clip-text text-transparent">Kevin</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm text-slate-300 sm:flex">
            <a href="#about" className="transition hover:text-white">About</a>
            <a href="#projects" className="transition hover:text-white">Projects</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      {/* Content */}
      <main>
        <Hero3D />
        <About />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-slate-950 py-10 text-center text-sm text-slate-400">
        <p>© {new Date().getFullYear()} Kevin — Built with love and a bit of caffeine.</p>
      </footer>
    </div>
  )
}

export default App
