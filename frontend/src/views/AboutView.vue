<script setup lang="ts"></script>

<template>
  <main class="services-page">
    <section class="hero hero--compact">
      <div class="hero__content">
        <h1 class="hero__title">
          Rólunk
          <span class="hero__title-sub">
            hogyan dolgozunk, és mire számíthatsz a közös munka során
          </span>
        </h1>
        <p class="hero__subtitle">
          Olyan weboldalakat és egyedi online rendszereket készítünk, amelyek gyorsak,
          biztonságosak, és később is bővíthetők. A cél mindig ugyanaz: az oldal segítsen új
          érdeklődőket és megkereséseket hozni – ne csak “jól nézzen ki”.
        </p>

        <div class="hero__actions">
          <RouterLink class="btn btn--primary" :to="{ path: '/', hash: '#contact-section' }">
            Ajánlatot kérek
          </RouterLink>
          <RouterLink class="btn btn--secondary" :to="{ path: '/referenciak' }">
            Referenciák
          </RouterLink>
        </div>
      </div>
    </section>

    <section class="section section--light">
      <div class="section__inner">
        <h2 class="section__title">Mit kapsz, ha velünk dolgozol?</h2>
        <ul class="pill-list">
          <li class="pill-list__item">Tiszta célok, tiszta határok (mi készül el)</li>
          <li class="pill-list__item">Ügyfélszerző felépítés (CTA, logikus oldalszerkezet)</li>
          <li class="pill-list__item">Stabil technikai alapok (gyors működés, biztonság)</li>
          <li class="pill-list__item">Átadás + betanítás (hogy tudd használni)</li>
        </ul>

        <div class="content-grid">
          <article class="content-card">
            <h3 class="content-card__title">A cél számít, nem csak a design</h3>
            <p class="content-card__text">
              Úgy építjük fel az oldalt, hogy a látogató gyorsan megértse, mivel foglalkoztok, és
              könnyen kapcsolatba tudjon lépni veletek. A fontos részeket kiemeljük, a “következő
              lépés” pedig mindig egyértelmű.
            </p>
          </article>

          <article class="content-card">
            <h3 class="content-card__title">Átlátható kommunikáció</h3>
            <p class="content-card__text">
              Nem kell értened a technikai részletekhez. Egyszerűen elmondjuk, mi miért készül, és
              hol tartunk. Az első konzultáció után egy rövid írásos összefoglalót is küldünk.
            </p>
          </article>

          <article class="content-card">
            <h3 class="content-card__title">Bővíthető, hosszú távú megoldás</h3>
            <p class="content-card__text">
              Olyan alapokra építünk, amit később is lehet fejleszteni: új aloldal, új tartalom, új
              funkció vagy integráció. Nem kell mindent újrakezdeni, ha nő a vállalkozás.
            </p>
          </article>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="section__inner">
        <h2 class="section__title section__title--center">Munkafolyamat röviden</h2>
        <p class="section__lead section__lead--center">
          Ingyenes konzultáció → ajánlat → tervezés → fejlesztés → átadás → (opcionális)
          karbantartás.
        </p>
        <div class="cta-panel">
          <div class="cta-panel__content">
            <h3 class="cta-panel__title">Kérsz csomagjavaslatot és irányárat?</h3>
            <p class="cta-panel__text">
              Írj pár mondatot arról, mivel foglalkoztok, és mire kell az új weboldal.
              Visszajelzünk, melyik csomag illik hozzátok, és milyen irányárral érdemes számolni.
            </p>
          </div>
          <RouterLink class="btn btn--primary" :to="{ path: '/', hash: '#contact-section' }">
            Beszéljünk
          </RouterLink>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped></style>
