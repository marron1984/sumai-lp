'use client'

import { motion } from 'framer-motion'
import {
  Shield,
  Wallet,
  Heart,
  Stethoscope,
  UtensilsCrossed,
  Clock,
  CheckCircle2,
} from 'lucide-react'
import { commonInfo } from '@/data/facilities'

const features = [
  {
    icon: Shield,
    title: '保証人不要',
    description: '保証人がいなくても大丈夫。身寄りのない方も安心してご入居いただけます。',
    color: 'bg-primary-500',
  },
  {
    icon: Wallet,
    title: '初期費用分割OK',
    description: '礼金の分割払いに対応。まとまったお金がなくてもご相談ください。',
    color: 'bg-accent-400',
  },
  {
    icon: Heart,
    title: '生活保護対応',
    description: '生活保護を受給されている方も入居可能。福祉事務所との連携もサポートします。',
    color: 'bg-trust-500',
  },
  {
    icon: Stethoscope,
    title: '医療・介護連携',
    description: '訪問診療、訪問看護、訪問介護などのサービスと密に連携しています。',
    color: 'bg-blue-500',
  },
  {
    icon: UtensilsCrossed,
    title: '配食サービス',
    description: '栄養バランスのとれた食事を配達。調理が難しい方も安心です。',
    color: 'bg-rose-500',
  },
  {
    icon: Clock,
    title: '緊急時対応',
    description: 'いざという時も安心。緊急時のサポート体制を整えています。',
    color: 'bg-purple-500',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export default function Features() {
  return (
    <section id="features" className="py-20 lg:py-32 bg-gradient-warm">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="badge-primary mb-4">選ばれる理由</span>
          <h2 className="section-title">
            <span className="text-gradient">ええすまい</span>が選ばれる
            <br className="sm:hidden" />
            6つの理由
          </h2>
          <p className="section-subtitle">
            高齢者・障がい者の方が安心して暮らせるよう、
            <br className="hidden sm:block" />
            様々なサポート体制を整えています。
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants} className="card p-6 lg:p-8">
              <div
                className={`w-14 h-14 ${feature.color} rounded-2xl flex items-center justify-center mb-6`}
              >
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Support List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 bg-white rounded-3xl p-8 lg:p-12 shadow-lg"
        >
          <h3 className="text-xl font-bold text-center mb-8">
            こんな方を<span className="text-primary-500">歓迎</span>しています
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {commonInfo.support.map((item, index) => (
              <div
                key={index}
                className="flex items-center bg-primary-50 rounded-xl px-4 py-3"
              >
                <CheckCircle2 className="w-5 h-5 text-primary-500 mr-3 flex-shrink-0" />
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
