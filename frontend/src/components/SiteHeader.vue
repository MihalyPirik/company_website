<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const mobileOpen = ref(false)

const navLinks = computed(() => [
  { label: 'Főoldal', to: { path: '/' } },
  { label: 'Szolgáltatások', to: { path: '/', hash: '#packages-section' } },
  { label: 'Referenciák', to: { path: '/referenciak' } },
  { label: 'Rólam', to: { path: '/rolam' } },
])

const ctaLink = computed(() => ({ path: '/', hash: '#contact-section' }))

watch(
  () => route.fullPath,
  () => {
    mobileOpen.value = false
  },
)

function toggleMobile(): void {
  mobileOpen.value = !mobileOpen.value
}
</script>

<template>
  <header class="site-header">
    <div class="site-header__inner">
      <RouterLink class="site-header__brand" :to="{ path: '/' }">
        <img
          class="site-header__brand-mark"
          src="/logo.png"
          alt="PM Webdesign logó"
          width="28"
          height="28"
          loading="eager"
        />
        <span class="site-header__brand-text">PM Webdesign</span>
      </RouterLink>

      <nav class="site-nav">
        <RouterLink
          v-for="link in navLinks"
          :key="link.label"
          class="site-nav__link"
          :to="link.to"
          active-class="site-nav__link--active"
        >
          {{ link.label }}
        </RouterLink>

        <RouterLink class="btn btn--primary site-nav__cta" :to="ctaLink">
          Ajánlatot kérek
        </RouterLink>
      </nav>

      <button class="site-header__burger" type="button" @click="toggleMobile" aria-label="Menü">
        <span class="burger-line" />
        <span class="burger-line" />
        <span class="burger-line" />
      </button>
    </div>

    <div v-if="mobileOpen" class="mobile-menu">
      <div class="mobile-menu__inner">
        <RouterLink
          v-for="link in navLinks"
          :key="`m-${link.label}`"
          class="mobile-menu__link"
          :to="link.to"
          active-class="mobile-menu__link--active"
        >
          {{ link.label }}
        </RouterLink>

        <RouterLink class="btn btn--primary mobile-menu__cta" :to="ctaLink">
          Ajánlatot kérek
        </RouterLink>
      </div>
    </div>
  </header>
</template>

<style scoped>
.site-header__brand-mark {
  width: 80px;
  height: 80px;
  border-radius: 8px;
  object-fit: cover;
  display: inline-block;
}
</style>
