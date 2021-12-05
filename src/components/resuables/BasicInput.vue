<template>
  <label>
    <span class="label">{{ label }}<span v-if="required" class="asterisk">*</span></span>
    <span class="input" :class="[type]">
      <input v-if="type !== 'textarea'" v-bind="$attrs" v-on="listeners" :type="type">
      <textarea v-else v-bind="$attrs" v-on="listeners" />
    </span>
  </label>
</template>

<script>
export default {
  name: "BasicInput",
  inheritAttrs: false,
  props: {
    type: {
      type: String,
      default: 'text'
    },
    label: String,
    required: Boolean
  },
  computed: {
    listeners () {
      return {
        ...this.$listeners,
        input: e => this.$emit('input', e.target.value)
      }
    }
  }
}
</script>

<style scoped lang="scss">
span.input {
  display: block;
  height: 36px;
  padding: 0 12px;
  outline: none;
  margin-top: 3px;
  background: var(--input-background);
  color: var(--text-color);

  &.textarea {
    min-height: 36px;
    height: auto !important;
    padding-top: 3px;
  }
}

input {
  border: 0;
  outline: none;
  width: 100%;
  height: 100%;
  background: transparent;
  color: inherit;
}

.label {
  font-weight: 500;
}

.asterisk {
  color: var(--button-blue);
}

textarea {
  border: 0;
  outline: none;
  width: 100%;
  min-height: 140px;
  color: inherit;
  background: transparent;
}
</style>