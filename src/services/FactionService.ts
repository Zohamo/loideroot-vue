import Factions from '@/assets/json/factions.json'

export const FactionService = {
  getFactionsData() {
    return Factions
  },
  getFactions() {
    return Promise.resolve(this.getFactionsData())
  },
  getFaction(slug: string) {
    return Promise.resolve(this.getFactionsData().find((datum) => datum.slug === slug))
  },
  getSeverityLabel(val: number): string {
    switch (val) {
      case 3:
        return 'Elevée'
      case 2:
        return 'Modérée'
      case 1:
      default:
        return 'Faible'
    }
  },
  getStyleTag(val: number): object {
    switch (val) {
      case 3:
        return { background: 'var(--p-primary-700)' }
      case 2:
        return { background: 'var(--p-primary-500)', color: 'var(--p-black)' }
      case 1:
      default:
        return { background: 'var(--p-primary-200)', color: 'var(--p-black)' }
    }
  },
}
