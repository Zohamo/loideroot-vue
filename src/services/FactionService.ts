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
}
