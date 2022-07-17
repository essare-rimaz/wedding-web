<template>
  <div class="flex flex-col items-center font-montserrat">
    <time class="text-dark-blue text-3xl xl:text-5xl tracking-[0.25em] mb-6">
      <span class="font-semibold">{{ day }}</span>
      <span class="font-regular">{{ year }}</span>
    </time>
    <a target="_blank" href="https://mapy.cz/zakladni?x=17.1497549&y=49.4803952&z=17&q=%C4%8Cs.%20Arm%C3%A1dn%C3%ADho%20Sboru%206%2F14%20Prost%C4%9Bjov%20-%20Vrahovice&source=addr&id=11443939&ds=1">
      <address class="hover:text-dark-blue transition-colors not-italic text-center text-pink tracking-[0.15em] text-base xl:text-xl mb-3">
        Čs. Armádního Sboru 6/14<br>
        Prostějov - Vrahovice
      </address>
    </a>
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
