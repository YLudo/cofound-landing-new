import Image from "next/image";
import { Button } from "../ui/button";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const teamMembers = [
    {
        name: "Anthony DENIN",
        title: "Co-fondateur & CEO",
        imageUrl: "/AnthonyDenin.png",
        linkedinUrl: "https://www.linkedin.com/in/anthony-denin/",
    },
    {
        name: "Ludovic ROUX",
        title: "Co-fondateur & CTO",
        imageUrl: "/LudovicRoux.png",
        linkedinUrl: "https://www.linkedin.com/in/ludovic-roux/",
    }
];

export default function Team() {
    return (
        <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto text-center">
                <h2 className="text-balance font-bold text-4xl xl:text-5xl">Une équipe dédiée à faire naître des projets</h2>
                <p className="text-muted-foreground mt-4 text-balance">Nous construisons CoFound avec une mission : permettre à chacun de trouver les bonnes personnes pour lancer son idée.</p>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-x-8 gap-y-12">
                {teamMembers.map((member) => (
                    <div key={member.name}>
                        <Image
                            src={member.imageUrl}
                            alt={member.name}
                            className="rounded-lg object-cover bg-secondary"
                            width={300}
                            height={300}
                        />
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="mt-4 text-lg font-semibold">{member.name}</h3>
                                <p className="text-muted-foreground text-sm">{member.title}</p>
                            </div>
                            <div className="mt-4 flex items-center gap-2.5">
                                <Button
                                    className="bg-muted hover:bg-muted text-muted-foreground shadow-none"
                                    size="icon"
                                    asChild
                                >
                                    <Link href={member.linkedinUrl} target="_blank">
                                        <FaLinkedin className="stroke-muted-foreground" />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}