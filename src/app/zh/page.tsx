'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Globe, Package, Truck, Shield, Star, Phone, Mail, MapPin, ChevronRight, Play } from 'lucide-react'
import { FaFacebookF, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';
import { SiSnapchat, SiInstagram, SiTiktok } from 'react-icons/si';
import { motion } from 'framer-motion';

const whatsappLink = "https://wa.me/8617858909510?text=" + encodeURIComponent("您好，我想要一个从中国进口商品的免费报价。请联系我，谢谢。");

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const menuItems = [
    { href: '#home', label: '首页' },
    { href: '#services', label: '服务' },
    { href: '#how-it-works', label: '运作方式' },
    { href: '#why-us', label: '为什么选择我们' },
    { href: '#testimonials', label: '客户评价' },
    { href: '/zh/devis', label: '费率报价' },
    { href: '/blog', label: '博客' },
    { href: '#contact', label: '联系我们' }
  ]

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' : 'bg-white/90 backdrop-blur-sm py-4'
    }`}>
      <div className="container mx-auto px-4 flex items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2 lg:space-x-3 animate-fade-in lg:-ml-10 mr-6 lg:mr-12">
          <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-xl">B</span>
          </div>
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              BoomXpresse
            </h1>
            <p className="text-xs text-gray-600 -mt-1">国际快递服务</p>
          </div>
        </div>
        
        {/* Language Switcher */}
        <div className="hidden lg:flex items-center space-x-2 mr-4">
          <Link href="/" className="text-gray-600 hover:text-orange-600 text-sm">FR</Link>
          <span className="text-gray-400">|</span>
          <Link href="/en" className="text-gray-600 hover:text-orange-600 text-sm">EN</Link>
          <span className="text-gray-400">|</span>
          <span className="text-orange-600 font-semibold text-sm">中文</span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex flex-1 justify-center space-x-8 lg:space-x-10">
          {menuItems.map((item, index) => (
            <a 
              key={index}
              href={item.href} 
              className="relative text-gray-800 hover:text-orange-600 transition-colors duration-200 font-medium group"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* CTA Button Desktop */}
        <div className="hidden lg:block lg:ml-6">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-2 rounded-full font-semibold transition-transform duration-200 transform hover:scale-105 shadow-2xl focus:outline-none focus:ring-4 focus:ring-orange-300 inline-block">
            免费报价
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden ml-auto relative w-8 h-8 flex flex-col justify-center items-center group"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-6 bg-gray-700 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
          <span className={`block h-0.5 w-6 bg-gray-700 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'my-1'}`}></span>
          <span className={`block h-0.5 w-6 bg-gray-700 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
        </button>
      </div>
    </header>
  )
}

const Hero = () => {
  return (
    <section id="home" className="pt-20 bg-gradient-to-br from-orange-50 via-white to-orange-50 min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute top-20 right-10 w-64 h-64 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-gentle"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse-gentle"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <div className="inline-flex items-center px-4 py-2 bg-orange-100 rounded-full text-orange-800 text-sm font-medium mb-6">
              <Globe className="h-4 w-4 mr-2" />
              自2020年以来的国际物流
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              轻松从
              <span className="block bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                中国进口
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              BoomXpresse协助您在全球范围内采购和交付中国产品。快速、可靠和安全的服务，实时跟踪。
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center">
                立即开始
                <ChevronRight className="ml-2 h-5 w-5" />
              </a>
              <button className="border-2 border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 flex items-center justify-center">
                <Play className="mr-2 h-5 w-5" />
                查看运作方式
              </button>
            </div>

            <div className="flex items-center space-x-6 text-gray-600">
              <div className="flex items-center">
                <Star className="h-5 w-5 text-yellow-400 fill-current mr-1" />
                <span className="font-semibold">4.9/5</span>
              </div>
              <div className="flex items-center">
                <Package className="h-5 w-5 text-orange-500 mr-1" />
                <span>1000+次交付</span>
              </div>
              <div className="flex items-center">
                <Globe className="h-5 w-5 text-orange-500 mr-1" />
                <span>50+个国家</span>
              </div>
            </div>
          </div>
          
          <div className="relative animate-fade-in">
            <div className="relative z-10 bg-white p-8 rounded-2xl shadow-2xl border border-orange-100">
              <div className="aspect-video bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl mb-6 flex items-center justify-center">
                <div className="text-center">
                  <Package className="h-16 w-16 text-orange-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-800">您的订单</h3>
                  <p className="text-gray-600">中国 → 您的门前</p>
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
                  <h4 className="font-semibold text-orange-800">快递</h4>
                  <p className="text-sm text-gray-600">7-15天</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg text-center">
                  <Shield className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <h4 className="font-semibold text-green-800">安全</h4>
                  <p className="text-sm text-gray-600">100%保险</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-orange-500 rounded-full opacity-20 animate-bounce-gentle"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-orange-400 rounded-full opacity-30 animate-pulse-gentle"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function ChineseHomePage() {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <Hero />
      <div className="bg-gray-900 text-white py-12 text-center">
        <div className="container mx-auto px-4">
          <p className="text-gray-400">© 2025 BoomXpresse. 版权所有。</p>
          <div className="flex justify-center space-x-4 mt-4">
            <Link href="/" className="text-orange-400 hover:text-orange-300">Français</Link>
            <span className="text-gray-600">|</span>
            <Link href="/en" className="text-orange-400 hover:text-orange-300">English</Link>
            <span className="text-gray-600">|</span>
            <span className="text-orange-400">中文</span>
          </div>
        </div>
      </div>
    </main>
  )
}