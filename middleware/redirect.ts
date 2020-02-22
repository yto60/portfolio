import Context from '@nuxt/types'

export default (context: Context.Context) => {
  // 末尾に '/' がついていなかったらついているルートにリダイレクト
  const route = context.route
  const redirect = context.redirect

  if (!route.fullPath.endsWith('/')) {
    const nextRoute = route.fullPath + '/'
    redirect(301, nextRoute)
  }
}
