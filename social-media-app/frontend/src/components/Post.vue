<template>
  <div class="post">
    <h3>{{ post.author.username }}</h3>
    <p>{{ post.content }}</p>
    <button @click="likePost(post._id)">Like</button>
    <p>Likes: {{ post.likes.length }}</p>
  </div>
</template>

<script>
export default {
  props: ['post'],
  methods: {
    likePost(postId) {
      this.$emit('like', postId);
    },
  },
};
</script>

<style scoped>
.post {
  border: 1px solid #ccc;
  padding: 20px;
  margin-bottom: 10px;
}
</style>
