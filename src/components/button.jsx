import Link from "next/link";
import { memo } from "react";

const Button = memo(({ 
    children, 
    href, 
    target, 
    variant = "primary", 
    size = "medium",
    className = "", 
    onClick,
    disabled = false,
    ...props 
}) => {
    // Variantes de estilo
    const variants = {
        primary: "bg-black text-white hover:bg-gray-600 active:bg-gray-600",
        secondary: "bg-white text-black border border-black hover:bg-gray-100 active:bg-gray-100",
        red: "bg-[#ED1C24] text-white hover:bg-red-700 active:bg-red-700",
        outline: "bg-transparent border-2 border-black text-black hover:bg-black hover:text-white"
    };

    // Tamaños
    const sizes = {
        small: "py-2 px-4 text-xs",
        medium: "py-4 px-8 text-sm md:text-xs lg:text-sm",
        large: "py-6 px-12 text-base"
    };

    // Clases base
    const baseClasses = `
        font-bold 
        transition-all 
        duration-300 
        hover:scale-105 
        active:scale-95
        focus:outline-none 
        focus:ring-2 
        focus:ring-offset-2 
        focus:ring-gray-500
        disabled:opacity-50 
        disabled:cursor-not-allowed 
        disabled:hover:scale-100
        inline-block
        shadow-xl
        text-center
    `.replace(/\s+/g, ' ').trim();

    // Combinar todas las clases
    const buttonClasses = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

    // Si tiene href, renderizar como Link
    if (href) {
        return (
            <Link 
                href={href} 
                target={target}
                className={buttonClasses}
                onClick={onClick}
                {...props}
            >
                {children}
            </Link>
        );
    }

    // Si no tiene href, renderizar como button
    return (
        <button 
            className={buttonClasses}
            onClick={onClick}
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    );
});

Button.displayName = "Button";

export default Button;