import React from 'react';
import { Mail, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="bg-slate-950 py-20 text-slate-200">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <div className="mb-10">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Get in touch</h2>
          <p className="mt-2 max-w-2xl text-slate-400">
            Have a project in mind or just want to say hi? Let's build something great together.
          </p>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            const data = new FormData(e.currentTarget);
            const name = data.get('name');
            const email = data.get('email');
            const message = data.get('message');
            const subject = encodeURIComponent(`Portfolio contact from ${name}`);
            const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`);
            window.location.href = `mailto:kevin@example.com?subject=${subject}&body=${body}`;
          }}
          className="grid gap-6 rounded-xl border border-white/5 bg-white/5 p-6 backdrop-blur sm:grid-cols-2"
        >
          <div className="sm:col-span-1">
            <label htmlFor="name" className="block text-sm text-slate-300">
              Name
            </label>
            <input
              id="name"
              name="name"
              required
              className="mt-2 w-full rounded-md border border-white/10 bg-slate-900/60 px-3 py-2 text-white outline-none ring-0 placeholder:text-slate-500 focus:border-cyan-400/40"
              placeholder="Jane Doe"
            />
          </div>
          <div className="sm:col-span-1">
            <label htmlFor="email" className="block text-sm text-slate-300">
              Email
            </label>
            <div className="mt-2 flex items-center gap-2 rounded-md border border-white/10 bg-slate-900/60 px-3">
              <Mail className="h-4 w-4 text-slate-400" />
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full bg-transparent py-2 text-white outline-none placeholder:text-slate-500"
                placeholder="you@example.com"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm text-slate-300">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="mt-2 w-full rounded-md border border-white/10 bg-slate-900/60 px-3 py-2 text-white outline-none placeholder:text-slate-500 focus:border-cyan-400/40"
              placeholder="Tell me about your project..."
            />
          </div>
          <div className="sm:col-span-2">
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-lg bg-cyan-400 px-5 py-3 font-medium text-slate-900 shadow-xl shadow-cyan-500/20 transition hover:bg-cyan-300"
            >
              <Send className="h-4 w-4" /> Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
