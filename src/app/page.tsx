'use client'

import { useState, useEffect } from 'react'
import { Metadata } from 'next'
import Link from 'next/link'
import { Menu, X, Globe, Package, Truck, Shield, Star, Phone, Mail, MapPin, ChevronRight, Play, Clock, CheckCircle, Users, Heart } from 'lucide-react'
import { FaFacebookF, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';
import { SiSnapchat, SiInstagram, SiTiktok } from 'react-icons/si';
import { motion } from 'framer-motion';

const whatsappLink = "https://wa.me/8617858909510?text=" + encodeURIComponent("Bonjour, je souhaite un devis gratuit pour l'import de marchandises depuis la Chine. Merci de me contacter.");

const WhatsAppWidget = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce-gentle">
      <a
        href={whatsappLink}
        aria-label="WhatsApp +86 178 5890 9510 - envoyer un message prérempli"
        title="WhatsApp +86 178 5890 9510 - envoyer un message prérempli"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.531 3.51"/>
        </svg>
      </a>
    </div>
  )
}

const PromoBanner = () => {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-2 px-4 text-center relative animate-slide-down">
      <div className="container mx-auto flex items-center justify-center">
        <Star className="h-4 w-4 mr-2" />
        <span className="text-sm font-medium">
          🎉 Offre spéciale : Devis gratuit et réduction de 15% sur votre première commande !
        </span>
        <button 
          onClick={() => setIsVisible(false)}
          className="ml-4 text-white hover:text-orange-200 transition-colors"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}

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
    { href: '#accueil', label: 'Accueil' },
    { href: '#services', label: 'Services' },
    { href: '#comment-ca-marche', label: 'Comment ça marche' },
    { href: '#pourquoi-nous', label: 'Pourquoi nous' },
    { href: '#offres', label: 'Nos offres' },
    { href: '#temoignages', label: 'Témoignages' },
    { href: '/devis', label: 'Tarifs & Devis' },
    { href: '/blog', label: 'Blog' },
    { href: '#contact', label: 'Contact' }
  ]

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-lg shadow-lg py-3' : 'bg-white/90 backdrop-blur-sm py-4'
    }`}>
      <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3 animate-fade-in">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">B</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                  BoomXpresse
                </h1>
                <p className="text-xs text-gray-600 -mt-1 hidden sm:block">DELIVERY SERVICE</p>
              </div>
            </div>
            {/* Ajout d'un espace entre le logo et le menu */}
            <div className="hidden lg:block mx-8" />
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <a 
                key={index}
                href={item.href} 
                className="relative text-gray-700 hover:text-orange-600 transition-colors duration-200 font-medium group py-2"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Right Side - Menu */}
          <div className="flex items-center space-x-4">
            {/* Mobile Menu Button */}
            <button
              className="lg:hidden relative w-10 h-10 flex flex-col justify-center items-center rounded-lg hover:bg-gray-100 transition-colors"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <span className={`block h-0.5 w-6 bg-gray-700 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
              <span className={`block h-0.5 w-6 bg-gray-700 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'my-1'}`}></span>
              <span className={`block h-0.5 w-6 bg-gray-700 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-1 border-t border-gray-200 mt-4">
            {menuItems.map((item, index) => (
              <a 
                key={index}
                href={item.href} 
                className="block px-4 py-3 text-gray-700 hover:text-orange-600 hover:bg-orange-50 transition-colors font-medium rounded-lg"
                onClick={toggleMenu}
              >
                <div className="flex items-center justify-between">
                  {item.label}
                  <ChevronRight className="h-4 w-4 text-orange-500" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}

const Hero = () => {
  return (
    <section id="accueil" className="pt-20 bg-gradient-to-br from-orange-50 via-white to-orange-50 min-h-screen flex items-center relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-gentle"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse-gentle"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-orange-100 rounded-full text-orange-800 text-sm font-medium mb-6">
              <Globe className="h-4 w-4 mr-2" />
              Logistique internationale depuis 2020
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Importez depuis la 
              <span className="block bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                Chine facilement
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              BoomXpresse vous accompagne dans l&apos;achat et la livraison de produits chinois partout dans le monde. 
              Service rapide, fiable et sécurisé avec suivi en temps réel.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center">
                Commencer maintenant
                <ChevronRight className="ml-2 h-5 w-5" />
              </a>
              <Link href="/devis" className="border-2 border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 flex items-center justify-center">
                <ChevronRight className="mr-2 h-5 w-5" />
                Voir les tarifs
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center space-x-6 text-gray-600">
              <div className="flex items-center">
                <Star className="h-5 w-5 text-yellow-400 fill-current mr-1" />
                <span className="font-semibold">4.9/5</span>
              </div>
              <div className="flex items-center">
                <Package className="h-5 w-5 text-orange-500 mr-1" />
                <span>1000+ livraisons</span>
              </div>
              <div className="flex items-center">
                <Globe className="h-5 w-5 text-orange-500 mr-1" />
                <span>50+ pays</span>
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
      </div>
    </section>
  )
}

const Services = () => {
  const services = [
    {
      icon: <Package className="h-12 w-12 text-white" />,
      title: "Sourcing de produits",
      description: "Nous trouvons les meilleurs fournisseurs chinois pour vos besoins spécifiques.",
      gradient: "from-orange-500 to-orange-600",
      bgGradient: "from-orange-50/50 to-orange-100/30"
    },
    {
      icon: <Shield className="h-12 w-12 text-white" />,
      title: "Contrôle qualité",
      description: "Inspection rigoureuse de tous les produits avant expédition.",
      gradient: "from-emerald-500 to-emerald-600",
      bgGradient: "from-emerald-50/50 to-emerald-100/30"
    },
    {
      icon: <Truck className="h-12 w-12 text-white" />,
      title: "Logistique internationale",
      description: "Transport sécurisé et suivi en temps réel jusqu'à votre porte.",
      gradient: "from-blue-500 to-blue-600",
      bgGradient: "from-blue-50/50 to-blue-100/30"
    },
    {
      icon: <Globe className="h-12 w-12 text-white" />,
      title: "Dédouanement",
      description: "Gestion complète des formalités douanières dans tous les pays.",
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
            Services professionnels
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Une solution complète pour tous vos besoins d&apos;import depuis la Chine
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

const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      title: "Vous nous contactez",
      description: "Décrivez-nous vos besoins et recevez un devis gratuit en 24h.",
      color: "orange"
    },
    {
      number: "2", 
      title: "Nous sourçons",
      description: "Notre équipe trouve le meilleur fournisseur et négocie pour vous.",
      color: "blue"
    },
    {
      number: "3",
      title: "Contrôle qualité",
      description: "Inspection complète avant expédition avec photos et rapport.",
      color: "green"
    },
    {
      number: "4",
      title: "Livraison sécurisée",
      description: "Transport et livraison avec suivi temps réel jusqu'à vous.",
      color: "purple"
    }
  ]

  return (
    <section id="comment-ca-marche" className="py-20 bg-gradient-to-br from-orange-50 to-orange-100 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center px-4 py-2 bg-white rounded-full text-orange-800 text-sm font-medium mb-6 shadow-sm">
            <Package className="h-4 w-4 mr-2" />
            Processus simple
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Comment ça marche ?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Un processus simple et transparent en 4 étapes
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="text-center relative animate-slide-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-orange-300 to-orange-200 z-0"></div>
              )}
              
              <div className="relative z-10">
                <div className={`bg-gradient-to-br from-orange-500 to-orange-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg transform transition-all duration-300 hover:scale-110`}>
                  {step.number}
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <Shield className="h-8 w-8 text-orange-600" />,
      title: "Sécurité garantie",
      description: "Paiement sécurisé et assurance sur tous vos envois",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: <Star className="h-8 w-8 text-orange-600" />,
      title: "Expertise chinoise",
      description: "Plus de 10 ans d'expérience sur le marché chinois",
      gradient: "from-orange-500 to-yellow-500"
    },
    {
      icon: <Truck className="h-8 w-8 text-orange-600" />,
      title: "Livraison rapide",
      description: "De 7 à 15 jours ouvrables partout dans le monde",
      gradient: "from-orange-500 to-blue-500"
    },
    {
      icon: <Phone className="h-8 w-8 text-orange-600" />,
      title: "Support 24/7",
      description: "Une équipe dédiée pour répondre à toutes vos questions",
      gradient: "from-orange-500 to-green-500"
    }
  ]

  return (
    <section id="pourquoi-nous" className="py-20 bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full transform translate-x-48 -translate-y-48 opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center px-4 py-2 bg-orange-100 rounded-full text-orange-800 text-sm font-medium mb-6">
            <Shield className="h-4 w-4 mr-2" />
            Nos avantages
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Pourquoi choisir BoomXpresse ?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Votre succès est notre priorité
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="group flex items-start space-x-6 p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 hover:from-orange-50 hover:to-orange-100 transition-all duration-500 transform hover:-translate-y-1 hover:scale-105 hover:shadow-2xl border border-gray-200 hover:border-orange-200 active:scale-95"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex-shrink-0">
                <div className={`p-4 bg-gradient-to-br ${reason.gradient} rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {reason.icon}
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                  {reason.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const Testimonials = () => {
  const testimonials = [
    {
      name: "Marie Dubois",
      company: "Boutique Mode",
      content: "BoomXpresse nous a permis d'importer nos collections depuis la Chine en toute sérénité. Service impeccable !",
      rating: 5,
      avatar: "MD"
    },
    {
      name: "Ahmed Hassan",
      company: "Tech Solutions",
      content: "Livraison rapide et produits conformes. Je recommande vivement leurs services pour tout import depuis la Chine.",
      rating: 5,
      avatar: "AH"
    },
    {
      name: "Sophie Martin",
      company: "Artisanat & Co",
      content: "Équipe professionnelle et réactive. Ils ont géré tous les aspects logistiques de A à Z.",
      rating: 5,
      avatar: "SM"
    }
  ]

  return (
    <section id="temoignages" className="py-20 bg-gradient-to-br from-orange-50 to-orange-100 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center px-4 py-2 bg-white rounded-full text-orange-800 text-sm font-medium mb-6 shadow-sm">
            <Star className="h-4 w-4 mr-2" />
            Témoignages clients
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Ce que disent nos clients</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            La satisfaction client au cœur de nos préoccupations
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 border border-gray-100 hover:border-orange-200 active:scale-95"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Avatar */}
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-semibold text-sm mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-orange-600 text-sm">{testimonial.company}</p>
                </div>
              </div>
              
              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              {/* Content */}
              <p className="text-gray-700 leading-relaxed italic">&ldquo;{testimonial.content}&rdquo;</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const PricingPlans = () => {
  const plans = [
    {
      name: "Starter",
      subtitle: "DÉMARREZ SIMPLEMENT",
      description: "Faites vos achats en ligne ou confiez-nous vos colis prêts, nous gérons l'expédition !",
      features: [
        "Frais de gestion : 2,5€ par colis",
        "Plafond : 12,5€ à partir du 5ème colis",
        "Frais d'expédition en sus"
      ],
      headerGradient: "from-blue-500 to-blue-600",
      bgGradient: "from-blue-50/50 to-blue-100/30",
      borderColor: "border-blue-200",
      iconBg: "from-blue-400 to-blue-500",
      popular: false
    },
    {
      name: "Premium",
      subtitle: "ACHATS ACCOMPAGNÉS",
      description: "Votre personal shopper par visio Whatsapp, dans le magasin de votre choix !",
      features: [
        "Demi-journée : 50€",
        "Journée complète : 100€", 
        "Frais d'expédition en sus"
      ],
      headerGradient: "from-purple-500 to-purple-600",
      bgGradient: "from-purple-50/50 to-purple-100/30",
      borderColor: "border-purple-200",
      iconBg: "from-purple-400 to-purple-500",
      popular: true
    },
    {
      name: "Sérénité",
      subtitle: "ON S'OCCUPE DE TOUT",
      description: "Pas de carte bancaire ? Nous achetons pour vous et livrons chez vous !",
      features: [
        "Frais de service : 10% du panier",
        "Paiement et expédition par nos soins",
        "Frais d'expédition en sus"
      ],
      headerGradient: "from-emerald-500 to-emerald-600",
      bgGradient: "from-emerald-50/50 to-emerald-100/30",
      borderColor: "border-emerald-200",
      iconBg: "from-emerald-400 to-emerald-500",
      popular: false,
      badge: "Recommandé"
    }
  ]

  return (
    <section id="offres" className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-br from-orange-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse-gentle"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse-gentle" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-full blur-3xl animate-pulse-gentle" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center px-6 py-3 bg-white/70 backdrop-blur-lg rounded-full text-orange-800 text-sm font-medium mb-6 shadow-lg border border-white/20">
            <Package className="h-4 w-4 mr-2" />
            Nos offres de services
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Choisissez votre 
            <span className="block bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              formule idéale
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des solutions adaptées à chaque besoin, de l&apos;entrepreneur débutant à l&apos;entreprise établie
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`group relative backdrop-blur-lg bg-white/70 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-3 hover:scale-[1.02] border-2 ${
                plan.popular ? `${plan.borderColor} ring-2 ring-purple-200/50 scale-105` : `${plan.borderColor} hover:${plan.borderColor}`
              } overflow-hidden`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
            >
              {/* Background gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${plan.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg border-2 border-white">
                    ⭐ Plus populaire
                  </div>
                </div>
              )}

              {/* Best Offer badge */}
              {plan.badge && (
                <div className="absolute top-4 right-4 z-10">
                  <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-4 py-2 rounded-xl text-sm font-bold shadow-lg border border-white/20">
                    {plan.badge}
                  </div>
                </div>
              )}

              {/* Header */}
              <div className={`relative z-10 bg-gradient-to-br ${plan.headerGradient} p-8 text-center text-white`}>
                <div className={`w-16 h-16 bg-gradient-to-br ${plan.iconBg} rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg`}>
                  {plan.name === 'Starter' && <Package className="h-8 w-8 text-white" />}
                  {plan.name === 'Premium' && <Users className="h-8 w-8 text-white" />}
                  {plan.name === 'Sérénité' && <Heart className="h-8 w-8 text-white" />}
                </div>
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-sm opacity-90 font-medium tracking-wide">{plan.subtitle}</p>
              </div>

              {/* Content */}
              <div className="relative z-10 p-8">
                <p className="text-center mb-6 text-gray-600 leading-relaxed">{plan.description}</p>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start group/feature">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-green-400 to-green-500 flex items-center justify-center mr-3 mt-0.5">
                        <CheckCircle className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-sm text-gray-700 font-medium group-hover/feature:text-gray-900 transition-colors">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <a
                  href={`${whatsappLink}&text=${encodeURIComponent(`Bonjour, je suis intéressé par l'offre ${plan.name}. Pouvez-vous me donner plus d'informations ?`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center group/btn bg-gradient-to-r ${plan.headerGradient} text-white shadow-lg hover:shadow-xl`}
                >
                  Je veux cette offre
                  <ChevronRight className="ml-2 h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional info */}
        <div className="mt-20 text-center">
          <div className="backdrop-blur-lg bg-white/80 rounded-3xl shadow-2xl p-10 max-w-5xl mx-auto border border-white/20 relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-purple-50/30 rounded-3xl"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-gray-900 mb-8">
                Pourquoi choisir nos formules ?
              </h3>
              <div className="grid md:grid-cols-3 gap-8 text-sm text-gray-600">
                <div className="flex items-start p-4 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/30 hover:bg-white/70 transition-all duration-300">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center mr-4">
                    <Shield className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 mb-1">Transparence totale</div>
                    <div>Aucun frais caché, prix fixes</div>
                  </div>
                </div>
                <div className="flex items-start p-4 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/30 hover:bg-white/70 transition-all duration-300">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full flex items-center justify-center mr-4">
                    <Clock className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 mb-1">Engagement délais</div>
                    <div>Respect des délais annoncés</div>
                  </div>
                </div>
                <div className="flex items-start p-4 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/30 hover:bg-white/70 transition-all duration-300">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full flex items-center justify-center mr-4">
                    <Star className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 mb-1">Qualité garantie</div>
                    <div>Satisfaction ou remboursement</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    productType: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('')

    try {
      // Construction du message WhatsApp avec les données du formulaire
      const whatsappMessage = `Nouvelle demande de devis BoomXpresse:
      
Nom: ${formData.name}
Email: ${formData.email}
Téléphone: ${formData.phone}
Type de produit: ${formData.productType}

Message:
${formData.message}

Demande envoyée depuis le site web.`

      // Redirection vers WhatsApp avec le message pré-rempli
      const whatsappUrl = `https://wa.me/8617858909510?text=${encodeURIComponent(whatsappMessage)}`
      window.open(whatsappUrl, '_blank')

      // Simulation d'envoi d'email (pour feedback utilisateur)
      setTimeout(() => {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', phone: '', productType: '', message: '' })
        setIsSubmitting(false)
      }, 1000)

    } catch (error) {
      setSubmitStatus('error')
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-orange-900 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-orange-400 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 border border-orange-300 rounded-full"></div>
        <div className="absolute top-40 right-40 w-16 h-16 bg-orange-500 rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center px-4 py-2 bg-orange-500/20 rounded-full text-orange-300 text-sm font-medium mb-6">
            <Phone className="h-4 w-4 mr-2" />
            Contactez-nous
          </div>
          <h2 className="text-4xl font-bold mb-4">Prêt à commencer ?</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Notre équipe est là pour vous accompagner dans votre projet d&apos;import.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="animate-slide-up">
            <h3 className="text-2xl font-semibold mb-8">Informations de contact</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm">
                <div className="p-3 bg-orange-500 rounded-lg">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-orange-300">Téléphone</p>
                  <p className="text-gray-300"><a href="tel:+8617858909510">+86 178 5890 9510</a></p>
                  <p className="text-sm text-gray-400">Lun-Ven 9h-18h</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm">
                <div className="p-3 bg-orange-500 rounded-lg">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-orange-300">Email</p>
                  <p className="text-gray-300">boomxpresse@yahoo.com</p>
                  <p className="text-sm text-gray-400">Réponse sous 24h</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm">
                <div className="p-3 bg-orange-500 rounded-lg">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-orange-300">Adresse</p>
                  <p className="text-gray-300">Chine</p>
                </div>
              </div>
            </div>

            {/* CTA Banner */}
            <div className="mt-8 p-6 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl">
              <h4 className="text-xl font-semibold mb-2">Devis gratuit en 24h</h4>
              <p className="text-orange-100 mb-4">Décrivez votre projet et recevez une estimation personnalisée</p>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="bg-white text-orange-600 px-6 py-2 rounded-full font-semibold hover:bg-orange-50 transition-colors inline-block">
                Obtenir mon devis
              </a>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="animate-slide-up">
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20">
              <h3 className="text-2xl font-semibold mb-6">Demande de devis</h3>
              
              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-300">
                  ✅ Votre demande a été envoyée avec succès ! Nous vous contacterons rapidement.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-500/20 border border-red-500 rounded-lg text-red-300">
                  ❌ Une erreur s&apos;est produite. Veuillez réessayer ou nous contacter directement.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Votre nom *"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Votre email *"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>
                
                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Votre téléphone"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  />
                </div>
                
                <div>
                  <select 
                    name="productType"
                    value={formData.productType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  >
                    <option value="" className="text-gray-900">Type de produit</option>
                    <option value="electronique" className="text-gray-900">Électronique</option>
                    <option value="textile" className="text-gray-900">Textile</option>
                    <option value="maison" className="text-gray-900">Maison & Jardin</option>
                    <option value="automobile" className="text-gray-900">Automobile</option>
                    <option value="autre" className="text-gray-900">Autre</option>
                  </select>
                </div>
                
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Décrivez votre projet d'import *"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all resize-none"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 disabled:from-gray-500 disabled:to-gray-600 disabled:cursor-not-allowed text-white px-6 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 disabled:hover:scale-100 shadow-lg"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Envoi en cours...
                    </span>
                  ) : (
                    'Envoyer ma demande'
                  )}
                </button>
                
                <p className="text-sm text-gray-400 text-center">
                  * Champs obligatoires - Vos données sont protégées et ne seront jamais partagées
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">B</span>
              </div>
              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                  BoomXpresse
                </h3>
                <p className="text-xs text-gray-400">DELIVERY SERVICE</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-4">
              Votre partenaire de confiance pour l&apos;import de produits chinois. 
              Nous facilitons vos achats internationaux avec un service professionnel et sécurisé.
            </p>
            <div className="flex items-center space-x-4">
              <a href="https://www.facebook.com/boomxpresse" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-10 h-10 rounded-full flex items-center justify-center bg-white hover:scale-105 hover:shadow-lg transition-transform">
                <FaFacebookF size={22} color="#1877F2" />
              </a>
              <a href="https://www.linkedin.com/company/boomxpresse" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-10 h-10 rounded-full flex items-center justify-center bg-white hover:scale-105 hover:shadow-lg transition-transform">
                <FaLinkedinIn size={22} color="#0A66C2" />
              </a>
              <a href="mailto:boomxpresse@yahoo.com" aria-label="Email" className="w-10 h-10 rounded-full flex items-center justify-center bg-white hover:scale-105 hover:shadow-lg transition-transform">
                <FaEnvelope size={22} color="#D44638" />
              </a>
              <a href="https://www.snapchat.com/add/boomxpresse" target="_blank" rel="noopener noreferrer" aria-label="Snapchat" className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#FFFC00] hover:scale-105 hover:shadow-lg transition-transform">
                <SiSnapchat size={22} color="#000" />
              </a>
              <a href="https://www.instagram.com/boomxpresse" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] hover:scale-105 hover:shadow-lg transition-transform">
                <SiInstagram size={22} color="#fff" />
              </a>
              <a href="https://www.tiktok.com/@boomxpresse" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="w-10 h-10 rounded-full flex items-center justify-center bg-[#181c23] hover:scale-105 hover:shadow-lg transition-transform">
                <SiTiktok size={22} color="#25F4EE" />
              </a>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="font-semibold text-orange-400 mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-orange-400 transition-colors cursor-pointer">Sourcing produits</li>
              <li className="hover:text-orange-400 transition-colors cursor-pointer">Contrôle qualité</li>
              <li className="hover:text-orange-400 transition-colors cursor-pointer">Transport maritime</li>
              <li className="hover:text-orange-400 transition-colors cursor-pointer">Dédouanement</li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-semibold text-orange-400 mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="tel:+8617858909510">+86 178 5890 9510</a></li>
              <li>boomxpresse@yahoo.com</li>
              <li>Chine, Yiwu</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>© 2025 BoomXpresse. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}

export default function HomePage() {
  useEffect(() => {
    // Smooth scroll behavior for anchor links
    const handleAnchorClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement
      if (target.href && target.href.includes('#')) {
        e.preventDefault()
        const id = target.href.split('#')[1]
        const element = document.getElementById(id)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }

    document.addEventListener('click', handleAnchorClick)
    return () => document.removeEventListener('click', handleAnchorClick)
  }, [])

  return (
    <main className="overflow-x-hidden">
      {/* Données structurées pour le SEO */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "BoomXpresse",
            "alternateName": "boom xpresse",
            "description": "BoomXpresse, expert en import depuis la Chine vers l'Afrique. Transport aérien et maritime, sourcing, contrôle qualité, dédouanement.",
            "url": "https://boomxpresse.com",
            "telephone": "+86-178-5890-9510",
            "email": "boomxpresse@yahoo.com",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Paris",
              "addressCountry": "FR"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "48.8566",
              "longitude": "2.3522"
            },
            "openingHours": "Mo-Su 00:00-23:59",
            "priceRange": "€€",
            "serviceArea": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": "0",
                "longitude": "0"
              },
              "geoRadius": "20000000"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Services BoomXpresse",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Transport aérien Chine-Afrique",
                    "description": "Transport aérien express et standard depuis la Chine vers l'Afrique"
                  }
                },
                {
                  "@type": "Offer", 
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Transport maritime Chine-Afrique",
                    "description": "Transport maritime conteneur depuis la Chine vers l'Afrique"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service", 
                    "name": "Sourcing produits chinois",
                    "description": "Recherche et sélection de fournisseurs en Chine"
                  }
                }
              ]
            },
            "sameAs": [
              "https://www.facebook.com/boomxpresse",
              "https://www.linkedin.com/company/boomxpresse", 
              "https://www.instagram.com/boomxpresse"
            ]
          })
        }}
      />
      
      <PromoBanner />
      <Header />
      <Hero />
      <Services />
      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />
      <PricingPlans />
      <Contact />
      <Footer />
      <WhatsAppWidget />
    </main>
  )
}