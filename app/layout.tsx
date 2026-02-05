import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ええすまい｜保証人不要・初期費用分割OK・生活保護対応の高齢者・障がい者向け住宅',
  description:
    '大阪市西淀川区・東淀川区で安心の住まいをお探しの方へ。保証人不要、初期費用分割相談可、生活保護の方も入居可能。介護・医療サービスとの連携も万全です。まずはお気軽にご相談ください。',
  keywords: [
    '高齢者住宅',
    '障がい者住宅',
    '保証人不要',
    '初期費用分割',
    '生活保護',
    '大阪',
    '西淀川区',
    '東淀川区',
    '介護',
    'ええすまい',
  ],
  openGraph: {
    title: 'ええすまい｜保証人不要・初期費用分割OK・生活保護対応',
    description: '大阪で安心の住まいをお探しの高齢者・障がい者の方へ。まずはお気軽にご相談ください。',
    locale: 'ja_JP',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen bg-white">{children}</body>
    </html>
  )
}
