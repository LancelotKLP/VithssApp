import { useState } from 'react';
import {
  Activity,
  Heart,
  Calendar,
  MessageSquare,
  Video,
  TrendingUp,
  Droplets,
  Moon,
  Camera,
  Shield,
  Lock,
  Eye,
  UserCheck,
  Database,
  ChevronDown,
  Menu,
  X,
  Dumbbell,
  Target,
  Users,
  Bell,
  Award,
  Smartphone,
} from 'lucide-react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [privacyExpanded, setPrivacyExpanded] = useState(false);

  const features = [
    {
      icon: TrendingUp,
      title: 'Suivi de Performance',
      description: 'Graphiques d\'évolution détaillés : performances, cardio, nombre de pas, perte de poids, prise musculaire',
    },
    {
      icon: Moon,
      title: 'Suivi du Sommeil',
      description: 'Analysez la qualité de votre sommeil pour optimiser votre récupération',
    },
    {
      icon: Droplets,
      title: 'Hydratation',
      description: 'Suivez votre consommation d\'eau quotidienne pour rester hydraté',
    },
    {
      icon: Camera,
      title: 'Photos & Progression',
      description: 'Capturez votre évolution avec des photos de progression et de vos repas',
    },
    {
      icon: Video,
      title: 'Séances Visio',
      description: 'Coaching en direct, individuel ou en groupe, avec possibilité de modification flexible',
    },
    {
      icon: Calendar,
      title: 'Planning Intelligent',
      description: 'Gestion flexible ou fixe de vos séances avec système de modification et annulation',
    },
    {
      icon: MessageSquare,
      title: 'Messagerie Intégrée',
      description: 'Communication directe avec vos coachs et notifications en temps réel',
    },
    {
      icon: Dumbbell,
      title: 'Programmes Personnalisés',
      description: 'Création d\'exercices, programmes, supersets avec gestion des charges, séries et repos',
    },
    {
      icon: Target,
      title: 'Objectifs & Gamification',
      description: 'Fixez vos objectifs et participez aux défis avec système de leaderboard',
    },
    {
      icon: Smartphone,
      title: 'Connexion Appareils',
      description: 'Compatible Apple Health, Samsung Health, Fitbit, Garmin',
    },
    {
      icon: Users,
      title: 'Séances en Groupe',
      description: 'Rejoignez des cours collectifs de boxe ou musculation',
    },
    {
      icon: Award,
      title: 'Estimation Calorique',
      description: 'Calcul des calories brûlées et recommandations nutritionnelles',
    },
  ];

  const securityFeatures = [
    {
      icon: Shield,
      title: 'Conformité RGPD',
      description: 'Respect total du Règlement Général sur la Protection des Données',
    },
    {
      icon: Lock,
      title: 'Chiffrement Total',
      description: 'Toutes vos données sont chiffrées et sécurisées via HTTPS/TLS',
    },
    {
      icon: Database,
      title: 'Hébergement Sécurisé',
      description: 'Données hébergées sur Supabase avec contrôle d\'accès strict',
    },
    {
      icon: Eye,
      title: 'Transparence',
      description: 'Accès, rectification, suppression : vous contrôlez vos données',
    },
    {
      icon: UserCheck,
      title: 'Pas de Publicité',
      description: 'Vos données ne sont jamais utilisées à des fins publicitaires',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <nav className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <Activity className="h-8 w-8 text-red-600" />
              <span className="text-2xl font-bold text-gray-900">Vithsapp</span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-700 hover:text-red-600 transition-colors">
                Fonctionnalités
              </a>
              <a href="#security" className="text-gray-700 hover:text-red-600 transition-colors">
                Sécurité
              </a>
              <a href="#privacy" className="text-gray-700 hover:text-red-600 transition-colors">
                Confidentialité
              </a>
              <a href="#contact" className="text-gray-700 hover:text-red-600 transition-colors">
                Contact
              </a>
              <button className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors">
                Télécharger
              </button>
            </div>

            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6 text-gray-900" />
              ) : (
                <Menu className="h-6 w-6 text-gray-900" />
              )}
            </button>
          </div>
        </nav>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-4 space-y-3">
              <a
                href="#features"
                className="block text-gray-700 hover:text-red-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Fonctionnalités
              </a>
              <a
                href="#security"
                className="block text-gray-700 hover:text-red-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sécurité
              </a>
              <a
                href="#privacy"
                className="block text-gray-700 hover:text-red-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Confidentialité
              </a>
              <a
                href="#contact"
                className="block text-gray-700 hover:text-red-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
              <button className="w-full bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors">
                Télécharger
              </button>
            </div>
          </div>
        )}
      </header>

      <main className="pt-16">
        <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center space-x-2 bg-red-50 text-red-600 px-4 py-2 rounded-full mb-8">
                <Shield className="h-4 w-4" />
                <span className="text-sm font-medium">100% Conforme RGPD</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Votre Coach Personnel,
                <span className="text-red-600"> Vos Données Protégées</span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Vithsapp est l'application tout-en-un pour le coaching sportif personnalisé.
                Suivi complet, séances en visio, programmes sur-mesure, et respect absolu de votre vie privée.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                <button className="w-full sm:w-auto bg-red-600 text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-colors text-lg font-semibold flex items-center justify-center space-x-2">
                  <Smartphone className="h-5 w-5" />
                  <span>Télécharger l'App</span>
                </button>
                <a
                  href="#features"
                  className="w-full sm:w-auto border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-red-600 hover:text-red-600 transition-colors text-lg font-semibold"
                >
                  Découvrir les fonctionnalités
                </a>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-3xl mx-auto">
                <div>
                  <div className="text-3xl font-bold text-red-600 mb-2">12+</div>
                  <div className="text-sm text-gray-600">Fonctionnalités</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-red-600 mb-2">100%</div>
                  <div className="text-sm text-gray-600">Sécurisé</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-red-600 mb-2">RGPD</div>
                  <div className="text-sm text-gray-600">Conforme</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-red-600 mb-2">24/7</div>
                  <div className="text-sm text-gray-600">Disponible</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Fonctionnalités Complètes
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Tout ce dont vous avez besoin pour atteindre vos objectifs sportifs
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="security" className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-red-50 text-red-600 px-4 py-2 rounded-full mb-4">
                <Shield className="h-4 w-4" />
                <span className="text-sm font-medium">Sécurité & Confidentialité</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Vos Données, Notre Priorité
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Conformité RGPD totale et sécurité maximale pour protéger votre vie privée
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {securityFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-red-600 transition-colors"
                >
                  <div className="bg-red-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Vos Droits RGPD
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-red-100 rounded-full p-1 mt-1">
                    <div className="h-2 w-2 bg-red-600 rounded-full"></div>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Droit d'accès</div>
                    <div className="text-sm text-gray-600">Consultez toutes vos données</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-red-100 rounded-full p-1 mt-1">
                    <div className="h-2 w-2 bg-red-600 rounded-full"></div>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Droit de rectification</div>
                    <div className="text-sm text-gray-600">Corrigez vos informations</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-red-100 rounded-full p-1 mt-1">
                    <div className="h-2 w-2 bg-red-600 rounded-full"></div>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Droit à l'effacement</div>
                    <div className="text-sm text-gray-600">Supprimez vos données</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-red-100 rounded-full p-1 mt-1">
                    <div className="h-2 w-2 bg-red-600 rounded-full"></div>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Droit à la portabilité</div>
                    <div className="text-sm text-gray-600">Téléchargez vos données</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-red-100 rounded-full p-1 mt-1">
                    <div className="h-2 w-2 bg-red-600 rounded-full"></div>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Droit de limitation</div>
                    <div className="text-sm text-gray-600">Limitez le traitement</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-red-100 rounded-full p-1 mt-1">
                    <div className="h-2 w-2 bg-red-600 rounded-full"></div>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Retrait du consentement</div>
                    <div className="text-sm text-gray-600">Révoquez à tout moment</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="privacy" className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                  Politique de Confidentialité
                </h2>
                <p className="text-xl text-gray-600">
                  Transparence totale sur la gestion de vos données
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      1. Données collectées
                    </h3>
                    <div className="text-gray-600 space-y-2">
                      <p>
                        <strong>Données personnelles :</strong> Nom, prénom, email, téléphone, âge, sexe, taille, poids, objectifs sportifs, pathologies, allergies, antécédents médicaux.
                      </p>
                      <p>
                        <strong>Données de coaching :</strong> Performances, nombre de pas, évolution du poids, photos de progression et repas, sommeil, hydratation, calories brûlées.
                      </p>
                      <p>
                        <strong>Données techniques :</strong> Historique de séances, logs d'activité, notifications.
                      </p>
                      <p>
                        <strong>Contenus multimédias :</strong> Vidéos et photos uploadées.
                      </p>
                      <p>
                        <strong>Appareils tiers :</strong> Apple Health, Samsung Health, Fitbit, Garmin (uniquement les données sélectionnées).
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      2. Finalité de la collecte
                    </h3>
                    <p className="text-gray-600">
                      Les données sont utilisées exclusivement pour : fournir un suivi complet entre coach et élève, générer des graphiques d'évolution, assurer le suivi santé, gérer les séances et le planning, personnaliser l'expérience, créer des programmes, gérer les abonnements, sécuriser l'accès, et optimiser l'application.
                      <strong className="text-red-600"> Aucune utilisation publicitaire.</strong>
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      3. Base légale (RGPD)
                    </h3>
                    <p className="text-gray-600">
                      Les traitements sont basés sur : le consentement (appareils tiers, photos, données sensibles), l'exécution du service (gestion du compte & coaching), l'intérêt légitime (sécurité, prévention d'abus), et l'obligation légale (facturation).
                    </p>
                  </div>

                  {!privacyExpanded && (
                    <button
                      onClick={() => setPrivacyExpanded(true)}
                      className="flex items-center space-x-2 text-red-600 hover:text-red-700 font-semibold"
                    >
                      <span>Lire la politique complète</span>
                      <ChevronDown className="h-5 w-5" />
                    </button>
                  )}

                  {privacyExpanded && (
                    <div className="space-y-6 animate-fadeIn">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                          4. Stockage et sécurité
                        </h3>
                        <p className="text-gray-600">
                          Toutes les données sont hébergées sur Supabase avec : base de données PostgreSQL sécurisée, buckets de stockage pour images/vidéos, authentification robuste, mots de passe hashés (jamais en clair), transmission chiffrée (HTTPS/TLS), et accès strictement contrôlé par rôles.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                          5. Partage des données
                        </h3>
                        <p className="text-gray-600">
                          Les données peuvent être partagées uniquement avec : les coachs/administrateurs qui suivent un élève, les services tiers connectés volontairement (Apple Health, Garmin, Fitbit), Stripe pour les paiements, et les prestataires techniques nécessaires (Supabase).
                          <strong className="text-red-600"> Aucun partage avec des annonceurs.</strong>
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                          6. Vos droits
                        </h3>
                        <p className="text-gray-600">
                          Vous pouvez demander : l'accès à vos données, la rectification, la suppression, la limitation du traitement, le téléchargement (portabilité), et le retrait du consentement.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                          7. Suppression du compte
                        </h3>
                        <p className="text-gray-600">
                          En cas de suppression : toutes les données personnelles sont supprimées définitivement, les médias (photos, vidéos) sont effacés des buckets, les logs techniques peuvent être conservés quelques jours pour sécurité.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                          8. Données des mineurs
                        </h3>
                        <p className="text-gray-600">
                          L'application n'est pas destinée aux enfants de moins de 13 ans. Aucune collecte volontaire de données mineures.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                          9. Modifications de la Politique
                        </h3>
                        <p className="text-gray-600">
                          Vithsapp peut modifier cette Politique. Les utilisateurs seront informés via notification ou email.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section-padding bg-gradient-to-br from-red-600 to-red-700 text-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Des Questions sur vos Données ?
              </h2>
              <p className="text-xl text-red-100 mb-8">
                Notre équipe est à votre disposition pour toute question concernant la confidentialité et la sécurité de vos données
              </p>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-8">
                <div className="flex items-center justify-center space-x-2 mb-4">
                  <Heart className="h-6 w-6" />
                  <span className="text-2xl font-semibold">Contactez-nous</span>
                </div>
                <a
                  href="mailto:maelklp.pro@gmail.com"
                  className="text-xl hover:underline"
                >
                  maelklp.pro@gmail.com
                </a>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="w-full sm:w-auto bg-white text-red-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors text-lg font-semibold">
                  Télécharger Vithsapp
                </button>
                <a
                  href="#features"
                  className="w-full sm:w-auto border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors text-lg font-semibold"
                >
                  En savoir plus
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Activity className="h-6 w-6 text-red-600" />
                <span className="text-xl font-bold text-white">Vithsapp</span>
              </div>
              <p className="text-sm">
                Votre coach personnel avec respect total de votre vie privée
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Application</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#features" className="hover:text-white transition-colors">
                    Fonctionnalités
                  </a>
                </li>
                <li>
                  <a href="#security" className="hover:text-white transition-colors">
                    Sécurité
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Tarifs
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Légal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#privacy" className="hover:text-white transition-colors">
                    Politique de confidentialité
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Conditions d'utilisation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Mentions légales
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="mailto:maelklp.pro@gmail.com"
                    className="hover:text-white transition-colors"
                  >
                    maelklp.pro@gmail.com
                  </a>
                </li>
                <li>Objet : Vie privée – Vithsapp</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>© 2024 Vithsapp. Tous droits réservés. 100% Conforme RGPD.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
