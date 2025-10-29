import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";

const fontSans = FontSans({
    variable: "--font-sans",
    subsets: ["latin"],
});

const siteUrl = "https://cofounds.app/"

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
    },
    icons: {
        icon: "/favico.ico",
    },
    metadataBase: new URL(siteUrl),
    alternates: {
        canonical: "/",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        }
    },
    authors: [{ name: 'CoFound Team' }],
    creator: 'CoFound',
    publisher: 'CoFound',
    keywords: ['cofondateurs', 'startup', 'entrepreneurs', 'matching', 'projet', 'équipe', 'étudiants'],
    applicationName: 'CoFound',
    verification: {
        google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION
    }
};

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'CoFound',
    description: 'La plateforme qui connecte porteurs de projets, développeurs, designers et autres.',
    url: 'https://cofounds.app/',
    publisher: {
        '@type': 'Organization',
        name: 'CoFound',
        logo: {
            '@type': 'ImageObject',
            url: 'https://cofounds.app/logo.png'
        }
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
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
                    }}
                />
                {children}
            </body>
        </html>
    );
}
