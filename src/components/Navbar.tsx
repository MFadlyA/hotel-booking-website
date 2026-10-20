"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Rooms & Suites", href: "/#rooms" },
    { label: "Experience", href: "/#experience" },
    { label: "Offers", href: "/#offers" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <header className="relative z-50 border-b border-[#ded5c8] bg-[#f8f6f1]">
      <nav className="container-custom flex h-[82px] items-center justify-between">
        <Link href="/" className="flex flex-col">
          <span className="text-2xl font-semibold tracking-[0.12em] text-[#4a382d]">
            Arundra Signature
          </span>
          <span className="text-[9px] tracking-[0.42em] text-[#a58b72]">
            HOTEL & RESIDENCE
          </span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm text-[#62594f] hover:text-[#a58b72]"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-5 lg:flex">
          <Link
            href="/login"
            className="text-sm font-medium text-[#4a382d] hover:text-[#a58b72]"
          >
            Sign In
          </Link>

          <Link
            href="/#booking"
            className="bg-[#4a382d] px-6 py-3 text-sm text-white hover:bg-[#655043]"
          >
            Book Your Stay
          </Link>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-[#4a382d] lg:hidden"
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="absolute left-0 top-full w-full border-b border-[#ded5c8] bg-[#f8f6f1] px-6 py-5 shadow-lg lg:hidden">
          <div className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm text-[#4a382d]"
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/login"
              onClick={() => setMenuOpen(false)}
              className="text-sm text-[#4a382d]"
            >
              Sign In
            </Link>

            <Link
              href="/#booking"
              onClick={() => setMenuOpen(false)}
              className="bg-[#4a382d] px-5 py-3 text-center text-sm text-white"
            >
              Book Your Stay
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}