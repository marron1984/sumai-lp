'use client'

import { motion } from 'framer-motion'
import { Phone, MessageCircle, ChevronDown, Shield, Wallet, Heart } from 'lucide-react'
import { contactInfo } from '@/data/facilities'

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-300 rounded-full blur-3xl" />
      </div>

      <div className="relative section-container pt-8 pb-20 lg:pt-16 lg:pb-32">
        {/* Header Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
            株式会社AA運営 | 大阪市内3施設
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            {/* Main Badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-6">
              <span className="badge bg-white text-primary-600 shadow-lg">
                <Shield className="w-4 h-4 mr-1" />
                保証人不要
              </span>
              <span className="badge bg-white text-primary-600 shadow-lg">
                <Wallet className="w-4 h-4 mr-1" />
                初期費用分割OK
              </span>
              <span className="badge bg-white text-primary-600 shadow-lg">
                <Heart className="w-4 h-4 mr-1" />
                生活保護対応
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              高齢者・障がい者の方に
              <br />
              <span className="text-accent-100">安心の住まい</span>を
            </h1>

            <p className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed">
              「ここなら住める」そう思える場所を。
              <br className="hidden sm:block" />
              介護・医療サービスと連携した、
              <br className="hidden sm:block" />
              あなたらしい暮らしをサポートします。
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.a
                href={`tel:${contactInfo.phone}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 font-bold text-lg rounded-full shadow-xl hover:shadow-2xl transition-all"
              >
                <Phone className="w-6 h-6 mr-2" />
                今すぐ電話相談
              </motion.a>
              <motion.a
                href={contactInfo.lineUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-line text-lg px-8 py-4"
              >
                <MessageCircle className="w-6 h-6 mr-2" />
                LINEで相談
              </motion.a>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4 text-white/80 text-sm">
              <span className="flex items-center">
                <span className="w-2 h-2 bg-trust-400 rounded-full mr-2" />
                相談無料
              </span>
              <span className="flex items-center">
                <span className="w-2 h-2 bg-trust-400 rounded-full mr-2" />
                土日祝も対応
              </span>
              <span className="flex items-center">
                <span className="w-2 h-2 bg-trust-400 rounded-full mr-2" />
                見学随時受付
              </span>
            </div>
          </motion.div>

          {/* Right Content - Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-4 shadow-2xl">
              {/* Hero Image - Smiling Senior */}
              <div className="aspect-[4/3] bg-gradient-to-br from-white/20 to-white/5 rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?w=800&h=600&fit=crop"
                  alt="笑顔のシニアの方"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute -top-4 -right-4 bg-accent-300 text-gray-900 px-4 py-2 rounded-full font-bold shadow-lg"
              >
                初期費用分割相談可
              </motion.div>

              {/* Price Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="absolute -bottom-4 -left-4 bg-white text-gray-900 px-6 py-3 rounded-2xl shadow-lg"
              >
                <p className="text-xs text-gray-500">月額</p>
                <p className="text-2xl font-bold text-primary-600">
                  50,000<span className="text-sm">円〜</span>
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center"
          >
            <span className="text-sm mb-2">詳しく見る</span>
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
