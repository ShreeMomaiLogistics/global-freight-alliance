import { Link, useLocation } from "wouter";
import { Ship, Menu, X, Phone, Mail } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Serene Sea Shipping", href: "/serene-sea-shipping" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-border/40 shadow-sm">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4 md:px-8 hidden md:flex justify-between items-center text-sm font-medium">
        <div className="flex items-center space-x-6">
          <span className="flex items-center gap-2"><Phone className="w-4 h-4" /> +91 8980888809</span>
          <span className="flex items-center gap-2"><Mail className="w-4 h-4" /> info@shreemomailogistics.com</span>
        </div>
        <div className="flex items-center space-x-4">
          <span>Global Reach, Local Expertise</span>
        </div>
      </div>
      {/* Main Nav */}
      <div className="w-full px-4 md:px-8 h-24 flex items-center justify-between">
        <Link href="/">
          <div className="flex items-center gap-2 sm:gap-3 cursor-pointer">
  <img
    src="/logo.png"
    alt="Shree Momai Logistics"
    className="h-10 sm:h-14 lg:h-16 w-auto object-contain"
  />

  <div className="leading-tight">
    <h1 className="font-bold tracking-tight text-primary text-sm sm:text-lg lg:text-2xl whitespace-nowrap">
      SHREE MOMAI LOGISTICS
    </h1>
  </div>
</div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <span
                className="font-semibold whitespace-nowrap tracking-wide transition-colors cursor-pointer hover:text-primary text-slate-600 text-sm"
              >
                {link.name}
              </span>
            </Link>
          ))}
          <Link href="/contact">
            <Button className="font-semibold px-6 tracking-wide">Request a Quote</Button>
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-slate-600 hover:text-primary p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b shadow-lg py-4 px-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <span
                onClick={() => setIsOpen(false)}
                className={`block text-lg font-medium cursor-pointer ${
                  location === link.href ? "text-primary" : "text-slate-600"
                }`}
              >
                {link.name}
              </span>
            </Link>
          ))}
          <Button className="w-full mt-4">Request a Quote</Button>
        </div>
      )}
    </header>
  );
}
