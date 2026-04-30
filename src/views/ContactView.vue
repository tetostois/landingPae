<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import contactVisual from '@/assets/im/8.jpg'

const { t } = useI18n()
</script>

<template>
  <main class="contact-page">
    <section class="contact-page__section" aria-labelledby="contact-heading">
      <div class="container contact-page__split">
        <div class="contact-page__col contact-page__col--copy">
          <h1 id="contact-heading" class="contact-page__h1">{{ t('contactPage.heroH1') }}</h1>
          <p class="contact-page__intro">{{ t('contactPage.heroSub') }}</p>

          <div class="contact-page__lines" role="list">
            <div class="contact-page__line" role="listitem">
              <span class="contact-page__lhead">{{ t('contact.location') }}</span>
              <p class="contact-page__lbody">{{ t('contact.addressLine1') }} · {{ t('contact.addressLine2') }}</p>
            </div>
            <div class="contact-page__line" role="listitem">
              <span class="contact-page__lhead">{{ t('contact.email') }}</span>
              <p class="contact-page__lbody">
                <a class="contact-page__link" :href="'mailto:' + t('contact.emailValue')">{{ t('contact.emailValue') }}</a>
              </p>
            </div>
            <div class="contact-page__line contact-page__line--last" role="listitem">
              <span class="contact-page__lhead">{{ t('contact.whatsapp') }}</span>
              <p class="contact-page__lbody">
                <a class="contact-page__link" :href="'tel:' + t('contact.phoneTel')">{{ t('contact.phone') }}</a>
              </p>
            </div>
          </div>

          <div class="contact-page__follow">
            <p class="contact-page__follow-label">{{ t('contactPage.followLabel') }}</p>
            <ul class="contact-page__social" role="list">
              <li>
                <a href="#" class="contact-page__social-link" :aria-label="t('a11y.facebook')">f</a>
              </li>
              <li>
                <a href="#" class="contact-page__social-link" :aria-label="t('a11y.twitter')">X</a>
              </li>
              <li>
                <a href="#" class="contact-page__social-link" :aria-label="t('a11y.linkedin')">in</a>
              </li>
              <li>
                <a href="#" class="contact-page__social-link" :aria-label="t('a11y.instagram')">◎</a>
              </li>
            </ul>
          </div>
        </div>

        <div class="contact-page__col contact-page__col--visual">
          <div class="contact-page__panel">
            <figure class="contact-page__frame">
              <img
                class="contact-page__photo"
                :src="contactVisual"
                :alt="t('contactPage.imageAlt')"
                width="1200"
                height="800"
                loading="eager"
                decoding="async"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
/* Un peu plus de largeur utile sur petits écrans */
.container {
  width: min(100% - 1.5rem, var(--max-width));
  margin-inline: auto;
}

@media (min-width: 600px) {
  .container {
    width: min(100% - 2.25rem, var(--max-width));
  }
}

.contact-page {
  /* Panneau visuel : fond neutre froid (pas de rose / terre cuite) */
  --contact-panel: linear-gradient(168deg, #f0f3fa 0%, #e6ebf4 50%, #dfe7f2 100%);
  padding-bottom: clamp(1.75rem, 5vw, 4rem);
  background: var(--white);
}

@media (min-width: 900px) {
  .contact-page {
    min-height: calc(100vh - 88px);
  }
}

.contact-page__section {
  padding-block: clamp(1.75rem, 4vw, 3.5rem);
}

/* Mobile : une colonne, texte puis image */
.contact-page__split {
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 1.5rem;
  column-gap: 0;
  align-items: stretch;
}

.contact-page__col--copy {
  order: 1;
}

.contact-page__col--visual {
  order: 2;
}

/* Tablette : toujours empilé, un peu plus d’air vertical */
@media (min-width: 600px) and (max-width: 899px) {
  .contact-page__split {
    row-gap: 2rem;
  }
}

/* Desktop : deux colonnes rapprochées (marge horizontale réduite) */
@media (min-width: 900px) {
  .contact-page__split {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    column-gap: 1.25rem;
    row-gap: 0;
    align-items: stretch;
  }

  .contact-page__col--copy {
    order: unset;
  }

  .contact-page__col--visual {
    order: unset;
  }
}

@media (min-width: 1200px) {
  .contact-page__split {
    column-gap: 1.75rem;
    grid-template-columns: minmax(0, 1.02fr) minmax(0, 0.98fr);
  }
}

/* Colonne gauche : aéré, type maquette “Contact us” */
.contact-page__col--copy {
  padding: 0;
  max-width: none;
}

@media (min-width: 900px) {
  .contact-page__col--copy {
    max-width: 28rem;
    padding-right: 0.25rem;
  }
}

.contact-page__h1 {
  margin: 0 0 0.75rem;
  font-size: clamp(1.5rem, 4.2vw, 2.4rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  color: var(--navy);
  line-height: 1.1;
  font-family:
    'Inter',
    system-ui,
    -apple-system,
    sans-serif;
}

.contact-page__intro {
  margin: 0 0 1.75rem;
  font-size: clamp(0.94rem, 2.5vw, 1.02rem);
  line-height: 1.6;
  color: rgba(0, 11, 51, 0.55);
  max-width: 36rem;
}

@media (min-width: 900px) {
  .contact-page__intro {
    margin-bottom: 2.25rem;
  }
}

/* Lignes type “champs” sans formulaire, comme la maquette (traits sous le texte) */
.contact-page__lines {
  margin: 0 0 2rem;
}

.contact-page__line {
  padding-bottom: 0.5rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid rgba(0, 11, 51, 0.12);
}

.contact-page__line--last {
  margin-bottom: 0;
  border-bottom: none;
  padding-bottom: 0;
}

.contact-page__lhead {
  display: block;
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(0, 11, 51, 0.42);
  margin-bottom: 0.4rem;
}

.contact-page__lbody {
  margin: 0;
  font-size: 1.02rem;
  line-height: 1.5;
  color: var(--navy);
  font-weight: 500;
}

.contact-page__link {
  color: var(--navy);
  text-decoration: none;
  font-weight: 600;
  word-break: break-word;
  border-bottom: 1px solid rgba(0, 11, 51, 0.2);
  transition: color 0.2s, border-color 0.2s;
}

.contact-page__link:hover {
  color: var(--navy-soft);
  border-bottom-color: var(--navy-soft);
}

/* Suivre + réseaux, comme “Follow” sur la maquette */
.contact-page__follow {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.9rem 1.25rem;
  padding-top: 0.25rem;
}

.contact-page__follow-label {
  margin: 0;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: rgba(0, 11, 51, 0.5);
}

.contact-page__social {
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.contact-page__social-link {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--navy);
  color: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-weight: 700;
  font-size: 0.8rem;
  transition:
    transform 0.15s,
    background 0.2s,
    box-shadow 0.2s;
}

.contact-page__social-link:hover {
  transform: translateY(-2px);
  background: var(--navy-soft);
  box-shadow: 0 6px 20px rgba(0, 11, 51, 0.22);
}

/* Colonne droite : image plein cadre (coins = panneau) */
.contact-page__col--visual {
  min-height: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
}

.contact-page__panel {
  position: relative;
  flex: 1 1 auto;
  width: 100%;
  min-height: min(40vh, 300px);
  border-radius: 20px;
  overflow: hidden;
  background: var(--contact-panel);
  box-shadow: 0 12px 40px rgba(0, 11, 51, 0.1);
}

@media (min-width: 600px) and (max-width: 899px) {
  .contact-page__panel {
    min-height: min(44vh, 380px);
    border-radius: 22px;
  }
}

@media (min-width: 900px) {
  .contact-page__panel {
    min-height: min(62vh, 540px);
    height: 100%;
    border-radius: 24px;
    box-shadow: 0 16px 48px rgba(0, 11, 51, 0.1);
  }
}

.contact-page__frame {
  position: absolute;
  inset: 0;
  margin: 0;
  overflow: hidden;
  border-radius: inherit;
  background: #e8ecf4;
}

.contact-page__photo {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 28%;
}
</style>
