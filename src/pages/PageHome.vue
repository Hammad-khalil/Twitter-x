I apologize for the confusion. Here's your complete modified code with the changes included:

```html
<template>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
  />
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
          @click="addTweet"
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
    <transition-group
      appear
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
    >
      <q-list class="list-items">
        <q-item class="q-py-md" v-for="tweet in tweets" :key="tweet.date">
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
              {{ tweet.content }}
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
              <q-btn
                flat
                round
                size="sm"
                color="grey"
                icon="fa-solid fa-heart"
              />
              <q-btn
                @click="deleteTweet(tweet)"
                flat
                round
                size="sm"
                color="grey"
                icon="fa-solid fa-trash"
              />
            </div>
          </q-item-section>

          <q-item-section side top>
            {{ formatTimeAgo(tweet.date) }}
          </q-item-section>
        </q-item>
      </q-list>
    </transition-group>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import db from "boot/firebase";

export default defineComponent({
  name: "PageHome",
  data() {
    return {
      totalchar: "",
      checkText: "",
      tweets: [
        {
          date: 1705606043026,
          content:
            "New X isn't just great, it's mind-blowing. Dive into immersive,interactive content that bursts from the screen, let personalized AIrecommendations anticipate your needs, and use built-in tools tocreate and share like never before. X is your passion playground, avibrant community where you connect with like-minded individuals andpush the boundaries of what's possible. New X isn't just a platform,it's a game-changer waiting to unleash your full potential.",
        },
        {
          date: 1705606043026,
          content:
            "Explore the extraordinary with New X, a platform that transcends greatness and enters the realm of mind-blowing experiences. Immerse yourself in interactive content that leaps off the screen, enjoy personalized AI recommendations that anticipate your every desire, and leverage powerful built-in tools to craft and share like never before. New X is not just a platform; it's a revolutionary force, transforming into your passion playground and a dynamic community where you connect with kindred spirits to push the boundaries of what's achievable. Unleash your full potential with the game-changing New X.",
        },
        {
          date: 1705606043026,
          content:
            "Embark on a journey of unparalleled excellence with New X, an exceptional platform that goes beyond greatness to deliver awe-inspiring moments. Immerse yourself in an interactive world where content comes alive, indulge in personalized AI recommendations that understand your preferences, and utilize cutting-edge tools to create and share in unprecedented ways. New X isn't merely a platform; it stands as a paradigm shift, evolving into your playground of passion and a lively community where you engage with like-minded individuals, collectively pushing the limits of what can be achieved. Discover the transformative power of New X, poised to unlock your complete potential.",
        },
      ],
    };
  },
  methods: {
    addTweet() {
      const trimmedContent = this.totalchar.trim();

      if (trimmedContent !== "") {
        let addNewTweet = {
          content: trimmedContent,
          date: Date.now(),
        };
        this.tweets.unshift(addNewTweet);
      }
      this.totalchar = "";
    },

    formatTimeAgo(timestamp) {
      const now = Date.now();
      const differenceInMilliseconds = now - timestamp;

      const differenceInHours = Math.floor(differenceInMilliseconds / 3600000);
      const differenceInDays = Math.floor(differenceInHours / 24);
      const differenceInWeeks = Math.floor(differenceInDays / 7);
      const differenceInMonths = Math.floor(differenceInDays / 30); // Approximate
      const differenceInYears = Math.floor(differenceInDays / 365); // Approximate

      if (differenceInHours < 1) {
        const differenceInMinutes = Math.floor(
          differenceInMilliseconds / 60000
        );
        return `${differenceInMinutes} minute${
          differenceInMinutes === 1 ? "" : "s"
        } ago`;
      } else if (differenceInHours === 1) {
        return "1 hour ago";
      } else if (differenceInDays < 7) {
        return `${differenceInDays} day${
          differenceInDays === 1 ? "" : "s"
        } ago`;
      } else if (differenceInWeeks < 52) {
        // Approximately a year
        return `${differenceInWeeks} week${
          differenceInWeeks === 1 ? "" : "s"
        } ago`;
      } else if (differenceInMonths < 12) {
        return `${differenceInMonths} month${
          differenceInMonths === 1 ? "" : "s"
        } ago`;
      } else {
        return `${differenceInYears} year${
          differenceInYears === 1 ? "" : "s"
        } ago`;
      }
    },
    deleteTweet(tweet) {
      let dateToDelete = tweet.date;
      let index = this.tweets.findIndex((tweet) => tweet.date === dateToDelete);
      console.log(index);
      this.tweets.splice(index, 1);
    },
  },
  mounted() {
    db.collection("tweets")
      .orderBy("date", "desc")
      .onSnapshot((snapshot) => {
        snapshot.docChanges().forEach((change) => {
          let tweetChange = change.doc.data();
          tweetChange.id = change.doc.id;
          if (change.type === "added") {
            console.log("New tweet: ", tweetChange);
            this.tweets.unshift(tweetChange);
          }
          if (change.type === "modified") {
            console.log("Modified tweet: ", tweetChange);
            let index = this.tweets.findIndex(
              (tweet) => tweet.id === tweetChange.id
            );
            Object.assign(this.tweets[index], tweetChange);
          }
          if (change.type === "removed") {
            console.log("Removed tweet: ", tweetChange);
            let index = this.tweets.findIndex(
              (tweet) => tweet.id === tweetChange.id
            );
            this.tweets.splice(index, 1);
          }
        });
      });
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
