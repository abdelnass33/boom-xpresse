'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Calendar, Clock, User, Tag, Search, ChevronRight } from 'lucide-react'

// Données d'exemple pour les articles de blog
const blogPosts = [
  {
    id: 1,
    title: "Comment réussir son premier import depuis la Chine en 2025",
    excerpt: "Guide complet pour les débutants : de la recherche de fournisseurs aux formalités douanières.",
    content: `
# Comment réussir son premier import depuis la Chine en 2025

L'import depuis la Chine peut sembler complexe pour un débutant, mais avec les bons conseils, c'est un processus accessible et rentable.

## 1. Recherche et sélection de fournisseurs

### Plateformes recommandées :
- **Alibaba** : La plus connue, idéale pour débuter
- **Made-in-China** : Alternative avec moins de concurrence
- **Global Sources** : Pour des produits plus haut de gamme

### Critères de sélection :
- Ancienneté du fournisseur (minimum 3 ans)
- Certifications (ISO, CE, FDA selon le produit)
- Échantillons de qualité
- Communication fluide en anglais

## 2. Négociation et commande

### Points clés :
- Prix FOB (Free On Board) pour plus de contrôle
- Délais de production réalistes
- Conditions de paiement sécurisées (30% avance, 70% avant expédition)
- Spécifications techniques détaillées

## 3. Contrôle qualité

Nous recommandons toujours une inspection avant expédition :
- Inspection visuelle des produits
- Tests de fonctionnement
- Vérification des quantités
- Photos et rapport détaillé

## 4. Logistique et transport

### Options de transport :
- **Transport maritime** : Économique pour gros volumes (20-40 jours)
- **Transport aérien** : Rapide mais plus cher (5-10 jours)
- **Express** : Très rapide pour échantillons (3-7 jours)

## 5. Dédouanement et réception

Les formalités incluent :
- Déclaration en douane
- Paiement des droits et taxes
- Contrôles sanitaires si nécessaire
- Livraison finale

## Conclusion

Avec BoomXpresse, nous gérons toutes ces étapes pour vous. Contactez-nous pour un accompagnement personnalisé !
    `,
    author: "Équipe BoomXpresse",
    date: "2025-01-05",
    readTime: "8 min",
    category: "Guide Import",
    image: "/images/blog/import-guide.jpg",
    tags: ["Import", "Chine", "Guide", "Débutant"]
  },
  {
    id: 2,
    title: "Les 10 erreurs à éviter lors de l'import depuis la Chine",
    excerpt: "Découvrez les pièges les plus courants et comment les éviter pour réussir vos importations.",
    content: `
# Les 10 erreurs à éviter lors de l'import depuis la Chine

Basé sur notre expérience de plus de 1000 importations réussies, voici les erreurs les plus fréquentes.

## 1. Ne pas demander d'échantillons

**L'erreur :** Commander directement sans tester le produit.
**La solution :** Toujours demander 2-3 échantillons de fournisseurs différents.

## 2. Choisir le fournisseur le moins cher

**L'erreur :** Se focaliser uniquement sur le prix.
**La solution :** Évaluer le rapport qualité-prix et la fiabilité.

## 3. Négliger les certifications

**L'erreur :** Oublier les normes CE, FDA, FCC selon le marché de destination.
**La solution :** Vérifier les exigences réglementaires avant la commande.

## 4. Mauvaise communication des spécifications

**L'erreur :** Descriptions vagues ou incomplètes.
**La solution :** Fournir des dessins techniques, photos, et spécifications détaillées.

## 5. Paiement intégral avant production

**L'erreur :** Payer 100% avant la fabrication.
**La solution :** Négocier 30% d'avance, 70% avant expédition.

## 6. Ignorer la protection intellectuelle

**L'erreur :** Ne pas protéger ses designs ou marques.
**La solution :** Déposer ses droits avant de partager les informations.

## 7. Sous-estimer les délais

**L'erreur :** Compter uniquement le temps de production.
**La solution :** Ajouter le transport, dédouanement et aléas (+15-20 jours).

## 8. Négliger l'emballage

**L'erreur :** Accepter l'emballage standard du fournisseur.
**La solution :** Spécifier l'emballage selon vos besoins de revente.

## 9. Mauvais calcul des coûts totaux

**L'erreur :** Oublier transport, assurance, droits de douane, TVA.
**La solution :** Calculer le coût "landed" (rendu destination).

## 10. Pas de plan B

**L'erreur :** Dépendre d'un seul fournisseur.
**La solution :** Identifier 2-3 fournisseurs alternatifs.

## Conclusion

Avec BoomXpresse, vous bénéficiez de notre expertise pour éviter tous ces pièges !
    `,
    author: "Sarah Chen",
    date: "2025-01-10",
    readTime: "6 min",
    category: "Conseils",
    image: "/images/blog/avoid-mistakes.jpg",
    tags: ["Erreurs", "Conseils", "Import", "Expérience"]
  },
  {
    id: 3,
    title: "Nouvelles réglementations douanières 2025 : ce qui change",
    excerpt: "Mise à jour des procédures douanières et impact sur vos importations depuis l'Asie.",
    content: `
# Nouvelles réglementations douanières 2025 : ce qui change

Les réglementations douanières évoluent constamment. Voici les principales nouveautés pour 2025.

## Union Européenne

### Nouvelles obligations :
- **ICS2** : Déclaration de sécurité renforcée
- **CBAM** : Mécanisme d'ajustement carbone aux frontières
- **DPP** : Passeport produit numérique pour certains secteurs

### Secteurs impactés :
- Textiles et vêtements
- Électronique
- Produits chimiques
- Batteries et véhicules électriques

## États-Unis

### Modifications USMCA :
- Nouvelles règles d'origine
- Renforcement des contrôles anti-dumping
- Exigences accrues sur le travail

## Asie-Pacifique

### RCEP en vigueur :
- Réduction tarifaire progressive
- Simplification des procédures
- Reconnaissance mutuelle des certifications

## Impact sur votre business

### Coûts supplémentaires :
- Nouvelles taxes environnementales
- Frais de documentation électronique
- Audits de conformité

### Opportunités :
- Réduction de droits sur certains produits
- Procédures accélérées pour opérateurs agréés
- Digitalisation des démarches

## Nos recommandations

1. **Audit de conformité** : Vérifiez vos procédures actuelles
2. **Formation équipes** : Mise à niveau sur les nouvelles règles
3. **Partenaire expert** : Collaborez avec des spécialistes comme BoomXpresse
4. **Veille réglementaire** : Restez informé des évolutions

## Conclusion

Ces changements peuvent sembler complexes, mais ils offrent aussi des opportunités. Notre équipe vous accompagne dans cette transition !
    `,
    author: "Marc Dubois",
    date: "2025-01-15",
    readTime: "5 min",
    category: "Réglementation",
    image: "/images/blog/regulations-2025.jpg",
    tags: ["Douane", "Réglementation", "2025", "Europe"]
  }
]

const categories = ["Tous", "Guide Import", "Conseils", "Réglementation", "Actualités"]

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("Tous")
  const [searchTerm, setSearchTerm] = useState("")

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "Tous" || post.category === selectedCategory
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white py-20">
        <div className="container mx-auto px-4">
          <Link href="/" className="inline-flex items-center text-orange-100 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Retour à l'accueil
          </Link>
          
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Blog & Actualités
          </h1>
          <p className="text-xl text-orange-100 max-w-2xl">
            Conseils, guides et actualités pour réussir vos importations depuis la Chine
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Filtres et recherche */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Recherche */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher un article..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>

            {/* Catégories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-orange-500 text-white'
                      : 'bg-white text-gray-600 hover:bg-orange-50 hover:text-orange-600 border'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Articles */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              {/* Image */}
              <div className="aspect-video bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center">
                <div className="text-center text-orange-600">
                  <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-white font-bold text-xl">{post.category.charAt(0)}</span>
                  </div>
                  <p className="text-sm font-medium">{post.category}</p>
                </div>
              </div>

              {/* Contenu */}
              <div className="p-6">
                {/* Meta */}
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(post.date).toLocaleDateString('fr-FR')}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {post.readTime}
                  </div>
                </div>

                {/* Titre */}
                <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {post.title}
                </h2>

                {/* Extrait */}
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="bg-orange-50 text-orange-600 px-2 py-1 rounded text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Auteur et CTA */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <User className="h-4 w-4 text-gray-400 mr-1" />
                    <span className="text-sm text-gray-500">{post.author}</span>
                  </div>
                  <Link
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium text-sm transition-colors"
                  >
                    Lire la suite
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Message si aucun résultat */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="h-8 w-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Aucun article trouvé</h3>
            <p className="text-gray-600">Essayez de modifier vos critères de recherche ou catégorie.</p>
          </div>
        )}

        {/* Newsletter */}
        <div className="mt-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Restez informé</h3>
          <p className="text-orange-100 mb-6 max-w-2xl mx-auto">
            Recevez nos derniers conseils et actualités sur l'import depuis la Chine directement dans votre boîte mail.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Votre email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-300"
            />
            <button className="bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors">
              S'abonner
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}