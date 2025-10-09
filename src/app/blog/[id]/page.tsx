'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { ArrowLeft, Calendar, Clock, User, Tag, Share2, ThumbsUp, MessageCircle } from 'lucide-react'
import ReactMarkdown from 'react-markdown'

// Données des articles (même structure que dans la page blog)
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

export default function BlogPostPage() {
  const params = useParams()
  const [post, setPost] = useState<any>(null)
  const [relatedPosts, setRelatedPosts] = useState<any[]>([])

  useEffect(() => {
    if (params.id) {
      const foundPost = blogPosts.find(p => p.id === parseInt(params.id as string))
      if (foundPost) {
        setPost(foundPost)
        // Articles similaires (même catégorie ou tags similaires)
        const related = blogPosts
          .filter(p => p.id !== foundPost.id)
          .filter(p => 
            p.category === foundPost.category || 
            p.tags.some(tag => foundPost.tags.includes(tag))
          )
          .slice(0, 3)
        setRelatedPosts(related)
      }
    }
  }, [params.id])

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Article non trouvé</h1>
          <Link href="/blog" className="text-orange-600 hover:text-orange-700">
            ← Retour au blog
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <Link href="/blog" className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-4 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Retour au blog
          </Link>
        </div>
      </div>

      {/* Article */}
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* En-tête de l'article */}
          <div className="p-8 lg:p-12">
            {/* Catégorie */}
            <div className="inline-flex items-center bg-orange-50 text-orange-600 px-3 py-1 rounded-full text-sm font-medium mb-4">
              <Tag className="h-4 w-4 mr-1" />
              {post.category}
            </div>

            {/* Titre */}
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Meta informations */}
            <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8 pb-8 border-b">
              <div className="flex items-center">
                <User className="h-5 w-5 mr-2" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                <span>{new Date(post.date).toLocaleDateString('fr-FR')}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                <span>{post.readTime} de lecture</span>
              </div>
              <button className="flex items-center text-orange-600 hover:text-orange-700 transition-colors">
                <Share2 className="h-5 w-5 mr-2" />
                <span>Partager</span>
              </button>
            </div>

            {/* Image */}
            <div className="aspect-video bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl mb-8 flex items-center justify-center">
              <div className="text-center text-orange-600">
                <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">{post.category.charAt(0)}</span>
                </div>
                <p className="font-medium">{post.category}</p>
              </div>
            </div>

            {/* Contenu */}
            <div className="prose prose-lg prose-orange max-w-none">
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-8 pt-8 border-t">
              {post.tags.map((tag: string) => (
                <span key={tag} className="bg-orange-50 text-orange-600 px-3 py-1 rounded-full text-sm font-medium">
                  #{tag}
                </span>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between mt-8 pt-8 border-t">
              <div className="flex items-center gap-4">
                <button className="flex items-center text-gray-600 hover:text-orange-600 transition-colors">
                  <ThumbsUp className="h-5 w-5 mr-2" />
                  <span>Utile</span>
                </button>
                <button className="flex items-center text-gray-600 hover:text-orange-600 transition-colors">
                  <MessageCircle className="h-5 w-5 mr-2" />
                  <span>Commenter</span>
                </button>
              </div>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                Nous contacter
              </button>
            </div>
          </div>
        </div>

        {/* Articles similaires */}
        {relatedPosts.length > 0 && (
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Articles similaires</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  href={`/blog/${relatedPost.id}`}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="aspect-video bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center">
                    <span className="text-orange-600 font-bold text-lg">{relatedPost.category.charAt(0)}</span>
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                      {relatedPost.title}
                    </h4>
                    <p className="text-gray-600 text-sm line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                    <div className="flex items-center justify-between mt-3 text-xs text-gray-500">
                      <span>{relatedPost.readTime}</span>
                      <span>{new Date(relatedPost.date).toLocaleDateString('fr-FR')}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>
    </div>
  )
}