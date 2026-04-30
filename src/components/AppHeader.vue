<script setup lang="ts">
import { ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { RouterLink, useRoute, useRouter } from 'vue-router'
import { persistLocale } from '@/i18n'

const { t, locale } = useI18n()
const route = useRoute()
const router = useRouter()

const navOpen = ref(false)

const portalLoginUrl =
  'https://phoenix.small-pay.com/partner-portal/login?returnUrl=%2Fdashboard'
const portalRegisterUrl = 'https://phoenix.small-pay.com/partner-portal/register'

function closeNav() {
  navOpen.value = false
}

function setLocale(code: 'en' | 'fr') {
  locale.value = code
  closeNav()
}

function goServices() {
  void router.push({ path: '/', hash: '#services' })
  closeNav()
}

watch(
  [locale, () => route.fullPath],
  () => {
    const l = locale.value
    document.documentElement.lang = l
    persistLocale(l)
    if (route.name === 'service-detail') {
      return
    }
    const titleKey = route.meta.titleKey as string | undefined
    document.title = titleKey
      ? `${t(titleKey)} — ${t('brand.name')}`
      : `${t('brand.name')} — ${t('meta.titleSuffix')}`
  },
  { immediate: true },
)

router.afterEach(() => {
  navOpen.value = false
})
</script>

<template>
  <div class="header-shell">
    <div class="header-topbar">
      <div class="header-topbar__inner">
        <span>{{ t('landingPage.topSupport') }}</span>
        <a class="header-topbar__tel" :href="'tel:' + t('contact.phoneTel')">{{ t('contact.phone') }}</a>
      </div>
    </div>
    <header class="header">
      <div class="header__inner">
        <RouterLink to="/" class="brand" @click="closeNav">
          <span class="brand__text">{{ t('brand.name') }}</span>
        </RouterLink>

        <nav class="nav" :class="{ 'nav--open': navOpen }" :aria-label="t('a11y.menu')">
          <RouterLink to="/about" @click="closeNav">{{ t('nav.about') }}</RouterLink>
          <a
            :href="portalLoginUrl"
            class="nav__external"
            target="_blank"
            rel="noopener noreferrer"
            @click="closeNav"
            >{{ t('nav.portal') }}</a
          >
          <RouterLink to="/api-docs" @click="closeNav">{{ t('nav.documentation') }}</RouterLink>
          <button type="button" class="nav__ghost" @click="goServices">{{ t('nav.featuresNav') }}</button>
          <RouterLink :to="{ path: '/', hash: '#blog' }" @click="closeNav">{{ t('nav.blog') }}</RouterLink>
          <RouterLink to="/contact" @click="closeNav">{{ t('nav.contact') }}</RouterLink>
          <a
            :href="portalLoginUrl"
            class="nav__mobile-signin"
            target="_blank"
            rel="noopener noreferrer"
            @click="closeNav"
            >{{ t('nav.signIn') }}</a
          >
        </nav>

        <div class="header__actions">
          <button type="button" class="header-search" :aria-label="t('a11y.search')" @click="goServices">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="2" />
              <path d="M16 16l5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
            </svg>
          </button>
          <a
            :href="portalRegisterUrl"
            class="btn-header-signup"
            target="_blank"
            rel="noopener noreferrer"
            >{{ t('nav.signUp') }}</a
          >
          <div class="lang-switch" role="group" :aria-label="t('lang.switchToEn') + ' / ' + t('lang.switchToFr')">
            <button
              type="button"
              class="lang-switch__btn"
              :class="{ 'lang-switch__btn--active': locale === 'fr' }"
              @click="setLocale('fr')"
            >
              FR
            </button>
            <button
              type="button"
              class="lang-switch__btn"
              :class="{ 'lang-switch__btn--active': locale === 'en' }"
              @click="setLocale('en')"
            >
              EN
            </button>
          </div>
        </div>

        <button
          type="button"
          class="nav-toggle"
          :aria-expanded="navOpen"
          :aria-label="t('a11y.menu')"
          @click="navOpen = !navOpen"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  </div>
</template>

<style scoped>
.header-shell {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  width: 100%;
}

.header-topbar {
  background: var(--brand-navy-deep);
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.82rem;
}

.header-topbar__inner {
  width: min(100% - 2.5rem, var(--max-width));
  margin-inline: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.4rem 0;
}

.header-topbar__tel {
  color: inherit;
  text-decoration: none;
  font-weight: 600;
}

.header-topbar__tel:hover {
  text-decoration: underline;
}

.header {
  width: 100%;
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(1, 6, 71, 0.07);
}

.header__inner {
  width: min(100% - 2.5rem, var(--max-width));
  margin-inline: auto;
  display: grid;
  grid-template-columns: auto 1fr auto auto;
  align-items: center;
  gap: 0.75rem 1rem;
  min-height: 72px;
}

@media (min-width: 960px) {
  .header__inner {
    grid-template-columns: auto 1fr auto;
  }
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: var(--brand-plum);
  font-weight: 800;
  font-size: 1.25rem;
  letter-spacing: -0.02em;
}

.brand__text {
  line-height: 1;
}

.nav {
  display: none;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.15rem 1.35rem;
}

.nav a,
.nav__external {
  color: var(--brand-plum);
  text-decoration: none;
  font-size: 0.93rem;
  font-weight: 500;
  opacity: 0.88;
  transition: opacity 0.2s;
}

.nav a:hover,
.nav__external:hover {
  opacity: 1;
}

.nav a.router-link-active {
  opacity: 1;
  font-weight: 600;
}

.nav__ghost {
  margin: 0;
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
  font: inherit;
  font-size: 0.93rem;
  font-weight: 500;
  color: var(--brand-plum);
  opacity: 0.88;
}

.nav__ghost:hover {
  opacity: 1;
}

.nav__mobile-signin {
  display: none;
}

.header__actions {
  display: none;
  align-items: center;
  gap: 0.65rem;
}

.header-search {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  padding: 0;
  border: 1px solid rgba(1, 6, 71, 0.12);
  border-radius: 10px;
  background: var(--white);
  color: var(--brand-plum);
  cursor: pointer;
  transition:
    border-color 0.2s,
    background 0.2s;
}

.header-search:hover {
  border-color: rgba(0, 169, 164, 0.45);
  background: rgba(0, 169, 164, 0.06);
}

.btn-header-signup {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.58rem 1.35rem;
  border-radius: 10px;
  font-weight: 700;
  font-size: 0.88rem;
  text-decoration: none;
  background: var(--brand-orange);
  color: var(--white);
  border: none;
  transition:
    transform 0.15s,
    box-shadow 0.2s;
}

.btn-header-signup:hover {
  transform: translateY(-1px);
  box-shadow: 0 8px 22px rgba(255, 100, 0, 0.38);
}

.lang-switch {
  display: flex;
  border: 1px solid rgba(0, 169, 164, 0.35);
  border-radius: 8px;
  overflow: hidden;
}

.lang-switch__btn {
  padding: 0.35rem 0.55rem;
  font-size: 0.72rem;
  font-weight: 700;
  border: none;
  background: transparent;
  color: var(--brand-plum);
  opacity: 0.55;
  cursor: pointer;
  line-height: 1;
}

.lang-switch__btn:hover {
  opacity: 0.9;
}

.lang-switch__btn--active {
  background: var(--brand-teal);
  color: var(--white);
  opacity: 1;
}

.nav-toggle {
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 0.5rem;
  background: none;
  border: none;
  cursor: pointer;
  justify-self: end;
}

.nav-toggle span {
  width: 22px;
  height: 2px;
  background: var(--brand-plum);
  border-radius: 1px;
}

@media (min-width: 960px) {
  .nav-toggle {
    display: none;
  }

  .nav {
    display: flex;
    grid-column: 2;
    justify-self: stretch;
  }

  .header__actions {
    display: flex;
    grid-column: 3;
    justify-self: end;
  }

  .brand {
    grid-column: 1;
  }

  .nav__mobile-signin {
    display: none !important;
  }
}

@media (max-width: 959px) {
  .header__inner {
    grid-template-columns: 1fr auto auto;
    grid-template-rows: auto auto;
  }

  .brand {
    grid-column: 1;
    grid-row: 1;
  }

  .header__actions {
    display: flex;
    grid-column: 2;
    grid-row: 1;
    justify-self: end;
    gap: 0.45rem;
  }

  .nav-toggle {
    grid-column: 3;
    grid-row: 1;
  }

  .nav {
    display: none;
    grid-column: 1 / -1;
    grid-row: 2;
    flex-direction: column;
    align-items: stretch;
    padding: 1rem 0 0;
    gap: 0.65rem;
    border-top: 1px solid rgba(1, 6, 71, 0.06);
    margin-top: 0.35rem;
    padding-top: 1rem;
  }

  .nav--open {
    display: flex;
  }

  .nav__mobile-signin {
    display: block;
    margin-top: 0.5rem;
    padding-top: 0.75rem;
    border-top: 1px solid rgba(1, 6, 71, 0.08);
    font-weight: 600;
    color: var(--brand-orange);
    text-decoration: none;
    font-size: 0.95rem;
  }

  .btn-header-signup {
    padding: 0.48rem 0.85rem;
    font-size: 0.78rem;
    white-space: nowrap;
  }

  .lang-switch__btn {
    padding: 0.32rem 0.45rem;
    font-size: 0.68rem;
  }

  .header-search {
    width: 36px;
    height: 36px;
  }
}
</style>
