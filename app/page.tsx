import CallToAction from "@/components/application/call-to-action";
import FAQs from "@/components/application/faqs";
import Features from "@/components/application/features";
import Footer from "@/components/application/footer";
import Hero from "@/components/application/hero";
import HowItWorks from "@/components/application/how-it-works";
import { LatestPosts } from "@/components/application/latest-posts";
import Team from "@/components/application/team";

export default function HomePage() {
    return (
        <>
            <Hero />
            <section className="flex flex-col gap-24 md:gap-48 py-16 md:py-32">
                <Features />
                <HowItWorks />
                <Team />
                <FAQs />
                <LatestPosts />
                <CallToAction />
            </section>
            <Footer />
        </>
    );
}