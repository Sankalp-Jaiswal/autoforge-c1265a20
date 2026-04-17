// Fallback mock data to ensure the app works even without the backend running
const mockPosts = [
  {
    id: '1',
    title: 'The Future of React Server Components',
    slug: 'future-of-react-server-components',
    excerpt: 'An in-depth look at how Server Components are reshaping the React ecosystem and what it means for frontend architecture.',
    content: '# The Future of React Server Components\n\nReact Server Components (RSC) represent one of the most significant architectural shifts in the React ecosystem since Hooks. By allowing components to render exclusively on the server, we can significantly reduce the amount of JavaScript sent to the client.\n\n## Why Server Components?\n\nTraditionally, React has been a client-side library. While Server-Side Rendering (SSR) helped with initial load times and SEO, it still required hydrating the entire application on the client.\n\n```jsx\n// A traditional client component\nimport { useState } from \'react\';\n\nexport default function Counter() {\n  const [count, setCount] = useState(0);\n  return <button onClick={() => setCount(count + 1)}>{count}</button>;\n}\n```\n\nWith RSC, we can fetch data directly from the database without exposing sensitive credentials or shipping large dependencies to the browser.\n\n### Key Benefits:\n1. **Zero Bundle Size:** Server components don\'t add to your client JavaScript bundle.\n2. **Direct Backend Access:** Safely query databases directly from your components.\n3. **Automatic Code Splitting:** Client components are automatically code-split.\n\n> "RSCs are not a replacement for SSR; they are a complementary technology that solves a different set of problems."\n\nThe transition might take time, but the performance benefits are too significant to ignore.',
    author: 'Alex',
    date: 'Oct 12, 2023',
    category: 'Engineering',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=800&fit=crop&fm=png',
    tags: ['React', 'Architecture', 'Performance']
  },
  {
    id: '2',
    title: 'Mastering Minimalist UI Design',
    slug: 'mastering-minimalist-ui-design',
    excerpt: 'How to create interfaces that are both beautiful and highly functional by embracing whitespace and removing the unnecessary.',
    content: '# Mastering Minimalist UI Design\n\nMinimalism in UI design is not just about having less on the screen; it\'s about having exactly what is needed and nothing more. It\'s a delicate balance between aesthetics and usability.\n\n## The Power of Whitespace\n\nWhitespace (or negative space) is the empty space between elements. It\'s arguably the most critical tool in a designer\'s arsenal.\n\n*   **Improves Readability:** Giving text room to breathe makes it easier to scan.\n*   **Creates Focus:** By surrounding an element with whitespace, you draw the user\'s eye directly to it.\n*   **Establishes Hierarchy:** Grouping related elements and separating distinct sections creates a natural flow.\n\n## Typography as Design\n\nWhen you strip away heavy graphics and borders, typography becomes the primary visual element. Choosing the right typeface and establishing a clear scale is paramount.\n\n> "Good design is as little design as possible." - Dieter Rams\n\nEmbrace the void. Let your content shine.',
    author: 'Alex',
    date: 'Sep 28, 2023',
    category: 'Design',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=800&fit=crop&fm=png',
    tags: ['UI/UX', 'Design Systems', 'Typography']
  },
  {
    id: '3',
    title: 'Building Scalable APIs with Node.js',
    slug: 'building-scalable-apis',
    excerpt: 'Best practices for structuring, securing, and scaling your Node.js backend services for production environments.',
    content: '# Building Scalable APIs with Node.js\n\nNode.js is fantastic for building fast, scalable network applications. However, without a solid architecture, a Node application can quickly become an unmaintainable monolith.\n\n## Layered Architecture\n\nSeparation of concerns is critical. A common pattern is the 3-layer architecture:\n\n1.  **Controllers:** Handle incoming HTTP requests and responses.\n2.  **Services:** Contain the core business logic.\n3.  **Data Access:** Interact with the database.\n\n```javascript\n// Example Service Layer\nclass UserService {\n  async createUser(userData) {\n    // Validate data\n    // Hash password\n    // Save to DB\n    return user;\n  }\n}\n```\n\nBy keeping these layers distinct, your code becomes easier to test, refactor, and scale.',
    author: 'Alex',
    date: 'Sep 15, 2023',
    category: 'Engineering',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=800&fit=crop&fm=png',
    tags: ['Node.js', 'Backend', 'Architecture']
  }
];

const mockCategories = [
  { name: 'Engineering', count: 45 },
  { name: 'Design', count: 32 },
  { name: 'Tutorials', count: 28 },
  { name: 'Career', count: 15 },
  { name: 'Lifestyle', count: 12 }
];

export const fetchPosts = async (category?: string, search?: string) => {
  try {
    const url = new URL('/api/posts', window.location.origin);
    if (category && category !== 'All') url.searchParams.append('category', category);
    if (search) url.searchParams.append('search', search);
    
    const res = await fetch(url.toString());
    if (!res.ok) throw new Error('API Error');
    return await res.json();
  } catch (err) {
    console.warn('Backend unavailable, using mock data for posts.');
    let filtered = [...mockPosts];
    if (category && category !== 'All') {
      filtered = filtered.filter(p => p.category.toLowerCase() === category.toLowerCase());
    }
    if (search) {
      const q = search.toLowerCase();
      filtered = filtered.filter(p => p.title.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q));
    }
    return { posts: filtered, total: filtered.length };
  }
};

export const fetchPostBySlug = async (slug: string) => {
  try {
    const res = await fetch(`/api/posts/${slug}`);
    if (!res.ok) throw new Error('API Error');
    return await res.json();
  } catch (err) {
    console.warn('Backend unavailable, using mock data for post detail.');
    const post = mockPosts.find(p => p.slug === slug);
    if (!post) throw new Error('Not Found');
    return post;
  }
};

export const fetchCategories = async () => {
  try {
    const res = await fetch('/api/categories');
    if (!res.ok) throw new Error('API Error');
    return await res.json();
  } catch (err) {
    console.warn('Backend unavailable, using mock data for categories.');
    return { categories: mockCategories };
  }
};
