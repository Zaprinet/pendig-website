<template>
  <div class="row tw-py-4 tw-px-0 tw-justify-between tw-align-middle -tw-mb-2">
    <div class="tw-text-center tw-relative">
      <q-img :src="props.blog.img" class="tw-w-[350px] tw-z-0" />
      <p
        class="tw-w-[250px] tw-absolute tw-z-10 tw-left-[48px] tw-top-[190px] tw-font-bold tw-bg-[#FBF3F0] tw-leading-[1.2] tw-text-[18px] tw-text-[#646464] tw-rounded-md tw-p-2"
      >
        {{ props.blog.title }}
      </p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  blog: Object,
})
</script>

<style scoped></style>
