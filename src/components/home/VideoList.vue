<template>
  <div class="video-list-wrapper">
    <div v-if="loading" class="w-100 d-flex justify-center">
      <linear-loader />
    </div>
    <div v-else>
      <div v-if="!filteredVideoGames.length">Oops! There are no video games.</div>
      <div v-else>
        <video-game
            v-for="(video, i) in filteredVideoGames"
            :key="i"
            :game="video"
        />
      </div>
    </div>
  </div>
</template>

<script>
import VideoGame from "@/components/home/VideoGame";
import LinearLoader from "@/components/resuables/LinearLoader";
import {fetchVideos} from "@/api";
export default {
  name: "VideoList",
  components: {LinearLoader, VideoGame},
  data: () => ({
    videoGames: [],
    loading: false,
  }),
  async created () {
    this.loading = true
    try {
      await this.getVideos()
    } catch (e) {
      console.error(e)
    } finally {
      this.loading = false
    }
  },
  props: {
    filterOptions: Object
  },
  computed: {
    filteredVideoGames () {
      return this.orderVideoGames(this.videoGames.filter(this.matchesFilterOption))
    }
  },
  methods: {
    matchesFilterOption (videoGame) {
      const { filterOptions: { score, name } } = this
      const isScoreSame = (rating) => {
        const [min, max] = score.split('-')
        return rating === +min || rating === +max || (rating > +min && rating < +max)
      }
      return videoGame.title.toLowerCase().includes(name.toLowerCase()) && (score ? isScoreSame(videoGame.score) : true)
    },
    orderVideoGames (games) {
      const { filterOptions: { orderBy } } = this
      const orderBys = {
        'released date': (games) => games.sort((a, b) => new Date(b.releasedDate) - new Date(a.releasedDate)),
        'score': (games) => games.sort((a, b) => b.score - a.score),
        'name': (games) => games.sort((a, b) => a.title.localeCompare(b.title))
      }
      return orderBys[orderBy.toLowerCase()]?.(games) ?? games
    },
    async getVideos () {
      const { data } = await fetchVideos()
      console.log(data)
      this.videoGames = data
          .map(({id, name, rating, summary, first_release_date}) =>
              ({title: name, score: parseInt(rating), id, description: summary, releasedDate: new Date(first_release_date)}))
    }
  }
}
</script>

<style scoped lang="scss">
.video-list-wrapper {
  padding: 0 15px;
  padding-bottom: 40px;
  height: calc(100vh - 200px);
  overflow-y: auto;
}
</style>