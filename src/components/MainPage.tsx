'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Globe, Package, Truck, Shield, Star, Phone, Mail, MapPin, ChevronRight, Play, Clock, CheckCircle, Users, Heart } from 'lucide-react'
import { FaFacebookF, FaLinkedinIn, FaEnvelope } from 'react-icons/fa'
import { SiSnapchat, SiInstagram, SiTiktok } from 'react-icons/si'
import { motion } from 'framer-motion'
import { translations, Language } from '@/lib/translations'

interface MainPageProps {
  forcedLang?: Language
}

export default function MainPage({ forcedLang }: MainPageProps) {
  // Utiliser la langue forcée ou 'fr' par défaut
  const currentLang = forcedLang || 'fr'
  const t = translations[currentLang]
  
  // WhatsApp link based on language
  const whatsappMessages = {
    fr: "Bonjour, je souhaiterais un devis gratuit pour importer des marchandises depuis la Chine. Merci de me recontacter.",
    en: "Hello, I would like a free quote for importing goods from China. Thank you for contacting me.",
    zh: "您好，我想要一个从中国进口商品的免费报价。谢谢您联系我。"
  }
  
  const whatsappLink = "https://wa.me/8617858909510?text=" + encodeURIComponent(whatsappMessages[currentLang])

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  })

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const toggleLanguageMenu = () => setIsLanguageMenuOpen(!isLanguageMenuOpen)

  const languages = [
    { code: 'fr' as Language, name: 'Français', flag: '🇫🇷', path: '/' },
    { code: 'en' as Language, name: 'English', flag: '🇬🇧', path: '/en' },
    { code: 'zh' as Language, name: '中文', flag: '🇨🇳', path: '/zh' }
  ]

  const menuItems = [
    { href: '#accueil', label: t.nav.home },
    { href: '#services', label: t.nav.services },
    { href: '#comment-ca-marche', label: t.nav.howItWorks },
    { href: '#pourquoi-nous', label: t.nav.whyUs },
    { href: '#temoignages', label: t.nav.testimonials },
    { href: '#offres', label: t.nav.pricing },
    { href: '/blog', label: t.nav.blog },
    { href: `${forcedLang ? '/' + forcedLang : ''}/devis`, label: t.nav.quotes },
    { href: '#contact', label: t.nav.contact }
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      
      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', phone: '', company: '', message: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    }
    
    setTimeout(() => setSubmitStatus('idle'), 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  // Header Component
  const Header = () => (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' : 'bg-white/90 backdrop-blur-sm py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 animate-fade-in">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">B</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                BoomXpresse
              </h1>
              <p className="text-xs text-gray-500">Logistics & Import</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.slice(0, -1).map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-gray-700 hover:text-orange-600 transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={toggleLanguageMenu}
                className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                <Globe className="h-4 w-4 text-gray-600" />
                <span className="text-sm font-medium text-gray-700">
                  {languages.find(lang => lang.code === currentLang)?.flag}
                </span>
                <ChevronRight className={`h-4 w-4 text-gray-400 transition-transform ${isLanguageMenuOpen ? 'rotate-90' : ''}`} />
              </button>

              {isLanguageMenuOpen && (
                <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 py-2 min-w-[150px] z-50">
                  {languages.map((language) => (
                    <Link
                      key={language.code}
                      href={language.path}
                      className="w-full flex items-center space-x-3 px-4 py-3 hover:bg-orange-50 hover:text-orange-600 transition-colors text-left"
                      onClick={() => setIsLanguageMenuOpen(false)}
                    >
                      <span className="text-lg">{language.flag}</span>
                      <span className="text-sm font-medium">{language.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden relative w-10 h-10 flex flex-col justify-center items-center rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div className={`w-6 h-0.5 bg-gray-600 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-gray-600 mt-1 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-gray-600 mt-1 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></div>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-gray-200 shadow-lg">
            <div className="px-4 py-4 space-y-4">
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="block text-gray-700 hover:text-orange-600 transition-colors font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="flex items-center justify-center">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <div className="w-12 h-12 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center">
                    <Phone className="h-6 w-6" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Floating WhatsApp button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
          <div className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center">
            <Phone className="h-6 w-6" />
          </div>
        </a>
      </div>
    </header>
  )

  // Hero Section Component
  const Hero = () => (
    <section id="accueil" className="pt-20 bg-gradient-to-br from-orange-50 via-white to-orange-50 min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-orange-100/20 to-transparent"></div>
      
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8 animate-slide-up">
          <div className="inline-flex items-center px-4 py-2 bg-orange-100 rounded-full text-orange-800 text-sm font-medium mb-6">
            <Star className="h-4 w-4 mr-2" />
            {t.hero.badge}
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            {t.hero.title} 
            <span className="block bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              {t.hero.titleHighlight}
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            {t.hero.subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center">
              {t.hero.cta}
            </a>
            
            <Link href={`${forcedLang ? '/' + forcedLang : ''}/devis`} className="border-2 border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 flex items-center justify-center">
              {t.hero.demo}
            </Link>
          </div>
          
          <div className="flex items-center space-x-6 text-gray-600">
            <div className="flex items-center">
              <Star className="h-5 w-5 text-orange-500 mr-1" />
              <span>{t.hero.trustRating}</span>
            </div>
            <div className="flex items-center">
              <Package className="h-5 w-5 text-orange-500 mr-1" />
              <span>{t.hero.trustDeliveries}</span>
            </div>
            <div className="flex items-center">
              <Globe className="h-5 w-5 text-orange-500 mr-1" />
              <span>{t.hero.trustCountries}</span>
            </div>
          </div>
        </div>
        
        {/* Hero Image/Illustration */}
        <div className="relative animate-fade-in">
          <div className="relative z-10 bg-white p-8 rounded-2xl shadow-2xl border border-orange-100">
            <div className="aspect-video bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl mb-6 flex items-center justify-center">
              <div className="text-center">
                <Package className="h-16 w-16 text-orange-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-800">Votre commande</h3>
                <p className="text-gray-600">Chine → Votre porte</p>
                <div className="mt-4 flex justify-center space-x-2">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-orange-300 rounded-full"></div>
                  <div className="w-3 h-3 bg-orange-200 rounded-full"></div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-orange-50 p-4 rounded-lg text-center">
                <Truck className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                <h4 className="font-semibold text-orange-800">Express</h4>
                <p className="text-sm text-gray-600">7-15 jours</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg text-center">
                <Shield className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <h4 className="font-semibold text-green-800">Sécurisé</h4>
                <p className="text-sm text-gray-600">100% assuré</p>
              </div>
            </div>
          </div>
          
          {/* Floating elements */}
          <div className="absolute -top-4 -right-4 w-20 h-20 bg-orange-500 rounded-full opacity-20 animate-bounce-gentle"></div>
          <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-orange-400 rounded-full opacity-30 animate-pulse-gentle"></div>
        </div>
      </div>
    </section>
  )

  // Services Section Component  
  const Services = () => {
    const services = [
      {
        icon: <Package className="h-12 w-12 text-white" />,
        title: t.services.sourcing.title,
        description: t.services.sourcing.description,
        gradient: "from-orange-500 to-orange-600",
        bgGradient: "from-orange-50/50 to-orange-100/30"
      },
      {
        icon: <Shield className="h-12 w-12 text-white" />,
        title: t.services.quality.title,
        description: t.services.quality.description,
        gradient: "from-emerald-500 to-emerald-600",
        bgGradient: "from-emerald-50/50 to-emerald-100/30"
      },
      {
        icon: <Truck className="h-12 w-12 text-white" />,
        title: t.services.logistics.title,
        description: t.services.logistics.description,
        gradient: "from-blue-500 to-blue-600",
        bgGradient: "from-blue-50/50 to-blue-100/30"
      },
      {
        icon: <Globe className="h-12 w-12 text-white" />,
        title: t.services.customs.title,
        description: t.services.customs.description,
        gradient: "from-purple-500 to-purple-600",
        bgGradient: "from-purple-50/50 to-purple-100/30"
      }
    ]

    return (
      <section id="services" className="py-20 bg-gradient-to-br from-white to-slate-50 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-orange-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse-gentle"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse-gentle" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-slide-up">
            <div className="inline-flex items-center px-6 py-3 bg-white/70 backdrop-blur-lg rounded-full text-orange-800 text-sm font-medium mb-6 shadow-lg border border-white/20">
              <Star className="h-4 w-4 mr-2" />
              {t.services.badge}
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t.services.title}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t.services.subtitle}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="group text-center p-8 rounded-3xl backdrop-blur-lg bg-white/70 hover:bg-white/80 transition-all duration-700 transform hover:-translate-y-3 hover:scale-105 hover:shadow-2xl border border-white/20 hover:border-white/40 active:scale-95 relative overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
              >
                {/* Background gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                {/* Service icon */}
                <div className={`relative z-10 w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-2xl mb-6 flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                  {service.icon}
                </div>
                
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">{service.description}</p>
                  
                  {/* Hover effect arrow */}
                  <div className="mt-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className={`inline-flex items-center justify-center w-10 h-10 bg-gradient-to-br ${service.gradient} rounded-full shadow-lg`}>
                      <ChevronRight className="h-5 w-5 text-white" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  // Rest of the components will be added in the next message due to length limits...

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      {/* More sections will be added... */}
    </div>
  )
}