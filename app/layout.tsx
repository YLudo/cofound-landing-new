import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const fontSans = FontSans({
    variable: "--font-sans",
    subsets: ["latin"],
});

const siteUrl = "https://www.cofound-app.com/"

export const metadata: Metadata = {
    title: "CoFound",
    description: "La plateforme qui connecte porteurs de projets, développeurs, designers et autres. Trouvez vos co-fondateurs grâce à notre matching IA et donnez vie à vos idées de startup.",
    openGraph: {
        title: "CoFound : Trouvez vos associés et lancez votre projet",
        description: "La plateforme pour transformer vos idées en startups à succès.",
        url: siteUrl,
        siteName: "CoFound",
        images: [
            {
                url: `${siteUrl}/logo.png`, 
                width: 1200,
                height: 630,
                alt: "Illustration de la plateforme CoFound",
            },
        ],
        locale: "fr_FR",
        type: "website"
    }
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr">
            <body
                className={`${fontSans.variable} antialiased`}
            >
                {children}
                <Toaster />
            </body>
        </html>
    );
}
