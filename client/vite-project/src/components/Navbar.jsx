import { useState } from "react";
import { HiMenu, HiX,HiSun,HiMoon } from "react-icons/hi";
import Logo from "./Logo";
import Button from "./Button";
import { useTheme } from "../context/ThemeContext";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { dark, toggleTheme } = useTheme();

  const navLinks = [
    "Features",
    "How It Works",
    "About",
    "Contact",
  ];

  return (
    <header
  className="sticky top-0 z-50 backdrop-blur-xl"
  style={{
    background: "rgba(11,16,32,0.75)",
    borderBottom: "1px solid var(--border)",
  }}
>
    
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
          <button
  onClick={toggleTheme}
  className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300"
  style={{
    backgroundColor: "var(--surface)",
    border: "1px solid var(--border)",
    color: "var(--text)",
  }}
>
  {dark ? <HiSun size={22} /> : <HiMoon size={22} />}
</button>
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
            <button
  onClick={toggleTheme}
  className="w-full py-3 rounded-xl"
  style={{
    backgroundColor: "var(--surface)",
    color: "var(--text)",
    border: "1px solid var(--border)",
  }}
>
  {dark ? "☀️ Light Mode" : "🌙 Dark Mode"}
</button>

            <Button variant="ghost">Login</Button>

            <Button>Get Started</Button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;