"use client";
import { navLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";

const Header = () => {
  const [activeLink, setActiveLink] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const pathName = usePathname();

  useEffect(() => {
    const updateActiveLink = () => setActiveLink(window.location.hash);
    updateActiveLink();

    window.addEventListener('hashchange', updateActiveLink);
    return () => window.removeEventListener('hashchange', updateActiveLink);
  }, []);

  const scrollToSection = (path: string) => {
    if (!window.location.toString().includes('#')){
      return window.location.href = path;
    }
    if (['/livestream','/About','/portfolio/All'].includes(path)) {
      window.location.href = path;
      return;
    }
    const element = document.getElementById(path.slice(2));
    const headerHeight = headerRef.current?.offsetHeight || 0;

    if (element) {
      const offsetTop = element.offsetTop - headerHeight;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
      setTimeout(() => {
        window.location.hash = path.slice(2);
        setActiveLink(path);
      }, 100);
    }
    setIsMenuOpen(false);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    scrollToSection(path);
  };

  return (
    <header 
      ref={headerRef} 
      className="sticky top-0 z-50 bg-secondary-100 text-secondary-950 h-16 px-4 sm:px-12 md:px-16"
    >
      <div className="h-full max-w-7xl mx-auto flex justify-between items-center">
        <Link 
          href="/#home" 
          onClick={(e) => handleNavClick(e, '/#home')}
          className="flex items-center"
        >
          <Image 
            src="/logo.svg" 
            alt="logo" 
            width={100} 
            height={100} 
            priority 
          />
        </Link>
        <button
          className={`md:hidden p-2 relative ${isMenuOpen ? 'open' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className={`w-6 h-0.5 bg-secondary-950 mb-1.5 transition-all duration-300 ${isMenuOpen ? 'transform rotate-45 translate-y-2' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-secondary-950 mb-1.5 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-secondary-950 transition-all duration-300 ${isMenuOpen ? 'transform -rotate-45 -translate-y-2' : ''}`}></div>
        </button>
        <nav className={cn(
          "fixed md:relative top-16 md:top-0 left-0 w-full md:w-auto",
          "bg-secondary-100 md:bg-transparent",
          "p-4 md:p-0",
          "transform transition-transform duration-100 ease-in-out md:transform-none",
          isMenuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0",
          "md:flex md:items-center md:gap-12"
        )}>
          {navLinks.map(({ text, path }) => (
            <Link
              href={path}
              key={path}
              onClick={(e) => handleNavClick(e, path)}
              className={cn(
                "block md:inline-block",
                "py-2 md:py-0 mx-4 sm:mx-8 md:mx-0",
                "text-base md:text-lg font-semibold transition-colors duration-200",
                "hover:text-primary-500",
                (activeLink === path.split('/')[1] || pathName.includes(path.slice(2))) ? "text-primary-500" : ""
              )}
            >
              {text}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};
export default Header;