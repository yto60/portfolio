export default defineNuxtRouteMiddleware((to) => {
  // 末尾に '/' がついていなかったらついているルートにリダイレクト
  if (!to.fullPath.endsWith('/')) {
    const nextRoute = to.fullPath + '/'
    return navigateTo(nextRoute, { redirectCode: 301 })
  }
})
