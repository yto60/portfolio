import { WorkCategory, WorksData } from './data.d'
import data from '@/assets/data.json'

export const workCategories: WorkCategory[] = ['web', 'design']

const works = data as WorksData

const getFilteredWorks = (category: WorkCategory) =>
  works
    .map((work, index) => {
      const ret = work
      ret.id = index
      return ret
    })
    .filter(work => work.category === category)

export const categorizedWorks = {
  web: getFilteredWorks('web'),
  design: getFilteredWorks('design')
}
