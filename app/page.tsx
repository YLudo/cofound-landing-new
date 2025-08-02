import CTA from "@/components/application/cta";
import FAQ from "@/components/application/faq";
import Footer from "@/components/application/footer";
import Functionnalities from "@/components/application/functionnalities";
import Hero from "@/components/application/hero";
import HowItWorks from "@/components/application/how-it-works";
import Navbar from "@/components/application/navbar";

export default function HomePage() {
    return (
        <>
            <Navbar />
            <Hero />
            <HowItWorks />
            <Functionnalities />
            <CTA />
            <FAQ />
            <Footer />
        </>
    );
}