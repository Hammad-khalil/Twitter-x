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
          class="q-mb-lg"
        />
      </div>
    </div>
    <q-separator class="divider" size="10px" color="grey-2" />
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
.divider {
  border-top: 1px solid;
  border-bottom: 1px solid;
  border-color: rgb(224, 224, 224);
}
</style>
