<template>
  <div class="flex flex-col items-center">
    <img
      src="@/assets/images/intro_photo.png"
      width="1920"
      height="697"
      class="mb-8 lg:mb-16 object-cover w-full h-64 lg:h-auto"
    />
    <EssentialInfoDisplay day="30.7." year="2022" />
    <SplitElement />
    <CountdownDisplay end-time="2022-07-30T10:30:00.000+02:00" />
    <SplitElement />
    <CastingList />
    <SplitElement />

    <SectionTitle text="Obecné informace" />
    <TextContent>
      Co si vzít na sebe? Vemte si prosím na sebe něco v čem se budete cítit dobře a pohodlně. Pro milovníky barev a detailů je tu možnost se sladit s výzdobou a ubrouskama, které budou v odstínů modré a světle růžové 😃 (budeme jen rádi 😃).
    </TextContent>
    <TextContent>
      Z osobní zkušenosti radím dámám si vzít na sebe pohodlné botičky, kterým vám nebude líto, že se odřou či zničí, jelikož hlavní prostranství je šterkové a obřad bude na zahradě, kde se vám můžou zabodávat podpatky do trávníku a můžete spadnout.
    </TextContent>
    <TextContent>
      P.S. Stejně se pak všichni převlečeme do něčeho jinýho, jak budeme zpocení 😃... Tak si z toho zas nedělejte tolik vrásky, hlavně že tam všichni budete 😘.
    </TextContent>
    <SplitElement />

    <SectionTitle text="Svatební dar" />
    <TextContent>
      Jelikož Vás máme rádi a nechceme, abyste složitě vybírali dárky, které by se nám do našeho 1kk nejspíš stejně nevzlezly. Usnadníme Vám to, rádi od vás přijmeme hotovost, kreditky včetně pinu samozřejmě, platné stravenky, jízdenky, či letenky 😃.
    </TextContent>
    <SplitElement />

    <SectionTitle text="Program" />
    <ProgramList :program-items="weddingProgram" />
    <SplitElement />

    <SectionTitle text="Parkování" />
    <TextContent>
      Své kočáry si můžete zaparkovat na velkém neplaceném parkovišti v centru města (<a class="transition-colors hover:text-dark-blue underline font-semibold text-pink" target="_black" href="https://en.mapy.cz/turisticka?x=17.1132693&y=49.4703812&z=19&source=coor&id=17.113285433864576%2C49.470237371020225">odkaz na mapy</a>). Odtud Vás svezeme specialní pouliční autobusovou linkou <span class="font-semibold">č. Ng</span> a zpátky ke svým plechovým mazlíčkům se dostanete zajištěným (nočním) rozvozem. Bohužel <span class="font-semibold">není</span> možné parkovat vozidly přímo na místě uvnitř, ani před, ani za, ani vedle objektu. Opravdu, nejde. Prosím, nezkoušejte to teda.
    </TextContent>
    <SplitElement />

    <!-- BUS TIMETABLE -->
    <SectionTitle text="Svoz hostů" />
    <TextContent>
      Jízní řád autobusové linky <span class="font-semibold">č. Ng</span>.
    </TextContent>
    <ProgramList :program-items="busTimetable" />
    <SplitElement />

    <!-- ACCOMMODATION -->
    <SectionTitle text="Ubytování" />
    <TextContent>
      Jestliže plánujete i nějaký ten spánek ale ještě nevíte, kam složíte hlavu, prosím kontaktujte nás.
    </TextContent>
    <SplitElement />
  </div>
</template>

<script>
import { ProgramDataItem } from '@/utils/program'

export default {
  name: 'IndexPage',
  data: () => ({
    weddingProgram: [
      new ProgramDataItem('Otevření Večerky a Svoz hostů', '10:30', 'Společný svoz autobusem. Více informací v sekci "Svoz hostů".'),
      new ProgramDataItem('Sympatické malé občerstvení', '12:00', 'Pro seznam jídel skrze nás kontaktujte.'),
      new ProgramDataItem('Romantickej obřad', '13:00', ''),
      new ProgramDataItem('Tož nějaké to foceníčko', '13:40', ''),
      new ProgramDataItem('Tradiční jídlo s nádechem exotiky', '14:40', 'Pro seznam jídel skrze nás kontaktujte.'),
      new ProgramDataItem('Krájení dortu', '16:00', 'Dort není plastový, tudíž bude jedlý.'),
      new ProgramDataItem('Omotávání kytice', '18:00', ''),
      new ProgramDataItem('Tanec novomanželů a další zvrhlosti', '18:30', ''),
      new ProgramDataItem('Svatební hry a dražba', '20:00', ''),
      new ProgramDataItem('Volná zábavička', '20:30', '')
    ],
    busTimetable: [
      new ProgramDataItem('Určická 66', '10:45'),
      new ProgramDataItem('Poliklinika', '11:00'),
      new ProgramDataItem('Plumlovská 43', '11:05'),
      new ProgramDataItem('Vrahovice', '11:15'),
      new ProgramDataItem('Parkoviště Komenského', '11:40'),
      new ProgramDataItem('Vrahovice', '11:50')
    ]
  })
}
</script>

<style>

</style>
