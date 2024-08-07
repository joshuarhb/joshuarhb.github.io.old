<template>
  <div class="BlogPage">
    <h1>Blog</h1>
    <div v-for="post in blogPosts" :key="post.id" class="blog-post">
      <h2>{{ post.title }}</h2>
      <p>{{ post.description }}</p>
      <p>{{ formatDate(post.date) }}</p>
      <router-link :to="`/blog/${post.slug}`">Read More</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blogPosts: [],
    };
  },
  async mounted() {
    try {
      console.log('Fetching blog post filenames...');
      const response = await fetch('../content/blogposts.json');
      if (!response.ok) {
        throw new Error(`Failed to fetch blogposts.json: ${response.statusText}`);
      }
      const data = await response.json();
      console.log('Blog post filenames fetched:', data);
      const blogPostFilenames = data.blogposts;

      if (Array.isArray(blogPostFilenames)) {
        this.blogPosts = await Promise.all(
          blogPostFilenames.map(async (filename) => {
            console.log(`Fetching blog post: ${filename}`);
            const postResponse = await fetch(`../content/blogposts/${filename}`);
            if (!postResponse.ok) {
              throw new Error(`Failed to fetch ${filename}: ${postResponse.statusText}`);
            }
            const postData = await postResponse.json();
            postData.date = new Date(postData.date);
            console.log(`Fetched blog post data:`, postData);
            return postData;
          })
        );
      } else {
        console.error('blogPostFilenames is not an array:', blogPostFilenames);
        // Handle the error appropriately
      }
      this.blogPosts.sort((a, b) => b.date - a.date);
    } catch (error) {
      console.error('Error fetching blog posts:', error);
      // Optionally, display an error message to the user
    }
  },
  methods: {
    formatDate(date) {
      return date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      });
    }
  }
};
</script>