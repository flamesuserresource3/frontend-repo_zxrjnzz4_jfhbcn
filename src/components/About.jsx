import React from 'react';

const About = () => {
  return (
    <section id="about" className="relative bg-slate-950 py-20 text-slate-200">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <div className="mb-10">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            About
            <span className="ml-2 bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">Kevin</span>
          </h2>
          <p className="mt-3 max-w-3xl text-slate-400">
            I'm a full‑stack web programmer who loves building high‑impact products. I specialize in modern
            JavaScript frameworks, clean architecture, and developer experience. My work blends strong UI craft
            with reliable, scalable backends.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl border border-white/5 bg-white/5 p-6 backdrop-blur">
            <h3 className="text-lg font-semibold text-white">Core Skills</h3>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-300">
              <li>React, TypeScript, Next.js, Vite</li>
              <li>Node.js, Express, FastAPI</li>
              <li>MongoDB, PostgreSQL, Prisma, Mongoose</li>
              <li>Design systems, UI engineering, accessibility</li>
            </ul>
          </div>
          <div className="rounded-xl border border-white/5 bg-white/5 p-6 backdrop-blur">
            <h3 className="text-lg font-semibold text-white">What I Value</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              <li>Performance first — ship fast, stay fast</li>
              <li>Readable, maintainable code</li>
              <li>Thoughtful UX with micro‑interactions</li>
              <li>Automation and strong CI/CD pipelines</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
