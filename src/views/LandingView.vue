<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { RouterLink } from 'vue-router'
import { SERVICES } from '@/data/services'
import ServiceNavIcon from '@/components/ServiceNavIcon.vue'

import imgHero from '@/assets/imSvg/4.png'
import imgHeroSquiggle1 from '@/assets/imSvg/3.png'
import imgHeroSquiggle2 from '@/assets/imSvg/13.png'
import imgIntro1 from '@/assets/imSvg/29.png'
import imgIntro2 from '@/assets/imSvg/34.png'
import imgIntro3 from '@/assets/imSvg/28.png'
import imgStats from '@/assets/imSvg/19.png'
import imgBullet1 from '@/assets/imSvg/26.png'
import imgBullet2 from '@/assets/imSvg/44.png'
import imgShowcase from '@/assets/imSvg/42.png'
import imgMidPay from '@/assets/imSvg/30.png'
import imgManage from '@/assets/imSvg/36.png'
import imgManageI1 from '@/assets/imSvg/27.png'
import imgManageI2 from '@/assets/imSvg/40.png'
import imgManageI3 from '@/assets/imSvg/22.png'
import imgPaymentMethods from '@/assets/imSvg/37.png'
import imgHow1 from '@/assets/imSvg/12.png'
import imgHow2 from '@/assets/imSvg/33.png'
import imgHow3 from '@/assets/imSvg/34.png'
import imgPartner46 from '@/assets/imSvg/46.png'
import imgPartner47 from '@/assets/imSvg/47.png'
import imgPartner48 from '@/assets/imSvg/48.png'
import imgPartner49 from '@/assets/imSvg/49.png'
import imgPartner50 from '@/assets/imSvg/50.png'
import imgPartner51 from '@/assets/imSvg/51.png'

const { t } = useI18n()

const partnerPortalRegisterUrl = 'https://phoenix.small-pay.com/partner-portal/register'

const servicesTop = computed(() => [...SERVICES].slice(0, 3))
const servicesBottom = computed(() => [...SERVICES].slice(3, 6))

const pricingMatrix = computed(() => [
  {
    label: t('landingPage.pricingR1Label'),
    cells: [t('landingPage.pricingR1E'), t('landingPage.pricingR1S'), t('landingPage.pricingR1P')],
  },
  {
    label: t('landingPage.pricingR2Label'),
    cells: [t('landingPage.pricingR2E'), t('landingPage.pricingR2S'), t('landingPage.pricingR2P')],
  },
  {
    label: t('landingPage.pricingR3Label'),
    cells: [t('landingPage.pricingR3E'), t('landingPage.pricingR3S'), t('landingPage.pricingR3P')],
  },
  {
    label: t('landingPage.pricingR4Label'),
    cells: [t('landingPage.pricingR4E'), t('landingPage.pricingR4S'), t('landingPage.pricingR4P')],
  },
  {
    label: t('landingPage.pricingR5Label'),
    cells: [t('landingPage.pricingR5E'), t('landingPage.pricingR5S'), t('landingPage.pricingR5P')],
  },
])

const partnerLogos = [
  imgPartner46,
  imgPartner47,
  imgPartner48,
  imgPartner49,
  imgPartner50,
  imgPartner51,
]

const howSteps = computed(() => [
  { img: imgHow1, title: t('landingPage.howStep1Title'), desc: t('landingPage.howStep1Desc') },
  { img: imgHow2, title: t('landingPage.howStep2Title'), desc: t('landingPage.howStep2Desc') },
  { img: imgHow3, title: t('landingPage.howStep3Title'), desc: t('landingPage.howStep3Desc') },
])

function isFeaturedTop(idx: number) {
  return idx === 1
}
</script>

<template>
  <main class="gp">
    <!-- Hero -->
    <section id="home" class="gp-hero section gp-hero--waves">
      <div class="container gp-hero__grid">
        <div class="gp-hero__copy">
          <p class="gp-hero__eyebrow">{{ t('landingPage.heroEyebrow') }}</p>
          <h1 class="gp-hero__title">
            {{ t('landingPage.heroTitleBefore') }}
            <span class="gp-hero__title-mark">{{ t('landingPage.heroTitleHighlight') }}</span>
            {{ t('landingPage.heroTitleAfter') }}
          </h1>
          <p class="gp-hero__sub">{{ t('landingPage.heroSub') }}</p>
          <div class="gp-hero__ctas">
            <a
              :href="partnerPortalRegisterUrl"
              class="gp-btn gp-btn--orange"
              target="_blank"
              rel="noopener noreferrer"
              >{{ t('landingPage.heroCtaPrimary') }}</a
            >
          </div>
        </div>
        <div class="gp-hero__visual">
          <div class="gp-hero__deco" aria-hidden="true">
            <span class="gp-hero__blob" />
            <span class="gp-hero__ring gp-hero__ring--solid" />
            <span class="gp-hero__ring gp-hero__ring--dashed" />
            <span class="gp-hero__arc gp-hero__arc--teal" />
            <span class="gp-hero__arc gp-hero__arc--orange gp-hero__arc--o1" />
            <span class="gp-hero__arc gp-hero__arc--orange gp-hero__arc--o2" />
            <img class="gp-hero__squiggle gp-hero__squiggle--tl" :src="imgHeroSquiggle1" alt="" width="96" height="96" />
            <img class="gp-hero__squiggle gp-hero__squiggle--br" :src="imgHeroSquiggle2" alt="" width="96" height="96" />
          </div>
          <img class="gp-hero__photo" :src="imgHero" :alt="t('landingPage.heroAltMain')" width="800" height="900" />
        </div>
      </div>
    </section>

    <!-- Intro + bandeau 2 cartes -->
    <section class="gp-intro section section--muted">
      <div class="container">
        <h2 class="gp-section-title">{{ t('landingPage.introTitle') }}</h2>
        <div class="gp-intro__grid">
          <article class="gp-intro-card">
            <img class="gp-intro-card__icon" :src="imgIntro1" alt="" width="72" height="72" loading="lazy" />
            <h3>{{ t('landingPage.intro1Title') }}</h3>
            <p>{{ t('landingPage.intro1Desc') }}</p>
          </article>
          <article class="gp-intro-card">
            <img class="gp-intro-card__icon" :src="imgIntro2" alt="" width="72" height="72" loading="lazy" />
            <h3>{{ t('landingPage.intro2Title') }}</h3>
            <p>{{ t('landingPage.intro2Desc') }}</p>
          </article>
          <article class="gp-intro-card">
            <img class="gp-intro-card__icon" :src="imgIntro3" alt="" width="72" height="72" loading="lazy" />
            <h3>{{ t('landingPage.intro3Title') }}</h3>
            <p>{{ t('landingPage.intro3Desc') }}</p>
          </article>
        </div>
        <div class="gp-intro-band">
          <article class="gp-intro-band__card">
            <h3 class="gp-intro-band__title">{{ t('landingPage.introBand1Title') }}</h3>
            <p>{{ t('landingPage.introBand1Desc') }}</p>
          </article>
          <div class="gp-intro-band__rule" aria-hidden="true" />
          <article class="gp-intro-band__card">
            <h3 class="gp-intro-band__title">{{ t('landingPage.introBand2Title') }}</h3>
            <p>{{ t('landingPage.introBand2Desc') }}</p>
          </article>
        </div>
      </div>
    </section>

    <!-- Split image / copy + bullets -->
    <section id="about" class="gp-stats section">
      <div class="container gp-stats__grid">
        <div class="gp-stats__visual">
          <div class="gp-stats__rings" aria-hidden="true" />
          <figure class="gp-stats__figure">
            <img :src="imgStats" :alt="t('landingPage.statsAlt')" width="560" height="560" loading="lazy" />
          </figure>
        </div>
        <div class="gp-stats__copy">
          <p class="gp-stats__eyebrow">{{ t('landingPage.statsEyebrow') }}</p>
          <h2 class="gp-section-title gp-section-title--left">{{ t('landingPage.statsTitle') }}</h2>
          <p class="gp-stats__lead">{{ t('landingPage.statsBody') }}</p>
          <ul class="gp-stats__bullets">
            <li>
              <span class="gp-stats__bico"><img :src="imgBullet1" alt="" width="40" height="40" loading="lazy" /></span>
              <div>
                <strong>{{ t('landingPage.statsBullet1Title') }}</strong>
                <p>{{ t('landingPage.statsBullet1Desc') }}</p>
              </div>
            </li>
            <li>
              <span class="gp-stats__bico"><img :src="imgBullet2" alt="" width="40" height="40" loading="lazy" /></span>
              <div>
                <strong>{{ t('landingPage.statsBullet2Title') }}</strong>
                <p>{{ t('landingPage.statsBullet2Desc') }}</p>
              </div>
            </li>
          </ul>
          <div class="gp-stats__mini">
            <div class="gp-stats__pill">
              <strong>{{ t('landingPage.stats1Val') }}</strong>
              <span>{{ t('landingPage.stats1Label') }}</span>
            </div>
            <div class="gp-stats__pill">
              <strong>{{ t('landingPage.stats2Val') }}</strong>
              <span>{{ t('landingPage.stats2Label') }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Plein écran + grille 3 + visuel + 3 -->
    <section id="services" class="gp-showcase section section--muted">
      <div class="container">
        <h2 class="gp-section-title">{{ t('landingPage.showcaseTitle') }}</h2>
      </div>
      <div class="gp-showcase__banner">
        <img :src="imgShowcase" :alt="t('landingPage.showcaseAlt')" width="1600" height="640" loading="lazy" />
      </div>
      <div class="container gp-showcase__stack">
        <div class="gp-showcase__row">
          <RouterLink
            v-for="(s, idx) in servicesTop"
            :key="'t-' + s.slug"
            :to="`/services/${s.slug}`"
            class="gp-feature-card"
            :class="{ 'gp-feature-card--featured': isFeaturedTop(idx) }"
          >
            <div class="gp-feature-card__icon">
              <ServiceNavIcon :name="s.icon" />
            </div>
            <h3>{{ t(`features.${s.featureKey}.title`) }}</h3>
            <p>{{ t(`features.${s.featureKey}.desc`) }}</p>
            <span
              class="gp-feature-card__cta"
              :class="{ 'gp-feature-card__cta--orange': isFeaturedTop(idx) }"
              >{{ t('landingPage.learnMore') }}</span
            >
          </RouterLink>
        </div>

        <div class="gp-showcase__mid">
          <img :src="imgMidPay" alt="" width="520" height="320" loading="lazy" />
        </div>

        <div class="gp-showcase__row">
          <RouterLink v-for="s in servicesBottom" :key="'b-' + s.slug" :to="`/services/${s.slug}`" class="gp-feature-card">
            <div class="gp-feature-card__icon">
              <ServiceNavIcon :name="s.icon" />
            </div>
            <h3>{{ t(`features.${s.featureKey}.title`) }}</h3>
            <p>{{ t(`features.${s.featureKey}.desc`) }}</p>
            <span class="gp-feature-card__cta">{{ t('landingPage.learnMore') }}</span>
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- Manage -->
    <section class="gp-manage section">
      <div class="container gp-manage__grid">
        <div class="gp-manage__copy">
          <h2 class="gp-section-title gp-section-title--left">{{ t('landingPage.manageTitle') }}</h2>
          <ul class="gp-manage__list">
            <li>
              <span class="gp-manage__ico"><img :src="imgManageI1" alt="" width="44" height="44" loading="lazy" /></span>
              <div>
                <h3>{{ t('landingPage.manageItem1Title') }}</h3>
                <p>{{ t('landingPage.manageItem1Desc') }}</p>
              </div>
            </li>
            <li>
              <span class="gp-manage__ico"><img :src="imgManageI2" alt="" width="44" height="44" loading="lazy" /></span>
              <div>
                <h3>{{ t('landingPage.manageItem2Title') }}</h3>
                <p>{{ t('landingPage.manageItem2Desc') }}</p>
              </div>
            </li>
            <li>
              <span class="gp-manage__ico"><img :src="imgManageI3" alt="" width="44" height="44" loading="lazy" /></span>
              <div>
                <h3>{{ t('landingPage.manageItem3Title') }}</h3>
                <p>{{ t('landingPage.manageItem3Desc') }}</p>
              </div>
            </li>
          </ul>
        </div>
        <div class="gp-manage__visual">
          <div class="gp-manage__rings" aria-hidden="true" />
          <img class="gp-manage__photo" :src="imgManage" :alt="t('landingPage.manageAlt')" width="720" height="900" loading="lazy" />
        </div>
      </div>
    </section>

    <!-- Matrice tarifs -->
    <section id="pricing" class="gp-pricing section section--muted">
      <div class="container">
        <h2 class="gp-section-title">{{ t('pricing.title') }}</h2>
        <p class="gp-pricing__lead">{{ t('landingPage.pricingLead') }}</p>
        <p class="gp-pricing__sublead">{{ t('landingPage.pricingMatrixLead') }}</p>
        <div class="gp-table-wrap">
          <table class="gp-matrix">
            <thead>
              <tr>
                <th>{{ t('landingPage.pricingFeatureCol') }}</th>
                <th>{{ t('landingPage.pricingColEssential') }}</th>
                <th>{{ t('landingPage.pricingColStandard') }}</th>
                <th>{{ t('landingPage.pricingColPremium') }}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, i) in pricingMatrix" :key="i">
                <th scope="row">{{ row.label }}</th>
                <td v-for="(cell, j) in row.cells" :key="j">{{ cell }}</td>
              </tr>
              <tr class="gp-matrix__methods-row">
                <th scope="row">{{ t('landingPage.pricingColMethods') }}</th>
                <td colspan="3" class="gp-matrix__methods-cell">
                  <img :src="imgPaymentMethods" alt="" width="260" height="44" loading="lazy" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- Comment ça marche -->
    <section class="gp-how section">
      <div class="container">
        <h2 class="gp-section-title gp-section-title--inv">{{ t('landingPage.howTitle') }}</h2>
        <p class="gp-how__sub">{{ t('landingPage.howSubtitle') }}</p>
        <div class="gp-steps" role="list">
          <article v-for="(step, i) in howSteps" :key="i" class="gp-step" role="listitem">
            <div class="gp-step__num">{{ i + 1 }}</div>
            <img class="gp-step__img" :src="step.img" alt="" width="72" height="72" loading="lazy" />
            <h3>{{ step.title }}</h3>
            <p>{{ step.desc }}</p>
            <RouterLink to="/contact" class="gp-step__link">{{ t('landingPage.learnMore') }}</RouterLink>
          </article>
        </div>
      </div>
    </section>

    <!-- Logos -->
    <section class="gp-partners section section--muted" :aria-label="t('landingPage.partnersAria')">
      <div class="container gp-partners__row">
        <img v-for="(src, i) in partnerLogos" :key="i" :src="src" alt="" loading="lazy" />
      </div>
    </section>
  </main>
</template>

<style scoped>
.container {
  width: min(100% - 2.5rem, var(--max-width));
  margin-inline: auto;
}

.section {
  padding-block: clamp(3.25rem, 8vw, 5.75rem);
}

.section--muted {
  background: var(--brand-shell);
}

.gp {
  overflow-x: clip;
  background: var(--white);
}

.gp-section-title {
  margin: 0 auto 2rem;
  text-align: center;
  font-size: clamp(1.35rem, 3vw, 2rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  color: var(--brand-teal);
  max-width: 42rem;
  line-height: 1.22;
}

.gp-section-title--left {
  margin-left: 0;
  text-align: left;
  max-width: none;
}

.gp-section-title--inv {
  color: var(--white);
}

/* Hero */
.gp-hero {
  position: relative;
  isolation: isolate;
  padding-top: clamp(5rem, 10vw, 6.5rem);
}

.gp-hero--waves::before {
  content: '';
  position: absolute;
  inset: 0;
  z-index: -1;
  pointer-events: none;
  background:
    radial-gradient(ellipse 130% 42% at 50% -8%, rgba(1, 6, 71, 0.045), transparent 58%),
    radial-gradient(ellipse 125% 38% at 50% 108%, rgba(1, 6, 71, 0.038), transparent 55%),
    repeating-linear-gradient(
      -8deg,
      transparent,
      transparent 76px,
      rgba(203, 203, 203, 0.11) 76px,
      rgba(203, 203, 203, 0.11) 77px
    ),
    #ffffff;
  opacity: 1;
}

.gp-hero--waves::after {
  content: '';
  position: absolute;
  inset: 0;
  z-index: -1;
  pointer-events: none;
  background:
    radial-gradient(ellipse 90% 28% at 8% 22%, rgba(0, 169, 164, 0.06), transparent 70%),
    radial-gradient(ellipse 85% 26% at 92% 78%, rgba(255, 100, 0, 0.055), transparent 68%);
}

.gp-hero__grid {
  display: grid;
  gap: 2rem;
  align-items: center;
}

@media (min-width: 900px) {
  .gp-hero__grid {
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
  }
}

.gp-hero__eyebrow {
  margin: 0 0 0.65rem;
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--brand-teal);
}

.gp-hero__title {
  margin: 0 0 1rem;
  font-family: ui-serif, Georgia, 'Times New Roman', serif;
  font-size: clamp(1.85rem, 4vw, 2.85rem);
  font-weight: 700;
  line-height: 1.18;
  letter-spacing: -0.02em;
  color: var(--brand-plum);
}

.gp-hero__title-mark {
  font-family:
    ui-sans-serif,
    system-ui,
    -apple-system,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-weight: 800;
  letter-spacing: -0.03em;
  color: var(--brand-orange);
}

.gp-hero__sub {
  margin: 0 0 1.5rem;
  font-size: 1.05rem;
  line-height: 1.6;
  color: var(--brand-muted);
  max-width: 42ch;
}

.gp-hero__visual {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  min-height: clamp(280px, 42vw, 440px);
}

.gp-hero__deco {
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
}

.gp-hero__blob {
  position: absolute;
  left: 50%;
  bottom: 7%;
  width: min(78%, 340px);
  aspect-ratio: 1;
  border-radius: 50%;
  transform: translateX(-47%);
  background: radial-gradient(circle at 38% 36%, rgba(198, 228, 252, 0.95), rgba(215, 238, 255, 0.35));
}

.gp-hero__ring {
  position: absolute;
  left: 50%;
  bottom: 4%;
  border-radius: 50%;
  transform: translateX(-50%);
}

.gp-hero__ring--solid {
  width: min(92%, 405px);
  aspect-ratio: 1;
  border: 2px solid rgba(40, 33, 76, 0.26);
}

.gp-hero__ring--dashed {
  width: min(108%, 475px);
  aspect-ratio: 1;
  bottom: 1%;
  border: 2px dashed rgba(0, 169, 164, 0.34);
}

.gp-hero__arc {
  position: absolute;
  border-radius: 50%;
  border: 13px solid transparent;
  box-sizing: border-box;
}

.gp-hero__arc--teal {
  width: clamp(160px, 28vw, 220px);
  height: clamp(160px, 28vw, 220px);
  border-top-color: var(--brand-teal);
  border-right-color: var(--brand-teal);
  top: 5%;
  left: 2%;
  transform: rotate(-42deg);
}

.gp-hero__arc--orange {
  border-top-color: var(--brand-orange);
  border-right-color: var(--brand-orange);
}

.gp-hero__arc--o1 {
  width: clamp(150px, 26vw, 205px);
  height: clamp(150px, 26vw, 205px);
  top: 8%;
  right: 0;
  transform: rotate(48deg);
}

.gp-hero__arc--o2 {
  width: clamp(135px, 24vw, 185px);
  height: clamp(135px, 24vw, 185px);
  bottom: 14%;
  left: 0;
  transform: rotate(205deg);
}

.gp-hero__squiggle {
  position: absolute;
  width: clamp(42px, 9vw, 68px);
  height: auto;
  opacity: 0.94;
}

.gp-hero__squiggle--tl {
  top: 2%;
  left: 0;
}

.gp-hero__squiggle--br {
  bottom: 10%;
  right: 2%;
}

.gp-hero__photo {
  position: relative;
  z-index: 1;
  width: min(100%, 420px);
  height: auto;
  object-fit: contain;
}

.gp-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.78rem 1.85rem;
  border-radius: 10px;
  font-weight: 700;
  font-size: 0.95rem;
  text-decoration: none;
  border: none;
  cursor: pointer;
  transition:
    transform 0.15s,
    box-shadow 0.2s;
}

.gp-btn--orange {
  background: var(--brand-orange);
  color: var(--white);
  box-shadow: 0 10px 28px rgba(255, 100, 0, 0.35);
}

.gp-btn--orange:hover {
  transform: translateY(-2px);
  box-shadow: 0 14px 34px rgba(255, 100, 0, 0.45);
}

/* Intro */
.gp-intro__grid {
  display: grid;
  gap: 1.5rem;
}

@media (min-width: 768px) {
  .gp-intro__grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.gp-intro-card {
  background: var(--white);
  border-radius: var(--radius-md);
  padding: 1.75rem 1.35rem;
  text-align: center;
  border: 1px solid rgba(1, 6, 71, 0.06);
  box-shadow: 0 10px 36px rgba(1, 6, 71, 0.06);
}

.gp-intro-card__icon {
  width: 72px;
  height: 72px;
  margin: 0 auto 1rem;
  object-fit: contain;
}

.gp-intro-card h3 {
  margin: 0 0 0.5rem;
  font-size: 1.08rem;
  font-weight: 800;
  color: var(--brand-teal);
}

.gp-intro-card p {
  margin: 0;
  font-size: 0.92rem;
  line-height: 1.55;
  color: var(--brand-muted);
}

.gp-intro-band {
  margin-top: 2rem;
  display: grid;
  gap: 1.25rem;
  align-items: stretch;
}

@media (min-width: 768px) {
  .gp-intro-band {
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    gap: 0;
    border-radius: var(--radius-md);
    border: 1px solid rgba(1, 6, 71, 0.07);
    background: var(--white);
    box-shadow: 0 12px 40px rgba(1, 6, 71, 0.06);
    overflow: hidden;
  }

  .gp-intro-band__rule {
    width: 1px;
    align-self: stretch;
    background: rgba(1, 6, 71, 0.1);
    margin: 1.25rem 0;
  }
}

.gp-intro-band__card {
  padding: 1.35rem 1.25rem;
}

@media (min-width: 768px) {
  .gp-intro-band__card {
    padding: 1.75rem 2rem;
  }
}

.gp-intro-band__title {
  margin: 0 0 0.45rem;
  font-size: 1.05rem;
  font-weight: 800;
  color: var(--brand-teal);
}

.gp-intro-band__card p {
  margin: 0;
  font-size: 0.92rem;
  line-height: 1.55;
  color: var(--brand-muted);
}

@media (max-width: 767px) {
  .gp-intro-band__rule {
    display: none;
  }

  .gp-intro-band__card {
    border-radius: var(--radius-md);
    border: 1px solid rgba(1, 6, 71, 0.07);
    background: var(--white);
  }
}

/* Stats */
.gp-stats__grid {
  display: grid;
  gap: 2.5rem;
  align-items: center;
}

@media (min-width: 900px) {
  .gp-stats__grid {
    grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.05fr);
  }
}

.gp-stats__visual {
  position: relative;
  display: flex;
  justify-content: center;
}

.gp-stats__rings {
  position: absolute;
  width: min(340px, 80vw);
  height: min(340px, 80vw);
  border-radius: 50%;
  border: 2px dashed rgba(255, 100, 0, 0.35);
  box-shadow: inset 0 0 0 22px rgba(0, 169, 164, 0.06);
}

.gp-stats__figure {
  margin: 0;
  position: relative;
  width: min(320px, 78vw);
  aspect-ratio: 1;
  border-radius: 50%;
  overflow: hidden;
  border: 6px solid var(--white);
  box-shadow: var(--shadow-card);
}

.gp-stats__figure img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.gp-stats__eyebrow {
  margin: 0 0 0.5rem;
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--brand-orange);
}

.gp-stats__lead {
  margin: 0 0 1.25rem;
  font-size: 1rem;
  line-height: 1.65;
  color: var(--brand-muted);
}

.gp-stats__bullets {
  list-style: none;
  margin: 0 0 1.5rem;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.gp-stats__bullets li {
  display: flex;
  gap: 0.85rem;
  align-items: flex-start;
}

.gp-stats__bico {
  flex-shrink: 0;
  width: 52px;
  height: 52px;
  border-radius: 12px;
  background: rgba(0, 169, 164, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
}

.gp-stats__bico img {
  width: 40px;
  height: 40px;
  object-fit: contain;
}

.gp-stats__bullets strong {
  display: block;
  font-size: 1rem;
  color: var(--brand-plum);
  margin-bottom: 0.2rem;
}

.gp-stats__bullets p {
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.5;
  color: var(--brand-muted);
}

.gp-stats__mini {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 1rem;
}

.gp-stats__pill {
  padding: 1rem 1.15rem;
  border-radius: var(--radius-sm);
  background: rgba(255, 255, 255, 0.95);
  border: 1px solid rgba(1, 6, 71, 0.07);
  box-shadow: 0 8px 28px rgba(1, 6, 71, 0.05);
}

.gp-stats__pill strong {
  display: block;
  font-size: 1.35rem;
  font-weight: 800;
  color: var(--brand-teal);
}

.gp-stats__pill span {
  font-size: 0.82rem;
  color: var(--brand-muted);
}

/* Showcase */
.gp-showcase__banner {
  margin: 0 auto 2rem;
  width: min(100% - 2.5rem, var(--max-width));
  border-radius: var(--radius-lg);
  overflow: hidden;
  border: 1px solid rgba(1, 6, 71, 0.06);
  box-shadow: var(--shadow-card);
}

.gp-showcase__banner img {
  width: 100%;
  height: auto;
  display: block;
  max-height: min(440px, 58vw);
  object-fit: cover;
}

.gp-showcase__stack {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.gp-showcase__row {
  display: grid;
  gap: 1.25rem;
}

@media (min-width: 900px) {
  .gp-showcase__row {
    grid-template-columns: repeat(3, 1fr);
  }
}

.gp-showcase__mid {
  display: flex;
  justify-content: center;
  padding-block: 0.25rem 0.75rem;
}

.gp-showcase__mid img {
  width: min(100%, 420px);
  height: auto;
  filter: drop-shadow(0 18px 42px rgba(1, 6, 71, 0.14));
}

.gp-feature-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1.45rem 1.25rem;
  background: var(--white);
  border-radius: var(--radius-md);
  border: 1px solid rgba(1, 6, 71, 0.07);
  text-decoration: none;
  color: inherit;
  transition:
    box-shadow 0.2s,
    transform 0.2s,
    border-color 0.2s;
}

.gp-feature-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 18px 44px rgba(1, 6, 71, 0.1);
}

.gp-feature-card--featured {
  border-color: rgba(255, 100, 0, 0.35);
  box-shadow: 0 18px 48px rgba(255, 100, 0, 0.12);
}

.gp-feature-card__icon {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(0, 169, 164, 0.1);
  color: var(--brand-teal);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.75rem;
}

.gp-feature-card h3 {
  margin: 0 0 0.4rem;
  font-size: 1.05rem;
  font-weight: 800;
  color: var(--brand-plum);
}

.gp-feature-card p {
  margin: 0 0 0.85rem;
  font-size: 0.88rem;
  line-height: 1.5;
  color: var(--brand-muted);
  flex: 1;
}

.gp-feature-card__cta {
  font-size: 0.82rem;
  font-weight: 700;
  color: var(--brand-teal);
  text-decoration: underline;
  text-underline-offset: 3px;
}

.gp-feature-card__cta--orange {
  display: inline-flex;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  background: var(--brand-orange);
  color: var(--white);
  text-decoration: none;
}

/* Manage */
.gp-manage__grid {
  display: grid;
  gap: 2.5rem;
  align-items: center;
}

@media (min-width: 900px) {
  .gp-manage__grid {
    grid-template-columns: 1fr 1fr;
  }
}

.gp-manage__list {
  list-style: none;
  margin: 1.25rem 0 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1.35rem;
}

.gp-manage__list li {
  display: flex;
  gap: 0.95rem;
}

.gp-manage__ico {
  flex-shrink: 0;
  width: 52px;
  height: 52px;
  border-radius: 12px;
  background: rgba(0, 169, 164, 0.12);
  display: flex;
  align-items: center;
  justify-content: center;
}

.gp-manage__ico img {
  width: 44px;
  height: 44px;
  object-fit: contain;
}

.gp-manage__list h3 {
  margin: 0 0 0.25rem;
  font-size: 1.02rem;
  font-weight: 800;
  color: var(--brand-plum);
}

.gp-manage__list p {
  margin: 0;
  font-size: 0.92rem;
  line-height: 1.55;
  color: var(--brand-muted);
}

.gp-manage__visual {
  position: relative;
  display: flex;
  justify-content: center;
}

.gp-manage__rings {
  position: absolute;
  inset: 5% 8% auto;
  height: min(380px, 70vw);
  border-radius: 50%;
  border: 2px solid rgba(0, 169, 164, 0.28);
  box-shadow: 0 0 0 34px rgba(255, 100, 0, 0.06);
}

.gp-manage__photo {
  position: relative;
  z-index: 1;
  width: min(100%, 400px);
  height: auto;
}

/* Pricing matrix */
.gp-pricing__lead {
  text-align: center;
  margin: -0.75rem auto 0.35rem;
  max-width: 42rem;
  color: var(--brand-muted);
  line-height: 1.55;
}

.gp-pricing__sublead {
  text-align: center;
  margin: 0 auto 2rem;
  max-width: 40rem;
  font-size: 0.95rem;
  color: var(--brand-muted);
}

.gp-table-wrap {
  overflow-x: auto;
  border-radius: var(--radius-md);
  border: 1px solid rgba(1, 6, 71, 0.08);
  box-shadow: 0 12px 40px rgba(1, 6, 71, 0.06);
}

.gp-matrix {
  width: 100%;
  min-width: 560px;
  border-collapse: collapse;
  font-size: 0.9rem;
  background: var(--white);
}

.gp-matrix thead {
  background: var(--brand-teal);
  color: var(--white);
}

.gp-matrix th,
.gp-matrix td {
  padding: 0.95rem 1rem;
  text-align: center;
  border-bottom: 1px solid rgba(1, 6, 71, 0.06);
}

.gp-matrix thead th:first-child,
.gp-matrix tbody th[scope='row'] {
  text-align: left;
  font-weight: 700;
  color: var(--brand-plum);
}

.gp-matrix thead th:first-child {
  color: rgba(255, 255, 255, 0.95);
}

.gp-matrix tbody th {
  background: rgba(243, 247, 247, 0.85);
}

.gp-matrix__methods-cell {
  text-align: center !important;
}

.gp-matrix__methods-cell img {
  max-height: 40px;
  width: auto;
  margin-inline: auto;
}

/* How */
.gp-how {
  position: relative;
  overflow: hidden;
  background:
    radial-gradient(ellipse 80% 70% at 20% 40%, rgba(168, 230, 207, 0.35), transparent 55%),
    radial-gradient(ellipse 70% 60% at 85% 70%, rgba(40, 33, 76, 0.22), transparent 50%),
    linear-gradient(145deg, #0d5c59 0%, #1a6f6b 38%, #28214c 100%);
}

.gp-how__sub {
  text-align: center;
  margin: -1rem auto 2.25rem;
  max-width: 36rem;
  color: rgba(255, 255, 255, 0.88);
  font-size: 1rem;
  line-height: 1.55;
}

.gp-steps {
  display: grid;
  gap: 1.75rem;
}

@media (min-width: 900px) {
  .gp-steps {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    align-items: start;
  }

  .gp-step:not(:first-child) {
    border-left: 2px dashed rgba(255, 255, 255, 0.28);
    padding-left: 1.5rem;
    margin-left: 0;
  }
}

.gp-step {
  position: relative;
  text-align: center;
  padding: 1rem 1.15rem;
  color: rgba(255, 255, 255, 0.95);
}

@media (max-width: 899px) {
  .gp-step + .gp-step {
    padding-top: 1.75rem;
    border-top: 1px dashed rgba(255, 255, 255, 0.22);
  }
}

.gp-step__num {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  margin-bottom: 0.65rem;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.18);
  font-size: 0.82rem;
  font-weight: 800;
}

.gp-step__img {
  width: 72px;
  height: 72px;
  margin: 0 auto 1rem;
  object-fit: contain;
  filter: drop-shadow(0 6px 16px rgba(0, 0, 0, 0.15));
}

.gp-step h3 {
  margin: 0 0 0.45rem;
  font-size: 1.05rem;
  font-weight: 800;
}

.gp-step p {
  margin: 0 0 0.85rem;
  font-size: 0.9rem;
  line-height: 1.5;
  opacity: 0.92;
}

.gp-step__link {
  font-size: 0.84rem;
  font-weight: 700;
  color: #ffe066;
  text-decoration: underline;
  text-underline-offset: 3px;
}

.gp-step__link:hover {
  color: #fff;
}

/* Partners */
.gp-partners__row {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: clamp(1rem, 4vw, 2.5rem);
  opacity: 0.85;
}

.gp-partners__row img {
  height: clamp(28px, 5vw, 44px);
  width: auto;
  filter: grayscale(1);
  object-fit: contain;
}
</style>
