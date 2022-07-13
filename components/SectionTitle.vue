<template>
  <div class="text-pink font-montserrat tracking-[0.25em] text-3xl font-medium mb-5">
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
