'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Plane, Ship, Calculator, MapPin, Clock, Package, DollarSign, CheckCircle } from 'lucide-react'

// Tarifs transport aérien
const aerienTarifs = {
  afrique: {
    express: {
      pays: ['Côte d\'Ivoire', 'Bénin', 'Togo', 'Cameroun', 'Sénégal', 'Mali', 'Ghana', 'Burkina Faso', 'Guinée', 'Tchad', 'Maroc', 'Algérie', 'Tunisie','Egypte','Nigeria','Niger'],
      prix: 11900,
      delai: '1 à 4 jours',
      unite: 'FCFA/kg'
    },
    standard: {
      pays: ['Côte d&apos;Ivoire', 'Bénin', 'Togo', 'Cameroun', 'Sénégal', 'Mali', 'Ghana', 'Burkina Faso', 'Guinée', 'Tchad', 'Maroc', 'Algérie', 'Tunisie','Egypte','Nigeria','Niger'],
      prix: 9900,
      delai: '10 à 15 jours',
      unite: 'FCFA/kg'
    }
  }
}

// Tarifs transport maritime
const maritimeTarifs = {
  afrique: {
    prix: 210500,
    delai: '40 à 60 jours',
    unite: 'FCFA/CBM'
  }
}

const CalculateurDevis = () => {
  const [formData, setFormData] = useState({
    typeTransport: 'aerien',
    pays: '',
    typeAerien: 'standard',
    poids: '',
    volume: '',
    produit: '',
    quantite: ''
  })
  const [resultat, setResultat] = useState<{estimation: number, details: string} | null>(null)

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const calculerDevis = () => {
    let estimation = 0
    let details = ''

    if (formData.typeTransport === 'aerien') {
      const poids = parseFloat(formData.poids) || 0
      if (formData.typeAerien === 'express') {
        estimation = poids * aerienTarifs.afrique.express.prix
        details = `Transport aérien express vers ${formData.pays} - ${aerienTarifs.afrique.express.delai}`
      } else {
        estimation = poids * aerienTarifs.afrique.standard.prix
        details = `Transport aérien standard vers ${formData.pays} - ${aerienTarifs.afrique.standard.delai}`
      }
    } else if (formData.typeTransport === 'maritime') {
      const volume = parseFloat(formData.volume) || 0
      estimation = volume * maritimeTarifs.afrique.prix
      details = `Transport maritime vers ${formData.pays} - ${maritimeTarifs.afrique.delai}`
    }

    setResultat({ estimation, details })
  }

  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
      <div className="flex items-center mb-6">
        <Calculator className="h-6 w-6 text-orange-500 mr-3" />
        <h3 className="text-2xl font-bold text-gray-900">Calculateur de Devis</h3>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Formulaire */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-black mb-2">Type de transport</label>
            <select
              name="typeTransport"
              value={formData.typeTransport}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-black"
            >
              <option value="aerien">Transport Aérien</option>
              <option value="maritime">Transport Maritime</option>
            </select>
          </div>



          <div>
            <label className="block text-sm font-medium text-black mb-2">Pays de destination</label>
            <select
              name="pays"
              value={formData.pays}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-black"
            >
              <option value="">Sélectionner un pays</option>
              <option value="Côte d&apos;Ivoire">Côte d&apos;Ivoire</option>
              <option value="Bénin">Bénin</option>
              <option value="Togo">Togo</option>
              <option value="Cameroun">Cameroun</option>
              <option value="Sénégal">Sénégal</option>
              <option value="Mali">Mali</option>
              <option value="Ghana">Ghana</option>
              <option value="Burkina Faso">Burkina Faso</option>
              <option value="Guinée">Guinée</option>
              <option value="Tchad">Tchad</option>
              <option value="Maroc">Maroc</option>
              <option value="Algérie">Algérie</option>
              <option value="Tunisie">Tunisie</option>
              <option value="Egypte">Egypte</option>
              <option value="Nigeria">Nigeria</option>
              <option value="Niger">Niger</option>
            </select>
          </div>

          {formData.typeTransport === 'aerien' && (
            <div>
              <label className="block text-sm font-medium text-black mb-2">Type de service aérien</label>
              <select
                name="typeAerien"
                value={formData.typeAerien}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-black"
              >
                <option value="standard">Standard (9,900 FCFA/kg)</option>
                <option value="express">Express (11,900 FCFA/kg)</option>
              </select>
            </div>
          )}

          {formData.typeTransport === 'aerien' && (
            <div>
              <label className="block text-sm font-medium text-black mb-2">Poids total (kg)</label>
              <input
                type="number"
                name="poids"
                value={formData.poids}
                onChange={handleChange}
                placeholder="Ex: 50"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-black"
              />
            </div>
          )}

          {formData.typeTransport === 'maritime' && (
            <div>
              <label className="block text-sm font-medium text-black mb-2">Volume (CBM)</label>
              <input
                type="number"
                name="volume"
                value={formData.volume}
                onChange={handleChange}
                placeholder="Ex: 2.5"
                step="0.1"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-black"
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-black mb-2">Type de produit</label>
            <input
              type="text"
              name="produit"
              value={formData.produit}
              onChange={handleChange}
              placeholder="Ex: Électronique, Textile..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-black"
            />
          </div>

          <button
            onClick={calculerDevis}
            className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-4 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all transform hover:scale-105"
          >
            Calculer le devis
          </button>
        </div>

        {/* Résultats */}
        <div className="bg-gray-50 p-6 rounded-xl">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Estimation de coût</h4>
          
          {resultat ? (
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg border border-orange-200">
                <div className="flex items-center mb-2">
                  <DollarSign className="h-5 w-5 text-orange-500 mr-2" />
                  <span className="font-medium">Coût estimé</span>
                </div>
                <div className="text-2xl font-bold text-orange-600">
                  {resultat.estimation > 0 ? `${resultat.estimation.toLocaleString()} FCFA` : 'Sur devis'}
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <div className="flex items-center mb-2">
                  <Clock className="h-5 w-5 text-gray-500 mr-2" />
                  <span className="font-medium">Détails</span>
                </div>
                <p className="text-gray-700">{resultat.details}</p>
              </div>

              <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                <p className="text-sm text-orange-700">
                  ⚠️ Cette estimation est indicative. Le prix final peut varier selon la nature exacte des produits, 
                  les formalités douanières et les conditions du marché.
                </p>
              </div>
            </div>
          ) : (
            <div className="text-center text-gray-500 py-8">
              <Calculator className="h-12 w-12 mx-auto mb-4 text-gray-300" />
              <p>Remplissez le formulaire pour obtenir une estimation</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default function DevisPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-br from-orange-600 via-orange-500 to-orange-700 text-white py-16">
        <div className="container mx-auto px-4">
          <Link href="/" className="inline-flex items-center text-orange-100 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Retour à l&apos;accueil
          </Link>
          
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Tarifs & Devis Transport
          </h1>
          <p className="text-xl text-orange-100 max-w-2xl">
            Découvrez nos tarifs transparents pour le transport aérien et maritime depuis la Chine
          </p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        {/* Calculateur de devis */}
        <div className="mb-12">
          <CalculateurDevis />
        </div>

        {/* Grille des tarifs */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Transport Aérien */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6">
              <div className="flex items-center">
                <Plane className="h-8 w-8 mr-3" />
                <h2 className="text-2xl font-bold">Transport Aérien</h2>
              </div>
              <p className="text-blue-100 mt-2">Livraison rapide et sécurisée</p>
            </div>

            <div className="p-6 space-y-6">
              {/* Zone Afrique */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <MapPin className="h-5 w-5 text-orange-500 mr-2" />
                  Zone Afrique
                </h3>
                
                {/* Express */}
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-red-700">Service Express</h4>
                    <span className="bg-red-100 text-red-700 text-xs px-2 py-1 rounded-full">RAPIDE</span>
                  </div>
                  <div className="text-2xl font-bold text-red-600 mb-2">11,900 FCFA/kg</div>
                  <div className="flex items-center text-sm text-red-600 mb-2">
                    <Clock className="h-4 w-4 mr-1" />
                    1 à 4 jours
                  </div>
                  <div className="text-sm text-gray-600">
                    Destinations : Côte d&apos;Ivoire, Bénin, Togo, Cameroun, Sénégal, Mali, Ghana, Burkina Faso, Guinée, Tchad, Maroc, Algérie, Tunisie, Egypte, Nigeria, Niger
                  </div>
                </div>

                {/* Standard */}
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-green-700">Service Standard</h4>
                    <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">ÉCONOMIQUE</span>
                  </div>
                  <div className="text-2xl font-bold text-green-600 mb-2">9,900 FCFA/kg</div>
                  <div className="flex items-center text-sm text-green-600 mb-2">
                    <Clock className="h-4 w-4 mr-1" />
                    10 à 15 jours
                  </div>
                  <div className="text-sm text-gray-600">
                    Destinations : Côte d&apos;Ivoire, Bénin, Togo, Cameroun, Sénégal, Mali, Ghana, Burkina Faso, Guinée, Tchad, Maroc, Algérie, Tunisie, Egypte, Nigeria, Niger
                  </div>
                </div>
              </div>

              {/* Zone Internationale */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <MapPin className="h-5 w-5 text-blue-500 mr-2" />
                  Zone Internationale
                </h3>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-blue-700">Tarifs sur devis</h4>
                    <a
                      href="https://wa.me/8617858909510?text=Bonjour%2C%20je%20souhaite%20obtenir%20un%20devis%20pour%20le%20transport%20a%C3%A9rien%20vers%20une%20destination%20internationale.%20Merci%20de%20me%20contacter."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-full text-xs font-medium transition-colors flex items-center"
                    >
                      📱 WhatsApp
                    </a>
                  </div>
                  <div className="text-sm text-gray-600 mb-2">
                    Destinations : France, Canada, USA, Dubaï, Turquie
                  </div>
                  <div className="flex items-center text-sm text-blue-600">
                    <CheckCircle className="h-4 w-4 mr-1" />
                    Devis personnalisé selon destination
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
                <h2 className="text-2xl font-bold">Transport Maritime</h2>
              </div>
              <p className="text-blue-100 mt-2">Solution économique pour gros volumes</p>
            </div>

            <div className="p-6 space-y-6">
              {/* Zone Afrique */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <MapPin className="h-5 w-5 text-orange-500 mr-2" />
                  Zone Afrique
                </h3>
                
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                  <h4 className="font-semibold text-orange-700 mb-2">Tarif conteneur</h4>
                  <div className="text-2xl font-bold text-orange-600 mb-2">À partir de 210,500 FCFA/CBM</div>
                  <div className="flex items-center text-sm text-orange-600 mb-2">
                    <Clock className="h-4 w-4 mr-1" />
                    40 à 60 jours
                  </div>
                  <div className="text-sm text-gray-600">
                    Côte d&apos;Ivoire, Bénin, Togo, Cameroun, Sénégal, Mali, Ghana, Burkina Faso, Guinée, Tchad, Maroc, Algérie, Tunisie, Egypte, Nigeria, Niger
                  </div>
                </div>
              </div>



              {/* Zone Internationale */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <MapPin className="h-5 w-5 text-blue-500 mr-2" />
                  Zone Internationale
                </h3>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-blue-700">Tarifs sur devis</h4>
                    <a
                      href="https://wa.me/8617858909510?text=Bonjour%2C%20je%20souhaite%20obtenir%20un%20devis%20pour%20le%20transport%20maritime%20vers%20une%20destination%20internationale.%20Merci%20de%20me%20contacter."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-full text-xs font-medium transition-colors flex items-center"
                    >
                      📱 WhatsApp
                    </a>
                  </div>
                  <div className="text-sm text-gray-600 mb-2">
                    Destinations : France, Canada, USA, Dubaï, Turquie
                  </div>
                  <div className="flex items-center text-sm text-blue-600">
                    <CheckCircle className="h-4 w-4 mr-1" />
                    Devis selon volume et destination
                  </div>
                </div>
              </div>

              {/* Avantages transport maritime */}
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium text-gray-900 mb-2">Avantages</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Idéal pour gros volumes
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Coût réduit au CBM
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Assurance complète incluse
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Informations supplémentaires */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Informations importantes</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Services inclus</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  Enlèvement chez le fournisseur en Chine
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  Emballage et protection des marchandises
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  Formalités douanières export Chine
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  Transport international
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  Suivi en temps réel
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Services optionnels</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <Package className="h-5 w-5 text-orange-500 mr-3" />
                  Dédouanement import destination
                </li>
                <li className="flex items-center">
                  <Package className="h-5 w-5 text-orange-500 mr-3" />
                  Livraison à domicile
                </li>
                <li className="flex items-center">
                  <Package className="h-5 w-5 text-orange-500 mr-3" />
                  Assurance marchandises
                </li>
                <li className="flex items-center">
                  <Package className="h-5 w-5 text-orange-500 mr-3" />
                  Stockage temporaire
                </li>
                <li className="flex items-center">
                  <Package className="h-5 w-5 text-orange-500 mr-3" />
                  Inspection qualité
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 p-6 bg-orange-50 rounded-xl border border-orange-200">
            <h4 className="font-semibold text-orange-800 mb-2">📋 Comment obtenir un devis précis ?</h4>
            <p className="text-orange-700 mb-4">
              Pour un devis détaillé et personnalisé, contactez-nous avec les informations suivantes :
            </p>
            <ul className="text-sm text-orange-600 space-y-1">
              <li>• Nature exacte des produits</li>
              <li>• Poids et dimensions</li>
              <li>• Quantités</li>
              <li>• Destination finale</li>
              <li>• Services souhaités</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}