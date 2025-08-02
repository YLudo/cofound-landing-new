import { ArrowUpRight } from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

export default function Hero() {
    return (
        <section className="py-32 bg-primary">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid items-center gap-8 lg:grid-cols-2">
                    <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                        <Badge className="bg-[#FF00E2]">
                            Nouveauté !
                            <ArrowUpRight className="ml-2 size-4" />
                        </Badge>
                        <h1 className="my-6 text-pretty text-4xl text-white font-bold lg:text-6xl">
                            De l'idée au projet, trouvez votre équipe.
                        </h1>
                        <p className="text-white mb-8 max-w-xl lg:text-xl">
                            La plateforme intelligente qui connecte porteurs d'idées, talents et mentors pour lancer les projets qui vous tiennent à cœur.
                        </p>
                        <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
                            <Button className="w-full sm:w-auto cursor-pointer hover:bg-[#FF00E2] hover:text-white" variant="secondary">
                                Rejoignez-nous !
                            </Button>
                        </div>
                    </div>
                    <img
                        src={"/hero.svg"}
                        alt="Baniière de CoFound"
                        className="max-h-96 w-full object-cover"
                    />
                </div>
            </div>
        </section>
    );
}