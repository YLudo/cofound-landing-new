import { Card, CardContent, CardHeader } from "@/components/ui/card";

const items = [
    {
        icon: "/search.svg",
        title: "Matching IA intelligent",
        description: "Trouvez les cofondateurs qui partagent vos valeurs, vos compétences et votre vision grâce à notre algorithme de compatibilité."
    },
    {
        icon: "/idea.svg",
        title: "Accompagnement pas-à-pas",
        description: "De l’idée à la concrétisation, suivez un parcours guidé pour structurer votre projet avec l’aide de notre assistant IA."
    },
    {
        icon: "/mail.svg",
        title: "Espace projet collaboratif",
        description: "Centralisez la communication, les tâches et les documents de votre équipe dans un espace de travail intuitif."
    },
    {
        icon: "/people.svg",
        title: "Réseau de mentors & experts",
        description: "Accédez à un réseau de professionnels et mentors pour obtenir des conseils, des retours et faire grandir votre projet."
    },
    {
        icon: "/flag.svg",
        title: "Communauté & défis",
        description: "Rejoignez une communauté ambitieuse, participez à des hackathons et débloquez des badges au fil de votre progression."
    },
    {
        icon: "/star.svg",
        title: "Visibilité & opportunités",
        description: "Présentez votre projet à des investisseurs, incubateurs et partenaires pour accélérer votre lancement."
    },
];

export default function Features() {
    return (
        <div className="container mx-auto px-4 md:px-8">
            <div className="text-center">
                <h2 className="text-balance font-bold text-4xl xl:text-5xl">Tout ce qu’il faut pour lancer votre projet</h2>
                <p className="text-muted-foreground mt-4 text-balance">CoFound vous guide du premier match à la concrétisation de votre projet.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 mt-8 gap-6 text-center md:mt-16">
                {items.map((item, index) => (
                    <Card key={index} className="group border-0 shadow-none">
                        <CardHeader className="pb-3">
                            <img src={item.icon || "/placeholder.svg"} alt={item.title} className="mx-auto size-24" />
                            <h3 className="mt-6 text-lg font-medium">{item.title}</h3>
                        </CardHeader>

                        <CardContent>
                            {item.description}
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}