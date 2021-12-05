<template>
  <div class="header--wrapper">
    <div class="the-header d-flex mx-auto">
      <nav-item
          v-for="(nav, i) in navLinks"
          :key="i"
          @click="[routeTo(nav)]"
          :nav="nav"
      />
    </div>
  </div>
</template>

<script>
import NavItem from "@/components/header/NavItem";

export default {
  name: "TheHeader",
  components: {NavItem},
  data: () => ({
    navLinks: [
      {
        name: 'Video Games',
        route: { name: 'Home' }
      },
      {
        name: 'Contact',
        route: { name: 'Contact' }
      }
    ]
  }),
  methods: {
    routeTo ({ route }) {
      this.$router.push(route)
    }
  }
}
</script>

<style lang="scss" scoped>
.the-header {
  min-height: 200px;
  max-width: 1400px;
  width: 100%;
  flex-direction: column;
  align-items: start;
  padding: 0 10px;
  font-family: Montserrat, sans-serif !important;

  @media (min-width: 446px) {
    flex-direction: row;
    align-items: center;
  }
}

.header--wrapper {
  //background: var(--card-background);
}
</style>