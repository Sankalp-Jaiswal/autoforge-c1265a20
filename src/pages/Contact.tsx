import { useState } from 'react';
import { Send, Twitter, Github, Linkedin, Dribbble, Mail } from 'lucide-react';

export default function Contact() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  return (
    <div className="animate-fade-in">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Get in Touch
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Have a question, a project idea, or just want to say hi? I'd love to hear from you. Fill out the form below or reach out on social media.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="glass-card p-8 md:p-10 rounded-3xl">
                {formStatus === 'success' ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Send className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Message Sent!</h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      Thanks for reaching out. I'll get back to you as soon as possible.
                    </p>
                    <button 
                      onClick={() => setFormStatus('idle')}
                      className="mt-8 text-indigo-600 font-medium hover:underline"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Name</label>
                        <input required type="text" className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all" placeholder="John Doe" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Email</label>
                        <input required type="email" className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all" placeholder="john@example.com" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Subject</label>
                      <input required type="text" className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all" placeholder="How can I help you?" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Message</label>
                      <textarea required rows={5} className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all resize-none" placeholder="Your message here..."></textarea>
                    </div>
                    <button 
                      type="submit" 
                      disabled={formStatus === 'submitting'}
                      className="w-full py-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold transition-all flex items-center justify-center gap-2 disabled:opacity-70"
                    >
                      {formStatus === 'submitting' ? 'Sending...' : <><Send className="w-5 h-5" /> Send Message</>}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-8">
              <div className="glass-card p-8 rounded-3xl">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Connect Elsewhere</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[ 
                    { icon: Twitter, name: 'Twitter', color: 'hover:bg-blue-50 hover:text-blue-500 dark:hover:bg-blue-500/10' },
                    { icon: Github, name: 'GitHub', color: 'hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-white' },
                    { icon: Linkedin, name: 'LinkedIn', color: 'hover:bg-blue-50 hover:text-blue-700 dark:hover:bg-blue-700/10' },
                    { icon: Dribbble, name: 'Dribbble', color: 'hover:bg-pink-50 hover:text-pink-500 dark:hover:bg-pink-500/10' },
                  ].map((social, i) => (
                    <a key={i} href="#" className={`flex flex-col items-center justify-center p-6 rounded-2xl border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 transition-all ${social.color}`}>
                      <social.icon className="w-8 h-8 mb-2" />
                      <span className="text-sm font-medium">{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>
              
              <div className="glass-card p-8 rounded-3xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white border-none">
                <Mail className="w-8 h-8 mb-4 opacity-80" />
                <h3 className="text-xl font-bold mb-2">Direct Email</h3>
                <p className="text-indigo-100 mb-4 text-sm">
                  Prefer sending an email directly? Reach out to me at:
                </p>
                <a href="mailto:hello@alex.dev" className="text-lg font-semibold hover:underline">
                  hello@alex.dev
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
