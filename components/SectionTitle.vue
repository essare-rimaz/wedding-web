<template>
  <div class="text-pink font-montserrat tracking-[0.25em] text-2xl lg:text-3xl font-medium mb-5 items-center">
    {{ text.toUpperCase() }}
  </div>
</template>

<script>
export default {
  name: 'SectionTitle',
  props: {
    text: {
      type: String,
      default: ''
    }
  }
}
</script>
