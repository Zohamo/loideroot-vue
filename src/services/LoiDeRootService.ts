import LoiDeRoot from '@/assets/json/loi-de-root.json'
import type { LoiDeRootSection, LoiDeRootSubsection, LoiDeRootTopic } from '@/types'

export const LoiDeRootService = {
  getLoiDeRoot(): Array<LoiDeRootSection> {
    return LoiDeRoot
  },
  getLoiDeRootSection(id: string): LoiDeRootSection | undefined {
    return LoiDeRoot.find((section) => section.id === id)
  },
  getLoiDeRootSubsection(subsectionId: string): LoiDeRootSubsection | undefined {
    const section = this.getLoiDeRootSection(subsectionId.split('.')[0])
    if (!section || !section.subsections) return undefined
    return section.subsections.find((subsection) => subsection.id === subsectionId)
  },
  getLoiDeRootTopic(topicId: string): LoiDeRootTopic | undefined {
    const subsection = this.getLoiDeRootSubsection(
      `${topicId.split('.')[0]}.${topicId.split('.')[1]}`,
    )
    if (!subsection || !subsection.topics) return undefined
    return subsection.topics.find((topic) => topic.id === topicId)
  },
}
