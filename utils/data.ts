import data from '@/assets/data.json'

interface Link {
  summary: string
  url: string
}
interface Image {
  url: string
  type?: 'video' | 'image' // default: 'image'
  height?: string
  width?: string
  description?: string
}

interface Label {
  key: string
  name: string
  value: string
}

export interface Product {
  id?: number
  name: string
  category: WorkCategory
  summary?: string
  description: string
  labels?: Label[]
  links?: Link[]
  cardImage: string
  logo?: string
  images?: Image[]
}

export type WorksData = Product[]

export type WorkCategory = 'web' | 'design'

export const workCategories: WorkCategory[] = ['web', 'design']

const works = data as WorksData

const getFilteredWorks = (category: WorkCategory) =>
  works
    .map((work, index) => {
      const ret = work
      ret.id = index
      return ret
    })
    .filter((work) => work.category === category)

export const categorizedWorks = {
  web: getFilteredWorks('web'),
  design: getFilteredWorks('design')
}
