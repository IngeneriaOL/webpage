"use client"
import { useState, useEffect, useRef } from "react";
import { Search, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import products from "../data/products";

export default function SearchModal({ isOpen, onClose }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const inputRef = useRef(null);

  // FILTER
  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredProducts([]);
      return;
    }

    const filtered = products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchTerm]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => {
        inputRef.current.focus();
      }, 100);
    }
  }, [isOpen]);

  // CLOSE MODAL ON ESCAPE
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  const handleProductClick = () => {
    setSearchTerm("");
    setFilteredProducts([]);
    onClose();
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-start justify-center pt-20" onClick={handleOverlayClick}>
      <section className="bg-white rounded-lg shadow-xl w-full max-w-2xl mx-4 max-h-[80vh] overflow-hidden">
        {/* Header */}
        <article className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold text-gray-800">Buscar Productos</h2>
          <button 
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </article>

        {/* Search Input */}
        <article className="p-4 border-b">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              ref={inputRef}
              id="search-input"
              type="text"
              placeholder="Buscar productos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border text-gray-400 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            />
          </div>
        </article>

        {/* Results */}
        <article className="max-h-96 overflow-y-auto">
          {searchTerm.trim() === "" ? (
            <div className="p-8 text-center text-gray-500">
              <Search className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <p>Escribe para buscar productos...</p>
            </div>
          ) : filteredProducts.length === 0 ? (
            <div className="p-8 text-center text-gray-500">
              <p>No se encontraron productos para "{searchTerm}"</p>
            </div>
          ) : (
            <div className="p-4">
              <p className="text-sm text-gray-600 mb-4">
                {filteredProducts.length} producto{filteredProducts.length !== 1 ? 's' : ''} encontrado{filteredProducts.length !== 1 ? 's' : ''}
              </p>
              
              <div className="space-y-2">
                {filteredProducts.map((product) => (
                  <Link
                    key={product.id}
                    href={`/products/${product.id}`}
                    onClick={handleProductClick}
                    className="flex items-center gap-4 p-3 hover:bg-gray-50 rounded-lg transition-colors group"
                  >
                    <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src={`/images/products/${product.src}`}
                        alt={product.alt}
                        width={64}
                        height={64}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform"
                      />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-gray-900 group-hover:text-red-600 transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-sm text-gray-500">
                        Ver detalles del producto
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </article>
      </section>
    </div>
  );
}