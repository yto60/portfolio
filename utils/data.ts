import { WorksData, WorkCategory } from './data.d'

export const works: WorksData = [
  {
    name: 'anke-to',
    category: 'web',
    logo: 'anke-to_logo.svg',
    summary: '部内向けアンケートツール',
    description:
      '所属しているサークル (traP) で使っている、部内向けアンケートツールです。<br />UIとロゴのデザイン、クライアントサイドの実装を担当しました。',
    links: [
      {
        summary: 'Github Repository',
        url: 'https://github.com/traPtitech/anke-to'
      }
    ],
    cardImage: 'anke-to_0.png',
    images: [
      {
        url: 'anke-to_0.png'
      }
    ]
  },
  {
    name: 'logo',
    category: 'design',
    summary: '個人で作ったロゴなど',
    description: 'プロダクト以外で作ったロゴなどのまとめです。',
    cardImage: '', // TODO
    images: [
      {
        url: '1logo_19_1218.svg',
        description: 'traP1logo 2019/12/18<br />お題: 白昼夢にさよならを'
      }
    ]
  }
]

export const workCategories: WorkCategory[] = ['web', 'design']

const getFilteredWorks = (category: WorkCategory) =>
  works.filter(work => work.category === category)

export const categorizedWorks = {
  web: getFilteredWorks('web'),
  design: getFilteredWorks('design')
}
