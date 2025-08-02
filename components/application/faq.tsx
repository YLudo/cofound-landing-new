import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import { Badge } from "../ui/badge";

const items = [
    {
        id: "faq-1",
        question: "Qu'est-ce que CoFound ?",
        answer: "CoFound est la première plateforme tout-en-un qui permet aux jeunes et porteurs d'idées de transformer leurs concepts en projets concrets grâce à un écosystème complet de co-création."
    },
    {
        id: "faq-2",
        question: "Comment fonctionne le matching IA ?",
        answer: "Notre algorithme d'IA analyse vos compétences, objectifs et personnalité pour vous connecter avec le cofondateur idéal qui complète parfaitement votre profil."
    },
    {
        id: "faq-3",
        question: "Quels services propose CoFound ?",
        answer: "Assistant IA pas-à-pas, chat privé, espace projet collaboratif, mentorat 1:1, hackathons, ateliers, bibliothèque de ressources et système de gamification."
    },
    {
        id: "faq-4",
        question: "Qui peut rejoindre CoFound ?",
        answer: "Absolument tout le monde ! Que vous soyez porteur d'idée, cofondateur potentiel, mentor, investisseur, ou que vous représentiez une association, un projet entrepreneurial (digital ou non), ou toute autre initiative, notre écosystème est ouvert à tous ceux qui souhaitent co-créer et innover."
    }
];

export default function FAQ() {
    return (
        <section className="py-32">
            <div className="container mx-auto px-4 md:px-8 space-y-8">
                <div className="mx-auto flex max-w-3xl flex-col text-left md:text-center">
                    <h2 className="text-3xl font-semibold md:mb-4 lg:mb-6 lg:text-4xl">
                        Questions fréquentes
                    </h2>
                </div>
                <Accordion
                    type="single"
                    collapsible
                    className="mx-auto w-full lg:max-w-3xl"
                >
                    {items.map((item) => (
                        <AccordionItem key={item.id} value={item.id}>
                            <AccordionTrigger className="hover:cursor-pointer hover:no-underline">
                                <div className="font-medium sm:py-1 lg:py-2 lg:text-lg">
                                    {item.question}
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="sm:mb-1 lg:mb-2">
                                <div className="text-muted-foreground lg:text-lg">
                                    {item.answer}
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}