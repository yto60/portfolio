import { defineStore } from 'pinia'

export type ViewType = 'mobile' | 'desktop'
export type ViewTypeClass = 'is-mobile' | 'is-desktop'

export const useViewStore = defineStore('view', () => {
  const viewType = ref<ViewType>('desktop')

  const viewTypeClass = computed((): ViewTypeClass => `is-${viewType.value}` as ViewTypeClass)

  const setViewType = (newViewType: ViewType) => {
    viewType.value = newViewType
  }

  return {
    viewType: readonly(viewType),
    viewTypeClass,
    setViewType
  }
})
