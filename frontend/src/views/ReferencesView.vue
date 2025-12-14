<script setup lang="ts">
import { computed, ref } from 'vue'

type Tag = 'Weboldal' | 'Admin' | 'Űrlap' | 'Integráció' | 'SEO' | 'Webapp'

interface ReferenceItem {
  id: string
  title: string
  subtitle: string
  tags: Tag[]
  summary: string
  bullets: string[]
  url: string
}

const references = ref<ReferenceItem[]>([
  {
    id: 'habzsolj',
    title: 'habzsolj.hu',
    subtitle: 'Kipróbált receptek, egyszerűen – egyedi rendszerrel a háttérben',
    tags: ['Webapp', 'Admin', 'Integráció'],
    summary:
      'Receptgyűjtemény, ahol a látogatók kipróbált, jól követhető recepteket találnak egy letisztult felületen. A háttérben felhasználói fiókokkal, saját receptekkel és admin jóváhagyással működő, egyedi fejlesztésű rendszer fut.',
    bullets: [
      'Felhasználói regisztráció és bejelentkezés, saját profilkezeléssel',
      'Saját receptek felvitele, módosítása + admin jóváhagyási folyamat',
      'Admin felület a receptek és kapcsolódó tartalmak kezeléséhez',
      'Integrációk és mérőkódok bekötése (pl. analitika, külső szolgáltatások)',
    ],
    url: 'https://habzsolj.hu',
  },
])

const activeTag = ref<Tag | 'Összes'>('Összes')

const tags = computed<(Tag | 'Összes')[]>(() => {
  const all = new Set<Tag>()
  references.value.forEach((r) => r.tags.forEach((t) => all.add(t)))
  return ['Összes', ...Array.from(all)]
})

const filtered = computed(() => {
  if (activeTag.value === 'Összes') return references.value
  return references.value.filter((r) => r.tags.includes(activeTag.value as Tag))
})
</script>

<template>
  <main class="services-page">
    <section class="hero hero--compact">
      <div class="hero__content">
        <h1 class="hero__title">
          Referenciák
          <span class="hero__title-sub">konkrét példa egyedi online megoldásra</span>
        </h1>
        <p class="hero__subtitle">
          Itt egy olyan projektet mutatunk, ahol egy kipróbált recepteket bemutató oldal mögé
          építettünk stabil, bővíthető rendszert. Ha megírod a céljaitokat, javaslunk egy csomagot
          és irányárat.
        </p>

        <div class="hero__actions">
          <RouterLink class="btn btn--primary" :to="{ path: '/', hash: '#contact-section' }">
            Ajánlatot kérek
          </RouterLink>
          <RouterLink class="btn btn--secondary" :to="{ path: '/', hash: '#packages-section' }">
            Csomagok
          </RouterLink>
        </div>
      </div>
    </section>

    <section class="section section--light">
      <div class="section__inner">
        <div class="filters">
          <button
            v-for="t in tags"
            :key="t"
            type="button"
            class="filter-pill"
            :class="{ 'filter-pill--active': activeTag === t }"
            @click="activeTag = t"
          >
            {{ t }}
          </button>
        </div>

        <div class="refs-grid">
          <article v-for="item in filtered" :key="item.id" class="ref-card">
            <h3 class="ref-card__title">{{ item.title }}</h3>
            <p class="ref-card__subtitle">{{ item.subtitle }}</p>

            <div class="ref-card__tags">
              <span v-for="tag in item.tags" :key="`${item.id}-${tag}`" class="tag">
                {{ tag }}
              </span>
            </div>

            <p class="ref-card__summary">{{ item.summary }}</p>

            <ul class="ref-card__bullets">
              <li v-for="(b, i) in item.bullets" :key="`${item.id}-b-${i}`">
                {{ b }}
              </li>
            </ul>

            <a
              class="btn btn--secondary ref-card__cta"
              :href="item.url"
              target="_blank"
              rel="noopener noreferrer"
            >
              Megnézem az oldalt
            </a>

            <RouterLink
              class="btn btn--ghost ref-card__cta"
              :to="{ path: '/', hash: '#contact-section' }"
            >
              Hasonlót szeretnénk
            </RouterLink>
          </article>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped></style>
