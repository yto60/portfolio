import { WorksData, WorkCategory } from './data.d'

export const works: WorksData = [
  {
    name: 'anke-to',
    category: 'web',
    logo: 'anke-to_logo.svg',
    summary: '部内向けアンケートツール',
    description:
      '所属しているサークル (traP) で制作した、部内向けアンケートツールです。<br />UIとロゴのデザイン、クライアントサイドの実装を担当しました。<br /><br />イベントへの参加募集や制作チームへの所属希望調査など、部内でアンケートを取る際、それまでは主に Google Forms を使用していました。しかし、部員が毎回名前を入力する必要があること、誰が回答済みかが把握しにくいこと、回答の共有手段が限られていることなど、不便な点が多いと感じていたため、これらの問題を解決するために一から開発を行うことにしました。<br />Ansibleによって管理された部のサーバーで運用しています。<br />初めてのWebアプリケーション開発だったため、進め方やコードの保守性など反省点も多くあり、現在はリファクタリングや部員からのフィードバックを反映した改善などを行っています。',
    labels: [
      {
        key: 'lang',
        name: '言語・フレームワーク',
        value: 'Vue.js / JavaScript / SCSS'
      },
      {
        key: 'period',
        name: '開発期間',
        value: '2018.7 〜 2019.3 (現在も運用中)'
      }
    ],
    links: [
      {
        summary: 'Github Repository',
        url: 'https://github.com/traPtitech/anke-to'
      }
    ],
    cardImage: 'anke-to_0_respond.png',
    images: [
      {
        url: 'anke-to_0_respond.png',
        description: '回答画面'
      },
      {
        url: 'anke-to_1_information.png',
        description: 'アンケートの情報を見られます'
      },
      {
        url: 'anke-to_2_results.png',
        description:
          'アンケートの結果です。公開範囲を設定したり、MarkdownやCSVでコピーやダウンロードを行うこともできます。'
      },
      {
        url: 'anke-to_3_modal.png',
        description:
          'ユーザー認証は部内SNSであるtraQによるOAuth認証を用いていて、ユーザーの中からアンケートの対象者や管理者を選ぶことができます。',
        width: '70%'
      },
      {
        url: 'anke-to_4_bot.png',
        description: '誰かがアンケートを作成すると、traQに自動で投稿されます。'
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
      '未読のままの「積ん読」本を管理するツールです。<br />クライアントサイドの実装に関わっています。', // TODO
    links: [
      {
        summary: 'ツンドク',
        url: 'https://tsun-doku.app/'
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
    description: '個人で作ったロゴなどのまとめです。',
    labels: [
      {
        key: 'tools',
        name: '使用ツール',
        value: 'Figma, Adobe Illustrator'
      }
    ],
    cardImage: 'logo_0.svg', // TODO あとで変更する
    images: [
      {
        url: 'logo_0.svg',
        description: 'traP1logo 2019/12/18<br />お題: 白昼夢にさよならを'
      },
      {
        url: 'logo_191204.png',
        description: 'traP1logo 2019/12/04<br />お題: 神様のメモ帳'
      },
      {
        url: 'logo_191203.png',
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