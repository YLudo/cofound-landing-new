"use client"

import Image from "next/image"
import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion"
import { UserPlus, Sparkles, Rocket } from "lucide-react"

export default function HowItWorks() {
    type ImageKey = "item-1" | "item-2" | "item-3";
    const [activeItem, setActiveItem] = useState<ImageKey>("item-1");

    const images = {
        "item-1": {
            image: "/profile.svg",
            alt: "Créez votre profil",
        },
        "item-2": {
            image: "/search.svg",
            alt: "Matchez par IA",
        },
        "item-3": {
            image: "/rocket.svg",
            alt: "Développez votre projet",
        },
    }

    return (
        <div className="container mx-auto lg:max-w-6xl space-y-8 px-6 md:space-y-16 lg:space-y-20">
            <div className="relative z-10 mx-auto max-w-5xl space-y-4 text-center">
                <h2 className="text-balance font-bold text-4xl xl:text-5xl">
                    Comment fonctionne CoFound ?
                </h2>
                <p className="text-balance text-muted-foreground">
                    CoFound t’aide à trouver les bons cofondateurs, valider ton idée et transformer ton projet en startup.
                    En trois étapes simples, tu rejoins une communauté d’entrepreneurs ambitieux.
                </p>
            </div>

            <div className="grid sm:px-12 md:grid-cols-2 lg:px-0">
                <Accordion
                    type="single"
                    value={activeItem}
                    onValueChange={(value) => setActiveItem(value as ImageKey)}
                    className="w-full"
                >
                    <AccordionItem value="item-1" className="border-border">
                        <AccordionTrigger className="cursor-pointer hover:no-underline">
                            <div className="flex items-center gap-3 text-base font-medium">
                                <div className="flex size-10 items-center justify-center rounded-lg bg-secondary/10 text-secondary transition-colors group-hover:bg-secondary/20">
                                    <UserPlus className="size-5" />
                                </div>
                                <span>Crée ton profil</span>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                            Partage tes compétences, ta vision et ce que tu recherches.  
                            CoFound t’aide à te présenter comme un véritable entrepreneur.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2" className="border-border">
                        <AccordionTrigger className="cursor-pointer hover:no-underline">
                            <div className="flex items-center gap-3 text-base font-medium">
                                <div className="flex size-10 items-center justify-center rounded-lg bg-secondary/10 text-secondary transition-colors group-hover:bg-secondary/20">
                                    <Sparkles className="size-5" />
                                </div>
                                <span>Matche avec les bons profils</span>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                            Notre IA te met en relation avec des cofondateurs compatibles en fonction de vos valeurs,
                            compétences et objectifs de projet.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3" className="border-border">
                        <AccordionTrigger className="cursor-pointer hover:no-underline">
                            <div className="flex items-center gap-3 text-base font-medium">
                                <div className="flex size-10 items-center justify-center rounded-lg bg-secondary/10 text-secondary transition-colors group-hover:bg-secondary/20">
                                    <Rocket className="size-5" />
                                </div>
                                <span>Développe ton projet</span>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                            Structure ton idée, collabore avec ton équipe et fais évoluer ton projet avec les outils et
                            ressources intégrés de CoFound.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>

                <div className="hidden md:flex items-center justify-center">
                    <div className="relative flex size-full min-h-[300px] items-center justify-center backdrop-blur-sm transition-all">
                        {Object.entries(images).map(([key, { image, alt }]) => (
                            <div
                                key={key}
                                className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
                                    activeItem === key ? "scale-100 opacity-100" : "scale-95 opacity-0"
                                }`}
                            >
                                <Image
                                    src={image || "/placeholder.svg"}
                                    alt={alt}
                                    width={200}
                                    height={200}
                                    className="size-32 object-contain md:size-40 lg:size-48"
                                    priority={key === "item-1"}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
