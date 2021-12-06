<template>
  <div class="d-flex video--game w-100">
    <div class="thumbnail">
      <div class="d-flex score is--mobile items-center">
        <div class="d-flex justify-center items-center">{{ game.score }}</div>
      </div>
    </div>
    <div class="details d-flex justify-space-between">
      <div class="d-flex flex-column justify-space-between">
        <div>
          <h4>{{ game.title }}</h4>
          <span>{{ releasedDate }}</span>
        </div>
        <div class="description">
          {{ game.description }}
        </div>
      </div>
      <div class="d-flex score is--desktop items-center">
        <div class="d-flex justify-center items-center">{{ game.score }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VideoGame",
  props: {
    game: Object
  },
  computed: {
    releasedDate () {
      let date = ''
      const { releasedDate } = this.game
      date += `${releasedDate.getDate()}/${releasedDate.getMonth() + 1}/${releasedDate.getFullYear()}`
      return date
    }
  }
}
</script>

<style scoped lang="scss">
.video--game {
  flex-direction: column;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
  .thumbnail {
    width: 100%;
    height: 200px;
    margin-bottom: 10px;
    background: black;
    position: relative;

    .score {
      position: absolute;
      right: 10px;
      top: 10px;
    }

    @media (min-width: 768px) {
      width: 180px;
      min-width: 180px !important;
      margin-bottom: 0;
    }
  }

  .details {
    padding: 10px 20px;
    background: var(--card-background);
    width: 100%;

    @media (min-width: 768px) {
      width: calc(100% - 180px);
    }

    h4 {
      font-size: 30px;
      margin: 0;
      font-weight: bold;
    }

    .description {
      //max-width: 500px;
      margin: 40px 0 0;
      text-overflow: ellipsis;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }
  }
}

.score {
  &.is--desktop {
    display: none;

    @media (min-width: 768px) {
      display: flex;
    }
  }

  &.is--mobile {
    display: flex;

    @media (min-width: 768px) {
      display: none;
    }
  }

  & > div {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: var(--button-blue);
    font-weight: bold;
  }
}
</style>