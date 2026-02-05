# ええすまい LP

高齢者・障がい者向け住宅「ええすまい」のコンバージョン特化型ランディングページです。

## 主な特徴

- **保証人不要** - 身寄りのない方も安心して入居可能
- **初期費用分割OK** - まとまった資金がなくても相談可能
- **生活保護対応** - 福祉事務所との連携もサポート

## 技術スタック

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript

## ディレクトリ構成

```
sumai-lp/
├── app/
│   ├── globals.css      # グローバルスタイル
│   ├── layout.tsx       # ルートレイアウト
│   └── page.tsx         # メインページ
├── components/
│   ├── sections/        # セクションコンポーネント
│   │   ├── Hero.tsx
│   │   ├── Features.tsx
│   │   ├── Facilities.tsx
│   │   ├── Flow.tsx
│   │   ├── FAQ.tsx
│   │   └── Contact.tsx
│   └── ui/              # UIコンポーネント
│       ├── Header.tsx
│       ├── Footer.tsx
│       └── FloatingCTA.tsx
├── data/
│   └── facilities.ts    # 施設データ
├── lib/
│   └── utils.ts         # ユーティリティ関数
└── public/
    └── images/          # 画像ファイル
```

## セットアップ

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev

# 本番ビルド
npm run build

# 本番サーバーの起動
npm start
```

## 施設情報

### ええすまい歌島
- 所在地: 大阪市西淀川区歌島2-4-40
- アクセス: JR塚本駅 徒歩8分
- 建物: 6階建

### ええすまい塚本
- 所在地: 大阪市西淀川区野里1-32-14
- アクセス: JR塚本駅 徒歩7分
- 建物: 7階建
- 特徴: インターネット無料

### ええすまい豊新
- 所在地: 大阪市東淀川区豊新5-1-1
- アクセス: 阪急上新庄駅 徒歩10分
- 建物: 10階建
- 特徴: IHクッキングヒーター完備

## 共通料金

- 月額賃料: 50,000円（家賃40,000円 + 管理共益費等10,000円）
- 礼金: 160,000円（分割相談可）
- 配食サービス: 約44,000円/月（任意）

## 運営

株式会社AA

## ライセンス

Private - All rights reserved
