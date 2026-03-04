'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold tracking-wider text-white">
          Alperen Börklü
        </Link>

        {/* Masaüstü Menü */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium text-gray-300">
          <Link href="https://www.youtube.com/watch?v=v-fPkuxrqN4" target="_blank" className="hover:text-white transition-colors">Showreel</Link>
          <Link href="#work" className="hover:text-white transition-colors">Work</Link>
          <Link href="#brands" className="hover:text-white transition-colors">Brands</Link>
          <Link href="#pricing" className="hover:text-white transition-colors">Pricing</Link>
          <Link href="#blog" className="hover:text-white transition-colors">Blog</Link>
          <Link href="#resume" className="hover:text-white transition-colors">Resume</Link>
          <Link href="#about" className="hover:text-white transition-colors">About</Link>
          <Link href="#testimonials" className="hover:text-white transition-colors">Referrals</Link>
          <Link href="#contact" className="hover:text-white transition-colors">Contact</Link>
        </nav>

        {/* Mobil Menü Butonu */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
          </svg>
        </button>
      </div>

      {/* Mobil Açılır Menü */}
      {isOpen && (
        <div className="md:hidden bg-black/95 border-b border-white/10 p-4 space-y-4 flex flex-col text-center">
          <Link href="#work" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-white">Work</Link>
          <Link href="#resume" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-white">Resume</Link>
          <Link href="#contact" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-white">Contact</Link>
          {/* Diğer linkleri de buraya ekleyebilirsin */}
        </div>
      )}
    </header>
  );
}