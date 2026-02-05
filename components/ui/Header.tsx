'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, MessageCircle, Home } from 'lucide-react'
import { contactInfo } from '@/data/facilities'

const navItems = [
  { href: '#features', label: '選ばれる理由' },
  { href: '#facilities', label: '施設紹介' },
  { href: '#flow', label: 'ご入居の流れ' },
  { href: '#faq', label: 'よくある質問' },
  { href: '#contact', label: 'お問い合わせ' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md'
            : 'bg-transparent'
        }`}
      >
        <div className="section-container">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a href="#" className="flex items-center">
              <Home
                className={`w-8 h-8 mr-2 ${
                  isScrolled ? 'text-primary-500' : 'text-white'
                }`}
              />
              <span
                className={`text-xl font-bold ${
                  isScrolled ? 'text-gray-900' : 'text-white'
                }`}
              >
                ええすまい
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium transition-colors ${
                    isScrolled
                      ? 'text-gray-600 hover:text-primary-500'
                      : 'text-white/90 hover:text-white'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center space-x-3">
              <a
                href={`tel:${contactInfo.phone}`}
                className={`flex items-center text-sm font-medium ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                <Phone className="w-4 h-4 mr-1" />
                {contactInfo.phoneDisplay}
              </a>
              <a
                href={contactInfo.lineUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-line py-2 px-4 text-sm"
              >
                <MessageCircle className="w-4 h-4 mr-1" />
                LINE相談
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-black/50"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3 }}
              className="absolute top-0 right-0 h-full w-80 max-w-full bg-white shadow-2xl"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <span className="text-xl font-bold">ええすまい</span>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 text-gray-500"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <nav className="space-y-4 mb-8">
                  {navItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-2 text-gray-700 hover:text-primary-500 font-medium"
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>

                <div className="space-y-3">
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="flex items-center justify-center w-full btn-primary"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    電話で相談
                  </a>
                  <a
                    href={contactInfo.lineUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full btn-line"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    LINEで相談
                  </a>
                </div>

                <p className="text-center text-sm text-gray-500 mt-6">
                  {contactInfo.hours}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
