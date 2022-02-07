<template>
  <div class="bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
    <div class="text-3xl mb-8 underline">
      <h1>Articles</h1>
    </div>
    <div class="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
      <div class="mt-6 pt-10 grid gap-16 lg:grid-cols-2 lg:gap-x-32 lg:gap-y-12">
        <div v-for="(post, idx) in posts" :key="idx">
          <p class="text-sm text-gray-500">
            <time datetime="">Année de sortie du film: {{post.date}}</time>
          </p>
          <a href="#" class="mt-2 block">
            <p class="text-xl font-semibold text-gray-900">{{post.title}}</p>
            <p class="mt-3 text-base text-gray-500">{{post.description}}</p>
          </a>
            <button class="mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                <router-link class="hover:text-gray-200 px-8 h-full flex items-center" :to="{name: 'post', params : { id : post.id}}">Modifier l'article</router-link>
            </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Posts',
  computed:  {
    posts() {
      return this.$store.getters.getPosts;
    }
  }
}
</script>
