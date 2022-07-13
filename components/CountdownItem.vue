<template>
  <div class="flex-1 flex flex-col items-center">
    <div class="font-montserrat font-semibold text-dark-blue text-3xl">
      {{ count }}
    </div>
    <div class="font-montserrat font-light text-black text-xl">
      {{ label }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'CountdownItem',
  props: {
    count: {
      type: String,
      default: '0'
    },
    label: {
      type: String,
      default: 'den'
    }
  }
}
</script>

<style scoped>

</style>
