"use client"
import Image from "next/image";
import Link from "next/link";
import { Check, PhoneCall, Mails, Search, Menu, ChevronDown, X } from "lucide-react";
import { useState, useEffect, useCallback, memo } from "react";

// Static data outside component
const NAV_BUTTONS = [
    { name: "Inicio", href: "/" },
    { name: "Quiénes Somos", href: "/about" },
    { name: "Nuestras Marcas", href: "/trademarks" },
    { name: "Proyectos", href: "/projects" },
    { name: "Catálogo Industrial", href: "https://www.catalogoindustrial.co/" },
];

const SERVICIOS_BUTTONS = [
    { name: "Termocuplas", href: "/thermocouples" },
    { name: "Productos", href: "/products" },
];

const SOCIAL_LINKS = [
    { src: "/images/socialmedia/facebook.webp", alt: "Facebook" },
    { src: "/images/socialmedia/instagram.webp", alt: "Instagram" },
    { src: "/images/socialmedia/whatsapp.webp", alt: "WhatsApp" },
];

// Optimized social link component
const SocialLink = memo(({ src, alt }) => (
    <Link href="/" className="flex items-center justify-center h-full">
        <Image
            src={src}
            alt={alt}
            width={24}
            height={24}
            className="h-6 w-auto"
        />
    </Link>
));

// Optimized navigation component
const NavItem = memo(({ button, onClick }) => (
    <li>
        <Link
            href={button.href}
            onClick={onClick}
            target={button.name === "Catálogo Industrial" ? "_blank" : undefined}
            className="block py-2 px-3 color-red text-lg active:bg-gray-100 rounded transition-colors duration-200"
        >
            {button.name}
        </Link>
    </li>
));

// Optimized services dropdown component
const ServiceItem = memo(({ service, onClick }) => (
    <Link
        href={service.href}
        onClick={onClick}
        target={service.name === "Catalogo Industrial" ? "_blank" : undefined}
        className="block py-2 px-3 text-gray-700 active:bg-gray-100 rounded transition-colors duration-200"
    >
        {service.name}
    </Link>
));

export default function Header() {
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    // Memoized functions
    const toggleServices = useCallback(() => {
        setIsServicesOpen(prev => !prev);
    }, []);

    const closeServices = useCallback(() => {
        setIsServicesOpen(false);
    }, []);

    const toggleMobileMenu = useCallback(() => {
        setIsMobileMenuOpen(prev => !prev);
    }, []);

    const closeMobileMenu = useCallback(() => {
        setIsClosing(true);
        const timeoutId = setTimeout(() => {
            setIsMobileMenuOpen(false);
            setIsClosing(false);
        }, 300);

        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <div>
            {/* Social media bar */}
            <article className="flex justify-end gap-4 bg-red w-full h-auto p-2">
                {SOCIAL_LINKS.map((link, index) => (
                    <SocialLink key={index} {...link} />
                ))}
            </article>

            {/* Main header */}
            <section className="flex flex-col items-center justify-evenly gap-2 md:flex-row">
                <article>
                    <Image
                        src="/images/logo.webp"
                        alt="Ingeniería OL Logo"
                        width={150}
                        height={50}
                        className="h-full w-auto"
                        priority
                    />
                </article>

                <article className="w-[90%] md:w-1/3">
                    <div className="relative flex items-center">
                        <input
                            type="text"
                            placeholder="Buscar..."
                            className="pl-10 pr-4 py-2 w-full text-gray-400 border border-gray-300 rounded-sm bg-whitesmoke focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        />
                        <Search className="absolute left-3 w-4 text-gray-400 h-4" />
                    </div>
                </article>

                <article className="flex justify-between w-full items-center p-[5%] md:p-0 md:w-auto">
                    <button onClick={toggleMobileMenu} aria-label="Open menu">
                        <Menu className="w-12 h-12 text-black md:hidden" />
                    </button>

                    <article className="text-black">
                        <p className="flex items-center gap-2"><Check className="font-bold" /> Soporte especializado</p>
                        <p className="flex items-center gap-2"><PhoneCall className="font-bold" /> 3168225865 | 3175731246</p>
                        <p className="flex items-center gap-2"><Mails className="font-bold" /> info@aingenieriaol.com</p>
                    </article>
                </article>
            </section>

            {/* Mobile menu modal */}
            {isMobileMenuOpen && (
                <div className={`fixed inset-0 w-full z-50 md:hidden ${isClosing ? 'overlay-exit' : 'overlay-enter'}`}>
                    <div className={`fixed left-0 top-0 h-full w-full bg-white shadow-lg ${isClosing ? 'modal-exit' : 'modal-enter'}`}>
                        <div className="flex justify-between items-center p-4 border-b">
                            <Image
                                src="/images/logo.webp"
                                alt="Ingeniería OL Logo"
                                width={64}
                                height={64}
                                className="h-16 w-16"
                            />
                            <button onClick={closeMobileMenu} aria-label="Close menu">
                                <X className="w-6 h-6 text-gray-600" />
                            </button>
                        </div>

                        <div className="p-4">
                            <nav className="mb-6 font-bold">
                                <ul className="space-y-3">
                                    {NAV_BUTTONS.map((button) => (
                                        <NavItem key={button.name} button={button} onClick={closeMobileMenu} />
                                    ))}
                                </ul>
                            </nav>

                            <div className="border-t pt-4">
                                <button
                                    onClick={toggleServices}
                                    className="w-full flex justify-between font-bold items-center py-2 px-3 color-red text-lg active:bg-gray-100 rounded transition-colors duration-200"
                                >
                                    Servicios
                                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
                                </button>

                                {isServicesOpen && (
                                    <div className="ml-4 mt-2 space-y-2">
                                        {SERVICIOS_BUTTONS.map((service) => (
                                            <ServiceItem key={service.name} service={service} onClick={closeMobileMenu} />
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Desktop navigation */}
            <section className="hidden md:block mb-[3px]">
                <nav className="w-full h-16 p-2 border-red-black flex justify-center items-center">
                    <ul className="flex justify-evenly items-center w-4/5">
                        {NAV_BUTTONS.map((button) => (
                            <li key={button.name}>
                                <Link
                                    href={button.href}
                                    target={button.name === "Catálogo Industrial" ? "_blank" : undefined}
                                    className="color-red font-semibold text-lg hover:text-gray-300 border-b-2 border-transparent hover:border-black pb-1 transition-all duration-300">
                                    {button.name}
                                </Link>
                            </li>
                        ))}

                        <li className="relative">
                            <button
                                onClick={toggleServices}
                                onMouseEnter={() => setIsServicesOpen(true)}
                                onMouseLeave={() => setIsServicesOpen(false)}
                                className="color-red font-semibold text-lg hover:text-gray-300 border-b-2 border-transparent hover:border-black transition-all duration-300 flex items-center gap-1"
                            >
                                Servicios
                                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
                            </button>

                            {isServicesOpen && (
                                <div
                                    onMouseEnter={() => setIsServicesOpen(true)}
                                    onMouseLeave={closeServices}
                                    className="absolute top-full left-0 bg-white border border-gray-200 rounded-md shadow-lg z-50 min-w-48"
                                >
                                    {SERVICIOS_BUTTONS.map((service) => (
                                        <Link
                                            key={service.name}
                                            href={service.href}
                                            onClick={closeServices}
                                            className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-red-600 transition-colors duration-200"
                                        >
                                            {service.name}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </li>
                    </ul>
                </nav>
            </section>
        </div>
    );
}
