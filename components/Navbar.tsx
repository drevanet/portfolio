"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, Menu, X, Sparkles } from "lucide-react";

const links = [
  { href: "/services", label: "Services", number: "01" },
  { href: "/portfolio", label: "Portfolio", number: "02" },
  { href: "/about", label: "About us", number: "03" },
  { href: "/blog", label: "Journal", number: "04" },
];

export function Navbar() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [path]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const isActive = (href: string) => path === href || path.startsWith(`${href}/`);

  return (
    <motion.header
      className={`site-header nav-premium ${scrolled ? "is-scrolled" : ""} ${open ? "menu-is-open" : ""}`}
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav className="nav-shell nav-premium-shell" aria-label="Main navigation">
        <Link className="brand brand-premium" href="/" aria-label="DREVANET home" onClick={() => setOpen(false)}>
          <span className="brand-symbol brand-symbol-premium"><span>D</span><i /></span>
          <span className="brand-wordmark">DREVANET<span className="brand-dot">.</span><small>CREATIVE DIGITAL STUDIO</small></span>
        </Link>

        <div className="nav-desktop-links">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className={`nav-premium-link ${isActive(link.href) ? "active" : ""}`}>
              <span>{link.label}</span>
              <span className="nav-link-number">{link.number}</span>
              <i className="nav-link-indicator" />
            </Link>
          ))}
        </div>

        <div className="nav-right">
          <span className="nav-availability"><i /> Available for projects</span>
          <Link className="nav-cta nav-cta-premium" href="/contact">
            <span>Let’s talk</span><span className="nav-cta-icon"><ArrowUpRight size={16} /></span>
          </Link>
          <button className="menu-toggle menu-toggle-premium" type="button" aria-label={open ? "Close navigation menu" : "Open navigation menu"} aria-expanded={open} onClick={() => setOpen((value) => !value)}>
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="nav-mobile-panel"
            initial={{ opacity: 0, y: -10, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.985 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
          >
            <div className="nav-mobile-intro"><Sparkles size={15} /><span>GOOD IDEAS START HERE</span></div>
            {links.map((link, index) => (
              <motion.div key={link.href} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.045 }}>
                <Link href={link.href} className={`nav-mobile-link ${isActive(link.href) ? "active" : ""}`} onClick={() => setOpen(false)}>
                  <span className="nav-mobile-number">{link.number}</span><span>{link.label}</span><ArrowUpRight size={18} />
                </Link>
              </motion.div>
            ))}
            <Link className="nav-mobile-contact" href="/contact" onClick={() => setOpen(false)}><span>Start a project</span><ArrowDownRight size={18} /></Link>
            <p className="nav-mobile-foot">Strategy · Design · Development</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
