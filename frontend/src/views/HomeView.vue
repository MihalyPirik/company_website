<script setup lang="ts">
import { ref } from 'vue'

interface ServicePackage {
  id: string
  name: string
  tagline: string
  priceRange: string
  bestFor: string
  highlights: string[]
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
  highlights: string[]
  note: string
}

interface FaqItem {
  question: string
  answer: string
}

const packages: ServicePackage[] = [
  {
    id: 'indulo',
    name: 'Induló',
    tagline: 'Profi bemutatkozó oldal - gyors döntés, több megkeresés.',
    priceRange: 'Irányár: 250 000 – 350 000 Ft',
    bestFor: 'Ha egy letisztult, gyors, bizalmat építő weboldalra van szükséged.',
    highlights: [
      'Főoldal + max. 4 aloldal (pl. Szolgáltatások / Rólam / Referenciák / Kapcsolat), mobilra optimalizálva',
      'Megkeresésre épített felépítés: jól látható gombok + kiemelt kapcsolat rész',
      'Keresőbarát alapok: meta cím / leírás, címsorok, logikus oldalszerkezet',
      'Egyszerű kapcsolatfelvétel: kattintható telefonszám / e-mail (igény szerint űrlap)',
      'Gyors betöltés: képek optimalizálása + alap sebesség-hangolás',
      '2 kör finomhangolás az átadás előtt',
      'Domain / tárhely / SSL indulásnál támogatás (a szolgáltatói díjak külön fizetendők)',
    ],
    ctaLabel: 'Csomagajánlatot kérek',
  },
  {
    id: 'uzleti',
    name: 'Üzleti',
    tagline: 'Admin felület - te frissíted a tartalmat, én a rendszert.',
    priceRange: 'Irányár: 690 000 – 1 150 000 Ft',
    bestFor:
      'Ha rendszeresen frissítenél (blog, hírek, referenciák, csapat), és szeretnél egy stabil kezelőfelület.',
    highlights: [
      'Minden, ami az Induló csomagban',
      'Admin felület: te tudod frissíteni a tartalmat (pl. blog / referenciák / csapat)',
      'Űrlapok + e-mail értesítések (ajánlatkérés / üzenet)',
      'Alap integrációk igény szerint (pl. látogatottságmérés / hírlevél feliratkozás)',
      'Biztonságos működés: jogosultságkezelés + alap naplózás / hibakövetés',
      'Betanítás, hogy magabiztosan kezeld',
    ],
    ctaLabel: 'Csomagajánlatot kérek',
    highlight: true,
    highlightNote: 'Legnépszerűbb, ha te is frissítenéd a tartalmat.',
  },
  {
    id: 'premium',
    name: 'Prémium',
    tagline: 'Integrációk és külső rendszerek - amikor össze kell kötni a folyamatokat.',
    priceRange: 'Irányár: 1 300 000 – 1 990 000 Ft',
    bestFor:
      'Ha több külső szolgáltatást kötnél össze (pl. CRM / ügyfélkezelő, számlázás, naptár, hírlevél, fizetés), és fontos a bővíthető felépítés.',
    highlights: [
      'Minden, ami az Üzleti csomagban',
      'Külső rendszerek összekötése: CRM / számlázás / naptár / hírlevél / fizetés - igény szerint',
      'Jellemzően 1–2 külső rendszer bekötését tartalmazza. További integrációkra külön ajánlatot adok',
      'Automatizmusok: értesítések, státuszváltások, alap adatátadás a rendszerek között',
      'Biztonságos bekötések: hozzáférések (API-kulcsok) kezelése',
      'Bővíthető felépítés: későbbi új integrációkhoz előkészítve',
      'Megjegyzés: a külső szolgáltatások előfizetési díjai nem részei a csomagárnak',
    ],
    ctaLabel: 'Csomagajánlatot kérek',
  },
]

const processSteps: ProcessStep[] = [
  {
    title: 'Ingyenes konzultáció',
    description:
      'Röviden átbeszéljük, mire kell a weboldal, mi a cél és melyik csomag illik hozzád.',
  },
  {
    title: 'Ajánlat',
    description:
      'Összeírjuk a funkciókat és a tartalmat, majd kapsz egy tételes, érthető ajánlatot határidővel. Ebben tisztán látszik, mi fér bele és mi nem.',
  },
  {
    title: 'Tervezés',
    description:
      'Összerakjuk a szerkezetet és a fő blokkokat: mit lát a látogató, hol lesznek a gombok, stb.',
  },
  {
    title: 'Fejlesztés & teszt',
    description:
      'A tervek alapján lefejlesztem az oldalt, és veled végigellenőrzöm a kritikus pontokat.',
  },
  {
    title: 'Élesítés & átadás',
    description:
      'Élesítem a kész rendszert. Admin funkciókhoz rövid betanítást adok, hogy magabiztosan használd.',
  },
]

const maintenancePlans: MaintenancePlan[] = [
  {
    id: 'maintenance-basic',
    title: 'Alap karbantartás',
    description: 'A cél, hogy a weboldalad gyors, biztonságos és gondozott maradjon.',
    priceRange: 'Irányár: 15 000 – 30 000 Ft / hó',
    highlights: [
      'Havi 1x technikai ellenőrzés (elérhetőség, hibák)',
      'Biztonsági mentések (rendszeresen)',
      'Kisebb tartalmi módosítások: havi 30 perc keret',
      'E-mail support, válasz 1 munkanapon belül',
    ],
    note: 'A pontos kereteket és a havi keret felhasználását konzultáción rögzítem veled.',
  },
  {
    id: 'maintenance-premium',
    title: 'Prémium karbantartás',
    description:
      'Aktívabb működéshez: monitoring + priorizált hibajavítás + havi fejlesztési keret.',
    priceRange: 'Irányár: 30 000 – 60 000 Ft / hó',
    highlights: [
      'Minden, ami az Alap csomagban',
      'Alap monitoring (elérhetőség / hibák)',
      'Prioritásos hibajavítás megállapodás szerint',
      'Havi fejlesztési keret: 1-2 óra (pl. új blokk, kisebb funkció)',
      'Technikai konzultáció',
    ],
    note: 'Komplexebb oldalak / rendszerek esetén személyre szabott megállapodással.',
  },
]

const faqs: FaqItem[] = [
  {
    question: 'Melyik csomagot válasszam?',
    answer:
      'Bemutatkozás + kapcsolat → Induló. Rendszeres tartalomfrissítés adminból → Üzleti. Külső rendszerek / API-k bekötése, automatizmusok → Prémium.',
  },
  {
    question: 'Mi kell tőlem a kezdéshez?',
    answer:
      '5-10 mondat a vállalkozásról és a célról, pár példa oldal ami tetszik, és ami anyagod van (logó / képek / szöveg). A többit a konzultáción letisztázom veled.',
  },
  {
    question: 'Mennyi idő alatt készül el?',
    answer:
      'Induló: 2-4 hét. Üzleti: 4-8 hét. Prémium: 8-12 hét. A pontos ütemezés az anyagok (szöveg / képek) beérkezése, a visszajelzések gyorsasága (jellemzően 1-3 munkanap), valamint az integrációk komplexitása alapján alakul.',
  },
  {
    question: 'Az árak pontosak?',
    answer:
      'Irányárak. A végső árat a funkciók, integrációk és a tartalom alapján a konzultáció után írásban küldöm.',
  },
  {
    question: 'Az árak áfásak?',
    answer: 'Áfamentes egyéni vállalkozóként számlázok, így a megadott árak áfamentesek.',
  },
  {
    question: 'Mit nem tartalmaz az irányár?',
    answer:
      'Az irányár jellemzően nem tartalmazza a szövegírást, a stock fotók / videók díját, a domain / tárhely / külső szolgáltatások előfizetési díjait (pl. hírlevél, CRM, naptár, fizetés), illetve a külső rendszerek licencdíjait. Ezekről a konzultáció után tételesen jelzem, mi szükséges.',
  },
  {
    question: 'Lehet részletekben fizetni?',
    answer: 'Igen. Tipikusan több részletben a projekt során, megegyezés szerint.',
  },
  {
    question: 'Domain / tárhely nélkül is elindulhatunk?',
    answer:
      'Igen. Segítek kiválasztani a jó megoldást, és támogatlak a beállításokban (domain, tárhely, SSL).',
  },
  {
    question: 'Kapok számlát?',
    answer: 'Igen, minden esetben számlázott a szolgáltatás.',
  },
  {
    question: 'Mi számít hibajavításnak és mi számít új kérésnek?',
    answer:
      'Hibajavítás: ami a megbeszélt funkciókhoz képest nem a várt módon működik. Új kérés / bővítés: új funkció, új oldal/blokk, plusz integráció, extra automatizmus, vagy olyan módosítás, ami túlmutat az eredeti megállapodáson. Ezekre külön fejlesztési ajánlatot adok.',
  },
  {
    question: 'Mi van, ha később bővíteném?',
    answer:
      'Úgy építem fel, hogy bővíthető legyen. Új funkciókhoz / integrációkhoz külön fejlesztési ajánlatot adok.',
  },
  {
    question: 'Segítesz a szövegekkel?',
    answer:
      'Igen, tudok segíteni finomhangolással / struktúrával. Teljes szövegírás külön megállapodás.',
  },
  {
    question: 'Mi a helyzet GDPR / cookie bannerrel?',
    answer:
      'Technikailag megoldható (cookie banner + mérőkódok hozzájáruláshoz kötése). A jogi szövegeket jellemzően ügyvéd készíti.',
  },
  {
    question: 'Mi történik, ha hibát találunk élesítés után?',
    answer: 'Élesítés után 30 napig hibajavítást biztosítok.',
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
          Induló bemutatkozó oldaltól egyedi rendszerekig, úgy építem fel, hogy a látogató értse,
          bízzon benne, és könnyen kapcsolatba lépjen veled.
        </p>

        <ul class="hero__trust">
          <li>Ingyenes konzultáció</li>
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
        <h2 class="section__title">Kinek fejlesztek?</h2>
        <p class="section__lead">
          Olyan vállalkozásoknak, akik egy <strong>gyors, érthető és bizalmat építő</strong> oldalt
          szeretnének, ami támogatja az értékesítést.
        </p>

        <ul class="pill-list">
          <li class="pill-list__item">Induló és növekvő vállalkozások</li>
          <li class="pill-list__item">Szolgáltatók, szakértők, tanácsadók</li>
          <li class="pill-list__item">Akik folyamatot is automatizálnának</li>
        </ul>
      </div>
    </section>

    <section class="section" id="packages-section" ref="packagesSectionRef">
      <div class="section__inner">
        <h2 class="section__title section__title--center">Szolgáltatás csomagok</h2>
        <p class="section__lead section__lead--center">
          A csomagok irányárral rendelkeznek. Konzultáció keretein belül tudok pontos ajánlatot
          adni.
        </p>

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
              <p class="package-card__who-line"><strong>Kinek való:</strong> {{ pkg.bestFor }}</p>
            </div>

            <div class="package-card__quick">
              <h4 class="package-card__subtitle">Fő pontok</h4>
              <ul class="package-card__list">
                <li v-for="(item, index) in pkg.highlights" :key="`${pkg.id}-h-${index}`">
                  {{ item }}
                </li>
              </ul>
            </div>

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
        <h2 class="section__title section__title--center">Hogyan dolgozom?</h2>
        <p class="section__lead section__lead--center">
          Egyszerű, átlátható folyamat és gyors előrehaladás.
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
              Küldj 5-10 mondatot arról, mivel foglalkozol és mi a cél, én pedig visszajelzek egy
              csomagjavaslattal és irányárral.
            </p>
          </div>
          <button class="btn btn--primary" @click="scrollToContact">Csomagjavaslatot kérek</button>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="section__inner">
        <h2 class="section__title section__title--center">Karbantartás</h2>
        <p class="section__lead section__lead--center">
          Akkor éri meg igazán, ha gyors segítséget akarsz és nem szeretnél technikai ügyekkel
          foglalkozni.
        </p>

        <div class="maintenance-grid">
          <article v-for="plan in maintenancePlans" :key="plan.id" class="maintenance-card">
            <h3 class="maintenance-card__title">{{ plan.title }}</h3>
            <p class="maintenance-card__description">{{ plan.description }}</p>

            <ul class="maintenance-card__items">
              <li v-for="(item, index) in plan.highlights" :key="`${plan.id}-h-${index}`">
                {{ item }}
              </li>
            </ul>

            <p class="maintenance-card__note">{{ plan.note }}</p>
            <p class="maintenance-card__price">{{ plan.priceRange }}</p>

            <button class="btn btn--ghost" @click="scrollToContact">Kérek részleteket</button>
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
              <span class="faq-item__icon">{{ activeFaqIndex === index ? '−' : '+' }}</span>
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
          Írd le pár mondatban, mivel foglalkozol és mi a cél, én pedig visszajelzek csomaggal és
          irányárral.
        </p>

        <div class="contact-placeholder">
          <p>
            <strong>Konzultáció után rövid írásos összefoglalót küldök.</strong>
          </p>
          <p>
            Elérsz e-mailben:
            <a href="mailto:info@pmwebdesign.hu">info@pmwebdesign.hu</a>
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
  gap: 0.9rem;
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

.package-card__quick {
  border-top: 1px dashed #e5e7eb;
  padding-top: 0.9rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.package-card__subtitle {
  margin: 0;
  font-size: 0.95rem;
  color: #0f172a;
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
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
  align-items: flex-start;
}

.maintenance-card__title {
  font-size: 1.1rem;
  margin: 0;
}

.maintenance-card__description {
  font-size: 0.9rem;
  color: #4b5563;
  margin: 0;
}

.maintenance-card__items {
  list-style: disc;
  padding-left: 1.2rem;
  margin: 0.25rem 0 0.25rem;
  font-size: 0.9rem;
  color: #374151;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.maintenance-card__note {
  margin: 0.25rem 0 0;
  color: #6b7280;
  font-size: 0.9rem;
}

.maintenance-card__price {
  font-size: 0.95rem;
  font-weight: 700;
  color: #111827;
  margin: 0.25rem 0 0.25rem;
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
