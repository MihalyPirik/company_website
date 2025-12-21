<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <footer class="site-footer">
    <div class="site-footer__inner">
      <div class="site-footer__col">
        <div class="site-footer__brand">
          <img
            class="site-footer__brand-mark"
            src="/logo.png"
            alt="PM Webdesign logó"
            width="28"
            height="28"
            loading="lazy"
          />
          <span class="site-footer__brand-text">PM Webdesign</span>
        </div>
        <p class="site-footer__text">
          Modern, gyors weboldalak és egyedi rendszerek kis- és középvállalkozásoknak.
        </p>
      </div>

      <div class="site-footer__col">
        <p class="site-footer__title">Oldalak</p>

        <nav class="site-footer__nav" aria-label="Oldalak">
          <RouterLink class="site-footer__link" :to="{ path: '/' }">Főoldal</RouterLink>
          <RouterLink class="site-footer__link" :to="{ path: '/referenciak' }">
            Referenciák
          </RouterLink>
          <RouterLink class="site-footer__link" :to="{ path: '/rolunk' }">Rólunk</RouterLink>
          <RouterLink class="site-footer__link" :to="{ path: '/', hash: '#contact-section' }">
            Kapcsolat
          </RouterLink>
        </nav>
      </div>

      <div class="site-footer__col">
        <p class="site-footer__title">Kapcsolat</p>
        <a class="site-footer__link" href="mailto:info@pmwebdesign.hu">info@pmwebdesign.hu</a>
        <a class="site-footer__link" href="tel:+36202439175">+36 20 243 9175</a>
        <p class="site-footer__tiny">Válasz: jellemzően 1 munkanapon belül</p>
      </div>
    </div>

    <div class="site-footer__bottom">
      <p class="site-footer__copyright">© {{ year }} PM Webdesign</p>
    </div>
  </footer>
</template>

<style scoped>
.site-footer__col {
  display: flex;
  flex-direction: column;
}

.site-footer__brand {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
}

.site-footer__brand-mark {
  width: 50px;
  height: 50px;
  border-radius: 8px;
  object-fit: cover;
  display: inline-block;
}

.site-footer__nav {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.site-footer__link {
  display: block;
  line-height: 1.6;
}
</style>
