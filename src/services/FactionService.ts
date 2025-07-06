import Factions from '@/assets/json/factions.json'

export const FactionService = {
  getFactionsData() {
    return Factions
  },
  getPreviousFactionData(slug: string) {
    const currIdx = this.getFactionsData().findIndex((datum) => datum.slug === slug)
    if (currIdx < 1) {
      return {}
    }
    const prevFaction = this.getFactionsData()[currIdx - 1]
    return {
      title: prevFaction.name,
      route: `/factions/${prevFaction.slug}`,
    }
  },
  getNextFactionData(slug: string) {
    const currIdx = this.getFactionsData().findIndex((datum) => datum.slug === slug)
    if (currIdx > this.getFactionsData().length) {
      return {}
    }
    const nextFaction = this.getFactionsData()[currIdx + 1]
    return {
      title: nextFaction.name,
      route: `/factions/${nextFaction.slug}`,
    }
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
