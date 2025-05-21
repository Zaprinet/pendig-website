<template>
  <div class="tw-pt-[20px]">
    <div class="row tw-justify-center tw-mb-3">
      <div class="tw-p-1 tw-max-h-1 tw-mt-1 tw-me-1 bg-primary tw-min-w-[30px] tw-rounded-md"></div>
      <p class="tw-text-[#FF7F50] tw-mb-0 tw-text-sm">ABOUT US</p>
    </div>
    <h3 class="tw-text-center tw-mt-0 tw-text-[#FF7F50] tw-font-custom tw-font-bold">WHO WE ARE</h3>
    <div class="row tw-justify-between">
      <div class="tw-relative tw-mt-5">
        <q-img src="/icons/about-us1.png" class="tw-w-[440px]" />
        <q-img
          src="/icons/about-us2.png"
          class="tw-w-[420px] tw-absolute tw-left-[180px] -tw-bottom-[80px]"
        />
      </div>
      <div class="-tw-ms-[50px] tw-w-[43%]">
        <h4
          class="tw-text-[#FF7F50] tw-font-custom tw-font-bold tw-mt-0 tw-mb-[4px] tw-text-[45px] tw-tracking-wide"
        >
          Your <span class="text-primary">Partner</span> in Digital
        </h4>
        <h4
          class="tw-text-[#FF7F50] tw-font-custom tw-font-bold tw-my-0 tw-text-[45px] tw-tracking-wide"
        >
          Excellence
        </h4>
        <div class="row tw-max-w-[70px] bg-white tw-my-3 tw-rounded-md tw-justify-between">
          <div class="tw-p-[3px] tw-min-w-[20px] bg-primary tw-rounded-md"></div>
          <div class="tw-p-[3px] tw-min-w-[45px] bg-primary tw-rounded-md"></div>
        </div>
        <p class="tw-text-justify tw-text-[16px]">
          PENDIG Digital Marketing Company is dedicated to transforming brands in the digital
          landscape. We understand that in today’s fast-paced, ever-evolving online environment,
          standing out is more challenging than ever. That’s why we specialize in creating bespoke
          digital marketing strategies that align perfectly with your unique brand goals.
        </p>
        <div class="tw-flex tw-justify-between">
          <div
            class="tw-p-[3px] tw-max-h-[40px] tw-ms-[40px] tw-mt-2 tw-me-3 bg-primary tw-rounded-md"
          ></div>
          <div class="tw-text-justify tw-text-[16px]">
            At PENDIG, we prioritize innovation and adaptability. As the digital world changes, we
            stay ahead of the curve, ensuring your brand is always at the forefront of the latest
            trends and technologies. We believe in transparency, providing clear communication and
            measurable results every step of the way.
          </div>
        </div>
        <q-btn
          label="Click For Training & Consultations"
          class="tw-rounded-[10px] tw-px-[65px] tw-max-w-[250px] hover:tw-underline tw-mb-4 tw-mt-[30px] tw-bg-[#008080] tw-text-white"
          no-caps
          @click="onClick"
        />
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>
