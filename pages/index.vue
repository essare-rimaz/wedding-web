<template>
  <div class="flex flex-col items-center">
    <img src="@/assets/images/intro_photo.png" class="mb-8 lg:mb-16 object-cover w-full h-64 lg:h-auto" />
    <EssentialInfoDisplay day="30.7." year="2022" />
    <SplitElement />
    <CountdownDisplay end-time="2022-07-30T10:30:00.000+02:00" />
    <SplitElement />
    <CastingList />
    <SplitElement />

    <SectionTitle text="Obecné informace" />
    <TextContent
      text="Co si vzít na sebe? Vemte si prosím na sebe něco v čem se budete cítit dobře a pohodlně. Pro milovníky barev a detailů je tu možnost se sladit s výzdobou a ubrouskama, které budou v odstínů modré a světle růžové (budeme jen rádi)."
    />
    <TextContent
      text="Z osobní zkušenosti radím dámám si vzít na sebe pohodlné botičky, kterým vám nebude líto, že se odřou či zničí, jelikož hlavní prostranství je šterkové a obřad bude na zahradě, kde se vám můžou zabodávat podpatky do trávníku a můžete spadnout."
    />

    <TextContent
      text="P.S. Stejně se pak všichni převlečeme do něčeho jinýho, jak budeme spocení 😃... Tak si z toho zas nedělejte tolik vrásky, hlavně že tam všichni budete."
    />
    <SplitElement />

    <ProgramList :program-items="weddingProgram" />
    <SplitElement />
    <SectionTitle text="Parkování" />
    <TextContent
      text="Své kočáry si můžete zaparkovat na velkém neplaceném parkovišti v centru města (viz mapka). Odtud Vás svezeme speciální pouliční autobusovou linkou až na místo konaní velkolepé akce. Zpátky ke svým plechovým mazlíčkům se dostanete (nočním) rozvozem."
    />
    <TextContent
      text="Bohužel není možné parkovat vozidly primo na miste uvnitř, ani před, ani za, ani vedle objektu. Opravdu, nejde. Prosím, nezkoušejte to teda."
    />
    <SplitElement />
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
