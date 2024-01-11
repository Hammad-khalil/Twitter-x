<template>
  <q-layout view="lHr lpR fFf">
    <q-header bordered class="bg-white text-black">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title class="text-weight-bold">
          <span class="gt-sm"> {{ $route.name }} </span>
          <q-icon
            color="primary"
            name="fa-brands fa-square-x-twitter"
            class="q-pa-md lt-md header-icon"
            size="md"
          />
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      :width="283"
      side="left"
      bordered
      show-if-above
    >
      <q-icon
        color="primary"
        name="fa-brands fa-square-x-twitter"
        class="q-pa-md"
        size="md"
      />
      <!-- // Home here => -->
      <q-list>
        <q-item clickable v-ripple to="/" exact>
          <q-item-section avatar>
            <q-icon color="primary" name="home" />
          </q-item-section>

          <q-item-section class="text-h6 text-weight-bold" size="md"
            >Home</q-item-section
          >
        </q-item>
      </q-list>

      <q-list>
        <q-item clickable v-ripple to="/notifications" exact>
          <q-item-section avatar>
            <q-icon color="primary" name="notifications" />
          </q-item-section>
          <q-item-section class="text-h6 text-weight-bold" size="md"
            >Notifications</q-item-section
          >
        </q-item>
      </q-list>

      <q-list>
        <q-item clickable v-ripple to="/about" exact>
          <q-item-section avatar>
            <q-icon color="primary" name="info" />
          </q-item-section>

          <q-item-section class="text-h6 text-weight-bold" size="md"
            >About us</q-item-section
          >
        </q-item>
      </q-list>
      <!-- // About Ends Here -->
    </q-drawer>

    <q-drawer show-if-above v-model="rightDrawerOpen" side="right" bordered>
      <!-- searchbar here  -->
      <q-input placeholder="Search X" outlined rounded class="q-ma-md">
        <template v-slot:prepend>
          <q-icon name="search" />
        </template>
      </q-input>

      <!-- Blog Start here -->
      <q-list padding separator>
        <q-item>
          <q-item-section>
            <q-item-label class="text-grey" overline>Education</q-item-label>
            <q-item-label class="text-weight-bold"
              >Something Amazing Happened !!!</q-item-label
            >
            <q-item-label caption
              >Secondary line text. Lorem ipsum dolor sit amet, consectetur
              adipiscit elit.</q-item-label
            >
          </q-item-section>
          <q-item-section side top>
            <q-item-label caption>5 min ago</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
      <!-- Blog Ended here -->

      <!-- Blog 2 Start here -->
      <q-list padding>
        <q-item>
          <q-item-section>
            <q-item-label class="text-grey" overline>Education</q-item-label>
            <q-item-label class="text-weight-bold"
              >Something Amazing Happened !!!</q-item-label
            >
            <q-item-label caption
              >Secondary line text. Lorem ipsum dolor sit amet, consectetur
              adipiscit elit.</q-item-label
            >
          </q-item-section>
          <q-item-section side top>
            <q-item-label caption>15 min ago</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
      <!-- Blog 2 Ended here -->
      <!-- Blog 3 Start here -->
      <q-list padding>
        <q-item class="q-pa-md">
          <q-item-section>
            <q-item-label class="text-grey" overline>Education</q-item-label>
            <q-item-label class="text-weight-bold"
              >Something Amazing Happened !!!</q-item-label
            >
            <q-item-label caption
              >Secondary line text. Lorem ipsum dolor sit amet, consectetur
              adipiscit elit.</q-item-label
            >
          </q-item-section>
          <q-item-section side top>
            <q-item-label caption>45 min ago</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
      <!-- Blog 3 Ended here -->
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
<style>
.header-icon {
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
}
</style>
