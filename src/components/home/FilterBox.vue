<template>
  <div class="filter-box">
    <div>
      <h4>Filter Results</h4>
    </div>
    <div class="d-flex fields--container flex-column justify-space-between">
      <basic-input v-model="filterOptions.name" class="my-8" label="Name(Contains)"/>
      <basic-select v-model="filterOptions.score" :options="minScores" class="my-8" label="Minimum Score"/>
      <basic-select v-model="filterOptions.orderBy" :options="orderByItems" class="my-8" label="Order By">
        <template #prepend-icon>
          <i class="fas fa-arrow-up"></i>
        </template>
      </basic-select>
      <div class="clear--button d-flex justify-end">
        <base-button class="my-8" @click="clearFilter">Clear</base-button>
      </div>
    </div>
  </div>
</template>

<script>
import BasicInput from "@/components/resuables/BasicInput";
import BasicSelect from "@/components/resuables/BasicSelect";
import BaseButton from "@/components/resuables/BaseButton";

export default {
  name: "FilterBox",
  components: {BaseButton, BasicSelect, BasicInput},
  data: () => ({
    filterOptions: {
      name: '',
      score: '',
      orderBy: '',
    },
    minScores: [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10
    ],
    orderByItems: [
      'Release Date',
      'Name',
      'Score'
    ]
  }),
  watch: {
    filterOptions: {
      handler: function (filterOptions) {
        this.$emit('update', filterOptions)
      },
      deep: true
    }
  },
  methods: {
    clearFilter() {
      this.filterOptions.name = ''
      this.filterOptions.score = ''
      this.filterOptions.orderBy = ''
    }
  }
}
</script>

<style lang="scss" scoped>
.filter-box {
  padding: 24px;
  background: var(--card-background);
  max-height: 420px;
}

.fields--container {

}

.clear--button {
  display: flex;

  button {
    width: 100%;
    @media (min-width: 768px) {
      width: initial !important;
    }
  }
}
</style>