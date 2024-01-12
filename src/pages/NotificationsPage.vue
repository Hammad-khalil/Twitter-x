<template>
  <q-page class="qa-pa-lg">
    <div class="q-mt-none q-mb-md text-weight-bold">
      <q-item clickable v-ripple>
        <q-item-section>Notifications</q-item-section>
        <q-item-section avatar>
          <q-icon color="grey-9" name="settings" />
        </q-item-section>
      </q-item>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "NotificationsPage",
});
</script>
