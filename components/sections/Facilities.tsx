'use client'

import { motion } from 'framer-motion'
import { MapPin, Train, Building2, Wifi, Flame, Star } from 'lucide-react'
import { facilities, commonInfo } from '@/data/facilities'

const getFeatureIcon = (feature: string) => {
  if (feature.includes('インターネット') || feature.includes('ネット')) return Wifi
  if (feature.includes('IH')) return Flame
  return Star
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export default function Facilities() {
  return (
    <section id="facilities" className="py-20 lg:py-32 bg-gray-50">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="badge-primary mb-4">施設紹介</span>
          <h2 className="section-title">
            大阪市内<span className="text-gradient">3施設</span>から
            <br className="sm:hidden" />
            お選びいただけます
          </h2>
          <p className="section-subtitle">
            それぞれの施設に特徴があります。
            <br className="hidden sm:block" />
            ご希望に合った施設をお選びください。
          </p>
        </motion.div>

        {/* Facilities Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {facilities.map((facility) => (
            <motion.div key={facility.id} variants={cardVariants} className="card group">
              {/* Image Placeholder */}
              <div className="relative aspect-[4/3] bg-gradient-to-br from-primary-100 to-primary-50 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-primary-400 p-6">
                    <Building2 className="w-16 h-16 mx-auto mb-3 opacity-50" />
                    <p className="font-medium">{facility.building}</p>
                  </div>
                </div>
                {/* Highlight Badge */}
                <div className="absolute top-4 right-4">
                  <span className="badge bg-accent-300 text-gray-900 font-bold shadow-md">
                    {facility.highlight}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4 group-hover:text-primary-500 transition-colors">
                  {facility.name}
                </h3>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start text-gray-600">
                    <MapPin className="w-5 h-5 text-primary-400 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{facility.address}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Train className="w-5 h-5 text-primary-400 mr-2 flex-shrink-0" />
                    <span className="text-sm">{facility.access}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Building2 className="w-5 h-5 text-primary-400 mr-2 flex-shrink-0" />
                    <span className="text-sm">{facility.building}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {facility.features.map((feature, idx) => {
                    const Icon = getFeatureIcon(feature)
                    return (
                      <span
                        key={idx}
                        className="inline-flex items-center text-xs bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full"
                      >
                        <Icon className="w-3 h-3 mr-1" />
                        {feature}
                      </span>
                    )
                  })}
                </div>

                {/* Price */}
                <div className="border-t pt-4">
                  <div className="flex items-baseline justify-between">
                    <span className="text-sm text-gray-500">月額賃料</span>
                    <div>
                      <span className="text-2xl font-bold text-primary-600">
                        {commonInfo.rent.total.toLocaleString()}
                      </span>
                      <span className="text-sm text-gray-600">円</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-400 mt-1 text-right">
                    家賃{commonInfo.rent.breakdown.base.toLocaleString()}円 + 管理共益費等
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Common Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 bg-white rounded-3xl p-8 lg:p-10 shadow-lg"
        >
          <h3 className="text-xl font-bold text-center mb-8">共通料金・サービス</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-primary-50 rounded-2xl">
              <p className="text-sm text-gray-600 mb-2">{commonInfo.rent.label}</p>
              <p className="text-3xl font-bold text-primary-600">
                {commonInfo.rent.total.toLocaleString()}
                <span className="text-base font-normal">円/月</span>
              </p>
              <p className="text-xs text-gray-500 mt-2">
                家賃{commonInfo.rent.breakdown.base.toLocaleString()}円 + 管理共益費等
              </p>
            </div>
            <div className="text-center p-4 bg-accent-50 rounded-2xl">
              <p className="text-sm text-gray-600 mb-2">{commonInfo.initialCost.label}</p>
              <p className="text-3xl font-bold text-accent-500">
                {commonInfo.initialCost.deposit.toLocaleString()}
                <span className="text-base font-normal">円</span>
              </p>
              <p className="text-xs text-gray-500 mt-2">{commonInfo.initialCost.note}</p>
            </div>
            <div className="text-center p-4 bg-trust-50 rounded-2xl">
              <p className="text-sm text-gray-600 mb-2">{commonInfo.meal.label}</p>
              <p className="text-3xl font-bold text-trust-600">
                {(commonInfo.meal.cost / 10000).toFixed(1)}
                <span className="text-base font-normal">万円/月</span>
              </p>
              <p className="text-xs text-gray-500 mt-2">{commonInfo.meal.note}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
