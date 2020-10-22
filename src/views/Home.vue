<template>
  <div class="home">
    <Header />
    <Finder />
    <Preview  />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Finder from "@/components/Finder.vue";
import Preview from "@/components/Preview.vue";
export default {
  name: "Home",
  components: {
    Header,
    Finder,
    Preview
  }
};
</script>
