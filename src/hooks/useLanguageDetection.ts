'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

const useLanguageDetection = () => {
  const router = useRouter()

  useEffect(() => {
    const detectAndRedirect = async () => {
      try {
        // Check if we've already detected the language for this session
        const hasDetected = sessionStorage.getItem('languageDetected')
        if (hasDetected) return

        // Check stored preference first
        const storedLang = localStorage.getItem('preferredLanguage')
        if (storedLang && storedLang !== 'fr') {
          sessionStorage.setItem('languageDetected', 'true')
          if (storedLang === 'en') router.push('/en')
          if (storedLang === 'zh') router.push('/zh')
          return
        }

        // Try IP-based geolocation detection with timeout
        try {
          const controller = new AbortController()
          const timeoutId = setTimeout(() => controller.abort(), 3000)

          const response = await fetch('https://ipapi.co/json/', {
            signal: controller.signal
          })
          
          clearTimeout(timeoutId)
          
          if (response.ok) {
            const data = await response.json()
            const country = data.country_code?.toLowerCase()
            
            let targetLang = 'fr' // default
            let targetPath = '/'

            // English-speaking countries
            if (['us', 'gb', 'ca', 'au', 'nz', 'ie', 'za'].includes(country)) {
              targetLang = 'en'
              targetPath = '/en'
            }
            // Chinese-speaking countries/regions
            else if (['cn', 'tw', 'hk', 'sg'].includes(country)) {
              targetLang = 'zh'
              targetPath = '/zh'
            }

            // Store the detected language
            localStorage.setItem('preferredLanguage', targetLang)
            sessionStorage.setItem('languageDetected', 'true')

            // Redirect if not French
            if (targetLang !== 'fr') {
              router.push(targetPath)
            }
            return
          }
        } catch (geoError) {
          console.log('Geolocation detection failed, trying browser language')
        }

        // Fallback to browser language detection
        const browserLang = navigator.language.toLowerCase()
        let targetLang = 'fr'
        let targetPath = '/'

        if (browserLang.startsWith('en')) {
          targetLang = 'en'
          targetPath = '/en'
        } else if (browserLang.startsWith('zh')) {
          targetLang = 'zh'
          targetPath = '/zh'
        }

        // Store and redirect
        localStorage.setItem('preferredLanguage', targetLang)
        sessionStorage.setItem('languageDetected', 'true')
        
        if (targetLang !== 'fr') {
          router.push(targetPath)
        }

      } catch (error) {
        console.log('Language detection failed, using default (French)')
        sessionStorage.setItem('languageDetected', 'true')
      }
    }

    // Only run on client-side and for root path
    if (typeof window !== 'undefined' && window.location.pathname === '/') {
      detectAndRedirect()
    }
  }, [router])
}

export default useLanguageDetection