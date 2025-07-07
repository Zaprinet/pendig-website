<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="tw-bg-white tw-text-black tw-px-7 tw-py-2" height-hint="98">
      <q-toolbar>
        <q-toolbar-title class="row tw-justify-between">
          <div
            class="row tw-min-w-[10%] tw-justify-between tw-cursor-pointer"
            @click="router.push('/')"
          >
            <q-avatar class="tw-my-auto tw-me-2">
              <img src="/My_Digital_Marketing_Logo__1_-removebg-preview 1.svg" />
            </q-avatar>
            <div class="tw-hidden md:tw-block">
              <p class="tw-my-0 tw-font-bold tw-text-[#008080] tw-text-[27px]">
                PEN<span class="tw-text-[#ff7f50ee] -tw-ms-[6px]">Dig</span>
              </p>
              <p class="tw-mb-0 -tw-mt-4 tw-font-bold tw-text-[18px]">Marketing</p>
            </div>
          </div>
          <div class="tw-hidden lg:tw-block tw-justify-between tw-my-auto tw-min-w-[40%]">
            <q-btn
              v-for="(link, index) in links"
              :key="index"
              flat
              :label="link.name"
              no-caps
              :class="isActive === link.name ? 'tw-text-[#FF7F50]' : 'hover:tw-underline'"
              @click="checkState(link)"
            />
          </div>
          <div class="tw-my-auto tw-hidden md:tw-block">
            <q-btn
              color="primary"
              class="tw-rounded-[10px] tw-px-10 tw-max-h-[10px] hover:tw-underline"
              no-caps
              @click="onClick"
              ><a href="#email-list" class="tw-text-white no-underline"
                >Join Our Email List</a
              ></q-btn
            >
            <q-btn-dropdown
              class="tw-inline-block lg:tw-hidden tw-ms-2"
              flat
              padding="0px"
              icon="menu"
              menu-anchor="bottom left"
              menu-self="top left"
              dropdown-icon="none"
            >
              <q-list>
                <q-item clickable v-close-popup to="/">
                  <q-item-section>Home</q-item-section>
                </q-item>

                <q-item clickable v-close-popup to="/about">
                  <q-item-section>About</q-item-section>
                </q-item>

                <q-item clickable v-close-popup to="/services">
                  <q-item-section>Services</q-item-section>
                </q-item>

                <q-item clickable v-close-popup to="/contact">
                  <q-item-section>Contact</q-item-section>
                </q-item>
              </q-list>
            </q-btn-dropdown>
            <!-- <q-icon
              name="mdi-reorder-horizontal"
              class="tw-m-1 tw-inline-block lg:tw-hidden"
              color="primary"
              @click="toggleMobileMenu"
            /> -->
          </div>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const isActive = ref('HOME')
const router = useRouter()
const showMobileMenu = ref(false)

const links = ref([
  {
    name: 'HOME',
    path: '/',
  },
  {
    name: 'ABOUT US',
    path: '/about-us',
  },
  {
    name: 'OUR SERVICES',
    path: '',
  },
  {
    name: 'RESOURCES',
    path: '',
  },
  {
    name: 'BLOG',
    path: '',
  },
  {
    name: 'CONTACT US',
    path: '',
  },
  {
    name: 'QUITTERS WIN CLUB',
    path: '/quitters-win',
  },
])

const toggleMobileMenu = () => {
  showMobileMenu.value = !showMobileMenu.value
}

const checkState = (link) => {
  router.push(link.path)
  isActive.value = link.name
}
</script>

<style scoped>
.no-underline {
  text-decoration: none;
}
</style>
