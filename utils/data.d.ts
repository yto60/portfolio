interface Link {
  summary: string
  url: string
}
interface Image {
  url: string
  height?: number
  width?: number
  description?: string
}

export interface Product {
  id?: number
  name: string
  category: WorkCategory
  summary?: string
  description: string
  links?: Link[]
  cardImage: string
  logo?: string
  images?: Image[]
}

export type WorksData = Product[]

export type WorkCategory = 'web' | 'design'
