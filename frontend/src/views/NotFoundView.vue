<script setup lang="ts"></script>

<template>
  <main class="not-found">
    <section class="not-found__card">
      <p class="not-found__code">404</p>
      <h1 class="not-found__title">A keresett oldal nem található</h1>
      <p class="not-found__subtitle">Lehet, hogy elgépelés történt, vagy a link már nem él.</p>

      <div class="not-found__actions">
        <RouterLink class="btn btn--primary" :to="{ path: '/' }">Vissza a főoldalra</RouterLink>
        <RouterLink class="btn btn--secondary" :to="{ path: '/', hash: '#packages-section' }">
          Csomagok
        </RouterLink>
      </div>
    </section>
  </main>
</template>

<style scoped>
.not-found {
  min-height: calc(100vh - 72px);
  display: grid;
  place-items: center;
  padding: 2.5rem 1.5rem;
  background: radial-gradient(circle at top left, #e0f2fe 0, #eff6ff 40%, #f9fafb 100%);
}

.not-found__card {
  width: 100%;
  max-width: 680px;
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 1.25rem;
  padding: 2rem 1.75rem;
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.06);
  text-align: center;
}

.not-found__code {
  margin: 0 0 0.35rem;
  font-size: 3rem;
  line-height: 1;
  font-weight: 800;
  letter-spacing: -0.02em;
  color: #2563eb;
}

.not-found__title {
  margin: 0 0 0.5rem;
  font-size: 1.35rem;
  color: #0f172a;
}

.not-found__subtitle {
  margin: 0 auto 1.25rem;
  max-width: 52ch;
  color: #4b5563;
  font-size: 0.95rem;
}

.not-found__actions {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  align-items: center;
}

.not-found__actions .btn {
  width: 100%;
  max-width: 320px;
}

@media (min-width: 640px) {
  .not-found__actions {
    flex-direction: row;
    justify-content: center;
  }

  .not-found__actions .btn {
    width: auto;
  }
}
</style>
