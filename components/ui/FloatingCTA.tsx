'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, MessageCircle, X } from 'lucide-react'
import { contactInfo } from '@/data/facilities'

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past the hero section (roughly 100vh)
      const scrollY = window.scrollY
      const viewportHeight = window.innerHeight
      setIsVisible(scrollY > viewportHeight * 0.5)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Mobile Fixed Bottom Bar */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-0 left-0 right-0 z-50 lg:hidden"
          >
            <div className="bg-white border-t border-gray-200 shadow-2xl px-4 py-3 safe-area-inset-bottom">
              <div className="flex gap-3">
                <motion.a
                  href={`tel:${contactInfo.phone}`}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 flex items-center justify-center bg-primary-500 text-white font-bold py-3 px-4 rounded-xl shadow-lg"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  電話相談
                </motion.a>
                <motion.a
                  href={contactInfo.lineUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 flex items-center justify-center bg-[#06C755] text-white font-bold py-3 px-4 rounded-xl shadow-lg"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  LINE相談
                </motion.a>
              </div>
              <p className="text-center text-xs text-gray-500 mt-2">
                {contactInfo.hours}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Floating Button */}
      <div className="hidden lg:block fixed bottom-8 right-8 z-50">
        <AnimatePresence>
          {isVisible && (
            <>
              {/* Expanded Panel */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    transition={{ duration: 0.2 }}
                    className="absolute bottom-20 right-0 bg-white rounded-2xl shadow-2xl p-6 w-72"
                  >
                    <button
                      onClick={() => setIsExpanded(false)}
                      className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
                    >
                      <X className="w-5 h-5" />
                    </button>
                    <h3 className="font-bold text-lg mb-4">お問い合わせ</h3>
                    <div className="space-y-3">
                      <a
                        href={`tel:${contactInfo.phone}`}
                        className="flex items-center justify-center w-full bg-primary-500 text-white font-bold py-3 px-4 rounded-xl hover:bg-primary-600 transition-colors"
                      >
                        <Phone className="w-5 h-5 mr-2" />
                        {contactInfo.phoneDisplay}
                      </a>
                      <a
                        href={contactInfo.lineUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-full bg-[#06C755] text-white font-bold py-3 px-4 rounded-xl hover:bg-[#05b34d] transition-colors"
                      >
                        <MessageCircle className="w-5 h-5 mr-2" />
                        LINEで相談
                      </a>
                    </div>
                    <p className="text-center text-xs text-gray-500 mt-4">
                      {contactInfo.hours}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Main Button */}
              <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsExpanded(!isExpanded)}
                className="w-16 h-16 bg-primary-500 text-white rounded-full shadow-xl flex items-center justify-center hover:bg-primary-600 transition-colors"
              >
                {isExpanded ? (
                  <X className="w-7 h-7" />
                ) : (
                  <MessageCircle className="w-7 h-7" />
                )}
              </motion.button>

              {/* Pulse Animation */}
              {!isExpanded && (
                <motion.div
                  className="absolute inset-0 bg-primary-500 rounded-full"
                  initial={{ scale: 1, opacity: 0.5 }}
                  animate={{ scale: 1.5, opacity: 0 }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              )}
            </>
          )}
        </AnimatePresence>
      </div>
    </>
  )
}
