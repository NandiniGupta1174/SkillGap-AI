import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import Logo from "./Logo";
import Button from "./Button";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    "Features",
    "How It Works",
    "About",
    "Contact",
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-slate-200">
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Logo />

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="text-slate-700 hover:text-blue-600 transition"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <Button variant="ghost">Login</Button>
          <Button>Get Started</Button>
        </div>

        {/* Mobile Button */}
        <button
          className="lg:hidden text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 px-6 py-5">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-slate-700"
              >
                {link}
              </a>
            ))}

            <Button variant="ghost">Login</Button>

            <Button>Get Started</Button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;