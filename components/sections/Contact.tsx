'use client'

import { motion } from 'framer-motion'
import { Phone, MessageCircle, Mail, Clock, MapPin, Building } from 'lucide-react'
import { contactInfo, commonInfo } from '@/data/facilities'

export default function Contact() {
  return (
    <section id="contact" className="py-20 lg:py-32 bg-gray-900 text-white">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-primary-500/20 text-primary-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
            お問い合わせ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            まずは<span className="text-primary-400">お気軽に</span>ご相談ください
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            お電話・LINE・メールでお問い合わせいただけます。
            <br className="hidden sm:block" />
            専門スタッフが親身にご対応いたします。
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {/* Phone */}
          <motion.a
            href={`tel:${contactInfo.phone}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="block bg-gradient-to-br from-primary-500 to-primary-600 rounded-3xl p-8 text-center shadow-xl cursor-pointer"
          >
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">お電話でのお問い合わせ</h3>
            <p className="text-3xl font-bold mb-2">{contactInfo.phoneDisplay}</p>
            <p className="text-sm text-white/80">
              <Clock className="w-4 h-4 inline mr-1" />
              {contactInfo.hours}
            </p>
          </motion.a>

          {/* LINE */}
          <motion.a
            href={contactInfo.lineUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="block bg-[#06C755] rounded-3xl p-8 text-center shadow-xl cursor-pointer"
          >
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">LINEでお問い合わせ</h3>
            <p className="text-2xl font-bold mb-2">
              友だち追加で
              <br />
              簡単相談
            </p>
            <p className="text-sm text-white/80">ID: {contactInfo.lineId}</p>
          </motion.a>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-gray-800 rounded-3xl p-8 text-center"
          >
            <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-bold mb-2">メールでお問い合わせ</h3>
            <p className="text-gray-400 mb-4">
              24時間受付中
              <br />
              翌営業日までにご返信
            </p>
            <button className="btn-secondary w-full">
              お問い合わせフォーム
            </button>
          </motion.div>
        </div>

        {/* Company Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-gray-800/50 rounded-3xl p-8 lg:p-10"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center mb-4">
                <Building className="w-6 h-6 text-primary-400 mr-2" />
                <h3 className="text-xl font-bold">運営会社</h3>
              </div>
              <p className="text-2xl font-bold text-primary-400 mb-2">
                {commonInfo.company.name}
              </p>
              <p className="text-gray-400 leading-relaxed">
                {commonInfo.company.description}
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-primary-400 mr-3 mt-0.5" />
                <div>
                  <p className="font-medium">施設所在地</p>
                  <p className="text-sm text-gray-400">
                    大阪市西淀川区・東淀川区（3施設）
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="w-5 h-5 text-primary-400 mr-3 mt-0.5" />
                <div>
                  <p className="font-medium">受付時間</p>
                  <p className="text-sm text-gray-400">{contactInfo.hours}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 flex flex-wrap justify-center gap-4"
        >
          {commonInfo.support.map((item, index) => (
            <span
              key={index}
              className="inline-flex items-center bg-gray-800 px-4 py-2 rounded-full text-sm"
            >
              <span className="w-2 h-2 bg-primary-400 rounded-full mr-2" />
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
