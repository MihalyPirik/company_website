<script setup lang="ts">
import { ref } from 'vue'

interface ServicePackage {
  id: string
  name: string
  tagline: string
  shortDescription: string
  priceRange: string
  features: string[]
  ctaLabel: string
  highlight?: boolean

  deliverables: string[]
  supportAndGuarantee: string[]
  priceDrivers: string[]
  notIncluded: string[]
  addons: string[]
  exampleSetups?: Array<{ title: string; items: string[] }>
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
    tagline: 'Profi bemutatkozó oldal, ha vállalható online jelenlétet szeretnél.',
    shortDescription:
      'Ideális, ha most indulsz, vagy a régi honlapod már nem tükrözi, hol tart ma a vállalkozásod. Egyszerű, átlátható, mobilbarát bemutatkozó oldal, ami segít, hogy megtaláljanak és fel is vegyék veled a kapcsolatot.',
    priceRange: 'Irányár: 200 000 – 300 000 Ft',
    features: [
      'Legfeljebb 5 aloldal (Főoldal, Rólam/Rólunk, Szolgáltatások, Referenciák, Kapcsolat)',
      'Reszponzív, mobilra optimalizált design',
      'Gyors, kereső- és felhasználóbarát oldalstruktúra',
      'Alap SEO beállítások (oldalcímek, meta leírások, jól tagolt tartalom)',
      'Google Analytics / GA4 bekötés (ha szeretnéd)',
      'Kapcsolat szekció kattintható e-mail címmel és telefonszámmal',
      'Segítség domain és tárhely választásában és beállításában',
    ],
    deliverables: [
      'Oldaltérkép + javasolt struktúra (mi hova kerüljön)',
      '1 design irány + 2 kör módosítás',
      'Tartalomfeltöltés a megadott anyagokból (szöveg/képek)',
      'Kapcsolati CTA-k és átlátható “következő lépés” a látogatónak',
      'Élesítés (publikálás) + technikai beállítások támogatása',
    ],
    supportAndGuarantee: [
      'Átadáskor rövid betanítás (tartalom frissítés alapjai, ha szükséges)',
      'Élesítés után 30 nap hibajavítás',
      'Konzultáció után írásos összefoglaló + javasolt csomag',
    ],
    priceDrivers: [
      'Oldalak száma és tartalom mennyisége',
      'Egyedi design igény (komplexebb UI elemek)',
      'Űrlapok bonyolultsága (mezők, logika, értesítések)',
      'Extra integrációk (tracking, hírlevél, stb.)',
    ],
    notIncluded: [
      'Szövegírás (opcionális extra)',
      'Többnyelvűség (opcionális extra)',
      'Foglaló/fizetés/számlázó integráció (opcionális extra)',
      'Ajánlatkérő űrlapok (opcionális extra)',
      'Jogi szövegek elkészítése (technikai oldalról segítek, de jogi tartalmat nem írok)',
    ],
    addons: [
      'Szövegírás / UX szöveg finomhangolás',
      'Cookie banner + tracking consent (technikai implementáció)',
      'Hírlevél integráció (pl. MailerLite, Brevo)',
      'Alap arculati frissítés (színek, tipó, UI irány)',
    ],
    ctaLabel: 'Ajánlatot kérek erre a csomagra',
  },
  {
    id: 'business',
    name: 'Üzleti Weboldal',
    tagline: 'Dinamikus, admin felülettel ellátott weboldal, hogy te is tudj tartalmat frissíteni.',
    shortDescription:
      'Ha nem elég egy statikus bemutatkozó oldal, saját admin felületen keresztül frissítheted a tartalmaidat. Cél: több érdeklődő, több ajánlatkérés, és kevesebb “kézi munka” az üzemeltetésben.',
    priceRange: 'Irányár: 450 000 – 900 000 Ft',
    features: [
      'Minden, ami az Induló Weboldal csomagban',
      'Egyedi admin felület (blog, hírek, referenciák, csapattagok kezelése)',
      'Összetettebb ajánlatkérő űrlapok',
      'Egyszerű felhasználói fiókok (regisztráció, bejelentkezés, jelszóemlékeztető)',
      'E-mail értesítések (új üzenet / ajánlatkérés esetén)',
      'Integrációk (hírlevél, Facebook pixel, egyéb tracking kódok)',
    ],

    deliverables: [
      'Admin felület + jogosultságok (ki mit szerkeszthet)',
      'Tartalomtípusok beállítása (pl. blog/referenciák/csapat)',
      'Konzisztens oldal-sablonok (gyors bővíthetőség)',
      'Automatikus e-mail értesítések és űrlaplogika',
      'Élesítés + átadás + betanítás (videó/PDF összefoglaló igény szerint)',
    ],

    supportAndGuarantee: [
      'Átadáskor betanítás + “hogyan frissítsd” gyorsútmutató',
      'Élesítés után 30 nap hibajavítás',
      'Konzultáció után írásos összefoglaló + tételes ajánlat határidővel',
    ],

    priceDrivers: [
      'Tartalomtípusok száma (blog + referenciák + csapat vs csak 1–2 modul)',
      'Űrlap logika (feltételek, több lépés, fájl feltöltés)',
      'Integrációk száma (hírlevél, CRM, pixel, stb.)',
      'Felhasználói fiókok és jogosultsági szintek (egyszerű vs összetett)',
      'Egyedi design/komponensek mennyisége',
    ],

    notIncluded: [
      'Komplex foglaló/fizetési folyamat (külön ajánlat)',
      'Egyedi üzleti logika / “rendszer jellegű” funkciók (inkább webalkalmazás)',
      'Jogi szövegek elkészítése (technikai implementáció lehetséges)',
    ],

    addons: [
      'Többnyelvűség',
      'CRM integráció (pl. Pipedrive/HubSpot – lehetőségtől függően)',
      'Automatikus ajánlatkérő routing (kategória alapján külön e-mail címre)',
      'Esettanulmány modul + SEO fókuszú tartalomsablon',
    ],
    exampleSetups: [
      {
        title: 'Szolgáltató összeállítás',
        items: ['Referenciák modul', 'Összetett ajánlatkérő űrlap', 'Mérési kódok (GA4/pixel)'],
      },
      {
        title: 'Szakértő / tanácsadó összeállítás',
        items: ['Blog modul', 'Hírlevél feliratkozás', 'Lead magnet letöltés (opcionális)'],
      },
      {
        title: 'Céges összeállítás',
        items: ['Csapat modul', 'Esettanulmányok', 'Karrier/álláshirdetés (opcionális)'],
      },
    ],
    ctaLabel: 'Ajánlatot kérek erre a csomagra',
    highlight: true,
  },
  {
    id: 'custom-app',
    name: 'Egyedi Webalkalmazás',
    tagline: 'Egyedi rendszer – amikor már nem elég egy honlap.',
    shortDescription:
      'Receptportál, foglalási rendszer, tagsági oldal vagy más, teljesen egyedi logikájú online rendszer. Itt már a működés a lényeg: folyamatok, jogosultságok, integrációk.',
    priceRange: 'Irányár: 1 000 000 Ft-tól, funkcióktól függően',
    features: [
      'Teljesen egyedi tervezés és fejlesztés',
      'Többféle felhasználói szerepkör és jogosultság',
      'Komplex funkciók: keresés, szűrés, kedvencek, értékelések, kommentek',
      'Fejlett admin felület (tartalmak, felhasználók, jogosultságok kezelése)',
      'Integrációk (e-mail, fizetési rendszerek, egyéb API-k)',
      'Skálázható, hosszú távon fejleszthető struktúra',
    ],

    deliverables: [
      'Specifikáció + ütemterv mérföldkövekkel (mi mikor készül el)',
      'Prototípus / UX flow-k (hogyan használják a felhasználók)',
      'Skálázható architektúra + admin felület',
      'Integrációk és automatizmusok (e-mail, fizetés, API-k)',
      'Tesztelés + élesítés + monitorozási alapok beállítása',
    ],

    supportAndGuarantee: [
      'Átadáskor betanítás + admin használat',
      'Élesítés után 30 nap kiemelt hibajavítás',
      'Opciós havi támogatás (monitoring + fejlesztési keret)',
    ],

    priceDrivers: [
      'Felhasználói szerepkörök/jogosultságok összetettsége',
      'Funkciók száma és egyediség (foglalás, fizetés, tagság, stb.)',
      'Integrációk (külső rendszerek, API-k) mennyisége',
      'Adatmodell összetettsége (keresés, szűrés, riportok)',
      'Teljesítmény és skálázási igény (nagy forgalom / sok tartalom)',
    ],

    notIncluded: [
      'Külső szolgáltatók díjai (pl. SMS, e-mail küldő, fizetési gateway)',
      'Jogi megfelelés szakjogászi oldala (technikai implementációt vállalok)',
      'Üzemeltetés/hosting költségek (segítek választani, de nem része az árnak)',
    ],

    addons: [
      'Fizetés + számlázás integráció (Stripe/Barion/Számlázz.hu – lehetőségtől függően)',
      'Riportok / dashboardok',
      'Automatizmusok (pl. e-mail sorozat, státusz alapú értesítések)',
      'SLA jellegű üzemeltetés (külön megállapodással)',
    ],
    ctaLabel: 'Időpontot kérek konzultációra',
  },
]

const processSteps: ProcessStep[] = [
  {
    title: 'Ingyenes konzultáció (online / telefon)',
    description:
      'Megbeszéljük, mire van szükséged, milyen célokra használnád a weboldalt vagy rendszert, és melyik csomag illik hozzád. A beszélgetés után kapsz egy rövid írásos összefoglalót és javasolt következő lépést.',
  },
  {
    title: 'Igényfelmérés & ajánlat',
    description:
      'Összeírom a funkciókat, oldalakat, egyedi igényeket, majd kapsz egy tételes, érthető ajánlatot határidővel.',
  },
  {
    title: 'Tervezés & prototípus',
    description:
      'Összerakom az oldal / rendszer szerkezetét és layoutját, megmutatom, hogyan fog kinézni és működni.',
  },
  {
    title: 'Fejlesztés',
    description:
      'Elkészítem a webalkalmazás alapját, integrálom a szükséges szolgáltatásokat, majd közösen teszteljük.',
  },
  {
    title: 'Átadás & betanítás',
    description:
      'Élesítem a weboldalt / rendszert, segítek a technikai beállításokban, és megmutatom az admin felület használatát.',
  },
  {
    title: 'Támogatás & karbantartás (opcionális)',
    description:
      'Ha szeretnéd, a projekt után is vállalok karbantartást, frissítéseket, kisebb fejlesztéseket havi díjért – tiszta keretekkel (mi fér bele és mi nem).',
  },
]

const maintenancePlans: MaintenancePlan[] = [
  {
    id: 'basic-maintenance',
    title: 'Induló / Üzleti Weboldal karbantartás',
    description:
      'Ha szeretnéd, hogy a weboldalad biztonságos, gyors és naprakész maradjon, miközben nem kell vele foglalkoznod.',
    priceRange: 'Irányár: 8 000 – 15 000 Ft / hó-tól',
    items: [
      'Rendszeres technikai frissítések',
      'Biztonsági mentések',
      'Kisebb módosítások / tartalmi frissítések',
      'Technikai support e-mailben',
    ],

    includedHours: 'Tartalmaz: 1 óra / hó kisebb módosítás',
    responseTime: 'Válaszidő: 1–2 munkanap',
    overage: 'Túllógás: óradíjas elszámolás vagy csomagbővítés',
    scopeNote:
      '“Kisebb módosítás”: szövegcsere, kép csere, apró elrendezés finomhangolás. Új aloldal / új funkció külön fejlesztés.',
  },
  {
    id: 'app-maintenance',
    title: 'Egyedi Webalkalmazás karbantartás',
    description:
      'Komplex rendszerek folyamatos karbantartása, biztonsági frissítésekkel és kisebb fejlesztésekkel.',
    priceRange: 'Irányár: 20 000 – 60 000 Ft / hó-tól',
    items: [
      'Rendszeres frissítések, biztonsági javítások',
      'Monitoring (elérhetőség, hibák)',
      'Kisebb funkciófejlesztések, finomhangolások',
      'Technikai support és konzultáció',
    ],

    includedHours: 'Tartalmaz: 2–6 óra / hó fejlesztési keret (csomagtól függ)',
    responseTime: 'Válaszidő: 24–72 óra (megállapodás szerint)',
    overage: 'Túllógás: priorizált backlog + külön keret vagy óradíj',
    scopeNote:
      'A keret jellemzően kisebb fejlesztésekre és finomhangolásokra jó; nagyobb modulok külön ütemezéssel készülnek.',
  },
]

const faqs: FaqItem[] = [
  {
    question: 'Milyen gyorsan készül el egy weboldal?',
    answer:
      'Induló Weboldal általában 2–4 hét, Üzleti Weboldal 4–8 hét, Egyedi Webalkalmazásnál pedig a funkcióktól függ. A pontos határidőt mindig az ajánlatban rögzítjük.',
  },
  {
    question: 'Domainem és tárhelyem sincs, ez gond?',
    answer:
      'Nem gond. Segítek kiválasztani a megfelelő szolgáltatót, és elintézzük a domain, tárhely, SSL és e-mail beállításokat.',
  },
  {
    question: 'Tudok részletekben fizetni?',
    answer:
      'Igen. Általában 30% előleget kérek a szerződéskor, a fennmaradó részt pedig egy vagy két részletben a projekt során.',
  },
  {
    question: 'Kapok számlát?',
    answer: 'Igen, a szolgáltatásról minden esetben számlát kapsz.',
  },
  {
    question: 'Mi van, ha később szeretnék új funkciókat?',
    answer:
      'A rendszert úgy építem, hogy bővíthető legyen. Ha később új ötleteid vannak, külön fejlesztési ajánlat alapján tovább tudjuk fejleszteni.',
  },
  {
    question: 'Én fogom tudni kezelni az admin felületet?',
    answer:
      'Igen. Átadáskor megmutatom, hogyan tudsz új tartalmat felvinni és módosítani. Ha elakadnál, e-mailben is segítek.',
  },
  {
    question: 'Mit jelent pontosan a “kisebb módosítás” a karbantartásban?',
    answer:
      'Tipikusan szöveg- és képfrissítések, apró elrendezés finomhangolások férnek bele. Új aloldal, új modul, új funkció vagy komplex logika már fejlesztésnek számít – ezt külön ajánlatban kezeljük.',
  },
  {
    question: 'Mi a helyzet a GDPR / cookie banner / jogi oldalakkal?',
    answer:
      'A cookie banner és tracking consent technikai implementációját tudom vállalni. A jogi szövegek (ÁSZF, adatkezelési) elkészítése jogi terület, azt jellemzően ügyvéd írja – ha van szöveged, beépítem.',
  },
  {
    question: 'Miért nem WordPress-t használsz?',
    answer:
      'Modern, egyedi fejlesztésű megoldásokra specializálódtam (Vue3 + Laravel). Ennek előnye, hogy gyors, biztonságos és pontosan a te folyamataidra szabható, különösen egyedi igényeknél. Ha kifejezetten WordPresshez ragaszkodsz, szívesen javaslok WP-s szakembert.',
  },
  {
    question: 'Mi történik, ha valami elromlik a weboldalon?',
    answer:
      'Élesítés után 30 napig kiemelten segítek a hibajavításban. Havi karbantartással prioritást élvez a hibajavítás; karbantartás nélkül is segítek, eseti díjazással.',
  },
]

const activeFaqIndex = ref<number | null>(0)

const packagesSectionRef = ref<HTMLElement | null>(null)
const contactSectionRef = ref<HTMLElement | null>(null)

function scrollToPackages(): void {
  if (packagesSectionRef.value) {
    packagesSectionRef.value.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

function scrollToContact(): void {
  if (contactSectionRef.value) {
    contactSectionRef.value.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

function toggleFaq(index: number): void {
  activeFaqIndex.value = activeFaqIndex.value === index ? null : index
}
</script>

<template>
  <main class="services-page">
    <section class="hero">
      <div class="hero__content">
        <h1 class="hero__title">
          Modern weboldalak és egyedi webalkalmazások
          <span class="hero__title-sub">kis- és középvállalkozásoknak</span>
        </h1>
        <p class="hero__subtitle">
          Induló bemutatkozó oldaltól a vállalati rendszerekig – segítek, hogy ne csak legyen egy
          weboldalad, hanem működjön is.
        </p>

        <ul class="hero__trust">
          <li>Ingyenes, kötetlen első konzultáció</li>
          <li>Konzultáció után írásos összefoglaló + javasolt csomag</li>
          <li>Élesítés után 30 nap hibajavítás</li>
        </ul>

        <div class="hero__actions">
          <button class="btn btn--primary" @click="scrollToPackages">Megnézem a csomagokat</button>
          <button class="btn btn--secondary" @click="scrollToContact">Ajánlatot kérek</button>
        </div>
      </div>
    </section>

    <section class="section section--light">
      <div class="section__inner">
        <h2 class="section__title">Kinek fejlesztek?</h2>
        <p class="section__lead">
          Olyan vállalkozásoknak, akik szeretnének online jelenlétet, és
          <strong>profi, mobilbarát, gyors weboldalt</strong> vagy komolyabb, egyedi rendszert.
        </p>
        <ul class="pill-list">
          <li class="pill-list__item">Induló és növekvő vállalkozások</li>
          <li class="pill-list__item">Szolgáltatók, szakértők, tanácsadók</li>
          <li class="pill-list__item">Akik valódi online rendszert szeretnének</li>
        </ul>

        <div class="not-for">
          <h3 class="not-for__title">Kinek nem én vagyok a legjobb választás?</h3>
          <ul class="not-for__list">
            <li>Ha 2–3 nap alatt egy kész, működő rendszert szeretnél.</li>
            <li>
              Ha kizárólag a legolcsóbb megoldás a szempont (inkább website builder lesz a jó).
            </li>
            <li>Ha ragaszkodsz a CMS-hez (pl. kizárólag WordPress) – tudok ajánlani mást.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="section" ref="packagesSectionRef">
      <div class="section__inner">
        <h2 class="section__title section__title--center">Szolgáltatás csomagok</h2>
        <p class="section__lead section__lead--center">
          Válaszd ki, hol tart most a vállalkozásod – a többit megoldom én.
        </p>

        <div class="packages-grid">
          <article
            v-for="pkg in packages"
            :key="pkg.id"
            :class="['package-card', { 'package-card--highlight': pkg.highlight }]"
          >
            <p v-if="pkg.highlight" class="package-card__badge">Legnépszerűbb</p>
            <h3 class="package-card__title">{{ pkg.name }}</h3>
            <p class="package-card__tagline">{{ pkg.tagline }}</p>
            <p class="package-card__description">{{ pkg.shortDescription }}</p>

            <ul class="package-card__features">
              <li v-for="(feature, index) in pkg.features" :key="`${pkg.id}-feature-${index}`">
                {{ feature }}
              </li>
            </ul>

            <div class="package-card__extra">
              <h4 class="package-card__subtitle">Amit kézhez kapsz</h4>
              <ul class="package-card__list">
                <li v-for="(item, index) in pkg.deliverables" :key="`${pkg.id}-del-${index}`">
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

              <div v-if="pkg.exampleSetups?.length" class="package-card__setups">
                <h4 class="package-card__subtitle">Tipikus összeállítások</h4>
                <div class="setups-grid">
                  <div
                    v-for="(setup, idx) in pkg.exampleSetups"
                    :key="`${pkg.id}-setup-${idx}`"
                    class="setup-card"
                  >
                    <p class="setup-card__title">{{ setup.title }}</p>
                    <ul class="setup-card__list">
                      <li v-for="(it, j) in setup.items" :key="`${pkg.id}-setup-${idx}-${j}`">
                        {{ it }}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <details class="package-card__details">
                <summary>Mi nincs benne?</summary>
                <ul class="package-card__list">
                  <li v-for="(item, index) in pkg.notIncluded" :key="`${pkg.id}-no-${index}`">
                    {{ item }}
                  </li>
                </ul>
              </details>

              <details class="package-card__details">
                <summary>Opcionális extrák</summary>
                <ul class="package-card__list">
                  <li v-for="(item, index) in pkg.addons" :key="`${pkg.id}-add-${index}`">
                    {{ item }}
                  </li>
                </ul>
              </details>
            </div>

            <div class="package-card__footer">
              <p class="package-card__price">{{ pkg.priceRange }}</p>
              <button class="btn btn--ghost" @click="scrollToContact">
                {{ pkg.ctaLabel }}
              </button>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="section section--light">
      <div class="section__inner">
        <h2 class="section__title section__title--center">Hogyan dolgozom?</h2>
        <p class="section__lead section__lead--center">
          Átlátható, lépésről lépésre haladó folyamatban dolgozom, hogy mindig tudd, hol tartunk.
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
      </div>
    </section>

    <section class="section">
      <div class="section__inner">
        <h2 class="section__title section__title--center">Havi támogatás & karbantartás</h2>
        <p class="section__lead section__lead--center">
          Ha nem akarsz technikai dolgokkal foglalkozni, vállalom a hosszú távú támogatást is.
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
          webalkalmazással – én pedig visszajelzek egy javasolt csomaggal és irányárral.
        </p>

        <div class="contact-placeholder">
          <p>
            Itt lesz az ajánlatkérő űrlapod (név, e-mail, vállalkozás, rövid leírás, költségkeret
            stb.).
          </p>

          <p>
            <strong
              >Konzultáció után rövid írásos összefoglalót kapsz (csomag + irányár + következő
              lépések).</strong
            >
          </p>

          <p>
            Addig is elérsz e-mailben:
            <a href="mailto:info@pelda.hu">info@pelda.hu</a>
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
  max-width: 640px;
  margin-bottom: 1rem;
}

.hero__trust {
  list-style: disc;
  padding-left: 1.2rem;
  margin: 0 0 1.5rem;
  color: #374151;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 1.25rem;
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
  max-width: 720px;
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
  padding: 1.75rem 1.5rem;
  border: 1px solid #e5e7eb;
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.04);
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
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
  font-size: 1.3rem;
  margin-bottom: 0.15rem;
}

.package-card__tagline {
  font-size: 0.95rem;
  color: #4b5563;
}

.package-card__description {
  font-size: 0.9rem;
  color: #4b5563;
}

.package-card__features {
  list-style: disc;
  padding-left: 1.2rem;
  margin: 0.75rem 0 0.75rem;
  font-size: 0.9rem;
  color: #374151;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.package-card__extra {
  border-top: 1px dashed #e5e7eb;
  padding-top: 0.9rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
.package-card__subtitle {
  margin: 0;
  font-size: 0.95rem;
  color: #0f172a;
}
.package-card__list {
  margin: 0;
  padding-left: 1.2rem;
  color: #4b5563;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  font-size: 0.9rem;
}
.package-card__details summary {
  cursor: pointer;
  font-weight: 600;
  color: #111827;
}
.package-card__details {
  border: 1px solid #e5e7eb;
  border-radius: 0.9rem;
  padding: 0.75rem 0.9rem;
  background: #f9fafb;
}

.setups-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;
}
.setup-card {
  border: 1px solid #e5e7eb;
  border-radius: 0.9rem;
  padding: 0.75rem 0.9rem;
  background: #ffffff;
}
.setup-card__title {
  margin: 0 0 0.4rem;
  font-weight: 700;
  color: #111827;
  font-size: 0.9rem;
}
.setup-card__list {
  margin: 0;
  padding-left: 1.1rem;
  color: #4b5563;
  font-size: 0.9rem;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.package-card__footer {
  margin-top: auto;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.package-card__price {
  font-weight: 600;
  font-size: 0.95rem;
  color: #111827;
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
  font-weight: 600;
  font-size: 0.9rem;
  margin-top: 0.2rem;
}

.process-list__content {
  flex: 1;
}

.process-list__title {
  font-size: 1rem;
  margin-bottom: 0.25rem;
}

.process-list__description {
  font-size: 0.9rem;
  color: #4b5563;
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
  margin-bottom: 0.4rem;
}

.maintenance-card__description {
  font-size: 0.9rem;
  color: #4b5563;
  margin-bottom: 0.7rem;
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
  font-weight: 600;
  color: #111827;
  margin-top: 0.75rem;
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
  font-weight: 500;
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

  .setups-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 1024px) {
  .hero__content {
    text-align: left;
  }
}
</style>
