<template>
  <div>
    <span>{{ label }}</span>
    <div class="d-flex">
      <div v-if="$slots['prepend-icon']" class="prepend--icon d-flex items-center justify-center">
        <slot name="prepend-icon"></slot>
      </div>
      <div class="select d-flex flex--grow" v-click-outside="hide" @click="expand = true">
        <div class="selection d-flex items-center">
          <div class="selected--item d-flex items-center">
            {{ selected }}
          </div>
          <div class="icon">
            <i class="fas fa-caret-down fa-2x"></i>
          </div>
        </div>
        <div class="select--list" v-if="expand">
          <div v-for="(option, i) in options" class="item" :key="i" @click="[select(option)]">
            {{option}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VClickOutside from 'v-click-outside'
export default {
  name: "BasicSelect",
  directives: {
    clickOutside: VClickOutside.directive
  },
  data: () => ({
    selected: '',
    expand: false
  }),
  props: {
    options: {
      type: Array,
      required: true
    },
    label: String
  },
  watch: {
    '$attrs': {
      handler: function ({ value }) {
        if (value !== null && value !== undefined) {
          this.selected = value
        }
      },
      immediate: true
    }
  },
  methods: {
    select (item) {
      this.selected = item
      this.$emit('input', item)
      this.hide()
    },
    hide () {
      this.expand = false
    }
  }
}
</script>

<style scoped lang="scss">
.select {
  position: relative;
  min-width: 201px;
  margin-top: 3px;

  .selection {
    background: var(--input-background);
    padding: 0 6px;
    width: 100%;
    .selected--item {
      color: var(--text-color);
      flex: 1;
      height: 36px;
      padding: 0 12px;
      cursor: pointer;
    }
    
    .icon {
      cursor: pointer;
    }
  }

  .select--list {
    position: absolute;
    z-index: 7;
    background: var(--label-color);
    width: calc(100% + 12px);
    padding-bottom: 3px;
    max-height: 200px;
    overflow-y: auto;
    top: 0px;

    &::-webkit-scrollbar-thumb {
      background: var(--card-background);
    }

    &::-webkit-scrollbar {
      background: transparent;
    }

    .item {
      padding: 8px 10px;
      color: var(--card-background);

      &--active {
        background: var(--input-background);
        color: var(--text-color);
      }

      &:hover {
        background: var(--input-background);
        color: var(--text-color);
      }
    }
  }
}

.prepend--icon {
  background: var(--button-blue);
  width: 40px;
}
</style>