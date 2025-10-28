import { FaInstagram, FaLinkedin } from "react-icons/fa";

const socialLinks = [
    { icon: <FaInstagram className="size-5" />, href: "https://www.instagram.com/cofound.app_/", label: "Instagram" },
    { icon: <FaLinkedin className="size-5" />, href: "https://www.linkedin.com/company/cofound-app/", label: "Linkedin" },
]

export default function Footer() {
    return (
        <section className="py-8 bg-primary">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-white mt-8 flex justify-between gap-4 text-sm font-medium md:flex-row md:items-center md:text-left">
                    <div className="flex items-center gap-2 justify-start">
                        <img src={"/logo_icon.svg"} alt="Logo de CoFound" className="max-h-12" />
                        <h2 className="text-lg font-semibold text-white">CoFound</h2>
                    </div>
                    <ul className="text-white flex items-center space-x-6">
                        {socialLinks.map((social, idx) => (
                            <li key={idx} className="bg-secondary p-2 rounded-full font-medium hover:bg-[#e2ee4c] hover:text-black">
                                <a href={social.href} aria-label={social.label} target="_blank">
                                    {social.icon}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="text-white mt-8 flex flex-col justify-between gap-4 border-t py-8 text-sm font-medium md:flex-row md:items-center md:text-left">
                    <p className="order-2 lg:order-1">© {new Date().getFullYear()} CoFound. Tous droits réservés.</p>
                </div>
            </div>
        </section>
    );
}