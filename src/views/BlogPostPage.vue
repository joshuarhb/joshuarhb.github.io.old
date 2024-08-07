<template>

    <div v-if="post">

        <h1>{{ post.title }}</h1>
        <p>{{ post.content }}</p>
        <p>{{ post.date }}</p>
        <p>{{ post.author }}</p>
        <p>{{ post.tags }}</p>
        <p>{{ post.likes }}</p>
        <p>{{ post.dislikes }}</p>
        <p>{{ post.views }}</p>
        <p>{{ post.shares }}</p>
        <p>{{ post.comments }}</p>
    </div>
</template>

<script>
export default {
  data() {
    return {
      post: null
    }
  },
  async mounted() {
    const slug = this.$route.params.slug
    const response = await fetch(`/content/blogposts/${slug}.json`)
    this.post = await response.json()
  }
}
</script>