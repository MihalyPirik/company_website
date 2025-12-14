<script setup lang="ts">
import { ref } from 'vue'

interface ServicePackage {
  id: string
  name: string
  tagline: string
  shortDescription: string
  priceRange: string
  priceHint: string

  recommendedFor: string
  typicalExample: string

  features: string[]
  deliverables: string[]
  supportAndGuarantee: string[]
  priceDrivers: string[]
  notIncluded: string[]
  addons: string[]

  ctaLabel: string
  highlight?: boolean
  highlightNote?: string
}

interface ProcessStep {
  title: string
  description: string
}

interface MaintenancePlan {
  id: string
  title: string
  description: string
  priceRange: string
  items: string[]

  includedHours: string
  responseTime: string
  overage: string
  scopeNote: string
}

interface FaqItem {
  question: string
  answer: string
}

const packages: ServicePackage[] = [
  {
    id: 'starter',
    name: 'Induló Weboldal',
    tagline: 'Profi bemutatkozó oldal, ami érthető, gyors és kapcsolatot hoz.',
    shortDescription:
      'Ha most indulsz, vagy a jelenlegi honlapod már nem tükrözi a vállalkozásod szintjét: kapsz egy átlátható, mobilbarát bemutatkozó oldalt, ami segít, hogy megtaláljanak és írjanak / hívjanak.',
    priceRange: 'Irányár: 200 000 – 300 000 Ft',
    priceHint:
      'Az ár főleg az oldalak számától, a tartalom mennyiségétől és az űrlapok / extra bekötések összetettségétől függ.',

    recommendedFor:
      'Ha egy megbízható “névjegy + ajánlat + kapcsolat” jellegű weboldal kell, amin az érdeklődő gyorsan dönt.',
    typicalExample:
      'Tipikus példa: szolgáltató oldal 4–5 aloldallal, referenciákkal és erős kapcsolatfelvételi gombokkal.',

    features: [
      'Legfeljebb 5 aloldal (Főoldal, Rólam/Rólunk, Szolgáltatások, Referenciák, Kapcsolat)',
      'Reszponzív, mobilra optimalizált megjelenés',
      'Gyors, átlátható oldalstruktúra (látogatónak és keresőnek is)',
      'Alap keresőoptimalizálási beállítások (oldalcímek, leírások, jól tagolt tartalom)',
      'Kapcsolat szekció: kattintható e-mail és telefonszám',
      'Szerkesztőfelület nélkül (módosítás eseti kérésre vagy karbantartással)',
      'Segítség domain, tárhely és SSL kiválasztásában és beállításában',
    ],
    deliverables: [
      'Oldaltérkép + javasolt struktúra (mi hova kerüljön)',
      '1 design irány + 2 kör módosítás',
      'Tartalomfeltöltés a megadott anyagokból (szöveg/képek)',
      'Kapcsolatfelvételre ösztönző elemek (gombok, “következő lépés” a látogatónak)',
      'Élesítés (közzététel) + technikai beállítások támogatása',
    ],
    supportAndGuarantee: [
      'Élesítés után 30 nap hibajavítás',
      'Konzultáció után rövid írásos összefoglaló + javasolt csomag',
    ],
    priceDrivers: [
      'Oldalak száma és a tartalom mennyisége',
      'Egyedi megjelenés igénye (különleges elemek, animációk, egyedi blokkok)',
      'Űrlap bonyolultsága (mezők száma, logika, értesítések)',
      'Külső szolgáltatások bekötése (hírlevél, statisztika, hirdetésmérés)',
    ],
    notIncluded: [
      'Online foglalás / fizetés / számlázás bekötése',
      'Összetett ajánlatkérő űrlap (több lépés, fájlfeltöltés, feltételek)',
      'Többnyelvűség',
      'Szövegírás (ha nincs kész anyagod)',
      'Jogi szövegek elkészítése (technikai beépítésben segítek, de jogi tartalmat nem írok)',
    ],
    addons: [
      'Szövegírás / szövegek átnézése és finomhangolása',
      'Cookie banner (süti értesítés) + mérőkódok hozzájáruláshoz kötése',
      'Statisztika bekötés (GA4) + alap mérés beállítása',
      'Hírlevél feliratkozás bekötése (pl. Brevo)',
      'Alap arculati frissítés (színek, betűk, egységes vizuális irány)',
    ],
    ctaLabel: 'Kérek csomagjavaslatot',
  },
  {
    id: 'business',
    name: 'Üzleti Weboldal',
    tagline: 'Tartalomkezelős weboldal belépéssel, hogy te is tudj frissíteni.',
    shortDescription:
      'Ha rendszeresen változik a tartalom (blog, hírek, referenciák, csapat): kapsz egy kezelőfelületet, ahol belépés után te is tudod frissíteni, amit kell — biztonságosan és érthetően.',
    priceRange: 'Irányár: 450 000 – 900 000 Ft',
    priceHint:
      'Az ár a tartalomtípusok számától (pl. blog + referenciák), az űrlapok logikájától és a bekötésektől függ.',

    recommendedFor:
      'Ha szeretnél belépni egy admin felületre, és saját magad frissítenéd a tartalmakat (poszt, referencia, csapattag).',
    typicalExample:
      'Tipikus példa: blog + referenciák kezelése, ajánlatkérő űrlap e-mail értesítéssel, alap mérőkódok bekötésével.',

    features: [
      'Minden, ami az Induló Weboldal csomagban',
      'Egyedi kezelőfelület (blog, hírek, referenciák, csapattagok kezelése)',
      'Admin belépés + jelszócsere / jelszóemlékeztető',
      'Szerepkörök (ki mit szerkeszthet: admin / szerkesztő)',
      'Összetettebb ajánlatkérő űrlapok',
      'E-mail értesítések (új üzenet / ajánlatkérés esetén)',
      'Kapcsolódások külső szolgáltatásokhoz (hírlevél, statisztika, hirdetésmérés)',
    ],
    deliverables: [
      'Kezelőfelület belépéssel + alap szerepkörök (admin / szerkesztő)',
      'Tartalomtípusok beállítása (pl. blog/referenciák/csapat)',
      'Egységes oldalsablonok (könnyű bővíthetőség később)',
      'Űrlapok és értesítések beállítása (e-mail, logika)',
      'Élesítés + átadás + betanítás (igény szerint videó vagy PDF útmutató)',
    ],
    supportAndGuarantee: [
      'Átadáskor betanítás',
      'Élesítés után 30 nap hibajavítás',
      'Konzultáció után írásos összefoglaló + tételes ajánlat határidővel',
    ],
    priceDrivers: [
      'Tartalomtípusok száma (pl. csak blog vs blog + referenciák + csapat)',
      'Űrlap logika (feltételek, több lépés, fájl feltöltés)',
      'Külső rendszerek bekötése (hírlevél / ügyfélkezelő / statisztika / hirdetésmérés)',
      'Szerepkörök/jogosultságok összetettsége (1 admin vs több szerepkör)',
      'Egyedi megjelenés és egyedi elemek mennyisége',
    ],
    notIncluded: [
      'Komplex foglalási vagy fizetési folyamat',
      'Egyedi üzleti logika, “rendszer jellegű” funkciók (inkább webalkalmazás)',
      'Többnyelvűség (ha sok tartalom van)',
      'Jogi szövegek elkészítése (technikai beépítés lehetséges)',
    ],
    addons: [
      'Többnyelvűség',
      'Ügyfél belépés / regisztráció (ha a látogatóknak is kell fiók)',
      'Összetett jogosultsági rendszer (több szerepkör, modulonkénti hozzáférés)',
      'Ügyfélkezelő (CRM) bekötés (lehetőségektől függően)',
      'Ajánlatkérők automatikus szétosztása (típus alapján más e-mail címre)',
      'Esettanulmány modul + keresőoptimalizálásra épített tartalomsablon',
    ],
    ctaLabel: 'Kérek csomagjavaslatot',
    highlight: true,
    highlightNote: 'Legnépszerűbb – ha rendszeresen frissítenéd a tartalmaidat belépés után.',
  },
  {
    id: 'custom-app',
    name: 'Egyedi Webalkalmazás',
    tagline: 'Egyedi online rendszer – amikor már folyamatokat akarsz automatizálni.',
    shortDescription:
      'Foglalási rendszer, tagsági felület, belső admin folyamatok vagy egyedi portál. Itt a működés a lényeg: folyamatok, jogosultságok, automatizmusok és külső rendszerek összekötése.',
    priceRange: 'Irányár: 1 000 000 Ft-tól, funkcióktól függően',
    priceHint:
      'Az ár főleg a funkciók számától (pl. foglalás/fizetés), a szerepköröktől és az integrációktól (API-k) függ.',

    recommendedFor:
      'Ha nem csak “honlap” kell, hanem egy rendszer, ami időt spórol és automatizál (pl. foglalás, státuszok, értesítések).',
    typicalExample:
      'Tipikus példa: foglalás + admin kezelés + automatikus e-mail értesítések + külső rendszer(ek) bekötése.',

    features: [
      'Teljesen egyedi tervezés és fejlesztés',
      'Többféle felhasználói szerepkör és jogosultság',
      'Összetett funkciók (keresés, szűrés, kedvencek, értékelés, kommentek)',
      'Fejlett kezelőfelület (tartalmak, felhasználók, jogosultságok kezelése)',
      'Külső rendszerek bekötése (e-mail, fizetés, számlázás, egyéb szolgáltatások)',
      'Növekedésre felkészített, hosszú távon bővíthető felépítés',
    ],
    deliverables: [
      'Részletes specifikáció + ütemterv mérföldkövekkel (mi mikor készül el)',
      'Képernyőtervek / felhasználói útvonalak (hogyan használják a rendszeredet)',
      'Stabil rendszerfelépítés + kezelőfelület',
      'Kapcsolódások és automatizmusok (értesítések, folyamatok, külső rendszerek)',
      'Tesztelés + élesítés + alap felügyeleti beállítások',
    ],
    supportAndGuarantee: [
      'Átadáskor betanítás + kezelőfelület használata',
      'Élesítés után 30 nap kiemelt hibajavítás',
      'Opciós havi támogatás (felügyelet + fejlesztési keret)',
    ],
    priceDrivers: [
      'Szerepkörök és jogosultságok összetettsége',
      'Funkciók mennyisége és egyedisége (foglalás, fizetés, tagság, stb.)',
      'Külső rendszerek száma és bonyolultsága (fizetés/számlázás/e-mail/egyéb)',
      'Adatkezelés összetettsége (keresés, szűrés, riportok)',
      'Teljesítményigény (nagy forgalom, sok adat, sok felhasználó)',
    ],
    notIncluded: [
      'Külső szolgáltatók díjai (pl. SMS, e-mail küldő, fizetési szolgáltató)',
      'Jogi megfelelés szakjogászi oldala (technikai beépítést vállalok)',
      'Üzemeltetés/hosting költségek (segítünk választani, de nem része az árnak)',
    ],
    addons: [
      'Bankkártyás fizetés + számlázás bekötése (pl. Barion/Számlázz.hu)',
      'Riportok / vezetői összefoglalók (dashboardok)',
      'Automatizmusok (pl. e-mail sorozat, státusz alapú értesítések)',
      'Kiemelt üzemeltetés vállalt reakcióidővel (külön megállapodással)',
    ],
    ctaLabel: 'Időpontot kérek konzultációra',
  },
]

const processSteps: ProcessStep[] = [
  {
    title: 'Ingyenes konzultáció (online / telefon)',
    description:
      'Röviden átbeszéljük, mire kell a weboldal/rendszer, mi a cél (ajánlatkérés, foglalás, bemutatkozás), és melyik csomag illik hozzád.',
  },
  {
    title: 'Igényfelmérés & ajánlat',
    description:
      'Összeírjuk a funkciókat és a tartalmat, majd kapsz egy tételes, érthető ajánlatot határidővel. Ebben tisztán látszik, mi fér bele és mi nem.',
  },
  {
    title: 'Tervezés & vázlat',
    description:
      'Összerakjuk a szerkezetet és a fő blokkokat: mit lát a látogató, hol lesznek a gombok, hogyan lesz könnyű kapcsolatba lépni.',
  },
  {
    title: 'Fejlesztés',
    description:
      'Elkészítjük az oldalt/rendszert, beállítjuk a szükséges technikai részeket, majd közösen végigteszteljük.',
  },
  {
    title: 'Élesítés & átadás',
    description:
      'Közzétesszük az oldalt, és ha van admin felület, megmutatjuk a használatát. Kapsz egy rövid útmutatót is, hogy később se legyen kérdés.',
  },
  {
    title: 'Támogatás & karbantartás (opcionális)',
    description:
      'Ha szeretnéd, hosszú távon is foglalkozunk vele: frissítések, ellenőrzések, kisebb módosítások.',
  },
]

const maintenancePlans: MaintenancePlan[] = [
  {
    id: 'basic-maintenance',
    title: 'Induló / Üzleti Weboldal karbantartás',
    description: 'A cél, hogy a weboldalad gyors, biztonságos és gondozott maradjon.',
    priceRange: 'Irányár: 8 000 – 15 000 Ft / hó-tól',
    items: [
      'Rendszeres technikai frissítések és ellenőrzések',
      'Biztonsági mentések',
      'Kisebb tartalmi módosítások (szöveg/kép)',
      'E-mail support (kiszámítható keretekkel)',
      'Hiba esetén elsőbbségi kezelés a csomagos ügyfeleknek',
    ],
    includedHours: 'Tartalmaz: 1 óra / hó kisebb módosítás',
    responseTime: 'Válaszidő: 1–2 munkanap',
    overage: 'Túllógás: óradíjas elszámolás vagy csomagbővítés',
    scopeNote:
      '“Kisebb módosítás”: szövegcsere, képcsere, apró elrendezés finomhangolás. Új aloldal / új funkció külön fejlesztés.',
  },
  {
    id: 'app-maintenance',
    title: 'Egyedi Webalkalmazás karbantartás',
    description:
      'Komplex rendszerekhez: folyamatos frissítések, alap felügyelet és havi fejlesztési keret, hogy a rendszer stabilan működjön és fejlődjön.',
    priceRange: 'Irányár: 20 000 – 60 000 Ft / hó-tól',
    items: [
      'Rendszeres frissítések, biztonsági javítások',
      'Alap monitoring (elérhetőség, hibák)',
      'Kisebb fejlesztések és finomhangolások a havi keretben',
      'Technikai támogatás és konzultáció',
    ],
    includedHours: 'Tartalmaz: 2–6 óra / hó fejlesztési keret',
    responseTime: 'Válaszidő: megállapodás szerint',
    overage: 'Túllógás: priorizált backlog + külön keret vagy óradíj',
    scopeNote:
      'A havi keret kisebb fejlesztésekre és finomhangolásokra ideális; nagyobb modulok külön ütemezéssel készülnek.',
  },
]

const faqs: FaqItem[] = [
  {
    question: 'Honnan tudom, melyik csomag kell nekem?',
    answer:
      'Ha ritkán változik a tartalom és a cél a bemutatkozás + kapcsolatfelvétel, az Induló Weboldal jó választás. Ha rendszeresen frissítenél (blog, referenciák, csapat), akkor az Üzleti Weboldal való neked. Ha folyamatot automatizálsz (foglalás, tagság, ügyfélbelépés, integrációk), akkor Egyedi Webalkalmazásban gondolkodunk.',
  },
  {
    question: 'Mi kell tőlem az induláshoz?',
    answer:
      'Elég 5–10 mondat arról, mivel foglalkozol és mi a cél, plusz pár példa weboldal, ami tetszik. Ha van logó, képek, szövegek: szuper. Ha nincs, akkor is el tudunk indulni, és megbeszéljük, mi legyen a következő lépés (pl. szöveg finomhangolás, képek).',
  },
  {
    question: 'Milyen gyorsan készül el egy weboldal?',
    answer:
      'Induló Weboldal általában 2–4 hét, Üzleti Weboldal 4–8 hét, Egyedi Webalkalmazásnál pedig a funkcióktól függ. A pontos határidőt mindig az ajánlatban rögzítjük.',
  },
  {
    question: 'Domainem és tárhelyem sincs, ez gond?',
    answer:
      'Nem gond. Segítünk kiválasztani a megfelelő szolgáltatót, és elintézzük a domain, tárhely, SSL és e-mail beállításokat.',
  },
  {
    question: 'Tudok részletekben fizetni?',
    answer:
      'Igen. Általában 30% előleget kérünk a szerződéskor, a fennmaradó részt pedig egy vagy két részletben a projekt során.',
  },
  {
    question: 'Kapok számlát?',
    answer: 'Igen, a szolgáltatásról minden esetben számlát kapsz.',
  },
  {
    question: 'Mi van, ha később szeretnék új funkciókat?',
    answer:
      'A rendszert úgy építjük, hogy bővíthető legyen. Ha később új ötleteid vannak, külön fejlesztési ajánlat alapján tovább tudjuk fejleszteni.',
  },
  {
    question: 'Én fogom tudni kezelni az admin felületet?',
    answer:
      'Igen. Átadáskor megmutatjuk, hogyan tudsz új tartalmat felvinni és módosítani. Ha elakadnál, e-mailben is segítünk.',
  },
  {
    question: 'Mit jelent pontosan a “kisebb módosítás” a karbantartásban?',
    answer:
      'Tipikusan szöveg- és képfrissítések, apró elrendezés finomhangolások férnek bele. Új aloldal, új modul, új funkció vagy komplex logika már fejlesztésnek számít – ezt külön ajánlatban kezeljük.',
  },
  {
    question: 'Mi a helyzet a GDPR / cookie banner / jogi oldalakkal?',
    answer:
      'A cookie banner (süti értesítés) és a mérőkódok engedélykérése technikailag megoldható: beállítjuk, hogy a mérés (pl. Analytics) csak hozzájárulás után induljon. A jogi szövegek (pl. Adatkezelési tájékoztató, ÁSZF) elkészítése jogi terület, azt jellemzően ügyvéd írja, ha vannak már kész dokumentumaid, beépítjük.',
  },
  {
    question: 'Miért nem WordPress-t használtok?',
    answer:
      'Modern, egyedi fejlesztésű megoldásokra specializálódtunk. Ennek előnye, hogy gyors, biztonságos és pontosan a te folyamataidra szabható, különösen egyedi igényeknél. Ha kifejezetten WordPresshez ragaszkodsz, szívesen javaslunk WP-s szakembert.',
  },
  {
    question: 'Mi történik, ha valami elromlik a weboldalon?',
    answer:
      'Élesítés után az esetlegesen felmerülő hibákat 30 napig díjmentesen javítjuk. Havi karbantartással prioritást élvez a hibajavítás; karbantartás nélkül is segítünk, ilyenkor eseti díjazással.',
  },
  {
    question: 'Miért jó nekem, ha van nálatok karbantartási csomagom?',
    answer:
      'Mert nem neked kell a technikai részével foglalkoznod: a weboldal frissítése, biztonsági mentése és alap ellenőrzése rendszeresen megtörténik. Ha kérsz kisebb módosítást (szöveg- vagy képfrissítés), azt a csomag keretében kiszámíthatóan tudjuk kezelni, és hiba esetén is elsőbbséget kapsz.',
  },
]

const activeFaqIndex = ref<number | null>(0)

const packagesSectionRef = ref<HTMLElement | null>(null)
const contactSectionRef = ref<HTMLElement | null>(null)

function scrollToPackages(): void {
  packagesSectionRef.value?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function scrollToContact(): void {
  contactSectionRef.value?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function toggleFaq(index: number): void {
  activeFaqIndex.value = activeFaqIndex.value === index ? null : index
}

function getQuickFeatures(pkg: ServicePackage): string[] {
  return pkg.features.slice(0, 4)
}

function getQuickDeliverables(pkg: ServicePackage): string[] {
  return pkg.deliverables.slice(0, 3)
}
</script>

<template>
  <main class="services-page">
    <section class="hero">
      <div class="hero__content">
        <h1 class="hero__title">
          Weboldal, ami érdeklődőket hoz
          <span class="hero__title-sub">kis- és középvállalkozásoknak</span>
        </h1>

        <p class="hero__subtitle">
          Induló bemutatkozó oldaltól egyedi rendszerekig, úgy építjük fel, hogy a látogató értse,
          bízzon benne, és könnyen kapcsolatba lépjen veled.
        </p>

        <ul class="hero__trust">
          <li>Ingyenes 20–30 perces konzultáció</li>
          <li>Válasz 1 munkanapon belül</li>
          <li>Élesítés után 30 nap hibajavítás</li>
        </ul>

        <div class="hero__actions">
          <button class="btn btn--primary" @click="scrollToContact">Ajánlatot kérek</button>
          <button class="btn btn--secondary" @click="scrollToPackages">Csomagok</button>
        </div>
      </div>
    </section>

    <section class="section section--light">
      <div class="section__inner">
        <h2 class="section__title">Kinek fejlesztünk?</h2>
        <p class="section__lead">
          Olyan vállalkozásoknak, akik nem csak egy “szép oldalt” szeretnének, hanem egy
          <strong>gyors, érthető és bizalmat építő</strong> weboldalt, ami támogatja az
          értékesítést.
        </p>

        <ul class="pill-list">
          <li class="pill-list__item">Induló és növekvő vállalkozások</li>
          <li class="pill-list__item">Szolgáltatók, szakértők, tanácsadók</li>
          <li class="pill-list__item">Akik folyamatot is automatizálnának</li>
        </ul>

        <div class="not-for">
          <h3 class="not-for__title">Kinek nem mi vagyunk a legjobb választás?</h3>
          <ul class="not-for__list">
            <li>Ha 2–3 nap alatt “dobozos” megoldást szeretnél.</li>
            <li>Ha kizárólag a legolcsóbb opció a szempont (website builder valószínű jobb).</li>
            <li>Ha ragaszkodsz a CMS-hez (pl. csak WordPress), tudunk ajánlani más szakembert.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="section" id="packages-section" ref="packagesSectionRef">
      <div class="section__inner">
        <h2 class="section__title section__title--center">Szolgáltatás csomagok</h2>

        <div class="packages-grid">
          <article
            v-for="pkg in packages"
            :key="pkg.id"
            :class="['package-card', { 'package-card--highlight': pkg.highlight }]"
          >
            <div class="package-card__header">
              <p v-if="pkg.highlight" class="package-card__badge">Legnépszerűbb</p>

              <h3 class="package-card__title">{{ pkg.name }}</h3>
              <p class="package-card__tagline">{{ pkg.tagline }}</p>

              <p v-if="pkg.highlight && pkg.highlightNote" class="package-card__highlight-note">
                {{ pkg.highlightNote }}
              </p>
            </div>

            <div class="package-card__who">
              <p class="package-card__who-line">
                <strong>Kinek ajánljuk:</strong> {{ pkg.recommendedFor }}
              </p>
              <p class="package-card__who-line package-card__who-line--muted">
                {{ pkg.typicalExample }}
              </p>
            </div>

            <p class="package-card__description">{{ pkg.shortDescription }}</p>

            <div class="package-card__quick">
              <h4 class="package-card__subtitle">A legfontosabbak</h4>
              <ul class="package-card__features">
                <li
                  v-for="(feature, index) in getQuickFeatures(pkg)"
                  :key="`${pkg.id}-qf-${index}`"
                >
                  {{ feature }}
                </li>
              </ul>

              <h4 class="package-card__subtitle">Amit kézhez kapsz</h4>
              <ul class="package-card__list">
                <li
                  v-for="(item, index) in getQuickDeliverables(pkg)"
                  :key="`${pkg.id}-qd-${index}`"
                >
                  {{ item }}
                </li>
              </ul>
            </div>

            <p class="package-card__price-hint">{{ pkg.priceHint }}</p>

            <details class="package-card__details">
              <summary>Részletek</summary>

              <div class="package-card__details-inner">
                <h4 class="package-card__subtitle">Mit tartalmaz pontosan?</h4>
                <ul class="package-card__list">
                  <li v-for="(item, index) in pkg.features" :key="`${pkg.id}-feat-${index}`">
                    {{ item }}
                  </li>
                </ul>

                <h4 class="package-card__subtitle">Támogatás & garancia</h4>
                <ul class="package-card__list">
                  <li
                    v-for="(item, index) in pkg.supportAndGuarantee"
                    :key="`${pkg.id}-sup-${index}`"
                  >
                    {{ item }}
                  </li>
                </ul>

                <h4 class="package-card__subtitle">Mi mozgatja az árat?</h4>
                <ul class="package-card__list">
                  <li v-for="(item, index) in pkg.priceDrivers" :key="`${pkg.id}-drv-${index}`">
                    {{ item }}
                  </li>
                </ul>

                <h4 class="package-card__subtitle">Mikor kell külön ajánlat?</h4>
                <ul class="package-card__list">
                  <li v-for="(item, index) in pkg.notIncluded" :key="`${pkg.id}-no-${index}`">
                    {{ item }}
                  </li>
                </ul>

                <h4 class="package-card__subtitle">Opcionális extrák</h4>
                <ul class="package-card__list">
                  <li v-for="(item, index) in pkg.addons" :key="`${pkg.id}-add-${index}`">
                    {{ item }}
                  </li>
                </ul>
              </div>
            </details>

            <div class="package-card__footer">
              <p class="package-card__price">{{ pkg.priceRange }}</p>
              <button class="btn btn--ghost" @click="scrollToContact">{{ pkg.ctaLabel }}</button>
              <p class="package-card__micro">
                Röviden leírod, mit szeretnél → kapsz csomagjavaslatot és irányárat.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="section section--light">
      <div class="section__inner">
        <h2 class="section__title section__title--center">Hogyan dolgozunk?</h2>
        <p class="section__lead section__lead--center">
          Átlátható folyamat, hogy mindig tudd, hol tartunk, mi a következő lépés, és mi miért
          készül.
        </p>

        <ol class="process-list">
          <li
            v-for="(step, index) in processSteps"
            :key="`step-${index}`"
            class="process-list__item"
          >
            <div class="process-list__icon">
              <span>{{ index + 1 }}</span>
            </div>
            <div class="process-list__content">
              <h3 class="process-list__title">{{ step.title }}</h3>
              <p class="process-list__description">{{ step.description }}</p>
            </div>
          </li>
        </ol>

        <div class="process-cta">
          <div class="process-cta__content">
            <h3 class="process-cta__title">Mi a következő lépés?</h3>
            <p class="process-cta__text">
              Küldj 5–10 mondatot arról, mivel foglalkozol és mi a cél — mi pedig visszajelzünk egy
              csomagjavaslattal és irányárral.
            </p>
          </div>
          <button class="btn btn--primary" @click="scrollToContact">Kérek csomagjavaslatot</button>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="section__inner">
        <h2 class="section__title section__title--center">Havi támogatás & karbantartás</h2>
        <p class="section__lead section__lead--center">
          Akkor éri meg igazán, ha nem akarsz technikai dolgokkal foglalkozni, és hiba esetén gyors
          segítséget szeretnél.
        </p>

        <div class="maintenance-grid">
          <article v-for="plan in maintenancePlans" :key="plan.id" class="maintenance-card">
            <h3 class="maintenance-card__title">{{ plan.title }}</h3>
            <p class="maintenance-card__description">{{ plan.description }}</p>
            <ul class="maintenance-card__items">
              <li v-for="(item, index) in plan.items" :key="`${plan.id}-item-${index}`">
                {{ item }}
              </li>
            </ul>

            <div class="maintenance-card__meta">
              <p>
                <strong>{{ plan.includedHours }}</strong>
              </p>
              <p>{{ plan.responseTime }}</p>
              <p>{{ plan.overage }}</p>
              <p class="maintenance-card__scope">{{ plan.scopeNote }}</p>
            </div>

            <p class="maintenance-card__price">{{ plan.priceRange }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section section--light">
      <div class="section__inner">
        <h2 class="section__title section__title--center">Gyakori kérdések</h2>

        <div class="faq-list">
          <article v-for="(faq, index) in faqs" :key="`faq-${index}`" class="faq-item">
            <button class="faq-item__question" type="button" @click="toggleFaq(index)">
              <span>{{ faq.question }}</span>
              <span class="faq-item__icon">
                {{ activeFaqIndex === index ? '−' : '+' }}
              </span>
            </button>
            <transition name="faq">
              <div v-if="activeFaqIndex === index" class="faq-item__answer">
                <p>{{ faq.answer }}</p>
              </div>
            </transition>
          </article>
        </div>
      </div>
    </section>

    <section
      id="contact-section"
      class="section section--accent section--center"
      ref="contactSectionRef"
    >
      <div class="section__inner section__inner--narrow">
        <h2 class="section__title section__title--center section__title--on-dark">
          Beszéljünk a weboldaladról!
        </h2>
        <p class="section__lead section__lead--center section__lead--on-dark">
          Írd le pár mondatban, mivel foglalkozol, és mit szeretnél elérni az új weboldallal vagy
          webalkalmazással, mi pedig visszajelzünk egy javasolt csomaggal és irányárral.
        </p>

        <div class="contact-placeholder">
          <p>
            <strong
              >Konzultáció után rövid írásos összefoglalót kapsz (csomag + irányár + következő
              lépések).</strong
            >
          </p>

          <p>
            Addig is elérsz e-mailben:
            <a href="mailto:info@weboldalasszisztencia.hu">info@weboldalasszisztencia.hu</a>
          </p>
        </div>

        <p class="section__note section__note--on-dark">
          Nincs elköteleződés, az első konzultáció teljesen ingyenes és kötetlen.
        </p>
      </div>
    </section>
  </main>
</template>

<style scoped>
.services-page {
  font-family:
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    sans-serif;
  color: #111827;
  background-color: #f3f4f6;
}

.hero {
  padding: 4rem 1.5rem 3rem;
  background: radial-gradient(circle at top left, #e0f2fe 0, #eff6ff 40%, #f9fafb 100%);
}

.hero__content {
  max-width: 960px;
  margin: 0 auto;
  text-align: left;
}

.hero__title {
  font-size: 2.25rem;
  line-height: 1.1;
  margin: 0 0 1rem;
  color: #0f172a;
}

.hero__title-sub {
  display: block;
  font-size: 1.2rem;
  font-weight: 500;
  color: #4b5563;
  margin-top: 0.4rem;
}

.hero__subtitle {
  font-size: 1.05rem;
  color: #4b5563;
  max-width: 680px;
  margin-bottom: 1rem;
}

.hero__trust {
  list-style: disc;
  padding-left: 1.2rem;
  margin: 0 0 1.1rem;
  color: #374151;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 0.6rem;
}

.btn {
  border-radius: 9999px;
  border: 1px solid transparent;
  padding: 0.7rem 1.4rem;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.15s ease-in-out;
}

.btn--primary {
  background-color: #2563eb;
  color: #f9fafb;
}

.btn--primary:hover {
  background-color: #1d4ed8;
}

.btn--secondary {
  background-color: #ffffff;
  color: #111827;
  border-color: #d1d5db;
}

.btn--secondary:hover {
  background-color: #f3f4f6;
}

.btn--ghost {
  background-color: transparent;
  color: #111827;
  border-color: #d1d5db;
}

.btn--ghost:hover {
  background-color: #f3f4f6;
}

.section {
  padding: 3.5rem 1.5rem;
  background-color: #f9fafb;
}

.section--light {
  background-color: #ffffff;
}

.section--accent {
  background-color: #1f2937;
  color: #f9fafb;
}

.section--center {
  text-align: center;
}

.section__inner {
  max-width: 1120px;
  margin: 0 auto;
}

.section__inner--narrow {
  max-width: 720px;
}

.section__title {
  font-size: 1.8rem;
  margin-bottom: 0.75rem;
  color: #0f172a;
}

.section__title--center {
  text-align: center;
}

.section__title--on-dark {
  color: #f9fafb;
}

.section__lead {
  font-size: 1rem;
  color: #4b5563;
  margin-bottom: 1.75rem;
  max-width: 760px;
}

.section__lead--center {
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}

.section__lead--on-dark {
  color: #e5e7eb;
}

.section__note {
  font-size: 0.9rem;
  margin-top: 1.5rem;
  color: #6b7280;
}

.section__note--on-dark {
  color: #9ca3af;
}

.pill-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding: 0;
  margin: 0;
  list-style: none;
}

.pill-list__item {
  padding: 0.45rem 0.9rem;
  border-radius: 9999px;
  background-color: #e5e7eb;
  font-size: 0.9rem;
  color: #374151;
}

.not-for {
  margin-top: 1.25rem;
  padding: 1rem 1.1rem;
  border-radius: 0.9rem;
  border: 1px solid #e5e7eb;
  background: #f9fafb;
}

.not-for__title {
  margin: 0 0 0.5rem;
  font-size: 1rem;
  color: #0f172a;
}

.not-for__list {
  margin: 0;
  padding-left: 1.2rem;
  color: #4b5563;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.packages-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.package-card {
  background-color: #ffffff;
  border-radius: 1.25rem;
  padding: 1.6rem 1.45rem;
  border: 1px solid #e5e7eb;
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.04);
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
}

.package-card--highlight {
  border-color: #2563eb;
  box-shadow: 0 18px 45px rgba(37, 99, 235, 0.16);
}

.package-card__badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  background-color: #2563eb;
  color: #f9fafb;
  border-radius: 9999px;
  padding: 0.25rem 0.75rem;
}

.package-card__title {
  font-size: 1.32rem;
  margin: 0;
}

.package-card__tagline {
  font-size: 0.95rem;
  color: #4b5563;
  margin: 0.15rem 0 0;
}

.package-card__highlight-note {
  margin: 0.4rem 0 0;
  font-size: 0.9rem;
  color: #1d4ed8;
}

.package-card__who {
  padding: 0.85rem 0.95rem;
  border-radius: 0.9rem;
  border: 1px solid #e5e7eb;
  background: #f9fafb;
}

.package-card__who-line {
  margin: 0;
  color: #374151;
  font-size: 0.92rem;
}

.package-card__who-line--muted {
  margin-top: 0.35rem;
  color: #6b7280;
  font-size: 0.9rem;
}

.package-card__description {
  font-size: 0.92rem;
  color: #4b5563;
  margin: 0;
}

.package-card__quick {
  border-top: 1px dashed #e5e7eb;
  padding-top: 0.9rem;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
}

.package-card__subtitle {
  margin: 0;
  font-size: 0.95rem;
  color: #0f172a;
}

.package-card__features {
  list-style: disc;
  padding-left: 1.2rem;
  margin: 0.45rem 0 0;
  font-size: 0.9rem;
  color: #374151;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.package-card__list {
  margin: 0.45rem 0 0;
  padding-left: 1.2rem;
  color: #4b5563;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  font-size: 0.9rem;
}

.package-card__price-hint {
  margin: 0;
  font-size: 0.88rem;
  color: #6b7280;
}

.package-card__details {
  border: 1px solid #e5e7eb;
  border-radius: 0.9rem;
  padding: 0.75rem 0.9rem;
  background: #f9fafb;
}

.package-card__details summary {
  cursor: pointer;
  font-weight: 700;
  color: #111827;
}

.package-card__details-inner {
  margin-top: 0.85rem;
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
}

.package-card__footer {
  margin-top: auto;
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
}

.package-card__price {
  font-weight: 700;
  font-size: 0.98rem;
  color: #111827;
  margin: 0;
}

.package-card__micro {
  margin: 0;
  font-size: 0.88rem;
  color: #6b7280;
}

.process-list {
  list-style: none;
  padding: 0;
  margin: 2rem 0 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.process-list__item {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}

.process-list__icon {
  flex-shrink: 0;
  width: 2rem;
  height: 2rem;
  border-radius: 9999px;
  background-color: #2563eb;
  color: #f9fafb;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.9rem;
  margin-top: 0.2rem;
}

.process-list__content {
  flex: 1;
}

.process-list__title {
  font-size: 1rem;
  margin: 0 0 0.25rem;
}

.process-list__description {
  font-size: 0.9rem;
  color: #4b5563;
  margin: 0;
}

.process-cta {
  margin-top: 1.5rem;
  padding: 1.1rem 1.2rem;
  border-radius: 1rem;
  border: 1px solid #e5e7eb;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
  align-items: flex-start;
}

.process-cta__title {
  margin: 0;
  font-size: 1.05rem;
  color: #0f172a;
}

.process-cta__text {
  margin: 0.25rem 0 0;
  color: #4b5563;
  font-size: 0.95rem;
  max-width: 60ch;
}

.maintenance-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.maintenance-card {
  background-color: #ffffff;
  border-radius: 1.25rem;
  padding: 1.5rem;
  border: 1px solid #e5e7eb;
  box-shadow: 0 6px 20px rgba(15, 23, 42, 0.04);
}

.maintenance-card__title {
  font-size: 1.1rem;
  margin: 0 0 0.4rem;
}

.maintenance-card__description {
  font-size: 0.9rem;
  color: #4b5563;
  margin: 0 0 0.7rem;
}

.maintenance-card__items {
  list-style: disc;
  padding-left: 1.2rem;
  margin: 0 0 0.75rem;
  font-size: 0.9rem;
  color: #374151;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.maintenance-card__meta {
  border-top: 1px dashed #e5e7eb;
  padding-top: 0.75rem;
  margin-top: 0.75rem;
  color: #4b5563;
  font-size: 0.9rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.maintenance-card__scope {
  color: #6b7280;
}

.maintenance-card__price {
  font-size: 0.9rem;
  font-weight: 700;
  color: #111827;
  margin: 0.75rem 0 0;
}

.faq-list {
  max-width: 720px;
  margin: 1.5rem auto 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.faq-item {
  background-color: #f9fafb;
  border-radius: 0.9rem;
  border: 1px solid #e5e7eb;
  overflow: hidden;
}

.faq-item__question {
  width: 100%;
  text-align: left;
  padding: 0.9rem 1rem;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
  font-size: 0.95rem;
}

.faq-item__icon {
  font-size: 1.1rem;
  line-height: 1;
  margin-left: 0.75rem;
}

.faq-item__answer {
  padding: 0 1rem 0.9rem;
  font-size: 0.9rem;
  color: #4b5563;
}

.faq-enter-active,
.faq-leave-active {
  transition: all 0.15s ease;
}
.faq-enter-from,
.faq-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}

.contact-placeholder {
  margin-top: 1.5rem;
  padding: 1.25rem 1.5rem;
  border-radius: 0.9rem;
  background-color: rgba(15, 23, 42, 0.75);
  border: 1px solid rgba(249, 250, 251, 0.1);
  text-align: left;
  font-size: 0.9rem;
  color: #e5e7eb;
}

.contact-placeholder a {
  color: #93c5fd;
  text-decoration: underline;
}

@media (min-width: 768px) {
  .hero {
    padding: 5rem 2rem 4rem;
  }

  .hero__title {
    font-size: 2.7rem;
  }

  .section {
    padding: 4rem 2rem;
  }

  .packages-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .packages-grid > .package-card:nth-child(2) {
    transform: translateY(-0.5rem);
  }

  .maintenance-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .process-cta {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 1.25rem;
  }

  .process-cta__content {
    flex: 1;
  }
}

@media (min-width: 1024px) {
  .hero__content {
    text-align: left;
  }
}
</style>
