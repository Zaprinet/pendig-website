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
    <section id="blogs" class="tw-bg-white tw-min-h-[90vh] tw-px-[50px] tw-pb-[20px]">
      <BlogComp />
    </section>
  </div>
</template>

<script setup>
import AboutUsComp from 'src/components/AboutUsComp.vue'
import BlogComp from 'src/components/BlogComp.vue'
import HeroSection from 'src/components/HeroSection.vue'
import OurServicesComp from 'src/components/OurServicesComp.vue'
import ResourcesComp from 'src/components/ResourcesComp.vue'
</script>
