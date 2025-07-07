<template>
  <div class="tw-max-w-[1440px]">
    <section id="hero-section" class="tw-bg-white tw-min-h-[90vh] tw-px-[50px]">
      <HeroSection />
    </section>
    <section id="about-us" class="tw-bg-[rgb(251,243,240)] tw-pb-[100px] tw-px-[50px]">
      <AboutUsComp />
    </section>
    <section id="our-services" class="tw-bg-[#023B3B] tw-pb-[50px] tw-px-[50px]">
      <OurServicesComp />
    </section>
    <section id="resources" class="tw-bg-[rgb(251,243,240)] tw-pb-[30px] tw-px-[50px]">
      <ResourcesComp />
    </section>
    <section id="blogs" class="tw-bg-white tw-px-[50px] tw-pb-[20px] tw-mb-6">
      <BlogComp />
    </section>
    <section id="pricing-plan" class="tw-bg-[#F3F4F6] tw-pb-[30px] tw-px-[50px]">
      <PricingPlan />
    </section>
    <section id="email-list" class="tw-bg-[#F3F4F6] tw-px-[50px]">
      <EmailList />
    </section>
    <section id="email-list" class="tw-bg-[#023B3B] tw-pb-[30px] tw-px-[50px]">
      <FooterSection />
    </section>
  </div>
</template>

<script setup>
import AboutUsComp from 'src/components/AboutUsComp.vue'
import BlogComp from 'src/components/BlogComp.vue'
import EmailList from 'src/components/EmailList.vue'
import FooterSection from 'src/components/FooterSection.vue'
import HeroSection from 'src/components/HeroSection.vue'
import OurServicesComp from 'src/components/OurServicesComp.vue'
import PricingPlan from 'src/components/PricingPlan.vue'
import ResourcesComp from 'src/components/ResourcesComp.vue'
</script>
