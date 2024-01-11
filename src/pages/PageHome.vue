<template>
  <q-page>
    <q-input
      filled
      bottom-slots
      v-model="text"
      label="Label"
      counter
      maxlength="255"
      :dense="dense"
    >
      <template v-slot:before>
        <q-avatar>
          <img
            src="https://avatars.githubusercontent.com/u/143031265?s=400&u=94d880598a0efaa8d66727251d8c9d0a058e0be1&v=4"
          />
        </q-avatar>
      </template>

      <template v-slot:append>
        <q-icon
          v-if="text !== ''"
          name="close"
          @click="text = ''"
          class="cursor-pointer"
        />
        <q-icon name="schedule" />
      </template>

      <template v-slot:hint> Field hint </template>

      <template v-slot:after>
        <q-btn round dense flat icon="send" />
      </template>
    </q-input>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageHome",
});
</script>
