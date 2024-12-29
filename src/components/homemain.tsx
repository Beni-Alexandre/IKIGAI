import React from "react";
import { Button } from "components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "components/ui/card";
import { TrendingUp, ShoppingBag, Gift, Sun } from "lucide-react";

import { Link } from "react-router-dom";

function Homemain() {
  return (
    <div>
      <section className="bg-blue-600 text-white">
        <div className="container mx-auto px-4 py-20 text-center"></div>

        <h1 className="mb-6 text-4xl font-extrabold leading-tight lg:text-5xl">
          Découvrez des produits adaptés à votre moment
        </h1>
        <p className="mb-10 text-xl">
          Ikigai vous propose les articles les plus pertinents et les plus
          recherchés, parfaitement en phase avec les tendances et les saisons
          actuelles.
        </p>
        <Link to="/product">
          {" "}
          <Button className="explore_button" size="lg" variant="secondary">
            Explorez notre collection
          </Button>
        </Link>
      </section>
      <section className="reason">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">
            Pourquoi choisir IKIGAI
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader>
              <TrendingUp className="h-10 w-10 text-blue-500" />
              <CardTitle>Adapté aux tendances</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Nous adaptons notre gamme de produits aux exigences actuelles du
                marché et aux tendances de consommation.
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <ShoppingBag className="h-10 w-10 text-green-500" />
              <CardTitle>Sélection minutieuse</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Nos produits sont soigneusement sélectionnés pour répondre aux
                préférences évolutives de nos clients.
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Gift className="h-10 w-10 text-red-500" />
              <CardTitle>Offres saisonnières</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Nous proposons des produits qui résonnent avec l'esprit de
                chaque saison et période festive.
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Sun className="h-10 w-10 text-yellow-500" />
              <CardTitle>Toujours Pertinent</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Notre gamme de produits en constante évolution vous garantit de
                toujours trouver ce dont vous avez besoin, quand vous en avez
                besoin.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20 text-center">
        <h2 className="mb-6 text-3xl font-bold">
          Restez en contact avec Ikigai.
        </h2>
        <p className="mb-10 text-xl text-gray-600">
          Soyez le premier à découvrir nos nouveaux produits et les tendances à
          venir.
        </p>
        <Link to="/contact">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            Contactez-nous pour plus d'informations.
          </Button>
        </Link>
      </section>
    </div>
  );
}

export default Homemain;
