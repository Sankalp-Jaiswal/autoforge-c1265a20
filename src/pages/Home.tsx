import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Users, Award, Mail, Quote } from 'lucide-react';
import PostCard from '../components/PostCard';
import { fetchPosts } from '../services/api';

export default function Home() {
  const [featuredPosts, setFeaturedPosts] = useState<any[]>([]);

  useEffect(() => {
    fetchPosts().then(data => setFeaturedPosts(data.posts.slice(0, 3)));
  }, []);

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-24 lg:pt-24 lg:pb-32">
        <div className="absolute top-0 right-0 -z-10 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-100 via-slate-50 to-slate-50 dark:from-indigo-900/20 dark:via-slate-900 dark:to-slate-900"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl animate-slide-up">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-sm font-semibold mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                </span>
                Available for freelance work
              </div>
              <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 leading-tight">
                Exploring the Intersection of <span className="text-gradient">Design</span> and <span className="text-gradient">Engineering</span>.
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                Hi, I'm Alex. I write about modern web development, UI/UX design, and the journey of building digital products. Join me as we explore the future of the web.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/blog" className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition-all hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/30 flex items-center gap-2">
                  Read Articles <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/about" className="px-6 py-3 rounded-xl glass text-slate-900 dark:text-white font-medium transition-all hover:bg-slate-100 dark:hover:bg-slate-800">
                  More About Me
                </Link>
              </div>
            </div>
            
            <div className="relative hidden lg:block animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-3xl blur-3xl opacity-20 dark:opacity-30"></div>
              <img 
                src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&h=800&fit=crop&fm=png" 
                alt="Workspace" 
                className="relative rounded-3xl shadow-2xl border border-white/20 dark:border-slate-700/50 object-cover w-full h-[500px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-slate-800/50 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[ 
              { icon: BookOpen, label: 'Published Articles', value: '150+' },
              { icon: Users, label: 'Monthly Readers', value: '50k+' },
              { icon: Award, label: 'Years of Writing', value: '5+' },
              { icon: Mail, label: 'Newsletter Subs', value: '12k+' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 mb-4">
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className="text-3xl font-bold text-slate-900 dark:text-white mb-1">{stat.value}</div>
                <div className="text-sm text-slate-500 dark:text-slate-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Featured Posts</h2>
              <p className="text-slate-600 dark:text-slate-400 max-w-2xl">
                Hand-picked articles covering the most important concepts in modern development and design.
              </p>
            </div>
            <Link to="/blog" className="hidden md:flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-medium hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors">
              View all posts <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map(post => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
          
          <div className="mt-10 text-center md:hidden">
            <Link to="/blog" className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-medium">
              View all posts <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-100 dark:bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Reader Reviews</h2>
            <p className="text-slate-600 dark:text-slate-400">What developers and designers are saying about the blog.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[ 
              { quote: "This blog changed how I view frontend development! Clear, concise, and incredibly helpful.", author: "Sarah Jenkins", role: "Senior Dev" },
              { quote: "The most articulate tech writer on the web today. I learn something new from every single post.", author: "Marcus Thorne", role: "CTO" },
              { quote: "I look forward to the weekly newsletter every Sunday morning. It's the perfect start to my week.", author: "Emily Chen", role: "Product Designer" },
            ].map((t, i) => (
              <div key={i} className="glass-card p-8 rounded-2xl relative">
                <Quote className="absolute top-6 right-6 w-8 h-8 text-indigo-500/20" />
                <p className="text-slate-700 dark:text-slate-300 mb-6 relative z-10">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold">
                    {t.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-white text-sm">{t.author}</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-700"></div>
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?w=1200&fm=png')] opacity-20 mix-blend-overlay bg-cover bg-center"></div>
            
            <div className="relative p-12 md:p-16 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Join the Newsletter
              </h2>
              <p className="text-indigo-100 text-lg mb-8 max-w-2xl mx-auto">
                Get the latest articles, tutorials, and exclusive insights delivered straight to your inbox. No spam, unsubscribe anytime.
              </p>
              
              <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-3" onSubmit={e => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  required
                  className="flex-grow px-5 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-indigo-200 focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-sm"
                />
                <button 
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-white text-indigo-600 font-semibold hover:bg-indigo-50 transition-colors shadow-lg"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
