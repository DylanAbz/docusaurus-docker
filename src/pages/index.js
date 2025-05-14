import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Home() {
    const { siteConfig } = useDocusaurusContext();

    return (
        <Layout
            title={`Bienvenue dans la doc Docker`}
            description="Documentation claire, moderne et complète sur Docker et Docker Compose">
            <main className="container mx-auto px-6 py-16 text-center">
                <h1 className="text-4xl font-bold mb-4">{siteConfig.title}</h1>
                <p className="text-lg text-gray-600 mb-10">
                    {siteConfig.tagline || "Apprends à maîtriser Docker : images, conteneurs, réseaux, volumes, Dockerfile, Docker Compose, et plus encore."}
                </p>

                <div className="flex justify-center gap-6">
                    <Link
                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow"
                        to="/docs/intro">
                        🚀 Commencer
                    </Link>
                    <Link
                        className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded-lg shadow"
                        to="/docs/commandes/build-run">
                        📘 Voir les commandes
                    </Link>
                </div>

                <div className="mt-20 grid md:grid-cols-3 gap-6 text-left">
                    <div className="p-6 bg-white rounded-xl shadow">
                        <h3 className="text-xl font-bold mb-2">🧱 Dockerfile</h3>
                        <p>Comprends la structure des Dockerfiles pour construire des images efficaces.</p>
                    </div>
                    <div className="p-6 bg-white rounded-xl shadow">
                        <h3 className="text-xl font-bold mb-2">⚙️ Docker Compose</h3>
                        <p>Déploie facilement plusieurs services avec un seul fichier YAML.</p>
                    </div>
                    <div className="p-6 bg-white rounded-xl shadow">
                        <h3 className="text-xl font-bold mb-2">🌐 Réseaux & Volumes</h3>
                        <p>Gère la communication entre services et la persistance des données.</p>
                    </div>
                </div>
            </main>
        </Layout>
    );
}
