<template>
  <div class="tw-pt-[20px]">
    <div class="row tw-justify-center tw-mb-3">
      <div class="tw-p-1 tw-max-h-1 tw-mt-1 tw-me-1 bg-primary tw-min-w-[30px] tw-rounded-md"></div>
      <p class="tw-text-[#FF7F50] tw-mb-0 tw-text-sm">OUR SERVICES</p>
    </div>
    <h3 class="tw-text-center tw-mt-0 tw-text-[#FF7F50] tw-font-custom tw-font-bold">
      WHAT WE OFFER
    </h3>
    <p class="tw-text-justify tw-text-white tw-text-md tw-mx-[60px] tw-mb-[25px]">
      PENDIG Digital Marketing Company offers a wide range of services designed to elevate your
      brand's presence in the digital space. Each service is crafted to address specific aspects of
      your marketing needs, ensuring that your business not only competes but thrives in today’s
      competitive online environment.
    </p>

    <div class="row tw-flex-wrap tw-justify-center tw-gap-3">
      <q-card v-for="(offer, index) in offers" :key="index" class="my-card">
        <img :src="offer.img" class="tw-h-[170px] tw-w-[150px]" />

        <q-card-section class="tw-text-center tw-pb-2">
          <div class="tw-text-[16px] tw-font-bold">{{ offer.name }}</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <p class="tw-max-w-[230px] tw-mx-auto tw-text-center tw-text-[13px]">
            {{ offer.desc }}
          </p>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const offers = ref([
  {
    name: 'Digital Strategy Development',
    desc: 'Crafting comprehensive plans to enhance your online presence and achieve your business goals.',
    img: '/icons/service1.png',
  },
  {
    name: 'Search Engine Optimization (SEO)',
    desc: 'Improving your website’s visibility and ranking on search engines to attract more organic traffic.',
    img: '/icons/service2.png',
  },
  {
    name: 'Content Creation and Marketing',
    desc: 'Developing engaging and relevant content to attract and retain your target audience.',
    img: '/icons/service3.png',
  },
  {
    name: 'Social Media Management',
    desc: 'Managing and optimizing your social media profiles to boost engagement and grow your brand’s online presence.',
    img: '/icons/service4.png',
  },
  {
    name: 'Email Marketing',
    desc: 'Creating and managing email campaigns to nurture leads and build customer relationships.',
    img: '/icons/service5.png',
  },
  {
    name: 'Paid Advertising Campaigns',
    desc: 'Designing and executing targeted ad campaigns to drive traffic and conversions.',
    img: '/icons/service6.png',
  },
  {
    name: 'Analytics and Reporting',
    desc: 'Providing detailed insights and performance metrics to measure and improve your marketing efforts.',
    img: '/icons/service7.png',
  },
  {
    name: 'Website Design and Optimization',
    desc: 'Designing and enhancing websites for a better user experience and higher conversion rates.',
    img: '/icons/service8.png',
  },
])
</script>

<style scoped></style>
