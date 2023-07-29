<template>
  <div class="container-fluid pt-3">
    <h1>Liste des Postes</h1>

    <div v-if="posts.length > 0">
      <div v-for="post in posts" :key="post.id">
        <h2>{{ post.title }}</h2>
        <p>{{ post.content }}</p>
        <small>Date de création : {{ post.created_at }}</small>
      </div>
    </div>

    <div v-else>
      <p>Aucun poste trouvé</p>
    </div>
    <!-- <pagination :data="posts" @pagination-change-page="getResults" class="mt-5"></pagination> -->
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      posts: []
    };
  },
  async created() {
    try {
      const response = await axios.get('/api/posts');
      this.posts = response.data;
    } catch (error) {
      console.error(error);
    }
  },
//   methods: {
//     getResults(page = 1) {
//         axios.get('/api/posts?page=' + page)
//         .then(response => {
//             this.posts = response.data;
//         });
//     }
//   }
};
</script>
