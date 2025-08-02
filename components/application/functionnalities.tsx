const items = [
    {
        icon: "/search.svg",
        title: "Matching IA intelligent",
        description: "Notre algorithme d'IA vous connecte avec le cofondateur idéal."
    },
    {
        icon: "/idea.svg",
        title: "Assistant IA pas-à-pas",
        description: "De l'idée au business plan et au prévisionnel, notre IA vous guide à chaque étape."
    },
    {
        icon: "/mail.svg",
        title: "Espace projet collaboratif",
        description: "Chat privé et outils collaboratifs pour développer vos projets en équipe."
    },
    {
        icon: "/people.svg",
        title: "Mentorat & Formation",
        description: "Mentorat 1:1, hackathons, ateliers et bibliothèques de ressources complète."
    },
    {
        icon: "/flag.svg",
        title: "Gamification & Communauté",
        description: "Badges, missions, défis et accès privilégiés aux financeurs et idéateurs."
    },
    {
        icon: "/star.svg",
        title: "Accès aux investisseurs",
        description: "Connectez-vous avez des investisseurs potentiels et présentez-leur votre projet."
    },
]

export default function Functionnalities() {
    return (
        <section className="pt-16 pb-32">
            <div className="container mx-auto px-4 md:px-8">
                <div className="mb-10 md:mb-20">
                    <h2 className="mb-2 text-center text-3xl font-semibold lg:text-4xl">
                        Des outils conçus pour votre succès
                    </h2>
                </div>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="border-border space-y-6 rounded-lg border p-8 transition-shadow hover:shadow-sm"
                        >
                            <div className="flex items-center gap-4">
                                <img
                                    src={item.icon}
                                    alt={item.title}
                                    className="size-12"
                                />
                                <h3 className="text-xl font-semibold">{item.title}</h3>
                            </div>
                            <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}