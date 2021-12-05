<template>
  <button @click="$emit('click')">
    <span>
      <slot>{{ value }}</slot>
    </span>
  </button>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    props: String
  }
}
</script>

<style scoped lang="scss">
button {
  border: 0;
  outline: 0;
  background: var(--button-blue);
  color: var(--label-color);
  padding: 0 10px;
  max-height: 32px;
  min-height: 32px;
  cursor: pointer;
}
</style>