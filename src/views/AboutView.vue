<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { RouterLink } from 'vue-router'
import heroVisual from '@/assets/im/6.jpg'
import introPair14 from '@/assets/im/14.png'
import introPair17 from '@/assets/im/17.png'
import railsVisual from '@/assets/im/3.jpg'

const { t } = useI18n()

const values = [1, 2, 3] as const
const audienceLines = [1, 2, 3] as const
</script>

<template>
  <main class="about-page">
    <header class="about-page__hero">
      <div class="container about-page__hero-grid">
        <div class="about-page__hero-copy">
          <h1 class="about-page__title">{{ t('aboutPage.pageTitle') }}</h1>
          <p class="about-page__lede">{{ t('aboutPage.lede') }}</p>
        </div>
        <figure class="about-page__hero-figure">
          <img
            :src="heroVisual"
            :alt="t('aboutPage.heroImageAlt')"
            width="1200"
            height="800"
            loading="eager"
            decoding="async"
          />
        </figure>
      </div>
    </header>

    <article class="about-page__intro about-page__intro--split container">
      <div class="about-page__intro-figures" role="group" :aria-label="t('aboutPage.introPairGroupLabel')">
        <figure class="about-page__intro-fig">
          <img
            :src="introPair14"
            :alt="t('aboutPage.introPairAlt1')"
            width="400"
            height="400"
            loading="lazy"
            decoding="async"
          />
        </figure>
        <figure class="about-page__intro-fig">
          <img
            :src="introPair17"
            :alt="t('aboutPage.introPairAlt2')"
            width="400"
            height="400"
            loading="lazy"
            decoding="async"
          />
        </figure>
      </div>
      <div class="about-page__intro-copy">
        <p class="about-page__p">{{ t('aboutPage.p1') }}</p>
        <p class="about-page__p about-page__p--last">{{ t('aboutPage.p2') }}</p>
      </div>
    </article>

    <section class="about-page__rails" aria-labelledby="about-rails">
      <div class="container">
        <h2 id="about-rails" class="about-page__h2">{{ t('aboutPage.railsTitle') }}</h2>
        <p class="about-page__rails-lead">{{ t('aboutPage.railsLead') }}</p>
        <figure class="about-page__rails-illu">
          <img
            :src="railsVisual"
            :alt="t('aboutPage.railsImageAlt')"
            width="1200"
            height="800"
            loading="lazy"
            decoding="async"
          />
        </figure>
        <div class="about-page__rail-grid">
          <article class="about-page__rail about-page__rail--mtn">
            <h3 class="about-page__rail-name">{{ t('aboutPage.railMtnTitle') }}</h3>
            <p class="about-page__rail-text">{{ t('aboutPage.railMtnBody') }}</p>
          </article>
          <article class="about-page__rail about-page__rail--orange">
            <h3 class="about-page__rail-name">{{ t('aboutPage.railOrangeTitle') }}</h3>
            <p class="about-page__rail-text">{{ t('aboutPage.railOrangeBody') }}</p>
          </article>
          <article class="about-page__rail about-page__rail--card">
            <h3 class="about-page__rail-name">{{ t('aboutPage.railCardTitle') }}</h3>
            <p class="about-page__rail-text">{{ t('aboutPage.railCardBody') }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="about-page__surface" aria-labelledby="about-values">
      <div class="container">
        <h2 id="about-values" class="about-page__h2">{{ t('aboutPage.valuesTitle') }}</h2>
        <div class="about-page__value-grid">
          <article v-for="n in values" :key="n" class="about-page__value-card">
            <h3 class="about-page__h3">{{ t(`aboutPage.v${n}Title`) }}</h3>
            <p class="about-page__value-text">{{ t(`aboutPage.v${n}Body`) }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="about-page__trust container" aria-labelledby="about-trust">
      <h2 id="about-trust" class="about-page__h2">{{ t('aboutPage.trustTitle') }}</h2>
      <p class="about-page__p">{{ t('aboutPage.trustP1') }}</p>
      <p class="about-page__p about-page__p--last">{{ t('aboutPage.trustP2') }}</p>
    </section>

    <section class="about-page__audience" aria-labelledby="about-audience">
      <div class="container">
        <h2 id="about-audience" class="about-page__h2">{{ t('aboutPage.audienceTitle') }}</h2>
        <ul class="about-page__list-audience" role="list">
          <li v-for="n in audienceLines" :key="n">
            <span class="about-page__bullet" aria-hidden="true" />
            <span>{{ t(`aboutPage.audience${n}`) }}</span>
          </li>
        </ul>
      </div>
    </section>

    <section class="about-page__resources" aria-labelledby="about-resources">
      <div class="container about-page__resources-inner">
        <h2 id="about-resources" class="about-page__h2 about-page__h2--resources">{{ t('aboutPage.resourcesTitle') }}</h2>
        <div class="about-page__resource-links">
          <RouterLink to="/api-docs" class="about-page__resource-link">{{ t('aboutPage.linkApiDocs') }}</RouterLink>
          <RouterLink to="/#services" class="about-page__resource-link">{{ t('aboutPage.linkServices') }}</RouterLink>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.container {
  width: min(100% - 2.5rem, var(--max-width));
  margin-inline: auto;
}

.about-page {
  padding-bottom: 3.5rem;
}

.about-page__hero {
  padding: 1.5rem 0 1.25rem;
  background: linear-gradient(168deg, rgba(0, 11, 51, 0.04) 0%, rgba(255, 255, 255, 1) 70%);
  border-bottom: 1px solid rgba(0, 11, 51, 0.06);
}

.about-page__hero-grid {
  display: grid;
  gap: 1.75rem 2.25rem;
  align-items: center;
  max-width: 100%;
}

@media (min-width: 900px) {
  .about-page__hero-grid {
    grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.95fr);
  }
}

.about-page__hero-copy {
  max-width: 36rem;
}

@media (min-width: 900px) {
  .about-page__hero-copy {
    padding-block: 0.25rem;
  }
}

.about-page__hero-figure {
  margin: 0;
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-card);
  border: 1px solid rgba(0, 11, 51, 0.08);
  aspect-ratio: 4 / 3;
  max-height: min(48vh, 360px);
}

@media (min-width: 900px) {
  .about-page__hero-figure {
    max-height: 340px;
  }
}

.about-page__hero-figure img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.about-page__title {
  margin: 0 0 1rem;
  font-size: clamp(1.75rem, 4vw, 2.35rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  color: var(--navy);
  font-family: Georgia, 'Times New Roman', serif;
}

.about-page__lede {
  margin: 0;
  font-size: 1.1rem;
  line-height: 1.55;
  color: rgba(0, 11, 51, 0.75);
  max-width: 48ch;
}

.about-page__intro {
  margin-top: 2.25rem;
  max-width: 44rem;
}

.about-page__intro--split {
  max-width: min(100% - 2.5rem, var(--max-width));
  display: grid;
  gap: 1.5rem 2rem;
  align-items: start;
}

@media (min-width: 800px) {
  .about-page__intro--split {
    grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
  }
}

.about-page__intro-figures {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
  align-items: stretch;
}

@media (max-width: 799px) {
  .about-page__intro-figures {
    max-width: 22rem;
    margin-inline: auto;
  }
}

.about-page__intro-fig {
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f0f2f7;
  border-radius: var(--radius-md);
  border: 1px solid rgba(0, 11, 51, 0.08);
  padding: 0.5rem;
  box-shadow: 0 4px 20px rgba(0, 11, 51, 0.06);
  min-height: 0;
}

.about-page__intro-fig img {
  display: block;
  width: 100%;
  max-width: 100%;
  height: auto;
  object-fit: contain;
}

.about-page__intro-copy {
  min-width: 0;
}

.about-page__rails {
  margin-top: 2.5rem;
  padding-bottom: 0.25rem;
}

.about-page__rails-lead {
  margin: 0 0 1.25rem;
  max-width: 46rem;
  font-size: 1.02rem;
  line-height: 1.6;
  color: rgba(0, 11, 51, 0.8);
}

/* Cadre fixe (paysage) : l’image remplit tout le bloc (cover), sans bandes grises */
.about-page__rails-illu {
  position: relative;
  width: 100%;
  max-width: min(100%, 36rem);
  margin: 0 auto 1.75rem;
  aspect-ratio: 16 / 9;
  min-height: 12rem;
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: 0 12px 40px rgba(0, 11, 51, 0.09);
  border: 1px solid rgba(0, 11, 51, 0.07);
  background: #eef1f6;
}

@media (min-width: 600px) {
  .about-page__rails-illu {
    max-width: min(100%, 40rem);
    min-height: 0;
  }
}

.about-page__rails-illu img {
  position: absolute;
  inset: 0;
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 28%;
}

.about-page__rail-grid {
  display: grid;
  gap: 1.15rem;
  grid-template-columns: 1fr;
}

@media (min-width: 900px) {
  .about-page__rail-grid {
    grid-template-columns: repeat(3, 1fr);
    align-items: stretch;
  }
}

.about-page__rail {
  position: relative;
  padding: 1.4rem 1.25rem 1.5rem 1.35rem;
  background: var(--white);
  border-radius: var(--radius-md);
  border: 1px solid rgba(0, 11, 51, 0.08);
  box-shadow: 0 6px 28px rgba(0, 11, 51, 0.06);
  overflow: hidden;
}

.about-page__rail::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  background: var(--navy);
}

.about-page__rail--mtn::before {
  background: #ffcc00;
}

.about-page__rail--orange::before {
  background: #ff6600;
}

.about-page__rail--card::before {
  background: #1a1f71;
}

.about-page__rail-name {
  margin: 0 0 0.5rem;
  font-size: 1.1rem;
  font-weight: 800;
  color: var(--navy);
  letter-spacing: -0.02em;
  line-height: 1.25;
}

.about-page__rail-text {
  margin: 0;
  font-size: 0.94rem;
  line-height: 1.55;
  color: var(--text-muted);
}

.about-page__h2 {
  font-size: clamp(1.4rem, 3vw, 1.85rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  color: var(--navy);
  margin-bottom: 1.5rem;
  line-height: 1.25;
}

.about-page__h2--resources {
  color: var(--navy);
  margin-bottom: 1.25rem;
}

.about-page__h3 {
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--navy);
  margin: 0 0 0.5rem;
  line-height: 1.3;
}

.about-page__p {
  margin: 0 0 1.15rem;
  font-size: 1.02rem;
  line-height: 1.65;
  color: rgba(0, 11, 51, 0.88);
}

.about-page__p--last {
  margin-bottom: 0;
}

.about-page__surface {
  margin-top: 2.75rem;
  padding-block: clamp(2.5rem, 6vw, 3.5rem);
  background: #f3f4f8;
  border-block: 1px solid rgba(0, 11, 51, 0.06);
}

.about-page__value-grid {
  display: grid;
  gap: 1.25rem;
  grid-template-columns: 1fr;
}

@media (min-width: 700px) {
  .about-page__value-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.about-page__value-card {
  background: var(--white);
  border-radius: var(--radius-md);
  padding: 1.35rem 1.25rem 1.5rem;
  border: 1px solid rgba(0, 11, 51, 0.07);
  box-shadow: 0 4px 20px rgba(0, 11, 51, 0.05);
}

.about-page__value-text {
  margin: 0;
  font-size: 0.94rem;
  line-height: 1.55;
  color: var(--text-muted);
}

.about-page__trust {
  margin-top: 2.75rem;
  max-width: 44rem;
}

.about-page__audience {
  margin-top: 2.5rem;
  padding-block: 2.25rem;
  background: linear-gradient(180deg, rgba(168, 230, 207, 0.12) 0%, rgba(255, 255, 255, 0) 100%);
}

.about-page__list-audience {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
  max-width: 40rem;
}

.about-page__list-audience li {
  display: flex;
  gap: 0.75rem;
  align-items: flex-start;
  font-size: 0.98rem;
  line-height: 1.5;
  color: rgba(0, 11, 51, 0.9);
}

.about-page__bullet {
  flex-shrink: 0;
  width: 8px;
  height: 8px;
  margin-top: 0.45rem;
  border-radius: 50%;
  background: var(--navy);
  opacity: 0.65;
}

.about-page__resources {
  margin-top: 0.5rem;
  padding-block: 2.5rem;
  background: linear-gradient(165deg, #f2f5fb 0%, #e8edf6 50%, #e0e7f2 100%);
  border-top: 1px solid rgba(0, 11, 51, 0.06);
  border-bottom: 1px solid rgba(0, 11, 51, 0.08);
}

.about-page__resources-inner {
  text-align: center;
}

.about-page__resource-links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: center;
}

.about-page__resource-link {
  display: inline-flex;
  align-items: center;
  padding: 0.6rem 1.1rem;
  border-radius: var(--radius-sm);
  font-size: 0.92rem;
  font-weight: 600;
  text-decoration: none;
  color: var(--navy);
  background: var(--white);
  border: 1px solid rgba(0, 11, 51, 0.12);
  box-shadow: 0 2px 12px rgba(0, 11, 51, 0.06);
  transition:
    background 0.2s,
    transform 0.15s,
    box-shadow 0.2s;
}

.about-page__resource-link:hover {
  background: #fafbff;
  border-color: rgba(0, 11, 51, 0.18);
  box-shadow: 0 4px 18px rgba(0, 11, 51, 0.1);
  transform: translateY(-1px);
}

</style>
