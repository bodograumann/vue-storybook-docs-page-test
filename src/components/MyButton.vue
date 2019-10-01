<template>
  <button class="button" :class="{ 'is-primary': primary }" @click="onClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'my-button',

  props: {
    primary: Boolean
  },

  methods: {
    onClick() {
      this.$emit('click')
    }
  }
}
</script>

<style>
button {
  border: 1px solid #eee;
  border-radius: 3px;
  background-color: #ffffff;
  cursor: pointer;
  font-size: 15pt;
  padding: 3px 10px;
  margin: 10px;
}
</style>

<docs>
### Examples ###
</docs>
