<template>
  <div class="flex flex-col items-center">
    <SectionTitle text="Obsazení" />
    <!-- grid-cols-1 by mělo zajistit, že když se bude zoomovat, tak bude první na obrázku pouze ženich s nevěstou (když mají společný obrázek, jinak nastavit 2)-->
    <div class="grid grid-cols-2 lg:items-end">
      <PersonDisplay
        name="Anna Poláková"
        role="Nevěsta"
        :photo-path="require('@/assets/images/anna_polakova_photo.png')"
        class="order-1 lg:order-1 lg:flex"
        additional-styles="w-20 h-20 lg:w-28 lg:h-28"
        role-color="text-orange"
      />
      <PersonDisplay
        name="Jakub Mičánek"
        role="Ženich"
        :photo-path="require('@/assets/images/jakub_micanek_photo.png')"
        class="order-1 lg:order-1 lg:flex"
        additional-styles="w-20 h-20 lg:w-28 lg:h-28"
        role-color="text-orange"
      />
    </div>
    <div class="grid grid-cols-2 lg:items-end">
      <PersonDisplay
        name="Richard Mazúr"
        role="Svědek ženicha"
        :photo-path="require('@/assets/images/richard_mazur_photo.png')"
        class="order-2 lg:order-2 lg:flex"
        additional-styles="w-16 h-16 lg:w-20 lg:h-20"
      />
      <PersonDisplay
        name="Kateřina Puczoková"
        role="Svědkyně nevěsty"
        :photo-path="require('@/assets/images/katerina_puczokova_photo.png')"
        class="order-1 lg:order-1 lg:flex"
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
