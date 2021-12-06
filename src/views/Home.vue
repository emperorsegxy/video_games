<template>
  <div class="home mx-auto">
    <filter-box @update="filterOptions = $event" />
    <video-list :filter-options="filterOptions" />
  </div>
</template>

<script>
// @ is an alias to /src

import {fetchVideos} from "@/api";
import FilterBox from "@/components/home/FilterBox";
import VideoList from "@/components/home/VideoList";

export default {
  name: 'Home',
  components: {VideoList, FilterBox},
  data: () => ({
    filterOptions: {
      name: '',
      score: "",
      orderBy: ''
    }
  }),
  async created () {

  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.home {
  display: grid;
  grid-template-columns: repeat(1, 2fr);
  max-width: 1400px;
  width: 100%;
  grid-gap: 20px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(1, 1fr 2fr);
  }
}
</style>
