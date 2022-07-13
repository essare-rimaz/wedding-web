<template>
  <div class="flex flex-col items-center font-montserrat tracking-[0.15em] ml-10 mr-10">
    <!-- TODO photo -->
    <div v-if="!photoPath" class="bg-dark-blue w-28 h-28 rounded-full mb-4" />
    <img v-else :src="photoPath" class="w-28 h-28 rounded-full mb-4" />
    <div class="text-light-gray text-xs text-center">
      {{ role.toUpperCase() }}
    </div>
    <div class="text-lg text-center mb-10 lg:mb-6">
      {{ name }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'PersonDisplay',
  props: {
    name: {
      type: String,
      default: ''
    },
    role: {
      type: String,
      default: ''
    },
    photoPath: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>

</style>
