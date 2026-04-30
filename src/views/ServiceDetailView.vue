<script setup lang="ts">
import { computed, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'
import { getServiceBySlug, isServiceSlug } from '@/data/services'

const { t, locale } = useI18n()
const route = useRoute()

const slug = computed(() => (typeof route.params.slug === 'string' ? route.params.slug : ''))

const service = computed(() => {
  const s = slug.value
  return s && isServiceSlug(s) ? getServiceBySlug(s)! : null
})

const featureKey = computed(() => service.value?.featureKey ?? null)

watch(
  () => [featureKey.value, slug.value, locale.value] as const,
  ([key, s]) => {
    if (!key || !s || !isServiceSlug(s)) {
      document.title = `${t('brand.name')} — ${t('meta.titleSuffix')}`
      return
    }
    document.title = `${t(`servicePages.${key}.pageTitle`)} — ${t('brand.name')}`
  },
  { immediate: true },
)

const bulletKeys = ['b1', 'b2', 'b3'] as const

const bullets = computed(() => {
  const k = featureKey.value
  if (!k) return []
  return bulletKeys.map((b) => t(`servicePages.${k}.bullets.${b}`))
})
</script>

<template>
  <main v-if="service && featureKey" class="service-page">
    <header class="service-page__hero">
      <div class="container service-page__hero-inner">
        <RouterLink to="/#services" class="service-page__back">{{ t('nav.backToServices') }}</RouterLink>
        <h1 class="service-page__title">{{ t(`features.${featureKey}.title`) }}</h1>
        <p class="service-page__lede">{{ t(`servicePages.${featureKey}.intro`) }}</p>
      </div>
    </header>

    <div class="service-page__visual-wrap container">
      <img
        :src="service.image"
        alt=""
        class="service-page__visual"
        width="1200"
        height="675"
        loading="eager"
      />
    </div>

    <article class="service-page__body container">
      <p class="service-page__p">{{ t(`servicePages.${featureKey}.p1`) }}</p>
      <p class="service-page__p">{{ t(`servicePages.${featureKey}.p2`) }}</p>
      <ul class="service-page__bullets">
        <li v-for="(line, i) in bullets" :key="i">{{ line }}</li>
      </ul>
      <p class="service-page__outro">{{ t(`servicePages.${featureKey}.outro`) }}</p>
      <div class="service-page__cta">
        <RouterLink to="/contact" class="btn btn--navy">{{ t('features.learnMore') }}</RouterLink>
      </div>
    </article>
  </main>
</template>

<style scoped>
.service-page {
  padding-bottom: 3.5rem;
}

.container {
  width: min(100% - 2.5rem, var(--max-width));
  margin-inline: auto;
}

.service-page__hero {
  padding: 1.5rem 0 1.25rem;
  background: linear-gradient(168deg, rgba(0, 11, 51, 0.04) 0%, rgba(255, 255, 255, 1) 70%);
  border-bottom: 1px solid rgba(0, 11, 51, 0.06);
}

.service-page__hero-inner {
  max-width: 52rem;
}

.service-page__back {
  display: inline-block;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--navy-soft);
  text-decoration: none;
}

.service-page__back:hover {
  text-decoration: underline;
}

.service-page__title {
  margin: 0 0 1rem;
  font-size: clamp(1.75rem, 4vw, 2.35rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  color: var(--navy);
  font-family: Georgia, 'Times New Roman', serif;
}

.service-page__lede {
  margin: 0;
  font-size: 1.1rem;
  line-height: 1.55;
  color: rgba(0, 11, 51, 0.75);
  max-width: 48ch;
}

.service-page__visual-wrap {
  margin-top: 1.75rem;
}

.service-page__visual {
  display: block;
  width: 100%;
  height: auto;
  max-height: min(52vh, 420px);
  object-fit: cover;
  border-radius: 16px;
  box-shadow: 0 16px 48px rgba(0, 11, 51, 0.12);
}

.service-page__body {
  margin-top: 2.25rem;
  max-width: 44rem;
}

.service-page__p {
  margin: 0 0 1.15rem;
  font-size: 1.02rem;
  line-height: 1.65;
  color: rgba(0, 11, 51, 0.88);
}

.service-page__bullets {
  margin: 1.25rem 0 1.5rem;
  padding-left: 1.25rem;
  color: rgba(0, 11, 51, 0.88);
  line-height: 1.55;
}

.service-page__bullets li {
  margin-bottom: 0.5rem;
}

.service-page__outro {
  margin: 0 0 1.75rem;
  font-size: 1.02rem;
  line-height: 1.65;
  color: rgba(0, 11, 51, 0.88);
}

.service-page__cta .btn {
  display: inline-flex;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.65rem 1.35rem;
  border-radius: var(--radius-sm);
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: none;
  border: none;
  cursor: pointer;
  transition:
    transform 0.15s,
    box-shadow 0.2s;
}

.btn--navy {
  background: var(--navy);
  color: var(--white);
}

.btn--outline {
  background: transparent;
  color: var(--navy);
  border: 2px solid var(--navy);
}
</style>
