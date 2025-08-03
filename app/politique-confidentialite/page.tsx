import Footer from "@/components/application/footer";
import Navbar from "@/components/application/navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PolitiqueConfidentialitePage() {
    return (
        <>
            <Navbar />
            <section className="pt-16 bg-primary">
                <div className="container mx-auto px-4 md:px-8">
                    <Card>
                        <CardHeader>
                            <CardTitle>Politique de confidentialité</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-6">
                                <div>
                                    <h3 className="font-semibold mb-2">1. Introduction</h3>
                                    <p>
                                        La présente politique de confidentialité décrit comment CoFound collecte, utilise et protège vos informations 
                                        personnelles lorsque vous utilisez notre plateforme. Nous nous engageons à protéger votre vie privée et à traiter 
                                        vos données de manière transparente et sécurisée.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-2">2. Données collectées</h3>
                                    <p>Nous collectons les types de données suivants :</p>
                                    <ul className="list-disc pl-4 pt-2">
                                        <li><strong>Données d'authentification : </strong>Nom, prénom, adresse e-mail, numéro de téléphone.</li>
                                        <li><strong>Données de profil : </strong>Compétences, expérience, intérêts, rôle (porteur d'idée, cofondateur, mentor, investisseur).</li>
                                        <li><strong>Données de connexion : </strong>Adresse IP, type de navigateur, pages visitées, temps passé sur le site.</li>
                                        <li><strong>Données de communication : </strong>Contenu des messages échangés via le chat privé.</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-2">3. Utilisation des données</h3>
                                    <p>Vos données sont utilisées pour :</p>
                                    <ul className="list-disc pl-4 pt-2">
                                        <li>Fournir et améliorer nos services (matching IA, assistant IA, espace collaboratif).</li>
                                        <li>Personnaliser votre expérience sur la plateforme.</li>
                                        <li>Communiquer avec vous (newsletter, notifications).</li>
                                        <li>Assurer la sécurité de la plateforme et prévenir les fraudes.</li>
                                        <li>Réaliser des analyses statistiques pour optimiser nos offres.</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-2">4. Partage des données</h3>
                                    <p>Nous ne partageons pas vos données personnelles avec des tiers, sauf dans les cas suivants :</p>
                                    <ul className="list-disc pl-4 pt-2">
                                        <li>Avec votre consentement explicite.</li>
                                        <li>Pour répondre à des obligations légales ou réglementaires.</li>
                                        <li>Communiquer avec vous (newsletter, notifications).</li>
                                        <li>Avec des prestataires de services tiers agissant en notre nom (hébergement, analyse de données).</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-2">5. Vos droits</h3>
                                    <p>Conformément au RGPD, vous disposez des droits suivants :</p>
                                    <ul className="list-disc pl-4 py-2">
                                        <li>Droit d'accès à vos données.</li>
                                        <li>Droit de rectification des données inexactes.</li>
                                        <li>Droit à l'effacement de vos données.</li>
                                        <li>Droit à la limitation du traitement.</li>
                                        <li>Droit à la portabilité de vos données.</li>
                                        <li>Droit d'opposition au traitement.</li>
                                    </ul>
                                    <p>Pour exercer ces droits, veuillez nous contacter à l'adresse : contact@cofound-app.com</p>
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-2">6. Modifications de la politique</h3>
                                    <p>
                                        Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. 
                                        Toute modification sera publiée sur cette page avec la date de mise à jour.
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>
            <Footer />
        </>
    );
}