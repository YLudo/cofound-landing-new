import Link from "next/link";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

const socialLinks = [
    { icon: <FaInstagram className="size-5" />, href: "https://www.instagram.com/cofound.app_/", label: "Instagram" },
    { icon: <FaLinkedin className="size-5" />, href: "https://www.linkedin.com/company/cofound-app/", label: "Linkedin" },
]

const legalLinks = [
    { name: "Politique de confidentialité", href: "#" },
    { name: "Mentions légales", href: "#" },
];

export default function Footer() {
    return (
        <section className="py-16 bg-primary">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-white mt-8 flex flex-col justify-between gap-4 text-sm font-medium md:flex-row md:items-center md:text-left">
                    <div className="flex items-center gap-2 justify-start">
                        <img src={"/logo.svg"} alt="Logo de CoFound" className="max-h-12" />
                        <h2 className="text-lg font-semibold text-white">CoFound</h2>
                    </div>
                    <ul className="text-white flex items-center space-x-6">
                        {socialLinks.map((social, idx) => (
                            <li key={idx} className="bg-[#FF00E7] p-2 rounded-full font-medium">
                                <a href={social.href} aria-label={social.label} target="_blank">
                                    {social.icon}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="text-white mt-8 flex flex-col justify-between gap-4 border-t py-8 text-sm font-medium md:flex-row md:items-center md:text-left">
                    <p className="order-2 lg:order-1">© {new Date().getFullYear()} CoFound. Tous droits réservés.</p>
                    <ul className="order-1 flex flex-col gap-2 md:order-2 md:flex-row">
                        {legalLinks.map((link, idx) => (
                            <li key={idx} className="hover:text-secondary">
                                <Link href={link.href}> {link.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}