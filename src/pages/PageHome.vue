<template>
  <q-page>
    <div class="q-py-lg q-px-md row items-end q-gutter-sm">
      <div class="col">
        <q-input
          class="newTweet"
          filled
          bottom-slots
          v-model="totalchar"
          placeholder="What's Happening ?"
          maxlength="280"
          counter
          autogrow
        >
          <template v-slot:before>
            <q-avatar size="xl">
              <img
                src="https://avatars.githubusercontent.com/u/143031265?s=400&u=94d880598a0efaa8d66727251d8c9d0a058e0be1&v=4"
              />
            </q-avatar>
          </template>
        </q-input>
      </div>
      <div class="col col-shrink">
        <q-btn
          :disable="!totalchar"
          unelevated
          rounded
          color="primary"
          label="Tweet"
          no-caps
        />
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageHome",
  data() {
    return {
      totalchar: "",
      checkText: "",
    };
  },
});
</script>
<style>
.newTweet textarea {
  font-family: Arial, Helvetica, sans-serif;
  font-size: large;
  line-height: 1.4 !important;
}
</style>
