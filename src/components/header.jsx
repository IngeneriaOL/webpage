import Image from "next/image";
import Link from "next/link";
import { Check, PhoneCall, Mails, Search, Menu } from "lucide-react";

export default function Header() {
    return (
        <div>
            <article className="flex justify-end gap-4 bg-red w-full h-auto p-2">
                <Link href="/" className="flex items-center justify-center h-full">
                    <Image src="/images/socialmedia/facebook.png" alt="Ingeniería OL Logo" width={512} height={512} className="h-6 w-auto" />
                </Link>
                <Link href="/" className="flex items-center justify-center h-full">
                    <Image src="/images/socialmedia/instagram.png" alt="Ingeniería OL Logo" width={512} height={512} className="h-6 w-auto" />
                </Link>
                <Link href="/" className="flex items-center justify-center h-full">
                    <Image src="/images/socialmedia/whatsapp.png" alt="Ingeniería OL Logo" width={512} height={512} className="h-6 w-auto" />
                </Link>
            </article>

            <section className="flex flex-col items-center justify-evenly gap-2 md:flex-row">
                <article>
                    <Image
                        src="/images/logo.png"
                        alt="Ingeniería OL Logo"
                        width={150}
                        height={50}
                        className="h-full w-auto"
                    />
                </article>

                <article className="w-[90%] md:w-1/3">
                    <div className="relative flex items-center ">
                        <input
                            type="text"
                            placeholder="Buscar..."
                            className="pl-10 pr-4 py-2 w-full text-gray-400 border border-gray-300 rounded-sm bg-whitesmoke focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        />
                        <Search className="absolute left-3 w-4 text-gray-400 h-4" />
                    </div>
                </article>

                <article className="flex justify-between w-full items-center p-[5%] md:p-0 md:w-auto">
                    <Menu className="w-12 h-12 text-black md:hidden" />

                    <article className="text-black">
                        <p className="flex items-center gap-2"><Check /> Soporte especializado</p>
                        <p className="flex items-center gap-2"><PhoneCall /> 3168225865 | 3175731246</p>
                        <p className="flex items-center gap-2"><Mails /> info@aingenieriaol.com</p>
                    </article>
                </article>
            </section>
        </div>
    );
}
