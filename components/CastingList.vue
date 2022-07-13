<template>
  <div class="flex flex-col items-center">
    <SectionTitle text="Obsazení" />
    <div class="grid grid-cols-2 lg:flex lg:flex-row">
      <PersonDisplay name="Zdeněk Linhart" role="Svěděk ženicha" :photo-path="require('@/assets/images/zdenek_photo.png')" class="order-3 lg:order-1" />
      <PersonDisplay name="Petr Hubáček" role="Ženich" class="order-1 lg:order-2" />
      <PersonDisplay name="Ngoc Mai Nguyen" role="Nevěsta" class="order-2 lg:order-3" />
      <PersonDisplay name="Son Hai Nguyen" role="Svěděk nevěsty" class="order-4" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'CastingList'
}
</script>

<style scoped>

</style>
