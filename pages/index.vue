<template>
  <div class="flex flex-col items-center">
    <img
      src="@/assets/images/intro_pokus.png"
      width="1920"
      height="697"
      class="mb-8 lg:mb-16 object-cover w-full h-64 lg:h-auto"
    />
    <SplitElement />
    <EssentialInfoDisplay day="7.10." year="2023" />
    <SplitElement />
    <CountdownDisplay end-time="2023-10-30T10:30:00.000+02:00" />
    <SplitElement />

    <CastingList />
    <SplitElement />

    <SectionTitle text="Obecné informace" />
    <TextContent>
      Pro jednodušší organizaci a pro přehled, prosím vyplňte krátký dotazník. Dotazy jsou čistě praktické a pro nás velice důležité. Pokud na této stránce přece jen nenajdete odpovědi na Vaše otázky, kontaktujte nás nebo naše svědky.
    </TextContent>
    <SplitElement />

    <SectionTitle text="Dress code" />
    <TextContent>
      Co si vzít na sebe? Vemte si prosím na sebe něco v čem se budete cítit dobře a pohodlně. Pro milovníky barev a detailů je tu možnost se sladit s výzdobou, která bude v barvách <span class="font-semibold">podzimu</span> 😃 (budeme jen rádi 😃).
    </TextContent>
    <TextContent>
      Prosím, mějte na paměti, že počasí může být všelijaké, ale podzim je podzim. Takže se vybavte nějakými svetříky nebo jiným teplým oblečením. V případě nehezkého počasí, bude obřad probíhat pod pergolou. Pokud by byla opravdu velká zima, bude se vše odehrávat uvnitř.
    </TextContent>
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

    <SectionTitle text="Svatební dary" />
    <TextContent>
      Jelikož Vás máme rádi, tak nechceme, abyste složitě vybírali dárky, které by se nám hodily a líbily. Usnadníme Vám to - rádi od Vás příjmeme hotovost (popř. kreditky včetně pinu samozřejmě). Pokud byste chtěli dávat nějaké předměty nebo poukazy, je možné nakouknout do inspirační tabulky.  Největším dárkem pro nás ale bude vaše přítomnost.
    </TextContent>
    <SplitElement />

    <SectionTitle text="Program" />
    <ProgramList :program-items="weddingProgram" />
    <SplitElement />

    <!-- ACCOMMODATION -->
    <SectionTitle text="Ubytování" />
    <TextContent>
      Jestliže plánujete i nějaký ten spánek ale ještě nevíte, kam složíte hlavu, prosím vyplňte dotazník, kde je pár dotazů zaměřeno přímo na téma ubytování. <a target="_blank" href="https://www.borovinka.cz/rooms" class="underline hover:text-dark-blue text-pink font-semibold transition-colors">Zde</a> je možnost podívat se na pokoje v penzionu (pokoj č. 5 si zabírají novomanželé 🙂). Pokud bude příliš mnoho zájemců o ubytování, přednost budou mít členové rodiny. Pokoje jsou po více postelých, takže je to spíš ubytování pro větší skupiny lidí cca po pěti lidech.
    </TextContent>
    <SplitElement />

    <SectionTitle text="Parkování" />
    <TextContent>
      Jsou tady dvě možnosti. Své kočáry si můžete zaparkovat buď <a target="_blank" href="https://mapy.cz/s/nuvoculame" class="underline hover:text-dark-blue text-pink font-semibold transition-colors">přímo před penzionem</a>, kde se to všechno bude konat a nebo na <a target="_blank" href="https://mapy.cz/s/nugurulana" class="underline hover:text-dark-blue text-pink font-semibold transition-colors">neplaceném parkovišti v centru města</a>. Pokud se rozhodnete své kočáry zaparkovat ve městě, rádi pro Vás zajedeme. Parkovacích míst je před penzionem nanejvýš 11, takže budou přednostně určeny pro rodinu, starší, těhotné a pohybově omezené.
    </TextContent>
    <SplitElement />

    <SectionTitle text="Aktivity mimo program" />
    <TextContent>
      Na pozemku je možné si zahrát minigolf, pétanque, volejbal a pro největší otužilce tam je i rybník. Pro nejmenší je poblíž hřiště. Asi 100 m od penzionu je lanové centrum. To ale není součástí resortu a tudíž není zdarma. Kdo by měl přece jen zájem, je třeba se <a target="_blank" href="https://www.outdoordomanin.cz/oteviraci-doba/" class="underline hover:text-dark-blue text-pink font-semibold transition-colors">objednat předem</a>.
    </TextContent>
    <SplitElement />
    <TextContent>
      <span class="text-sm">S láskou vytvořil Richard Mazúr za milé pomoci Josefa Koláře s téměř plagiátorskou inspirací u Son Hai Nguyen © 2023</span>
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
      new ProgramDataItem('Příjezd hostů', '13:00'),
      new ProgramDataItem('Obřad', '14:30', ''),
      new ProgramDataItem('Focení & Aktivity pro hosty', '15:00', ''),
      new ProgramDataItem('První tanec', '17:30'),
      new ProgramDataItem('Tančírna & Raut', '17:35', 'Pokud máte nějaké omezení, kontaktujte nás prosím.'),
      new ProgramDataItem('Velký kvíz', '19:00', ''),
      new ProgramDataItem('Volná zábava', '20:00', '')
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
