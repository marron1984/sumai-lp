export interface Facility {
  id: string
  name: string
  nameShort: string
  address: string
  access: string
  building: string
  features: string[]
  highlight: string
  image: string
}

export const facilities: Facility[] = [
  {
    id: 'utajima',
    name: 'ええすまい歌島',
    nameShort: '歌島',
    address: '大阪市西淀川区歌島2-4-40',
    access: 'JR塚本駅 徒歩8分',
    building: '6階建',
    features: ['駅チカ', 'コンビニ近く', '閑静な住宅街'],
    highlight: '駅チカで便利',
    image: '/images/facility-utajima.jpg',
  },
  {
    id: 'tsukamoto',
    name: 'ええすまい塚本',
    nameShort: '塚本',
    address: '大阪市西淀川区野里1-32-14',
    access: 'JR塚本駅 徒歩7分',
    building: '7階建',
    features: ['インターネット無料', '最寄り駅近い', '商店街近く'],
    highlight: 'ネット無料',
    image: '/images/facility-tsukamoto.jpg',
  },
  {
    id: 'toyoshin',
    name: 'ええすまい豊新',
    nameShort: '豊新',
    address: '大阪市東淀川区豊新5-1-1',
    access: '阪急上新庄駅 徒歩10分',
    building: '10階建',
    features: ['IHクッキングヒーター', '大型物件', '眺望良好'],
    highlight: 'IH完備・大型',
    image: '/images/facility-toyoshin.jpg',
  },
]

export const commonInfo = {
  rent: {
    total: 50000,
    breakdown: {
      base: 40000,
      management: 10000,
    },
    label: '賃料',
  },
  initialCost: {
    deposit: 160000,
    label: '礼金',
    note: '※敷金なし・初期費用分割相談可',
  },
  meal: {
    cost: 44000,
    label: '配食サービス',
    note: '※任意・月額約4.4万円',
  },
  support: [
    '保証人不要',
    '初期費用分割相談可',
    '生活保護対応',
    '高齢者歓迎',
    '障がいをお持ちの方歓迎',
  ],
  services: [
    '訪問介護',
    '訪問看護',
    '訪問診療',
    'デイサービス',
    '配食サービス',
    '緊急時対応',
  ],
  company: {
    name: '株式会社AA',
    description: '高齢者・障がい者の方々が安心して暮らせる住まいを提供しています。',
  },
}

export const contactInfo = {
  phone: '06-XXXX-XXXX',
  phoneDisplay: '06-XXXX-XXXX',
  lineUrl: 'https://line.me/R/ti/p/@eesumai',
  lineId: '@eesumai',
  hours: '9:00〜18:00（土日祝も対応）',
}
