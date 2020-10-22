<template>
  <div
    v-if="anime"
    class="preview  w-full h-48 flex flex-col items-center mt-4  px-2 lg:flex-row  lg:justify-around lg:mt-32 lg:px-20"
  >
    <div
      class="w-full mb-2 mt-3 border border-blue-500 p-1 rounded bg-gray-900"
    >
      <v-playback auto-play :url="url"></v-playback>
    </div>
    <div class="preview__info shadow-md w-full rounded lg:mx-20 ">
      <div class="preview__title flex flex-col  ">
        <h1
          class="text-lg font-bold font-mono px-1 text-left border-b-2 border-gray-800"
        >
          Title : {{ anime.title_english }}
        </h1>
        <div class="preview__details flex my-1 justify-around  px-1">
          <h1 v-if="anime.episode" class="font-mono text-sm font-bold">
            Episode:#{{ anime.episode }}
          </h1>
          <h1
            v-if="anime.season === 'Movie'"
            class="font-mono text-sm font-bold"
          >
            Type: {{ anime.season }}
          </h1>
          <h1 class="font-mono text-sm">From:{{ fromTime }} To:{{ toTime }}</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Preview",
  computed: {
    fromTime() {
      const sec = parseInt(this.anime.from, 10); // convert value to number if it's string
      let hours = Math.floor(sec / 3600); // get hours
      let minutes = Math.floor((sec - hours * 3600) / 60); // get minutes
      let seconds = sec - hours * 3600 - minutes * 60; //  get seconds
      // add 0 if value < 10; Example: 2 => 02
      if (hours < 10) {
        hours = "0" + hours;
      }
      if (minutes < 10) {
        minutes = "0" + minutes;
      }
      if (seconds < 10) {
        seconds = "0" + seconds;
      }
      return hours + ":" + minutes + ":" + seconds; // Return is HH : MM : SS
    },
    toTime() {
      const sec = parseInt(this.anime.to, 10); // convert value to number if it's string
      let hours = Math.floor(sec / 3600); // get hours
      let minutes = Math.floor((sec - hours * 3600) / 60); // get minutes
      let seconds = sec - hours * 3600 - minutes * 60; //  get seconds
      // add 0 if value < 10; Example: 2 => 02
      if (hours < 10) {
        hours = "0" + hours;
      }
      if (minutes < 10) {
        minutes = "0" + minutes;
      }
      if (seconds < 10) {
        seconds = "0" + seconds;
      }
      return hours + ":" + minutes + ":" + seconds; // Return is HH : MM : SS
    },

    anime() {
      return this.$store.state.anime;
    },
    url() {
      return this.$store.state.preview;
    }
  }
};
</script>

<style lang="scss" scoped></style>
