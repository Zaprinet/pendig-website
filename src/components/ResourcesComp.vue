<template>
  <div class="tw-py-4">
    <div class="row tw-justify-center tw-mb-1 tw-mt-[35px]">
      <div
        class="tw-p-[3px] tw-max-h-1 tw-my-auto tw-me-2 bg-primary tw-min-w-[30px] tw-rounded-md"
      ></div>
      <p class="tw-text-[#FF7F50] tw-font-custom tw-mb-0 tw-text-[60px] tw-uppercase tw-font-bold">
        Resources
      </p>
    </div>
    <p class="tw-text-[16px] tw-font-[600] tw-text-center">
      Enhance Your Business with Our Premium Resources
    </p>
    <div>
      <EachResource v-for="(item, index) in resources" :key="index" :resource="item" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import EachResource from './EachResource.vue'

const resources = ref([
  {
    title: 'Comprehensive YouTube Growth Blueprint for Expanding Your Channel',
    img: '/icons/resourse1.png',
  },
  {
    title: 'Ultimate Content Creation Masterclass for Engaging Your Audience',
    img: '/icons/resource2.png',
  },
  {
    title: 'Complete Social Media Growth Toolkit for Maximizing Your Reach',
    img: '/icons/resource3.png',
  },
  {
    title: 'In-Depth Influencer Marketing Playbook to Amplify Your Brand',
    img: '/icons/resource4.png',
  },
])
</script>

<style scoped></style>
