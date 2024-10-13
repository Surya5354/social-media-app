const Post = require('../models/Post');

// Create a new post
exports.createPost = async (req, res) => {
  try {
    const post = new Post({
      content: req.body.content,
      author: req.user.id,
    });
    await post.save();
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ error: 'Error creating post' });
  }
};

// Get all posts
exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate('author', 'username');
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching posts' });
  }
};
