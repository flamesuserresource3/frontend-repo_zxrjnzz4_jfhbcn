import React from 'react';
import { Code2, Globe, Server } from 'lucide-react';

const projects = [
  {
    title: 'Realtime Chat Platform',
    description:
      'WebSockets powered chat with rooms, typing indicators, and message persistence. Built with React, FastAPI, and MongoDB.',
    icon: <Globe className="h-5 w-5 text-cyan-400" />,
    tags: ['React', 'FastAPI', 'MongoDB', 'WebSockets'],
    link: '#',
  },
  {
    title: 'E‑commerce Dashboard',
    description:
      'Analytics dashboards with filtering, charts, and server‑side pagination. Role‑based access and audit logs included.',
    icon: <Server className="h-5 w-5 text-cyan-400" />,
    tags: ['Next.js', 'PostgreSQL', 'Prisma', 'Tailwind'],
    link: '#',
  },
  {
    title: 'UI Component Library',
    description:
      'A cohesive design system with accessible, themeable components and documentation site.',
    icon: <Code2 className="h-5 w-5 text-cyan-400" />,
    tags: ['TypeScript', 'Storybook', 'Radix UI'],
    link: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-slate-950 py-20 text-slate-200">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Selected Projects</h2>
            <p className="mt-2 max-w-2xl text-slate-400">
              A few highlights that showcase my approach to building resilient, modern products.
            </p>
          </div>
          <a
            href="#contact"
            className="hidden rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white backdrop-blur transition hover:border-white/20 hover:bg-white/10 sm:block"
          >
            Work with me
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <a
              key={p.title}
              href={p.link}
              className="group rounded-xl border border-white/5 bg-gradient-to-b from-white/10 to-white/[0.06] p-6 transition hover:border-white/10 hover:from-white/20 hover:to-white/[0.12]"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900/60 ring-1 ring-white/10">
                  {p.icon}
                </div>
                <h3 className="text-lg font-semibold text-white">{p.title}</h3>
              </div>
              <p className="mt-3 text-sm text-slate-300">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
