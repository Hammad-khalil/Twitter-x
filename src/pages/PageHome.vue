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

    <q-list>
      <q-item class="q-py-md">
        <q-item-section avatar top>
          <q-avatar size="xl">
            <img
              src="https://avatars.githubusercontent.com/u/143031265?s=400&u=94d880598a0efaa8d66727251d8c9d0a058e0be1&v=4"
            />
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label class="text-subtitle1">
            <strong>Hammad Khalil</strong>
            <span class="text-grey-7">@HammadkhalilShiekh</span>
          </q-item-label>
          <q-item-label class="x-tweet text-body1">
            New X isn't just great, it's mind-blowing. Dive into immersive,
            interactive content that bursts from the screen, let personalized AI
            recommendations anticipate your needs, and use built-in tools to
            create and share like never before. X is your passion playground, a
            vibrant community where you connect with like-minded individuals and
            push the boundaries of what's possible. New X isn't just a platform,
            it's a game-changer waiting to unleash your full potential.
          </q-item-label>
          <div class="tweet-icons row justify-between q-mt-sm">
            <q-btn
              flat
              round
              size="sm"
              color="grey"
              icon="fa-solid fa-comment"
            />
            <q-btn
              flat
              round
              size="sm"
              color="grey"
              icon="fa-solid fa-retweet"
            />
            <q-btn flat round size="sm" color="red" icon="fa-solid fa-heart" />
            <q-btn flat round size="sm" color="grey" icon="fa-solid fa-trash" />
          </div>
        </q-item-section>

        <q-item-section side top> 1 min ago </q-item-section>
      </q-item>
    </q-list>
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
.x-tweet {
  white-space: pre-line;
}
.tweet-icons {
  margin-left: -5px;
}
</style>
