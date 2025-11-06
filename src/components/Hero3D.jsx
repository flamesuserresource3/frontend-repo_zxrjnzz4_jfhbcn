import React from 'react';
import Spline from '@splinetool/react-spline';
import { Github, Linkedin, Mail, Rocket } from 'lucide-react';

const Hero3D = () => {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient + grid overlay that doesn't block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.06),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(0,255,255,0.06),transparent_35%)]" />

      <div className="relative mx-auto flex min-h-screen max-w-6xl items-center px-6 sm:px-10">
        <div className="max-w-2xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur">
            <Rocket className="h-4 w-4 text-cyan-400" />
            <span className="text-xs uppercase tracking-widest text-cyan-300/90">Full‑Stack Web Programmer</span>
          </div>

          <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            Hi, I'm <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-400 bg-clip-text text-transparent">Kevin</span>
          </h1>
          <p className="mt-4 max-w-xl text-base text-slate-300 sm:text-lg">
            I design and build thoughtful web experiences—fast, scalable, and delightful. From robust backends to pixel‑perfect frontends.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-cyan-400 px-5 py-3 font-medium text-slate-900 shadow-xl shadow-cyan-500/20 transition hover:bg-cyan-300"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-lg border border-white/10 bg-white/5 px-5 py-3 font-medium text-white backdrop-blur transition hover:border-white/20 hover:bg-white/10"
            >
              Contact Me
            </a>
            <div className="ml-2 flex items-center gap-3">
              <a href="#" aria-label="GitHub" className="rounded-full border border-white/10 bg-white/5 p-3 transition hover:border-white/20 hover:bg-white/10">
                <Github className="h-5 w-5 text-white" />
              </a>
              <a href="#" aria-label="LinkedIn" className="rounded-full border border-white/10 bg-white/5 p-3 transition hover:border-white/20 hover:bg-white/10">
                <Linkedin className="h-5 w-5 text-white" />
              </a>
              <a href="#contact" aria-label="Email" className="rounded-full border border-white/10 bg-white/5 p-3 transition hover:border-white/20 hover:bg-white/10">
                <Mail className="h-5 w-5 text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero3D;
