<template>
  <div class="loader">
    <div ref="filler" class="filler"></div>
  </div>
</template>

<script>
export default {
  name: "LinearLoader",
  data: () => ({
    id: null,
    fillWidth: 20
  }),
  mounted() {
    this.id = setInterval(() => {
      this.fillWidth += 10
      this.$refs.filler.style.width = this.fillWidth + '%'
    }, 500)
  },
  beforeDestroy() {
    clearInterval(this.id)
  }
}
</script>

<style scoped lang="scss">
.loader {
  position: relative;
  width: 350px;
  background: #c1d1e8;
  height: 5px;
  border-radius: 3px;

  .filler {
    position: absolute;
    left: 0;
    top: 0;
    width: 20%;
    height: 100%;
    border-radius: 3px;
    background: var(--card-background);
    transition: all .4s ease;
  }
}
</style>