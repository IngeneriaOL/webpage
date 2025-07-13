import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <div className="bg-red flex flex-col items-center justify-center">
            <section className="flex flex-col items-center justify-center p-4">
                <article>
                    <Image
                        src="/images/logo-white.png"
                        alt="Ingeniería OL Logo"
                        width={150}
                        height={50}
                        className="h-full w-auto"
                    />
                </article>

                <p className="mt-4">Ingeniería OL S.A.S ©</p>

                <article className="flex justify-center gap-4 bg-red w-full h-auto p-2">
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
            </section>
        </div>
    );
}