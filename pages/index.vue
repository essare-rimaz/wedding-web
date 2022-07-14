<template>
  <div class="flex flex-col items-center">
    <img src="@/assets/images/intro_photo.png" class="mb-8 lg:mb-16 object-cover w-full h-64 lg:h-auto" />
    <EssentialInfoDisplay day="30.7." year="2022" />
    <SplitElement />
    <CountdownDisplay end-time="2022-07-30T10:30:00.000+02:00" />
    <SplitElement />
    <CastingList />
    <SplitElement />
    <ProgramList :program-items="weddingProgram" />
    <SplitElement />
    <SectionTitle text="Doprava" />
    <p class="font-montserrat tracking-[0.10em] font-light text-black mb-4 text-center w-3/4">
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
    </p>
  </div>
</template>

<script>
import { ProgramDataItem } from '@/utils/program'

export default {
  name: 'IndexPage',
  data: () => ({
    weddingProgram: [
      new ProgramDataItem('Otevření Večerky a Svoz hostů', '10:30', 'TODO'),
      new ProgramDataItem('Sympatické malé občerstvení', '12:00', 'TODO'),
      new ProgramDataItem('Romantickej obřad', '13:00', 'TODO'),
      new ProgramDataItem('Tož nějaké to foceníčko', '13:40', 'TODO'),
      new ProgramDataItem('Tradiční jídlo s nádechem exotiky', '14:40', 'TODO'),
      new ProgramDataItem('Krájení dortu', '16:00', 'TODO'),
      new ProgramDataItem('Omotávání kytice', '18:00', 'TODO'),
      new ProgramDataItem('Tanec novomanželů a další zvrhlosti', '18:30', 'TODO'),
      new ProgramDataItem('Svatební hry a dražba', '20:00', 'TODO'),
      new ProgramDataItem('Volná zábavička', '20:30', 'TODO')
    ]
  })
}
</script>

<style>

</style>
