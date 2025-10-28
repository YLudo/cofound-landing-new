import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";

export default function Hero() {
    return (
        <section className="min-h-screen py-8 bg-primary flex flex-col justify-between">
            <div className="container mx-auto px-4 md:px-8">
                <nav className="hidden md:flex items-center justify-between">
                    <div className="flex items-center gap-6">
                        <Link href="/" className="flex items-center gap-2 text-white">
                            <img src={"/logo_icon.svg"} alt="Logo de CoFound" className="max-h-12" />
                            <span className="text-lg font-semibold tracking-tighter">CoFound</span>
                        </Link>
                    </div>
                    <div className="hidden md:flex gap-2">
                        <Button variant="ghost" className="text-white border-white hover:bg-white hover:text-primary" asChild>
                            <Link href={`${process.env.NEXT_PUBLIC_DASHBOARD_URL}/login`}>
                                Se connecter
                            </Link>
                        </Button>
                        <Button variant="secondary">
                            <Link href={`${process.env.NEXT_PUBLIC_DASHBOARD_URL}/register`}>
                                Nous rejoindre
                            </Link>
                        </Button>
                    </div>
                </nav>
                <div className="block md:hidden">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-6">
                            <Link href="/" className="flex items-center gap-2 text-white">
                                <img src={"/logo_icon.svg"} alt="Logo de CoFound" className="max-h-12" />
                                <span className="text-lg font-semibold tracking-tighter">CoFound</span>
                            </Link>
                        </div>
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="outline" size="icon" className="cursor-pointer">
                                    <Menu className="size-4" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent className="bg-primary border-primary overflow-y-auto">
                                <SheetHeader>
                                    <SheetTitle>
                                        <Link href="/" className="flex items-center gap-2 text-white">
                                            <img src={"/logo_icon.svg"} alt="Logo de CoFound" className="max-h-8" />
                                            <span className="text-lg font-semibold tracking-tighter">CoFound</span>
                                        </Link>
                                    </SheetTitle>
                                </SheetHeader>
                                <div className="flex flex-col gap-6 p-4">
                                    <div className="flex flex-col gap-4">
                                        <Button variant="secondary">
                                            <Link href={`${process.env.NEXT_PUBLIC_DASHBOARD_URL}/register`}>
                                                Nous rejoindre
                                            </Link>
                                        </Button>
                                        <Button variant="ghost" className="text-white border-white hover:bg-white hover:text-primary" asChild>
                                            <Link href={`${process.env.NEXT_PUBLIC_DASHBOARD_URL}/login`}>
                                                Se connecter
                                            </Link>
                                        </Button>
                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid items-center gap-8 lg:grid-cols-2">
                    <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                        <Badge className="bg-[#e2ee4c] text-black">
                            La bêta-test est là !
                            <ArrowUpRight className="ml-2 size-4" />
                        </Badge>
                        <h1 className="my-8 text-pretty text-4xl text-white font-bold xl:text-5xl">
                            Trouvez vos cofondateurs. Construisez votre avenir.
                        </h1>
                        <p className="text-white mb-8 max-w-xl xl:text-xl">
                            CoFound connecte les étudiants et jeunes entrepreneurs qui partagent vos valeurs et vos ambitions.  
                            Créez votre équipe, validez vos idées et lancez votre projet dans un cadre de confiance.
                        </p>
                        <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
                            <Button variant="secondary" asChild>
                                <Link href={`${process.env.NEXT_PUBLIC_DASHBOARD_URL}/login`}>
                                    Découvrir CoFound
                                </Link>
                            </Button>
                            <Button variant="ghost" className="text-white border-white hover:bg-white hover:text-primary" asChild>
                                <Link href={`${process.env.NEXT_PUBLIC_DASHBOARD_URL}/login`}>
                                    Commencer maintenant
                                </Link>
                            </Button>
                        </div>
                    </div>
                    <img
                        src={"/logo.svg"}
                        alt="Banière de CoFound"
                        className="hidden lg:block max-h-96 w-full object-cover"
                    />
                </div>
            </div>
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-8 lg:py-8">
                    <p className="text-pretty xl:text-xl text-white font-medium">Propulsé par</p>
                    <a href="https://lestarter.org/" target="_blank">
                        <img
                            src={"/le_starter.png"}
                            alt="Logo de Le Starter"
                            className="max-h-8"
                        />
                    </a>
                </div>
            </div>
        </section>
    );
}