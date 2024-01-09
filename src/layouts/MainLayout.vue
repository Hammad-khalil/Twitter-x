<template>
  <q-layout view="lHr lpR fFf">
    <q-header bordered class="bg-white text-black">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title class="text-weight-bold">
          Twitter (X)
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <q-icon name="fa-brands fa-square-x-twitter" class="q-pa-md" size="md" />
      <!-- // Home here => -->
      <div class="q-pa-md" style="max-width: 350px">
        <q-list bordered>
          <q-item clickable v-ripple to="/">
            <q-item-section avatar>
              <q-icon color="primary" name="home" />
            </q-item-section>

            <q-item-section class="text-h6 text-weight-bold" size="md"
              >Home</q-item-section
            >
          </q-item>
        </q-list>
      </div>
      <!-- // Home Ends Here

        // About here => -->
      <div class="q-pa-md" style="max-width: 350px">
        <q-list bordered>
          <q-item clickable v-ripple to="/about">
            <q-item-section avatar>
              <q-icon color="primary" name="info" />
            </q-item-section>

            <q-item-section class="text-h6 text-weight-bold" size="md"
              >About us</q-item-section
            >
          </q-item>
        </q-list>
      </div>
      <!-- // About Ends Here -->
    </q-drawer>

    <q-drawer show-if-above v-model="rightDrawerOpen" side="right" bordered>
      <!-- drawer content -->
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const leftDrawerOpen = ref(false);
    const rightDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },

      rightDrawerOpen,
      toggleRightDrawer() {
        rightDrawerOpen.value = !rightDrawerOpen.value;
      },
    };
  },
};
</script>
