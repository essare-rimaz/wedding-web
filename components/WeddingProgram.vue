<template>
  <div class="flex flex-col items-center">
    <SectionTitle text="Program" />
    <div>
      <ProgramItem time="10:30" title="Otevření Večerky a Svoz hostů" description="TODO" />
      <ProgramItem time="12:00" title="Sympatické malé občerstvení" description="TODO" />
      <ProgramItem time="13:00" title="Romantickej obřad" description="TODO" />
      <ProgramItem time="13:40" title="Tož nějaké to foceníčko" description="TODO" />
      <ProgramItem time="14:40" title="Tradiční jídlo s nádechem exotiky" description="Pho Bo (hovězí vietnamská polévka) a svíčková jako hlavní chod." />
      <ProgramItem time="16:00" title="Krájení dortu" description="TODO" />
      <ProgramItem time="18:00" title="Omotávání kytice" description="TODO" />
      <ProgramItem time="18:30" title="Tanec novomanželů a další zvrhlosti" description="TODO" />
      <ProgramItem time="20:00" title="Svatební hry a dražba" description="TODO" />
      <ProgramItem :last-item="true" time="20:30" title="Volná zábavička" description="TODO" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'WeddingProgram'
}
</script>

<style scoped>

</style>
