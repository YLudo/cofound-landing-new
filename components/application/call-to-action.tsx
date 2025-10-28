import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function CallToAction() {
    return (
        <div className="container mx-auto px-4 md:px-8">
            <div className="rounded-3xl border py-12 md:py-20 lg:py-32 px-4 bg-primary text-primary-foreground">
                <div className="text-center">
                    <h2 className="text-balance text-4xl font-semibold xl:text-5xl">Lancez votre aventure entrepreneuriale</h2>
                    <p className="mt-4">Rejoignez la plateforme qui connecte les talents, les idées et les ambitions pour créer les projets de demain.</p>

                    <div className="mt-12 flex flex-wrap justify-center gap-4">
                        <Button
                            asChild
                            size="lg"
                            variant="secondary"
                        >
                            <Link href={`${process.env.NEXT_PUBLIC_DASHBOARD_URL}/register`}>
                                Découvrir CoFound
                            </Link>
                        </Button>

                        <Button
                            asChild
                            size="lg"
                            variant="ghost"
                        >
                            <Link href={`${process.env.NEXT_PUBLIC_DASHBOARD_URL}/login`}>
                                Commencer maintenant
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}