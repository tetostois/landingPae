<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { RouterLink } from 'vue-router'
import imgPayments from '@/assets/imSvg/37.png'

const { t } = useI18n()
</script>

<template>
  <footer class="footer" id="blog">
    <div class="container footer__grid footer__main">
      <div class="footer__brand">
        <RouterLink to="/" class="brand brand--footer">
          <span class="brand__text">{{ t('brand.name') }}</span>
        </RouterLink>
        <p class="footer__blurb">{{ t('footer.blurb') }}</p>
        <div class="social-row social-row--footer">
          <a href="#" class="social social--light" :aria-label="t('a11y.facebook')">f</a>
          <a href="#" class="social social--light" :aria-label="t('a11y.twitter')">X</a>
          <a href="#" class="social social--light" :aria-label="t('a11y.linkedin')">in</a>
        </div>
        <img class="footer__pay-icons" :src="imgPayments" alt="" width="220" height="40" loading="lazy" />
      </div>
      <div>
        <h4 class="footer__h">{{ t('footer.productTitle') }}</h4>
        <ul class="footer__links">
          <li><RouterLink to="/">{{ t('footer.home') }}</RouterLink></li>
          <li><RouterLink to="/about">{{ t('footer.aboutUs') }}</RouterLink></li>
          <li><RouterLink :to="{ path: '/', hash: '#services' }">{{ t('nav.featuresNav') }}</RouterLink></li>
          <li><RouterLink to="/api-docs">{{ t('nav.apiDocs') }}</RouterLink></li>
          <li><RouterLink to="/contact">{{ t('footer.contactUs') }}</RouterLink></li>
        </ul>
      </div>
      <div>
        <h4 class="footer__h">{{ t('footer.supportTitle') }}</h4>
        <ul class="footer__links">
          <li><RouterLink to="/contact">{{ t('footer.helpCenter') }}</RouterLink></li>
          <li><RouterLink to="/api-docs">{{ t('footer.svcApi') }}</RouterLink></li>
          <li><RouterLink :to="{ path: '/', hash: '#pricing' }">{{ t('pricing.title') }}</RouterLink></li>
          <li><RouterLink :to="{ path: '/', hash: '#blog' }">{{ t('nav.blog') }}</RouterLink></li>
        </ul>
      </div>
      <div>
        <h4 class="footer__h">{{ t('footer.addressTitle') }}</h4>
        <ul class="footer__links footer__links--contact">
          <li>{{ t('contact.phone') }}</li>
          <li>
            <a :href="'mailto:' + t('contact.emailValue')">{{ t('contact.emailValue') }}</a>
          </li>
          <li>{{ t('contact.addressLine1') }}</li>
          <li>{{ t('contact.addressLine2') }}</li>
        </ul>
      </div>
    </div>
    <div class="footer__strip">
      <div class="footer__strip-inner container">
        <p class="footer__copy">
          {{
            t('footer.copyright', {
              year: new Date().getFullYear(),
              brand: t('brand.name'),
            })
          }}
        </p>
        <div class="footer__legal">
          <a href="#" class="footer__legal-link">{{ t('footer.privacy') }}</a>
          <span class="footer__legal-sep" aria-hidden="true">·</span>
          <a href="#" class="footer__legal-link">{{ t('footer.terms') }}</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.container {
  width: min(100% - 2.5rem, var(--max-width));
  margin-inline: auto;
}

.footer {
  background: var(--white);
  color: var(--brand-plum);
  padding: 0;
  margin-top: auto;
}

.footer__main {
  padding-block: clamp(2.75rem, 6vw, 4rem);
}

.footer__grid {
  display: grid;
  gap: 2.25rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}

.footer__brand {
  max-width: 280px;
}

.footer__blurb {
  margin: 0.85rem 0 1rem;
  font-size: 0.88rem;
  line-height: 1.55;
  color: var(--brand-muted);
}

.footer__pay-icons {
  margin-top: 1rem;
  max-width: 200px;
  height: auto;
  opacity: 0.85;
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

.brand--footer {
  color: var(--brand-plum);
}

.brand__text {
  line-height: 1;
}

.social-row {
  display: flex;
  gap: 0.65rem;
}

.social {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-weight: 700;
  font-size: 0.85rem;
  transition:
    transform 0.15s,
    background 0.2s;
}

.social--light {
  background: rgba(0, 169, 164, 0.12);
  color: var(--brand-teal);
  border: 1px solid rgba(0, 169, 164, 0.25);
}

.social--light:hover {
  transform: scale(1.05);
  background: rgba(0, 169, 164, 0.2);
}

.footer__h {
  font-size: 0.82rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 1rem;
  color: var(--brand-teal);
}

.footer__links {
  list-style: none;
  padding: 0;
  font-size: 0.92rem;
}

.footer__links li + li {
  margin-top: 0.5rem;
}

.footer__links a {
  color: inherit;
  text-decoration: none;
  opacity: 0.88;
}

.footer__links a:hover {
  opacity: 1;
  color: var(--brand-orange);
}

.footer__links--contact {
  opacity: 0.9;
}

.footer__strip {
  background: var(--brand-teal);
  color: var(--white);
  padding: 0.95rem 0;
}

.footer__strip-inner {
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
  align-items: center;
  text-align: center;
}

@media (min-width: 640px) {
  .footer__strip-inner {
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
  }
}

.footer__copy {
  margin: 0;
  font-size: 0.86rem;
  font-weight: 600;
}

.footer__legal {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.82rem;
}

.footer__legal-link {
  color: inherit;
  text-decoration: none;
  opacity: 0.92;
}

.footer__legal-link:hover {
  text-decoration: underline;
}

.footer__legal-sep {
  opacity: 0.55;
}
</style>
