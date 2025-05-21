<template>
  <transition name="slide">
    <div
      v-if="pages === true"
      class="tw-flex tw-justify-center tw-my-auto tw-pb-0 inset-0 transition-all duration-1000 tw-absolute"
      key="slide1"
    >
      <div class="tw-pt-[10vh] tw-mb-0 tw-w-[50%]">
        <p class="tw-text-[#008080] tw-uppercase">Digital Marketing at its best</p>
        <p
          class="tw-text-[#FF7F50] tw-uppercase tw-font-custom tw-font-bold tw-text-[64px] tw-mt-5 tw-mb-0 tw-tracking-tight"
        >
          Transform
        </p>
        <p
          class="tw-text-[#FF7F50] tw-uppercase tw-font-custom tw-font-bold tw-text-[64px] tw-mb-0 -tw-mt-[30px] tw-tracking-tight"
        >
          your <span class="text-primary">brand's</span>
        </p>
        <p
          class="tw-text-[#FF7F50] tw-uppercase tw-font-custom tw-font-bold tw-text-[64px] -tw-mt-[30px] tw-tracking-tight"
        >
          digital presence
        </p>
        <div class="bg-white tw-max-w-[10%] tw-rounded-md tw-mt-[30px] tw-mb-[20px] row">
          <div
            class="tw-p-1 bg-primary tw-min-w-[45%] tw-border-black tw-border-2 tw-rounded-md"
          ></div>
          <div
            class="tw-p-1 tw-bg-[#FF7F50] tw-min-w-[45%] tw-border-black tw-border-2 tw-rounded-md"
          ></div>
        </div>
        <p class="tw-max-w-[80%]">
          PENDIG Marketing Company leverages cutting-edge strategies and innovative solutions to
          elevate your online visibility and engagement. By understanding your unique brand goals
          and audience, we craft tailored marketing campaigns that drive exceptional results.
        </p>
        <q-btn
          color="primary"
          label="Learn More"
          class="tw-rounded-[10px] tw-px-[65px] tw-max-h-[10px] tw-my-2"
          no-caps
          @click="onClick"
        />
      </div>
      <div class="tw-w-[50%]">
        <div
          class="tw-rounded-full tw-w-[550px] tw-h-[550px] bg-primary tw-mx-auto tw-mt-[50px] tw-text-center tw-relative"
        >
          <q-img
            src="/icons/heroSection1.png"
            class="tw-w-[93%] tw-my-[20px] tw-right-[20px] tw-z-20 tw-absolute"
          />

          <div class="tw-absolute tw-top-[40px] tw-z-10 -tw-ms-[75px]">
            <div class="tw-p-[21px] tw-mt-1 bg-primary tw-rounded-s-3xl tw-w-[200px]"></div>
            <div class="tw-p-[17px] tw-mt-0 bg-white tw-rounded-e-3xl tw-w-[170px]"></div>
            <div
              class="tw-p-[21px] tw-mt-0 tw-ms-[34px] bg-primary tw-rounded-s-3xl tw-w-[150px]"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </transition>
  <transition name="slide">
    <div
      v-if="pages === false"
      class="tw-flex tw-justify-center tw-my-auto tw-pb-0 inset-0 transition-all duration-1000 tw-absolute"
      key="slide2"
    >
      <div class="tw-pt-[10vh] tw-w-[50%] tw-mb-0">
        <p class="tw-text-[#FF7F50] tw-uppercase">Digital Marketing at its best</p>
        <p
          class="tw-text-[#008080] tw-uppercase tw-font-custom tw-font-bold tw-text-[64px] tw-mt-5 tw-mb-0 tw-tracking-tight"
        >
          Boost
        </p>
        <p
          class="tw-text-[#008080] tw-uppercase tw-font-custom tw-font-bold tw-text-[64px] tw-mb-0 -tw-mt-[30px] tw-tracking-tight"
        >
          your <span class="tw-text-[#FF7F50]">business</span>
        </p>
        <p
          class="tw-text-[#008080] tw-uppercase tw-font-custom tw-font-bold tw-text-[64px] -tw-mt-[30px] tw-tracking-tight"
        >
          with Expertise
        </p>
        <div class="bg-white tw-max-w-[10%] tw-rounded-md tw-mt-[30px] tw-mb-[20px] row">
          <div
            class="tw-p-1 tw-bg-[#FF7F50] tw-min-w-[45%] tw-border-black tw-border-2 tw-rounded-md"
          ></div>
          <div
            class="tw-p-1 tw-bg-[#008080] tw-min-w-[45%] tw-border-black tw-border-2 tw-rounded-md"
          ></div>
        </div>
        <p class="tw-max-w-[80%]">
          PENDIG Marketing Company leverages cutting-edge strategies and innovative solutions to
          elevate your online visibility and engagement. By understanding your unique brand goals
          and audience, we craft tailored marketing campaigns that drive exceptional results.
        </p>
        <q-btn
          label="Learn More"
          class="tw-rounded-[10px] tw-px-[65px] tw-max-h-[10px] tw-my-2 tw-bg-[#FF7F50] hover:tw-underline"
          no-caps
          @click="onClick"
        />
      </div>
      <div class="tw-w-[50%]">
        <div
          class="tw-rounded-full tw-w-[550px] tw-h-[550px] tw-bg-[#FF7F50] tw-mx-auto tw-mt-[50px] tw-text-center tw-relative"
        >
          <q-img
            src="/icons/heroSection2.png"
            class="tw-w-[93%] tw-my-[20px] tw-right-[20px] tw-z-20 tw-absolute"
          />

          <div class="tw-absolute tw-top-[40px] tw-z-10 -tw-ms-[75px]">
            <div class="tw-p-[21px] tw-mt-1 tw-bg-[#FF7F50] tw-rounded-s-3xl tw-w-[200px]"></div>
            <div class="tw-p-[17px] tw-mt-0 bg-white tw-rounded-e-3xl tw-w-[170px]"></div>
            <div
              class="tw-p-[21px] tw-mt-0 tw-ms-[34px] tw-bg-[#FF7F50] tw-rounded-s-3xl tw-w-[150px]"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const pages = ref(true)

let intervalId

onMounted(() => {
  intervalId = setInterval(() => {
    pages.value = !pages.value
  }, 10000)
})

onBeforeUnmount(() => {
  clearInterval(intervalId)
})
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 1s ease;
}
.slide-enter-from {
  transform: translateX(100%);
  opacity: 0;
}
.slide-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}
</style>
