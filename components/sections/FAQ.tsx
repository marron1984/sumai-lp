'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, HelpCircle } from 'lucide-react'

const faqs = [
  {
    question: '保証人がいなくても入居できますか？',
    answer:
      'はい、保証人不要でご入居いただけます。身寄りのない方、親族に頼れない方も安心してお申し込みください。保証会社を利用する場合も、手続きをサポートいたします。',
  },
  {
    question: '生活保護を受けていますが入居できますか？',
    answer:
      'はい、生活保護を受給されている方も入居可能です。福祉事務所との連絡調整も当社がサポートいたしますので、安心してご相談ください。',
  },
  {
    question: '初期費用を一括で払えないのですが…',
    answer:
      '初期費用（礼金160,000円）の分割払いに対応しております。お客様のご状況に合わせて、無理のないお支払いプランをご提案させていただきます。',
  },
  {
    question: '介護サービスは受けられますか？',
    answer:
      'はい。訪問介護、訪問看護、訪問診療、デイサービスなど、必要な介護・医療サービスをご利用いただけます。ケアマネージャーとの連携もスムーズに行えます。',
  },
  {
    question: '食事の提供はありますか？',
    answer:
      '配食サービス（月額約44,000円）をご利用いただけます。栄養バランスの取れたお食事を提供しており、調理が難しい方も安心です。ご利用は任意ですので、ご自身で調理される方も歓迎です。',
  },
  {
    question: '見学はできますか？',
    answer:
      'はい、随時見学を受け付けております。実際にお部屋や共用部分、周辺環境をご確認いただけます。お電話またはLINEでお気軽にご予約ください。',
  },
  {
    question: '入居までどのくらいかかりますか？',
    answer:
      '最短で1〜2週間程度で入居可能です。お急ぎの方もご相談ください。審査状況やお部屋の空き状況によって異なりますので、まずはお問い合わせください。',
  },
  {
    question: '障がいがありますが入居できますか？',
    answer:
      'はい、障がいをお持ちの方も歓迎しております。お身体の状況やご希望をお聞かせいただき、最適な施設・お部屋をご案内いたします。',
  },
]

function FAQItem({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string
  answer: string
  isOpen: boolean
  onClick: () => void
}) {
  return (
    <div className="border-b border-gray-100 last:border-b-0">
      <button
        onClick={onClick}
        className="w-full py-5 flex items-start justify-between text-left focus:outline-none group"
      >
        <div className="flex items-start">
          <HelpCircle className="w-5 h-5 text-primary-500 mr-3 mt-0.5 flex-shrink-0" />
          <span className="font-medium text-gray-900 group-hover:text-primary-600 transition-colors">
            {question}
          </span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="ml-4 flex-shrink-0"
        >
          <ChevronDown className="w-5 h-5 text-gray-400" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="pb-5 pl-8 pr-4">
              <p className="text-gray-600 leading-relaxed">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-20 lg:py-32 bg-gradient-warm">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="badge-primary mb-4">よくあるご質問</span>
          <h2 className="section-title">
            <span className="text-gradient">FAQ</span>
          </h2>
          <p className="section-subtitle">
            お客様からよくいただくご質問にお答えします。
            <br className="hidden sm:block" />
            その他のご質問もお気軽にどうぞ。
          </p>
        </motion.div>

        {/* FAQ List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto bg-white rounded-3xl shadow-lg p-6 lg:p-8"
        >
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </motion.div>

        {/* More Questions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 mb-4">
            その他のご質問・ご不明点がございましたら
            <br />
            お気軽にお問い合わせください。
          </p>
          <a
            href="#contact"
            className="inline-flex items-center text-primary-500 hover:text-primary-600 font-medium transition-colors"
          >
            お問い合わせはこちら
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
