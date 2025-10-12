'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Plane, Ship, Calculator, MapPin, Clock, Package, DollarSign, CheckCircle, ChevronRight } from 'lucide-react'

// Air transport rates
const aerienTarifs = {
  afrique: {
    express: {
      pays: ['Ivory Coast', 'Benin', 'Togo'],
      prix: 11900,
      delai: '1 to 4 days',
      unite: 'CFA/kg'
    },
    standard: {
      pays: ['Ivory Coast', 'Benin', 'Togo'],
      prix: 9900,
      delai: '10 to 15 days',
      unite: 'CFA/kg'
    }
  },
  international: {
    pays: ['France', 'Canada', 'USA', 'Dubai'],
    prix: 'On quote',
    delai: 'Variable',
    unite: ''
  }
}

// Sea transport rates
const maritimeTarifs = {
  afrique: {
    prix: 210500,
    delai: '40 to 60 days',
    unite: 'CFA/CBM'
  },
  international: {
    prix: 'On quote',
    delai: 'Variable',
    unite: ''
  }
}

export default function DevisPageEN() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-br from-orange-600 via-orange-500 to-orange-700 text-white py-16">
        <div className="container mx-auto px-4">
          <Link href="/en" className="inline-flex items-center text-orange-100 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to home
          </Link>
          
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Transport Rates & Quotes
          </h1>
          <p className="text-xl text-orange-100 max-w-2xl">
            Discover our transparent rates for air and sea transport from China
          </p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        {/* Grille des tarifs */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Transport Aérien */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6">
              <div className="flex items-center">
                <Plane className="h-8 w-8 mr-3" />
                <h2 className="text-2xl font-bold">Air Transport</h2>
              </div>
              <p className="text-blue-100 mt-2">Fast and secure delivery</p>
            </div>

            <div className="p-6 space-y-6">
              {/* Zone Afrique */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <MapPin className="h-5 w-5 text-orange-500 mr-2" />
                  Africa Zone
                </h3>
                
                {/* Express */}
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-red-700">Express Service</h4>
                    <span className="bg-red-100 text-red-700 text-xs px-2 py-1 rounded-full">FAST</span>
                  </div>
                  <div className="text-2xl font-bold text-red-600 mb-2">11,900 CFA/kg</div>
                  <div className="flex items-center text-sm text-red-600 mb-2">
                    <Clock className="h-4 w-4 mr-1" />
                    1 to 4 days
                  </div>
                  <div className="text-sm text-gray-600">
                    Destinations: Ivory Coast, Benin, Togo
                  </div>
                </div>

                {/* Standard */}
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-green-700">Standard Service</h4>
                    <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">ECONOMICAL</span>
                  </div>
                  <div className="text-2xl font-bold text-green-600 mb-2">9,900 CFA/kg</div>
                  <div className="flex items-center text-sm text-green-600 mb-2">
                    <Clock className="h-4 w-4 mr-1" />
                    10 to 15 days
                  </div>
                  <div className="text-sm text-gray-600">
                    Destinations: Ivory Coast, Benin, Togo
                  </div>
                </div>
              </div>

              {/* Zone Internationale */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <MapPin className="h-5 w-5 text-blue-500 mr-2" />
                  International Zone
                </h3>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-700 mb-2">Rates on quote</h4>
                  <div className="text-sm text-gray-600 mb-2">
                    Destinations: France, Canada, USA, Dubai
                  </div>
                  <div className="flex items-center text-sm text-blue-600">
                    <CheckCircle className="h-4 w-4 mr-1" />
                    Customized quote by destination
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Transport Maritime */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-blue-700 to-blue-800 text-white p-6">
              <div className="flex items-center">
                <Ship className="h-8 w-8 mr-3" />
                <h2 className="text-2xl font-bold">Sea Transport</h2>
              </div>
              <p className="text-blue-100 mt-2">Economical solution for large volumes</p>
            </div>

            <div className="p-6 space-y-6">
              {/* Zone Afrique */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <MapPin className="h-5 w-5 text-orange-500 mr-2" />
                  Africa Zone
                </h3>
                
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                  <h4 className="font-semibold text-orange-700 mb-2">Container rate</h4>
                  <div className="text-2xl font-bold text-orange-600 mb-2">From 210,500 CFA/CBM</div>
                  <div className="flex items-center text-sm text-orange-600 mb-2">
                    <Clock className="h-4 w-4 mr-1" />
                    40 to 60 days
                  </div>
                  <div className="text-sm text-gray-600">
                    All West African countries
                  </div>
                </div>
              </div>

              {/* Zone Internationale */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <MapPin className="h-5 w-5 text-blue-500 mr-2" />
                  International Zone
                </h3>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-700 mb-2">Rates on quote</h4>
                  <div className="text-sm text-gray-600 mb-2">
                    All worldwide destinations
                  </div>
                  <div className="flex items-center text-sm text-blue-600">
                    <CheckCircle className="h-4 w-4 mr-1" />
                    Quote based on volume and destination
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Get Your Custom Quote</h2>
          <p className="text-orange-100 mb-6 max-w-2xl mx-auto">
            Contact us with your specific requirements for a detailed and personalized quote
          </p>
          <Link href="/en#contact" className="bg-white text-orange-600 px-8 py-4 rounded-full font-semibold hover:bg-orange-50 transition-colors inline-flex items-center">
            Contact us now
            <ChevronRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  )
}