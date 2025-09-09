import React, { useState, useEffect, useRef, useCallback } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { navbarData } from "../lib/navbarData";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeHeading, setActiveHeading] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileSubmenu, setActiveMobileSubmenu] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const navbarRef = useRef(null);
  const timeoutRef = useRef(null);

  // Scroll shadow
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Click outside to close dropdown
  const handleClickOutside = useCallback(
    (e) => {
      if (navbarRef.current && !navbarRef.current.contains(e.target)) {
        setActiveDropdown(null);
        setIsMobileMenuOpen(false);
      }
    },
    [navbarRef]
  );

  useEffect(() => {
    if (activeDropdown !== null || isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [activeDropdown, isMobileMenuOpen, handleClickOutside]);

  // Resize handler
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
        setActiveMobileSubmenu(null);
        setActiveDropdown(null);
      }
    };
    let resizeTimer;
    const debouncedResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(handleResize, 100);
    };
    window.addEventListener("resize", debouncedResize);
    return () => {
      window.removeEventListener("resize", debouncedResize);
      clearTimeout(resizeTimer);
    };
  }, []);

  // Escape key closes menus
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setActiveDropdown(null);
        setIsMobileMenuOpen(false);
        setActiveMobileSubmenu(null);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Prevent body scroll on mobile menu
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
  }, [isMobileMenuOpen]);

  // Desktop dropdown hover
  const handleMouseEnter = useCallback((index, menu) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(index);
    if (menu?.megaMenu) setActiveHeading(menu.megaMenu[0]);
  }, []);

  const handleMouseLeave = useCallback(() => {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 150);
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
    setActiveMobileSubmenu(null);
  }, []);

  const toggleMobileSubmenu = useCallback((index) => {
    setActiveMobileSubmenu((prev) => (prev === index ? null : index));
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
    setActiveMobileSubmenu(null);
  }, []);

  // Mega menu for desktop
  const renderMegaMenu = useCallback(
    (menuData) => {
      return (
        <div className="absolute top-full left-0 w-xl bg-white shadow-xl border-t border-gray-100 z-50 animate-in fade-in-0 slide-in-from-top-2 duration-200">
          <div className="max-w-7xl mx-auto flex">
            {/* Left - Headings */}
            <div className="w-1/4 border-r border-gray-200 bg-gray-50">
              <ul className="flex flex-col">
                {menuData.map((section, idx) => (
                  <li
                    key={idx}
                    className={`px-4 py-3 text-sm font-medium cursor-pointer transition-colors ${
                      activeHeading?.heading === section.heading
                        ? "bg-white text-blue-600 border-l-4 border-blue-600"
                        : "text-gray-700 hover:bg-white hover:text-blue-500"
                    }`}
                    onMouseEnter={() => setActiveHeading(section)}
                  >
                    {section.heading}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right - Subheadings */}
            <div className="w-3/4 px-6 py-6">
              {activeHeading?.subHeadings?.map((sub, subIdx) => (
                <div key={subIdx} className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-2">
                    {sub.title}
                  </h4>
                  <div className="grid grid-cols-3 lg:grid-cols-4 gap-3">
                    {sub.links.map((link, linkIdx) => (
                      <a
                        key={linkIdx}
                        href={link.path}
                        className="text-gray-600 hover:text-blue-600 text-sm block px-2 py-1 rounded transition-colors duration-200"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    },
    [activeHeading]
  );

  // Submenu (simple dropdown)
  const renderSubmenu = useCallback((submenu) => {
    return (
      <div className="absolute top-full left-0 bg-white shadow-xl border border-gray-100 rounded-lg py-2 min-w-56 z-50 animate-in fade-in-0 slide-in-from-top-2 duration-200">
        {submenu.map((item, idx) => (
          <a
            key={idx}
            href={item.path}
            className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
          >
            {item.label}
          </a>
        ))}
      </div>
    );
  }, []);

  return (
    <header className="relative">
      <nav
        ref={navbarRef}
        className={`bg-white sticky top-0 z-40 transition-all duration-200 ${
          isScrolled ? "shadow-md border-b border-gray-100" : "shadow-sm"
        }`}
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <a
              href="/"
              className="flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md p-1"
              aria-label="ALP Consulting - Home"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-md text-white flex items-center justify-center font-bold shadow-sm">
                A
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-gray-800 leading-none">ALP</span>
                <span className="text-xs text-gray-500 hidden sm:inline leading-none">Consulting</span>
              </div>
            </a>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-1">
              {navbarData.map((item, index) => (
                <div
                  key={index}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(index, item)}
                  onMouseLeave={handleMouseLeave}
                >
                  {item.path ? (
                    <a
                      href={item.path}
                      className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-all duration-200 rounded-lg hover:bg-blue-50"
                    >
                      {item.title}
                    </a>
                  ) : (
                    <button
                      className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-all duration-200 rounded-lg hover:bg-blue-50 flex items-center space-x-1"
                      aria-expanded={activeDropdown === index}
                      aria-haspopup="true"
                    >
                      <span>{item.title}</span>
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-200 ${
                          activeDropdown === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  )}

                  {activeDropdown === index && (
                    <>
                      {item.megaMenu && renderMegaMenu(item.megaMenu)}
                      {item.submenu && renderSubmenu(item.submenu)}
                    </>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Desktop */}
            <div className="hidden lg:block">
              <a
                href="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 shadow-sm hover:shadow-md"
              >
                Get Quote
              </a>
            </div>

            {/* Mobile menu toggle */}
            <div className="lg:hidden">
              <button
                onClick={toggleMobileMenu}
                className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <>
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
              onClick={closeMobileMenu}
              aria-hidden="true"
            />
            <div className="fixed top-16 left-0 right-0 bottom-0 bg-white z-50 lg:hidden overflow-y-auto">
              <div className="px-4 py-6 space-y-2">
                {navbarData.map((item, index) => (
                  <div key={index} className="border-b border-gray-100 pb-4 last:pb-0">
                    {item.path ? (
                      <a
                        href={item.path}
                        className="block px-3 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium"
                        onClick={closeMobileMenu}
                      >
                        {item.title}
                      </a>
                    ) : (
                      <>
                        <button
                          onClick={() => toggleMobileSubmenu(index)}
                          className="w-full flex items-center justify-between px-3 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium"
                        >
                          <span>{item.title}</span>
                          <ChevronDown
                            size={16}
                            className={`transition-transform duration-200 ${
                              activeMobileSubmenu === index ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        {activeMobileSubmenu === index && (
                          <div className="mt-2 space-y-1">
                            {item.submenu?.map((subItem, subIdx) => (
                              <a
                                key={subIdx}
                                href={subItem.path}
                                className="block px-6 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg"
                                onClick={closeMobileMenu}
                              >
                                {subItem.label}
                              </a>
                            ))}
                            {item.megaMenu?.map((section, secIdx) => (
                              <div key={secIdx} className="pt-4 first:pt-2">
                                <div className="px-6 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                                  {section.heading}
                                </div>
                                {section.subHeadings?.map((sub, sIdx) => (
                                  <div key={sIdx} className="space-y-1">
                                    <div className="px-6 py-1 text-gray-500 text-xs font-semibold">
                                      {sub.title}
                                    </div>
                                    {sub.links.map((link, lIdx) => (
                                      <a
                                        key={lIdx}
                                        href={link.path}
                                        className="block px-8 py-1 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg"
                                        onClick={closeMobileMenu}
                                      >
                                        {link.label}
                                      </a>
                                    ))}
                                  </div>
                                ))}
                              </div>
                            ))}
                          </div>
                        )}
                      </>
                    )}
                  </div>
                ))}

                <div className="pt-6 border-t border-gray-100">
                  <a
                    href="/contact"
                    className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center px-6 py-3 rounded-lg font-medium"
                    onClick={closeMobileMenu}
                  >
                    Get Quote
                  </a>
                </div>
              </div>
            </div>
          </>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
