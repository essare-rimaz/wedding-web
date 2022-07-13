<template>
  <div class="flex flex-row">
    <div class="flex flex-col items-center ml-3 mr-12 lg:mr-16">
      <div class="w-2.5 h-2.5 bg-pink rounded-full mt-2 mb-2" />
      <div v-if="!lastItem" class="w-0.5 flex-grow bg-light-gray" />   <!-- bottom line -->
    </div>

    <div class="flex flex-col font-montserrat tracking-[0.10em]">
      <h3 class="font-semibold text-lg mb-1">
        {{ title }}
      </h3>
      <time class="font-light text-lg mb-1">
        {{ time }}
      </time>
      <p class="font-light text-light-gray text-sm mb-4">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProgramItem',
  props: {
    title: {
      type: String,
      default: ''
    },
    time: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    lastItem: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>

</style>
