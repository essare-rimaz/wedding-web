<template>
  <div class="flex flex-col items-center">
    <SectionTitle text="Obsazení" />
    <div class="grid grid-cols-2 lg:flex lg:flex-row lg:items-end">
      <PersonDisplay
        name="Richard Mazúr"
        role="Svěděk ženicha"
        :photo-path="require('@/assets/images/richard_mazur.png')"
        class="order-3 lg:order-1"
        additional-styles="w-16 h-16 lg:w-20 lg:h-20"
      />
      <PersonDisplay
        name="Jakub Mičánek"
        role="Ženich"
        :photo-path="require('@/assets/images/jakub_micanek_photo.png')"
        class="order-1 lg:order-2"
        additional-styles="w-20 h-20 lg:w-28 lg:h-28"
        role-color="text-pink"
      />
      <PersonDisplay
        name="Anna Poláková"
        role="Nevěsta"
        class="order-2 lg:order-3"
        :photo-path="require('@/assets/images/anna_polakova_photo.png')"
        additional-styles="w-20 h-20 lg:w-28 lg:h-28"
        role-color="text-pink"
      />
      <PersonDisplay
        name="Kateřina Puczoková"
        role="Svěděk nevěsty"
        :photo-path="require('@/assets/images/sony_photo.png')"
        class="order-4"
        additional-styles="w-16 h-16 lg:w-20 lg:h-20"
      />
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
