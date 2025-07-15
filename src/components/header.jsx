"use client"
import Image from "next/image";
import Link from "next/link";
import { Check, PhoneCall, Mails, Search, Menu, ChevronDown, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Header() {
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    // Efecto para desactivar el scroll cuando el modal esté abierto
    useEffect(() => {
        if (isMobileMenuOpen) {
            // Desactivar scroll
            document.body.style.overflow = 'hidden';
        } else {
            // Reactivar scroll
            document.body.style.overflow = 'unset';
        }

        // Cleanup function para reactivar el scroll si el componente se desmonta
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    // Función para alternar el estado del dropdown
    const toggleServices = () => {
        setIsServicesOpen(!isServicesOpen);
    };

    // Función para cerrar el dropdown
    const closeServices = () => {
        setIsServicesOpen(false);
    };

    // Función para alternar el menú móvil
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    // Función para cerrar el menú móvil con animación
    const closeMobileMenu = () => {
        setIsClosing(true);
        setTimeout(() => {
            setIsMobileMenuOpen(false);
            setIsClosing(false);
        }, 300);
    };

    const navButtons = [
        { name: "Inicio", href: "/" },
        { name: "Quienes Somos", href: "/" },
        { name: "Nuestras Marcas", href: "/" },
        { name: "Proyectos", href: "/" },
    ];

    const serviciosButtons = [
        { name: "Catalogo Industrial", href: "https://www.catalogoindustrial.co/" },
        { name: "Termocuplas", href: "/" },
        { name: "Automatización", href: "/" },
        { name: "Productos", href: "/" },
    ];

    return (
        <div>
            <article className="flex justify-end gap-4 bg-red w-full h-auto p-2">
                <Link href="/" className="flex items-center justify-center h-full">
                    <Image src="/images/socialmedia/facebook.webp" alt="Ingeniería OL Logo" width={512} height={512} className="h-6 w-auto" />
                </Link>
                <Link href="/" className="flex items-center justify-center h-full">
                    <Image src="/images/socialmedia/instagram.webp" alt="Ingeniería OL Logo" width={512} height={512} className="h-6 w-auto" />
                </Link>
                <Link href="/" className="flex items-center justify-center h-full">
                    <Image src="/images/socialmedia/whatsapp.webp" alt="Ingeniería OL Logo" width={512} height={512} className="h-6 w-auto" />
                </Link>
            </article>

            <section className="flex flex-col items-center justify-evenly gap-2 md:flex-row">
                <article>
                    <Image
                        src="/images/logo.webp"
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
                    <button onClick={toggleMobileMenu}>
                        <Menu className="w-12 h-12 text-black md:hidden" />
                    </button>

                    <article className="text-black">
                        <p className="flex items-center gap-2"><Check className="font-bold" /> Soporte especializado</p>
                        <p className="flex items-center gap-2"><PhoneCall className="font-bold" /> 3168225865 | 3175731246</p>
                        <p className="flex items-center gap-2"><Mails className="font-bold" /> info@aingenieriaol.com</p>
                    </article>
                </article>
            </section>

            {/* Modal de menú móvil */}
            {isMobileMenuOpen && (
                <div className={`fixed inset-0 w-full z-50 md:hidden ${isClosing ? 'overlay-exit' : 'overlay-enter'}`}>
                    <div className={`fixed left-0 top-0 h-full w-full bg-white shadow-lg ${isClosing ? 'modal-exit' : 'modal-enter'}`}>
                        {/* Header del modal */}
                        <div className="flex justify-between items-center p-4 border-b">
                            <Image src="/images/logo.webp" alt="Ingeniería OL Logo" width={150} height={50} className="h-16 w-16" />
            
                            <button onClick={closeMobileMenu}>
                                <X className="w-6 h-6 text-gray-600" />
                            </button>
                        </div>

                        {/* Contenido del menú */}
                        <div className="p-4">
                            {/* Navegación principal */}
                            <nav className="mb-6">
                                <ul className="space-y-3">
                                    {navButtons.map((button) => (
                                        <li key={button.name}>
                                            <Link 
                                                href={button.href} 
                                                onClick={closeMobileMenu}
                                                className="block py-2 px-3 color-red text-lg active:bg-gray-100 rounded transition-colors duration-200"
                                            >
                                                {button.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </nav>

                            {/* Servicios */}
                            <div className="border-t pt-4">
                                <button 
                                    onClick={toggleServices}
                                    className="w-full flex justify-between items-center py-2 px-3 color-red text-lg active:bg-gray-100 rounded transition-colors duration-200"
                                >
                                    Servicios
                                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
                                </button>
                                
                                {isServicesOpen && (
                                    <div className="ml-4 mt-2 space-y-2">
                                        {serviciosButtons.map((service) => (
                                            <Link 
                                                key={service.name}
                                                href={service.href}
                                                onClick={closeMobileMenu}
                                                target={service.name === "Catalogo Industrial" ? "_blank" : undefined}
                                                className="block py-2 px-3 text-gray-700 active:bg-gray-100 rounded transition-colors duration-200"
                                            >
                                                {service.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* NAVBAR */}
            <section className="hidden md:block mb-[3px]">
                <nav className="w-full h-16 p-2 border-red-black flex justify-center items-center">
                    <ul className="flex justify-evenly items-center w-4/5">
                        {navButtons.map((button) => (
                            <li key={button.name}>
                                <Link href={button.href} className="color-red font-semibold text-lg hover:text-gray-300 border-b-2 border-transparent hover:border-black pb-1 transition-all duration-300">
                                    {button.name}
                                </Link>
                            </li>
                        ))}
                        
                        {/* Dropdown Servicios */}
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
                            
                            {/* Dropdown Menu */}
                            {isServicesOpen && (
                                <div 
                                    onMouseEnter={() => setIsServicesOpen(true)}
                                    onMouseLeave={closeServices}
                                    className="absolute top-full left-0 bg-white border border-gray-200 rounded-md shadow-lg z-50 min-w-48"
                                >
                                    {serviciosButtons.map((service) => (
                                        <Link 
                                            key={service.name}
                                            href={service.href}
                                            onClick={closeServices}
                                            target={service.name === "Catalogo Industrial" ? "_blank" : undefined}
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
