<template>
  <div class="flex flex-col items-center font-montserrat">
    <time class="text-dark-blue text-3xl xl:text-5xl tracking-[0.25em] mb-6">
      <span class="font-semibold">{{ day }}</span>
      <span class="font-regular">{{ year }}</span>
    </time>
    <address class="not-italic text-center text-pink tracking-[0.15em] text-base xl:text-xl mb-3">
      Čs. Armádního Sboru 6/14<br>
      Prostějov - Vrahovice
    </address>
  </div>
</template>

<script>
export default {
  name: 'EssentialInfoDisplay',
  props: {
    day: {
      type: String,
      default: ''
    },
    year: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>

</style>
