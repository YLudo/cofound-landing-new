import { Button } from "../ui/button";

export default function CTA() {
    return (
        <section className="py-16 bg-secondary">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex w-full flex-col gap-16 overflow-hidden rounded-lg p-8 md:rounded-xl lg:flex-row lg:items-center lg:p-12">
                    <div className="flex-1">
                        <h3 className="mb-3 text-2xl font-semibold md:mb-4 md:text-3xl lg:mb-6">
                            Aidez-nous à créer la plateforme parfaite pour vous !
                        </h3>
                        <p className="max-w-xl lg:text-lg">
                            Répondez à notre mini-questionnaire (2 minutes) et soyez parmi les premiers à tester CoFound.
                        </p>
                    </div>
                    <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
                        <Button
                            className="cursor-pointer"
                            asChild
                        >
                            <a href="https://forms.gle/mNJrNYP79FnMCv6dA" target="_blank">Répondre au questionnaire</a>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}