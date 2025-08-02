import Link from "next/link";
import Newsletter from "./newsletter";

export default function Navbar() {
    return (
        <section className="py-4 bg-primary">
            <div className="container mx-auto px-4 md:px-8">
                <nav className="flex items-center justify-between">
                    <div className="flex items-center gap-6">
                        <Link href="" className="flex items-center gap-2 text-white">
                            <img src={"/logo.svg"} alt="Logo de CoFound" className="max-h-12" />
                            <span className="text-lg font-semibold tracking-tighter">CoFound</span>
                        </Link>
                    </div>
                    <div className="flex gap-2">
                        <Newsletter title="Rejoindre CoFound" />
                    </div>
                </nav>
            </div>
        </section>
    );
}