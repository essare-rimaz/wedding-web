<template>
  <div class="flex flex-col items-center">
    <img src="@/assets/images/intro_photo.png" class="mb-8 lg:mb-16 object-cover w-full h-64 lg:h-auto" />
    <EssentialInfoDisplay day="30.7." year="2022" />
    <SplitElement />
    <CountdownDisplay end-time="2022-07-30T10:30:00.000+02:00" />
    <SplitElement />
    <CastingList />
    <SplitElement />
    <WeddingProgram />
    <SplitElement />
    <SectionTitle text="Doprava" />
    <p class="font-montserrat tracking-[0.10em] font-light text-black mb-4 text-center w-3/4">
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
    </p>
  </div>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>

<style>

</style>
