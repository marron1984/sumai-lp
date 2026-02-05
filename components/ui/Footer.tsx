'use client'

import { Home, Phone, MessageCircle } from 'lucide-react'
import { contactInfo, commonInfo } from '@/data/facilities'

const navItems = [
  { href: '#features', label: '選ばれる理由' },
  { href: '#facilities', label: '施設紹介' },
  { href: '#flow', label: 'ご入居の流れ' },
  { href: '#faq', label: 'よくある質問' },
  { href: '#contact', label: 'お問い合わせ' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-950 text-gray-400 py-12 lg:py-16">
      <div className="section-container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center mb-4">
              <Home className="w-8 h-8 text-primary-400 mr-2" />
              <span className="text-xl font-bold text-white">ええすまい</span>
            </a>
            <p className="text-sm leading-relaxed mb-4">
              高齢者・障がい者の方々が安心して暮らせる住まいを提供しています。
              <br />
              保証人不要、初期費用分割OK、生活保護の方も入居可能です。
            </p>
            <p className="text-sm">
              運営: <span className="text-white">{commonInfo.company.name}</span>
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-bold mb-4">ページ内リンク</h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-4">お問い合わせ</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="flex items-center text-sm hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  {contactInfo.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={contactInfo.lineUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-sm hover:text-white transition-colors"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  LINE: {contactInfo.lineId}
                </a>
              </li>
              <li className="text-sm">{contactInfo.hours}</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm mb-4 md:mb-0">
              &copy; {currentYear} {commonInfo.company.name}. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="hover:text-white transition-colors">
                プライバシーポリシー
              </a>
              <a href="#" className="hover:text-white transition-colors">
                特定商取引法に基づく表記
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer for mobile fixed CTA */}
      <div className="h-20 lg:hidden" />
    </footer>
  )
}
