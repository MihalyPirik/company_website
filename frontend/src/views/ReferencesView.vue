<script setup lang="ts">
import { computed, ref } from 'vue'

type Tag = 'Weboldal' | 'Admin' | 'Űrlap' | 'Integráció' | 'SEO'

interface ReferenceItem {
  id: string
  title: string
  subtitle: string
  tags: Tag[]
  summary: string
  bullets: string[]
  url?: string
}

const references = ref<ReferenceItem[]>([
  {
    id: 'habzsolj',
    title: 'habzsolj.hu',
    subtitle: 'Kipróbált receptek, egyszerűen - egyedi háttérrendszerrel',
    tags: ['Weboldal', 'Admin', 'Űrlap', 'SEO'],
    summary:
      'Receptgyűjtemény letisztult felülettel. A háttérben felhasználói fiókok, saját receptek és admin jóváhagyási folyamat működik.',
    bullets: [
      'Felhasználói regisztráció és bejelentkezés, profilkezeléssel',
      'Saját receptek felvitele és módosítása + admin jóváhagyás',
      'Admin felület a receptek és kapcsolódó tartalmak kezeléséhez',
      'Látogatottságmérés (Google Analytics) bekötése',
    ],
    url: 'https://habzsolj.hu',
  },
])

const activeTag = ref<Tag | 'Összes'>('Összes')

const tags = computed<(Tag | 'Összes')[]>(() => {
  const all = new Set<Tag>()
  references.value.forEach((r) => r.tags.forEach((t) => all.add(t)))
  return ['Összes', ...Array.from(all).sort()]
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
        <h1 class="hero__title">Referenciák</h1>
        <p class="hero__subtitle">
          Itt olyan munkákból látsz példákat, ahol a cél a <strong>tiszta kommunikáció</strong>, a
          <strong>stabil technikai alap</strong> és a <strong>bővíthetőség</strong> volt. Ha leírod,
          mit szeretnél, javaslok egy csomagot és irányárat.
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
              v-if="item.url"
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
