import collectImg from '@/assets/im/3.jpg'
import depositImg from '@/assets/im/4.jpg'
import massImg from '@/assets/im/5.jpg'
import schoolImg from '@/assets/im/6.jpg'
import linksImg from '@/assets/im/7.jpg'
import apiImg from '@/assets/im/8.jpg'

export type ServiceFeatureKey =
  | 'collect'
  | 'depositWithdraw'
  | 'massPayouts'
  | 'schoolFees'
  | 'paymentLinks'
  | 'apiSuite'

export type ServiceIcon = 'collect' | 'links' | 'mass' | 'school' | 'wallet' | 'api'

export type ServiceItem = {
  slug: string
  featureKey: ServiceFeatureKey
  icon: ServiceIcon
  image: string
}

/**
 * List order = ordre d’affichage dans le menu Services.
 * Les `slug` sont utilisés dans l’URL (`/services/...`).
 */
export const SERVICES: readonly ServiceItem[] = [
  { slug: 'collect', featureKey: 'collect', icon: 'collect', image: collectImg },
  { slug: 'payment-links', featureKey: 'paymentLinks', icon: 'links', image: linksImg },
  { slug: 'mass-payouts', featureKey: 'massPayouts', icon: 'mass', image: massImg },
  { slug: 'school-fees', featureKey: 'schoolFees', icon: 'school', image: schoolImg },
  { slug: 'deposit-withdraw', featureKey: 'depositWithdraw', icon: 'wallet', image: depositImg },
  { slug: 'api-suite', featureKey: 'apiSuite', icon: 'api', image: apiImg },
] as const

const slugSet = new Set(SERVICES.map((s) => s.slug))

export function isServiceSlug(slug: string): boolean {
  return slugSet.has(slug)
}

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return SERVICES.find((s) => s.slug === slug)
}
