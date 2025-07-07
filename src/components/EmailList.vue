<template>
  <div class="row -tw-mx-[50px] tw-bg-white">
    <div class="tw-relative">
      <q-img src="/icons/iPhone 16 Pro (1).png" class="tw-w-[670px]" />
      <div class="tw-absolute tw-top-[80px] tw-left-[320px]">
        <p class="tw-text-[#FF7F50] tw-text-[40px] tw-font-bold">Let's Stay in Touch</p>
        <p class="tw-text-white tw-w-[95%] tw-font-medium tw-text-[18px]">
          Sign up for my email list below to receive the latest social media tips, industry
          insights, and an exclusive behind-the-scenes look at how I run my business.
        </p>
      </div>
    </div>
    <div class="tw-mx-auto tw-my-auto">
      <q-input
        v-model="name"
        type="text"
        label="Name"
        outlined
        class="tw-rounded-2xl tw-w-[550px] tw-mb-3"
      />
      <q-input
        v-model="email"
        type="text"
        label="Email"
        outlined
        class="tw-rounded-2xl tw-w-[550px] tw-mb-1"
        :rules="[validateEmail]"
      />
      <q-btn
        color="primary"
        label="Join Now"
        no-caps
        @click="onClick"
        class="tw-min-w-[550px] tw-rounded-sm tw-mt-0"
        :disable="!isEmailValid || name.length < 3"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const name = ref('')
const email = ref('')

const isEmailValid = computed(() => {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return pattern.test(email.value)
})

const validateEmail = () => {
  return isEmailValid.value || 'Enter a valid email'
}
</script>

<style scoped></style>
