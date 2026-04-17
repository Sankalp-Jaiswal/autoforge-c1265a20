import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { Calendar, Clock, ArrowLeft, Twitter } from 'lucide-react';
import { fetchPostBySlug, fetchPosts } from '../services/api';
import PostCard from '../components/PostCard';

export default function PostDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<any>(null);
  const [relatedPosts, setRelatedPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!slug) return;
    setLoading(true);
    setError(false);
    
    fetchPostBySlug(slug)
      .then(data => {
        setPost(data);
        // Fetch related posts based on category
        fetchPosts(data.category).then(related => {
          setRelatedPosts(related.posts.filter((p: any) => p.id !== data.id).slice(0, 2));
        });
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Post Not Found</h1>
        <p className="text-slate-600 dark:text-slate-400 mb-8">The article you're looking for doesn't exist or has been moved.</p>
        <Link to="/blog" className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-medium hover:bg-indigo-700 transition-colors">
          Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <article className="animate-fade-in pb-20">
      {/* Hero Header */}
      <header className="relative h-[60vh] min-h-[400px] w-full flex items-center justify-center">
        <div className="absolute inset-0">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-[2px]"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link to="/blog" className="inline-flex items-center gap-2 text-indigo-300 hover:text-white transition-colors mb-8 text-sm font-medium">
            <ArrowLeft className="w-4 h-4" /> Back to all posts
          </Link>
          <div className="mb-6">
            <span className="px-4 py-1.5 rounded-full bg-indigo-500/20 text-indigo-200 border border-indigo-500/30 text-sm font-semibold tracking-wider uppercase">
              {post.category}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center justify-center gap-6 text-slate-300 text-sm font-medium">
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" /> {post.date}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" /> {post.readTime}
            </span>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20">
        <div className="glass-card rounded-3xl p-8 md:p-12 mb-16 bg-white dark:bg-slate-900">
          <div className="prose prose-lg dark:prose-invert prose-indigo max-w-none">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>
          
          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-wrap gap-2">
            {post.tags?.map((tag: string) => (
              <span key={tag} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-lg text-sm font-medium">
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Author Bio */}
        <div className="glass-card p-8 rounded-3xl flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left mb-16">
          <img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&fm=png" 
            alt={post.author} 
            className="w-24 h-24 rounded-full object-cover shadow-lg border-4 border-white dark:border-slate-800"
          />
          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Written by {post.author}</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              Software engineer and designer passionate about crafting exceptional digital experiences. 
              Sharing insights on web development and design.
            </p>
            <a href="#" className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-medium hover:underline">
              <Twitter className="w-4 h-4" /> Follow on Twitter
            </a>
          </div>
        </div>
      </div>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
            You might also like
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {relatedPosts.map(rp => (
              <PostCard key={rp.id} post={rp} />
            ))}
          </div>
        </div>
      )}
    </article>
  );
}
