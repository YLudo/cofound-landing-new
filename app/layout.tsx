import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";

const fontSans = FontSans({
    variable: "--font-sans",
    subsets: ["latin"],
});

const siteUrl = "https://cofounds.app";

export const metadata: Metadata = {
    title: {
        default: "CoFound — Trouvez vos associés et lancez votre projet",
        template: "%s | CoFound",
    },
    description:
        "CoFound connecte les étudiants et jeunes entrepreneurs qui partagent vos valeurs et vos ambitions. Créez votre équipe, validez vos idées et lancez votre projet dans un cadre de confiance.",
    openGraph: {
        title: "CoFound — Trouvez vos associés et lancez votre projet",
        description:
            "La plateforme qui connecte porteurs de projets, développeurs, designers et autres. Trouvez vos co-fondateurs grâce à notre matching IA et donnez vie à vos idées de startup.",
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
        type: "website",
    },
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon.ico",
    },
    metadataBase: new URL(siteUrl),
    alternates: {
        canonical: "/",
        languages: {
            "fr-FR": "/",
        },
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    authors: [{ name: "CoFound Team" }],
    creator: "CoFound",
    publisher: "CoFound",
    keywords: [
        "cofondateurs",
        "trouver associé",
        "startup",
        "matching IA",
        "équipe projet",
        "étudiants",
        "incubation",
        "idée startup",
        "entrepreneuriat étudiant",
        "cofounders",
        "création de startup",
    ],
    applicationName: "CoFound",
    verification: {
        google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "CoFound",
    description:
        "La plateforme qui connecte porteurs de projets, développeurs, designers et autres.",
    url: siteUrl,
    publisher: {
        "@type": "Organization",
        name: "CoFound",
        logo: {
            "@type": "ImageObject",
            url: `${siteUrl}/logo.png`,
        },
    },
};

const organizationLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "CoFound",
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    sameAs: [
        "https://www.linkedin.com/company/cofound-app/",
        "https://www.instagram.com/cofounds.app",
    ],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr">
            <body className={`${fontSans.variable} antialiased`}>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
                    }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(organizationLd).replace(/</g, "\\u003c"),
                    }}
                />
                {children}
            </body>
        </html>
    );
}
