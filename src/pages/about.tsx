import React from "react";
import Header from "components/header";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "components/ui/card";
import { TrendingUp, Target, Zap } from "lucide-react";
import Footer from "components/footer";
function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-12 animate-fade-in-delay-1 ">
        <h1 className="mb-8 text-4xl font-bold text-center">
          À propos d'Ikigai
        </h1>

        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Notre Misson</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg">
                Chez Ikigai, nous nous efforçons d'apporter de l'harmonie à
                votre vie grâce à des produits soigneusement sélectionnés, en
                phase avec les tendances actuelles et les besoins intemporels.
                Notre mission est de vous aider à découvrir des articles qui non
                seulement répondent à un besoin, mais qui apportent également
                joie et sens à vos expériences quotidiennes.
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Nos Valeurs</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <Target className="h-10 w-10 text-blue-500 mb-2 animate-bounce" />
                <CardTitle>Axé sur l'objectif</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Nous croyons en l'offre de produits qui ont un véritable sens
                  et qui répondent aux besoins de nos clients.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <TrendingUp className="h-10 w-10 text-green-500 mb-2 animate-bounce" />
                <CardTitle>Réactif aux tendances</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Nous restons en avance, en adaptant nos offres pour
                  correspondre aux tendances du marché actuel et aux besoins des
                  consommateurs.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Zap className="h-10 w-10 text-yellow-500 mb-2 animate-bounce" />
                <CardTitle>Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Nous recherchons continuellement des produits et des solutions
                  innovants pour améliorer la vie de nos clients.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Notre Histoire</h2>
          <Card>
            <CardContent className="prose max-w-none">
              <p className="mt-4">
                Ikigai a été fondée en 2025 avec une idée simple mais puissante
                : créer une expérience de vente au détail qui va au-delà des
                simples transactions. Nous voulions bâtir une plateforme où
                chaque produit raconte une histoire et sert un but. Notre
                aventure a commencé lorsque nos fondateurs, un groupe
                d'entrepreneurs passionnés, ont réalisé qu'il existait un fossé
                entre ce que les gens achetaient et ce qui ajoutait réellement
                de la valeur à leur vie. Ils ont imaginé une entreprise capable
                de combler ce vide, en proposant des produits qui non seulement
                répondent aux besoins immédiats, mais qui contribuent également
                à la satisfaction à long terme et au bien-être. Le nom 'Ikigai'
                provient du concept japonais qui combine passion, mission,
                vocation et profession. Il représente l'intersection de ce que
                l'on aime, de ce que l'on fait bien, de ce dont le monde a
                besoin et de ce pour quoi on peut être rémunéré. Cette
                philosophie est au cœur de tout ce que nous faisons chez Ikigai
                Retail. Aujourd'hui, nous continuons à croître et à évoluer,
                toujours avec notre mission principale en tête : aider nos
                clients à trouver leur propre ikigai à travers les produits que
                nous proposons et l'expérience d'achat que nous offrons.
              </p>
            </CardContent>
          </Card>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default About;
