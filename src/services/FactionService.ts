import Factions from '@/assets/json/factions.json'

export const FactionService = {
  getFactionsData() {
    return Factions
  },
  getFactions() {
    return Promise.resolve(this.getFactionsData())
  },
}
