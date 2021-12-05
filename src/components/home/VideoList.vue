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
export default {
  name: "VideoList",
  components: {LinearLoader, VideoGame},
  data: () => ({
    videoGames: [],
    loading: false,
  }),
  async created () {
    const videoGames = [
      {
        title: 'Mortal Kombat',
        releasedDate: new Date(),
        score: 9,
        description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. '
      },
      {
        title: 'Money Heist',
        releasedDate: new Date(),
        score: 10,
        description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. '
      },
      {
        title: 'Minority Report',
        releasedDate: new Date(),
        score: 8,
        description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. '
      }
    ]
    this.loading = true
    await setTimeout(() => {
      this.videoGames = videoGames
      this.loading = false
    }, 2000)
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
      return videoGame.title.toLowerCase().includes(name.toLowerCase()) && (+score ? +videoGame.score === +score : true)
    },
    orderVideoGames (games) {
      const { filterOptions: { orderBy } } = this
      const orderBys = {
        'released date': (games) => games.sort((a, b) => new Date(b.releasedDate) - new Date(a.releasedDate)),
        'score': (games) => games.sort((a, b) => b.score - a.score),
        'name': (games) => games.sort((a, b) => a.title.localeCompare(b.title))
      }
      return orderBys[orderBy.toLowerCase()]?.(games) ?? games
    }
  }
}
</script>

<style scoped lang="scss">
.video-list-wrapper {
  padding: 0 15px;
  padding-bottom: 40px;
}
</style>