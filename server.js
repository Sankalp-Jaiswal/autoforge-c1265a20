const express = require('express');
const cors = require('cors');
const { posts, categories } = require('./data');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Get all posts (with optional search/filter)
app.get('/api/posts', (req, res) => {
  const { category, search } = req.query;
  let filteredPosts = [...posts];

  if (category && category !== 'All') {
    filteredPosts = filteredPosts.filter(p => p.category.toLowerCase() === category.toLowerCase());
  }

  if (search) {
    const query = search.toLowerCase();
    filteredPosts = filteredPosts.filter(p => 
      p.title.toLowerCase().includes(query) || 
      p.excerpt.toLowerCase().includes(query)
    );
  }

  res.json({ posts: filteredPosts, total: filteredPosts.length });
});

// Get single post by slug
app.get('/api/posts/:slug', (req, res) => {
  const post = posts.find(p => p.slug === req.params.slug);
  if (post) {
    res.json(post);
  } else {
    res.status(404).json({ message: 'Post not found' });
  }
});

// Get categories
app.get('/api/categories', (req, res) => {
  res.json({ categories });
});

// Contact form submission
app.post('/api/contact', (req, res) => {
  // In a real app, send an email here
  console.log('Contact form received:', req.body);
  res.json({ success: true, message: 'Message sent successfully!' });
});

// Newsletter subscription
app.post('/api/newsletter', (req, res) => {
  console.log('Newsletter sub:', req.body);
  res.json({ success: true, message: 'Subscribed successfully!' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
