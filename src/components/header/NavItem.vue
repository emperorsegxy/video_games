<template>
  <div class="nav-item--wrapper">
    <h3 :data-name="shadow" @click="$emit('click')" :class="[{'active': isRouteActive}]">{{ nav.name }}</h3>
  </div>
</template>

<script>
export default {
  name: "NavItem",
  props: {
    nav: {
      type: Object,
      required: true
    },
  },
  computed: {
    shadow () {
      return this.nav.name.split(/\s/).shift()
    },
    isRouteActive () {
      const { $route: { name: routeName }, nav: { route: { name } } } = this
      return name === routeName
    }
  }
}
</script>

<style scoped lang="scss">
h3 {
  text-transform: uppercase;
  position: relative;
  color: var(--label-color);
  z-index: 1;
  font-size: 36px;
  cursor: pointer;
  transition: all .3s ease;

  &::before {
    content: attr(data-name);
    position: absolute;
    width: 100%;
    height: 100%;
    color: var(--text-color);
    opacity: 0;
    font-size: 50px;
    top: -34px;
    left: -30px;
    transition: all .3s ease;
  }

  &.active::before {
    opacity: 0.19;
    left: -20px;
  }
}

.nav-item--wrapper {
  padding: 20px;
}
</style>