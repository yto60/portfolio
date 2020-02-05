import { GetterTree, ActionTree, MutationTree } from 'vuex'
import { ViewType, ViewTypeClass } from './type'

export const state = () => ({
  viewType: 'desktop'
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  getViewTypeClass: state => `is-${state.viewType}` as ViewTypeClass
}

export const mutations: MutationTree<RootState> = {
  setViewType: (state, viewType: ViewType) => (state.viewType = viewType)
}

export const actions: ActionTree<RootState, RootState> = {}
