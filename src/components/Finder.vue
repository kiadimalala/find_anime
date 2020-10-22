<template>
  <div class="flex w-full flex-col items-center justify-center mt-5 ">
    <label
      class="w-16 h-16 text-6xl rounded-full text-gray-200 flex flex-col justify-center items-center bg-blue-500 text-blue rounded-lg shadow-lg  uppercase border border-blue cursor-pointer hover:bg-blue hover:text-gray-800"
    >
      + <input type="file" @change="selectFile" class="hidden" />
    </label>
    <span class="m-2 font-mono font-semibold">Choose a file</span>
    <button
      @click="upload"
      class="bg-gray-800 text-gray-200 p-1 rounded border focus:outline-none hover:bg-gray-200 hover:text-gray-800 hover:shadow-xl hover:border-gray-800 font-mono"
    >
      Search
    </button>
  </div>
</template>

<script>
export default {
  name: "Finder",
  methods: {
    selectFile() {
      this.$store.dispatch("fileSelect");
    },
    upload(){
      this.$store.dispatch("uploadFile")
    }
  }
};
</script>

<style lang="scss" scoped></style>
