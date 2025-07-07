<template>
  <div class="tw-py-4">
    <div class="row tw-justify-center tw-mb-3 tw-mt-[35px]">
      <div
        class="tw-p-[3px] tw-max-h-1 tw-my-auto tw-me-2 bg-primary tw-min-w-[30px] tw-rounded-md"
      ></div>
      <p class="tw-text-[#FF7F50] tw-font-custom tw-mb-0 tw-text-[60px] tw-uppercase tw-font-bold">
        Our Pricing Plan
      </p>
    </div>
    <p class="tw-text-center">
      At PENDIG Digital Marketing Company, we offer flexible and comprehensive subscription plans
      designed to meet your specific needs and budget. Whether you're a startup looking to establish
      your digital presence or an established business aiming to expand your reach, we have a plan
      that fits your goals.
    </p>
    <div class="row tw-mt-[60px] tw-justify-center">
      <q-card
        class="tw-rounded-lg tw-text-center tw-w-[300px] tw-mx-3"
        v-for="(plan, index) in plans"
        :key="index"
      >
        <q-card-section>
          <p class="tw-font-bold tw-text-center tw-uppercase tw-text-[18px] tw-mt-3">
            {{ plan.name }}
          </p>
          <p class="tw-text-[14px] tw-text-center tw-max-h-[30px]">{{ plan.description }}</p>
          <div class="row tw-justify-center">
            <p class="tw-text-[16px] tw-my-4 tw-ms-[2px]">$</p>
            <p class="tw-text-[#008080] tw-font-medium tw-mb-0 tw-text-[36px]">
              {{ plan.amount }}
            </p>
            <p class="tw-text-[16px] tw-my-4 tw-ms-[2px]">/Mon</p>
          </div>
        </q-card-section>
        <q-card-section class="tw-bg-[#E6F4F1]">
          <div class="tw-w-[200px] row tw-mx-auto tw-justify-between">
            <p class="tw-my-auto">{{ billingRate }} billing</p>
            <div
              class="tw-p-[2px] tw-bg-[#008080] tw-w-[50px] tw-rounded-3xl row"
              @click="changeBillingRate"
            >
              <div
                :class="[
                  'tw-py-[10px] tw-w-[45%] tw-bg-[#B3B4AF] tw-rounded-full ',
                  billingBtn === true ? 'tw-ms-[24px]' : 'tw-mx-[2px]',
                ]"
              ></div>
            </div>
          </div>
        </q-card-section>
        <q-card-section class="tw-mt-3">
          <p v-for="(feature, index) in plan.features" :key="index">
            {{ feature }}
          </p>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const billingRate = ref('Monthly')
const billingBtn = ref(false)
const plans = [
  {
    name: 'starter',
    description: 'This is specifically for one user',
    amount: 20,
    features: [
      'Cras sodales lobortis erat',
      'Consequat eted tempus',
      'Vitae pellentesque diam',
      'Cras sodales lobortis erat',
    ],
  },
  {
    name: 'growth',
    description: 'This is specifically for small organisations',
    amount: 45,
    features: [
      'Cras sodales lobortis erat',
      'Consequat eted tempus',
      'Vitae pellentesque diam',
      'Cras sodales lobortis erat',
    ],
  },
  {
    name: 'business',
    description: 'This is specifically for big organisations',
    amount: 95,
    features: [
      'Cras sodales lobortis erat',
      'Consequat eted tempus',
      'Vitae pellentesque diam',
      'Cras sodales lobortis erat',
    ],
  },
]

const changeBillingRate = () => {
  billingBtn.value = !billingBtn.value
  if (billingBtn.value === false) {
    billingRate.value = 'Monthly'
  } else {
    billingRate.value = 'Annual'
  }
}
</script>

<style scoped></style>
