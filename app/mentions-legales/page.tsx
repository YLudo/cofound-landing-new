import Footer from "@/components/application/footer";
import Navbar from "@/components/application/navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function MentionsLegalesPage() {
    return (
        <>
            <Navbar />
            <section className="pt-16 bg-primary">
                <div className="container mx-auto px-4 md:px-8">
                    <Card>
                        <CardHeader>
                            <CardTitle>Mentions légales</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-6">
                                <div>
                                    <h3 className="font-semibold">1. Informations générales</h3>
                                    <ul className="list-disc pl-4 pt-2">
                                        <li><strong>Nom de la plateforme : </strong>CoFound</li>
                                        <li><strong>Statut juridique : </strong>[À compléter : ex. SAS, SARL, Association]</li>
                                        <li><strong>Adresse du siège social : </strong>[À compléter : Votre adresse]</li>
                                        <li><strong>Numéro d'immatriculation : </strong>[À compléter : ex. RCS, SIRET]</li>
                                        <li><strong>Capital social : </strong>[À compléter : ex. 1 000 €]</li>
                                        <li><strong>Adresse e-mail : </strong>contact@cofound-app.com</li>
                                        <li><strong>Numéro de téléphone : </strong>[À compléter : Votre numéro]</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-semibold">2. Hébergement</h3>
                                    <ul className="list-disc pl-4 pt-2">
                                        <li><strong>Hébergeur : </strong>Vercel Inc.</li>
                                        <li><strong>Adresse : </strong>340 S Lemon Ave #4133, Walnut, CA 91789, USA</li>
                                        <li><strong>Site web :</strong><a href="https://vercel.com" target="_blank">vercel.com</a></li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-2">3. Propriété intellectuelle</h3>
                                    <p>
                                        L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. 
                                        Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques 
                                        et photographiques. La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement 
                                        interdite sauf autorisation expresse du directeur de la publication.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-2">4. Limitation de la responsabilité</h3>
                                    <p>
                                        CoFound s'efforce d'assurer au mieux de ses possibilités l'exactitude et la mise à jour des informations diffusées sur ce site, 
                                        dont elle se réserve le droit de corriger, à tout moment et sans préavis, le contenu. Toutefois, CoFound ne peut garantir l'exactitude, 
                                        la précision ou l'exhaustivité des informations mises à la disposition sur ce site.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-2">5. Droit applicable</h3>
                                    <p>
                                        Les présentes mentions légales sont régies par le droit français. En cas de litige, les tribunaux français seront seuls compétents.
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>
            <Footer/>
        </>
    );
}