'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Link from 'next/link'

export default function FAQs() {
    const faqItems = [
        {
            id: 'item-1',
            question: "Comment fonctionne le matching entre cofondateurs ?",
            answer: "Notre algorithme analyse vos compétences, vos valeurs et vos ambitions pour vous proposer des profils compatibles avec votre vision de projet.",
        },
        {
            id: 'item-2',
            question: "Est-ce que CoFound est réservé aux étudiants ?",
            answer: "CoFound est principalement destiné aux étudiants et jeunes entrepreneurs, mais reste ouvert à toute personne souhaitant s’impliquer dans un projet innovant.",
        },
        {
            id: 'item-3',
            question: "Puis-je rejoindre un projet existant ?",
            answer: "Oui ! Vous pouvez consulter les projets publiés sur la plateforme et postuler en fonction de vos compétences et de vos centres d’intérêt.",
        },
        {
            id: 'item-4',
            question: "L’accès à la plateforme est-il gratuit ?",
            answer: "Oui, l’inscription est gratuite. Certaines fonctionnalités avancées (mentorat, ressources premium, etc.) pourront être proposées via un plan payant à l’avenir.",
        },
    ];

    return (
        <div className="mx-auto px-4 md:px-6">
            <div className="mx-auto text-center">
                <h2 className="text-balance font-bold text-4xl xl:text-5xl">Questions fréquentes</h2>
                <p className="text-muted-foreground mt-4 text-balance">Tout ce que vous devez savoir pour bien démarrer sur CoFound et lancer votre projet dans les meilleures conditions.</p>
            </div>

            <div className="mx-auto mt-12 max-w-3xl">
                <Accordion
                    type="single"
                    collapsible
                    className="bg-card ring-muted w-full rounded-2xl border px-8 py-3 shadow-sm ring-4"
                >
                    {faqItems.map((item) => (
                        <AccordionItem
                            key={item.id}
                            value={item.id}
                            className="border-dashed">
                            <AccordionTrigger className="cursor-pointer text-base hover:no-underline">{item.question}</AccordionTrigger>
                            <AccordionContent>
                                <p className="text-base">{item.answer}</p>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>

                <p className="text-muted-foreground text-center mt-6">
                    Vous ne trouvez pas votre réponse ? Écrivez-nous à{' '}
                    <Link
                        href="mailto:contact@cofounds.app"
                        className="text-primary font-medium hover:underline">
                        contact@cofounds.app
                    </Link>
                    .
                </p>
            </div>
        </div>
    );
}