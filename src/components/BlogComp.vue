<template>
  <div class="tw-px-4 tw-pt-[35px] tw-text-center">
    <p
      class="tw-text-[35px] tw-font-custom tw-mb-[30px] tw-text-center tw-font-[600] tw-text-[#FF7F50]"
    >
      Our Latest Blog Posts
    </p>
    <div class="row tw-justify-between tw-mx-[95px]">
      <EachPost v-for="(post, index) in blogPost.slice(0, 3)" :key="index" :blog="post" />
    </div>
    <q-btn
      color="primary"
      no-caps
      elevated
      label="See More"
      class="tw-min-w-[200px] tw-max-h-[10px] tw-mt-[70px] tw-text-center tw-rounded-lg hover:tw-underline"
      @click="onClick"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import EachPost from './EachPost.vue'

const blogPost = ref([
  {
    title: 'The Power of Social Media Marketing in 2024',
    img: '/icons/blog1.png',
  },
  {
    title: 'Mastering SEO: Top Tips for Ranking Higher in 2024',
    img: '/icons/blog2.png',
  },
  {
    title: '10 Proven Strategies to Grow Your YouTube Channel',
    img: '/icons/blog3.png',
  },
])
</script>

<style scoped></style>
