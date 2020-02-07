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
