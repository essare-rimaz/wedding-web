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

    <SectionTitle text="Problem fixers" />
    <TextContent>
      Pokud budete potřebovat po přijezdu na místo někam nasměrovat, s něčím poradit, nebo vyřešit nějaký problém, vyhledejte pomoc našich dvou statných pomocníků.
    </TextContent>
    <div class="flex flex-row">
      <PersonDisplay
        name="Martin"
        role=""
        :photo-path="require('@/assets/images/martin_photo.png')"
        class="order-3 lg:order-1"
        additional-styles="w-16 h-16 lg:w-20 lg:h-20"
      />
      <PersonDisplay
        name="Filip"
        role=""
        :photo-path="require('@/assets/images/filip_photo.png')"
        class="order-3 lg:order-1"
        additional-styles="w-16 h-16 lg:w-20 lg:h-20"
      />
    </div>
    <SplitElement />

    <SectionTitle text="Obecné informace" />
    <TextContent>
      Co si vzít na sebe? Vemte si prosím na sebe něco v čem se budete cítit dobře a pohodlně. Pro milovníky barev a detailů je tu možnost se sladit s výzdobou a ubrouskama, které budou v odstínů modré a světle růžové 😃 (budeme jen rádi 😃).
    </TextContent>
    <TextContent>
      Z osobní zkušenosti doporučujeme dámám se obout do pohodlných botiček (ideálně bez podpadku), kterých Vám nebude líto, že se odřou či zničí. Hlavní prostranství je totiž šterkové a obřad bude na zatravněné zahradě, kde se Vám můžou zabodávat podpatky do hlíny a můžete upadnout.
    </TextContent>
    <TextContent>
      P.S. Stejně se pak všichni převlečeme do něčeho jinýho, jak budeme zpocení 😃... Tak si z toho zas nedělejte tolik vrásky, hlavně že tam všichni budete 😘.
    </TextContent>
    <SplitElement />

    <SectionTitle text="Svatební dar" />
    <TextContent>
      Jelikož Vás máme rádi, tak nechceme, abyste složitě vybírali dárky, které by se nám do našeho 1kk bytečku nejspíš stejně nevzlezly. Usnadníme Vám to - rádi od Vás přijmeme hotovost, kreditky (včetně pinu samozřejmě), platné stravenky, jízdenky, či letenky 😃.
    </TextContent>
    <SplitElement />

    <SectionTitle text="Program" />
    <ProgramList :program-items="weddingProgram" />
    <SplitElement />

    <SectionTitle text="Parkování" />
    <TextContent>
      Své přibližovadla si můžete zaparkovat na velkém neplaceném parkovišti v centru města (odkaz na mapy). Odtud Vás svezeme specialní pouliční autobusovou linkou č. Ng a zpátky ke svým plechovým mazlíčkům se dostanete zajištěným rozvozem.
    </TextContent>
    <TextContent>
      Bohužel není možné parkovat vozidly přímo na místě ani uvnitř, ani před, ani za, ani vedle objektu. Opravdu, nejde. Našim rozvozem ale pohodlně přepravíme Vás všechny včetně kočárků či jíných zavazadel 😉.
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
      new ProgramDataItem('Sympatické malé občerstvení', '12:00', 'Pokud máte nějaké omezení, kontaktujte nás prosím.'),
      new ProgramDataItem('Romantickej obřad', '13:00', ''),
      new ProgramDataItem('Tož nějaké to foceníčko', '13:40', ''),
      new ProgramDataItem('Tradiční jídlo s nádechem exotiky', '14:40', 'Pokud máte nějaké omezení, kontaktujte nás prosím.'),
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
