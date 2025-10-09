export const translations = {
  fr: {
    nav: {
      home: "Accueil",
      services: "Services",
      howItWorks: "Comment ça marche",
      whyUs: "Pourquoi nous",
      testimonials: "Témoignages",
      contact: "Contact",
      freeQuote: "Devis gratuit"
    },
    hero: {
      badge: "Logistique internationale depuis 2020",
      title: "Importez depuis la",
      titleHighlight: "Chine facilement",
      subtitle: "BoomXpresse vous accompagne dans l'achat et la livraison de produits chinois partout dans le monde. Service rapide, fiable et sécurisé avec suivi en temps réel.",
      cta: "Commencer maintenant",
      demo: "Voir comment ça marche",
      trustRating: "4.9/5",
      trustDeliveries: "1000+ livraisons",
      trustCountries: "50+ pays"
    },
    services: {
      title: "Nos Services",
      subtitle: "Une solution complète pour tous vos besoins d'import depuis la Chine",
      sourcing: {
        title: "Sourcing de produits",
        description: "Nous trouvons les meilleurs fournisseurs chinois pour vos besoins spécifiques."
      },
      quality: {
        title: "Contrôle qualité",
        description: "Inspection rigoureuse de tous les produits avant expédition."
      },
      logistics: {
        title: "Logistique internationale", 
        description: "Transport sécurisé et suivi en temps réel jusqu'à votre porte."
      },
      customs: {
        title: "Dédouanement",
        description: "Gestion complète des formalités douanières dans tous les pays."
      }
    },
    contact: {
      title: "Prêt à commencer ?",
      subtitle: "Notre équipe est là pour vous accompagner dans votre projet d'import.",
      phone: "Téléphone",
      email: "Email",
      address: "Adresse",
      schedule: "Lun-Ven 9h-18h",
      response: "Réponse sous 24h",
      location: "Paris, France"
    }
  },
  en: {
    nav: {
      home: "Home",
      services: "Services", 
      howItWorks: "How it works",
      whyUs: "Why us",
      testimonials: "Testimonials",
      contact: "Contact",
      freeQuote: "Free Quote"
    },
    hero: {
      badge: "International logistics since 2020",
      title: "Import from",
      titleHighlight: "China easily",
      subtitle: "BoomXpresse assists you in purchasing and delivering Chinese products worldwide. Fast, reliable and secure service with real-time tracking.",
      cta: "Get started now",
      demo: "See how it works",
      trustRating: "4.9/5",
      trustDeliveries: "1000+ deliveries",
      trustCountries: "50+ countries"
    },
    services: {
      title: "Our Services",
      subtitle: "A complete solution for all your import needs from China",
      sourcing: {
        title: "Product sourcing",
        description: "We find the best Chinese suppliers for your specific needs."
      },
      quality: {
        title: "Quality control",
        description: "Rigorous inspection of all products before shipment."
      },
      logistics: {
        title: "International logistics",
        description: "Secure transport and real-time tracking to your door."
      },
      customs: {
        title: "Customs clearance",
        description: "Complete management of customs formalities in all countries."
      }
    },
    contact: {
      title: "Ready to start?",
      subtitle: "Our team is here to support you in your import project.",
      phone: "Phone",
      email: "Email", 
      address: "Address",
      schedule: "Mon-Fri 9am-6pm",
      response: "Response within 24h",
      location: "Paris, France"
    }
  },
  zh: {
    nav: {
      home: "首页",
      services: "服务",
      howItWorks: "运作方式",
      whyUs: "为什么选择我们",
      testimonials: "客户评价",
      contact: "联系我们",
      freeQuote: "免费报价"
    },
    hero: {
      badge: "自2020年以来的国际物流",
      title: "轻松从",
      titleHighlight: "中国进口",
      subtitle: "BoomXpresse协助您在全球范围内采购和交付中国产品。快速、可靠和安全的服务，实时跟踪。",
      cta: "立即开始",
      demo: "查看运作方式",
      trustRating: "4.9/5",
      trustDeliveries: "1000+次交付",
      trustCountries: "50+个国家"
    },
    services: {
      title: "我们的服务",
      subtitle: "满足您从中国进口所有需求的完整解决方案",
      sourcing: {
        title: "产品采购",
        description: "我们为您的特定需求找到最好的中国供应商。"
      },
      quality: {
        title: "质量控制",
        description: "发货前对所有产品进行严格检查。"
      },
      logistics: {
        title: "国际物流",
        description: "安全运输和实时跟踪到您的门前。"
      },
      customs: {
        title: "清关",
        description: "在所有国家完整管理海关手续。"
      }
    },
    contact: {
      title: "准备开始了吗？",
      subtitle: "我们的团队将在您的进口项目中为您提供支持。",
      phone: "电话",
      email: "邮箱",
      address: "地址", 
      schedule: "周一至周五 9:00-18:00",
      response: "24小时内回复",
      location: "巴黎，法国"
    }
  }
}

export type Language = keyof typeof translations
export type TranslationKey = keyof typeof translations.fr