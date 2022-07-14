<template>
  <p class="font-montserrat tracking-[0.10em] font-light text-black mb-4 text-center w-3/4 lg:w-1/2">
    {{ text }}
  </p>
</template>

<script>
export default {
  name: 'TextContent',
  props: {
    text: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>

</style>
