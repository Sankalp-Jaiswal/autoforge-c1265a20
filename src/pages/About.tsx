import { Code, PenTool, TrendingUp, Download } from 'lucide-react';

export default function About() {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                About the Author
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                Hi, I'm Alex. A software engineer and designer passionate about crafting exceptional digital experiences. I believe that the best products live at the intersection of beautiful design and robust engineering.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                Over the past decade, I've worked with startups and enterprise companies alike, helping them scale their frontend architectures and establish cohesive design systems.
              </p>
              <button className="px-6 py-3 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-medium hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors inline-flex items-center gap-2">
                <Download className="w-4 h-4" /> Download Resume
              </button>
            </div>
            <div className="order-1 md:order-2 relative">
              <div className="absolute inset-0 bg-indigo-500 rounded-3xl translate-x-4 translate-y-4 opacity-20"></div>
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=800&fit=crop&fm=png" 
                alt="Alex" 
                className="relative rounded-3xl object-cover w-full aspect-square shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Themes Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">What I Write About</h2>
            <p className="text-slate-600 dark:text-slate-400">The core pillars of this blog.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[ 
              {
                icon: Code,
                title: 'Frontend Development',
                desc: 'Deep dives into React, TypeScript, state management, and building performant web applications.'
              },
              {
                icon: PenTool,
                title: 'UI/UX Design',
                desc: 'Exploring design systems, accessibility, typography, and the principles of minimalist interfaces.'
              },
              {
                icon: TrendingUp,
                title: 'Career Growth',
                desc: 'Advice on interviewing, productivity, leadership, and navigating the tech industry.'
              }
            ].map((item, i) => (
              <div key={i} className="glass-card p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300">
                <div className="w-12 h-12 rounded-xl bg-indigo-100 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-6">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{item.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center">My Journey</h2>
          
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 dark:before:via-slate-700 before:to-transparent">
            {[ 
              { year: '2024', title: 'Published First eBook', desc: 'Released "The Pragmatic Frontend" detailing large-scale React patterns.' },
              { year: '2022', title: 'Reached 10k Monthly Readers', desc: 'The blog hit a major milestone, fostering a growing community.' },
              { year: '2020', title: 'Launched This Blog', desc: 'Started writing to solidify my own knowledge and share it with others.' },
              { year: '2018', title: 'Started Coding Journey', desc: 'Wrote my first lines of HTML/CSS and never looked back.' },
            ].map((item, i) => (
              <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white dark:border-slate-900 bg-indigo-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-card p-6 rounded-2xl">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-bold text-slate-900 dark:text-white text-lg">{item.title}</h3>
                    <span className="text-sm font-semibold text-indigo-500">{item.year}</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
