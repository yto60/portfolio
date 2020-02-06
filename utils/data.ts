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
    name: 'hitonome',
    category: 'web',
    logo: 'hitonome_logo.svg',
    summary: 'SNS共有・チャット機能つきTODOリスト',
    description:
      'SNS (Twitter) 共有と、グループ・チャット機能のついたTODOリストです。「人の目」を意識することで、タスクの消化を促します。<br />UIとロゴのデザイン、クライアントサイドの実装を担当しました。',
    cardImage: 'hitonome_0.png',
    images: [
      {
        url: 'hitonome_1.mov',
        type: 'video',
        description: 'デモ動画 (音量注意)'
      }
    ]
  },
  {
    name: 'ツンドク',
    category: 'web',
    logo: 'tsundoku_logo.svg',
    summary: '書籍管理ツール',
    description:
      '未読のままの「積ん読」本や読み終わった本を管理するツールです。<br />クライアントサイドの実装を担当しました。', // TODO
    links: [
      {
        summary: 'ツンドク',
        url: 'https://github.com/traPtitech/anke-to'
      }
    ],
    cardImage: 'tsundoku_0.png',
    images: [
      {
        url: 'tsundoku_0.png'
      }
    ]
  },
  {
    name: 'logo',
    category: 'design',
    summary: '作ったロゴなど',
    description:
      '個人で作ったロゴなどのまとめです。使用ツール: Figma, Adobe Illustrator',
    cardImage: 'logo_0.svg', // TODO あとで変更する
    images: [
      {
        url: 'logo_0.svg',
        description: 'traP1logo 2019/12/18<br />お題: 白昼夢にさよならを'
      },
      {
        url: 'logo_191204.svg',
        description: 'traP1logo 2019/12/04<br />お題: 神様のメモ帳'
      },
      {
        url: 'logo_191203.svg',
        description: '人生の目標'
      },
      {
        url: 'logo_191127.svg',
        description: 'traP1logo 2019/11/27<br />お題: 春岡県'
      },
      {
        url: 'logo_191030.svg',
        description: 'traP1design 2019/12/18<br />お題: 午後の緑茶'
      },
      {
        url: 'logo_190401.svg',
        description:
          'デザイン研究会 紙袋ステンシル用ロゴ<br />完成図<a href="https://twitter.com/titechdesignlab/status/1111497677018021888" target="_blank"><ion-icon name="open" /></a>'
      },
      {
        url: 'logo_190320.svg',
        description: 'traP1logo 2019/03/20<br />お題: in the rain'
      }
    ]
  }
]

export const workCategories: WorkCategory[] = ['web', 'design']

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
