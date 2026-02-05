'use client'

import { motion } from 'framer-motion'
import { Phone, Home, FileText, Key, MessageCircle } from 'lucide-react'
import { contactInfo } from '@/data/facilities'

const steps = [
  {
    icon: Phone,
    title: 'お問い合わせ',
    description: 'お電話・LINE・フォームからお気軽にご相談ください。ご希望やご不安な点をお聞かせください。',
    note: '相談無料',
  },
  {
    icon: Home,
    title: '施設見学',
    description: '実際にお部屋や共用部分をご見学いただけます。周辺環境もご確認ください。',
    note: '随時受付',
  },
  {
    icon: FileText,
    title: 'お申込み・審査',
    description: '必要書類をご準備いただき、お申込みとなります。生活保護の方は福祉事務所との連携もサポート。',
    note: '丁寧にサポート',
  },
  {
    icon: Key,
    title: 'ご契約・入居',
    description: '契約手続き後、いよいよ新生活のスタートです。初期費用の分割もご相談ください。',
    note: '分割相談可',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const stepVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
}

export default function Flow() {
  return (
    <section id="flow" className="py-20 lg:py-32 bg-white">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="badge-primary mb-4">ご入居までの流れ</span>
          <h2 className="section-title">
            <span className="text-gradient">4ステップ</span>で
            <br className="sm:hidden" />
            新生活がスタート
          </h2>
          <p className="section-subtitle">
            お問い合わせから入居まで、
            <br className="hidden sm:block" />
            スタッフが丁寧にサポートいたします。
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Connecting Line - Desktop */}
          <div className="hidden lg:block absolute top-24 left-[10%] right-[10%] h-1 bg-gradient-to-r from-primary-200 via-primary-400 to-primary-200 rounded-full" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={stepVariants}
                className="relative text-center"
              >
                {/* Step Number */}
                <div className="relative z-10 mb-6">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center shadow-lg">
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent-400 rounded-full flex items-center justify-center text-white font-bold shadow-md">
                    {index + 1}
                  </div>
                </div>

                {/* Content */}
                <div className="bg-gray-50 rounded-2xl p-6 h-full">
                  <span className="badge-success text-xs mb-3">{step.note}</span>
                  <h3 className="text-lg font-bold mb-3">{step.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow - Mobile/Tablet */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-4">
                    <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-primary-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        />
                      </svg>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 mb-6">
            まずはお気軽にお問い合わせください。
            <br />
            専門スタッフが親身にご対応いたします。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href={`tel:${contactInfo.phone}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary text-lg"
            >
              <Phone className="w-5 h-5 mr-2" />
              電話で相談する
            </motion.a>
            <motion.a
              href={contactInfo.lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-line text-lg"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              LINEで相談する
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
