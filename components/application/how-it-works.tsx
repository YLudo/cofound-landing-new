const items = [
    {
        icon: "/profile.svg",
        title: "Créez votre profil",
        description: "Rejoignez notre écosystème de co-création en tant que porteur d'idée ou cofondateur potentiel. Présentez vos compétences, vos passions et vos projets pour attirer les bons partenaires."
    },
    {
        icon: "/search.svg",
        title: "Matching IA intelligent",
        description: "Notre algorithme d'IA analyse vos compétences, vos objectifs et votre personnalité pour vous connecter avec le cofondateur idéal. Trouvez la personne qui complète parfaitement votre profil."
    },
    {
        icon: "/rocket.svg",
        title: "Développez votre projet",
        description: "Bénéficiez d'un assistant IA pas-à-pas pour transformer votre idée en business plan, accédez au mentorat 1:1, participez aux hackathons et utilisez notre bibliothèque de ressources."
    }
]

export default function HowItWorks() {
    return (
        <section className="py-32">
            <div className="container mx-auto px-4 md:px-8">
                <div className="mb-10 md:mb-20">
                    <h2 className="mb-2 text-center text-3xl font-semibold lg:text-4xl">
                        Comment ça marche ?
                    </h2>
                </div>
                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
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