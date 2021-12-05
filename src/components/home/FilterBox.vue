<template>
  <div>
    <div>
      <h4>Filter Results</h4>
    </div>
    <div class="d-flex">
      <basic-input label="Name(Contains)" />
    </div>
  </div>
</template>

<script>
import BasicInput from "@/components/resuables/BasicInput";
export default {
name: "Filter",
  components: {BasicInput}
}
</script>

<style scoped>

</style>