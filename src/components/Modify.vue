<template>
  <div class="mt-32 flex justify-center items-center">
    <div class="w-3/12 gap-y-4 flex flex-col items-center">
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 gap-y-4 flex flex-col items-center w-full">
        <div class="my-4 font-bold text-2xl">
          Modifier l'article sur : {{ post.title }}
        </div>
        <div class="mb-4 w-full">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="Title">Titre: </label>
          <input
            type="text"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="name"
            v-model.lazy="post.title" required>
        </div>

        <div class="mb-4 w-full">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="Date">Date: </label>
          <input
            type="text"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="slug"
            v-model.lazy="post.date" required>
        </div>

        <div class="mb-4 w-full">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="Description">Description: </label>
          <textarea
            type="text"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            rows="5"
            name="description"
            v-model.lazy="post.description"></textarea>
        </div>
        <div class=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-4/12">
          <button type="submit" @click.prevent="updateField" class="btn btn-outline btn-sm">Mettre à jour</button>
        </div>
      </form>
      <div class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-4/12">
        <router-link :to="{name :'Home'}" class="post__back">← Retour</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapFields } from 'vuex-map-fields';

export default {
  name: 'Post',
  props: ['id'],
  components: {
  },
  created () {
    this.$store.dispatch('setCurrentPost', this.id);
  },
  computed: {
    post: function() {
      console.log(this.$store.getters.getCurrentPost)
      return this.$store.getters.getCurrentPost;
    },
    // The `mapFields` function takes an array of
    // field names and generates corresponding
    // computed properties with getter and setter
    // functions for accessing the Vuex store.
    ...mapFields([
      'post.id',
      'post.title',
      'post.description',
      'post.date',
    ]),
  },
  data: function () {
  },
  methods: {
  }
}
</script>