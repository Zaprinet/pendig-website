<template>
  <div class="row tw-py-4 tw-px-5 tw-justify-between tw-align-middle -tw-mb-2">
    <q-img :src="props.resource.img" class="tw-w-[350px]" />
    <h4
      class="tw-text-[30px] tw-my-auto tw-font-bold tw-text-[#646464] tw-text-center tw-max-w-[400px]"
    >
      {{ props.resource.title }}
    </h4>
    <q-btn
      color="primary"
      no-caps
      elevated
      label="Purchase"
      class="tw-min-w-[200px] tw-max-h-[10px] tw-my-auto tw-me-6 tw-rounded-lg hover:tw-underline"
      @click="onClick"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  resource: Object,
})
</script>

<style scoped></style>
