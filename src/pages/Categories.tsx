import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Folder, Hash, ArrowRight } from 'lucide-react';
import { fetchCategories } from '../services/api';

export default function Categories() {
  const [categories, setCategories] = useState<any[]>([]);

  useEffect(() => {
    fetchCategories().then(data => setCategories(data.categories));
  }, []);

  const tags = ['React', 'NextJS', 'Tailwind', 'CSS', 'Typography', 'Performance', 'CareerAdvice', 'NodeJS', 'DesignSystems', 'UI'];

  return (
    <div className="animate-fade-in">
      <section className="py-20 bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Explore by Topic
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Find exactly what you are looking for by browsing through dedicated topics and popular tags.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-2">
            <Folder className="w-6 h-6 text-indigo-500" /> Categories
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat, i) => (
              <Link 
                key={i} 
                to={`/blog?category=${cat.name}`} 
                className="group glass-card p-8 rounded-2xl hover:-translate-y-1 hover:shadow-xl transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 relative z-10">
                  {cat.name}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 mb-6 relative z-10">
                  {cat.count} published posts
                </p>
                <div className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 dark:text-indigo-400 relative z-10">
                  Browse Articles <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-2">
            <Hash className="w-6 h-6 text-indigo-500" /> Popular Tags
          </h2>
          
          <div className="flex flex-wrap gap-3">
            {tags.map((tag, i) => (
              <Link 
                key={i}
                to={`/blog?search=${tag}`}
                className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-indigo-100 dark:hover:bg-indigo-500/20 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-medium text-sm"
              >
                #{tag}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
