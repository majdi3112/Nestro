import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useI18n, SUPPORTED } from "../i18n/I18nContext.jsx";

export default function Header() {
  const { locale, setLocale, t } = useI18n();
  const [open, setOpen] = useState(false);

  const links = [
    { to: "/", label: t("nav.home") },
    { to: "/menu", label: t("nav.menu") },
    { to: "/workshops", label: t("nav.workshops") },
  ];

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="logo-link" to="/" aria-label={t("nav.logoAria")}>
          <motion.img
            src="https://nestogent.be/wp-content/uploads/2025/11/logo-website.png"
            alt="nesto"
            width="135"
            height="54"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          />
        </Link>
        <nav className="nav-desktop" aria-label={t("nav.mainAria")}>
          {links.map(({ to, label }) => (
            <NavLink key={to} to={to} className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} end={to === "/"}>
              {label}
            </NavLink>
          ))}
        </nav>
        <div className="header-actions">
          <div className="lang-switch" role="group" aria-label={t("nav.langPick")}>
            {SUPPORTED.map((code) => (
              <button
                key={code}
                type="button"
                className={`lang-switch__btn${locale === code ? " is-active" : ""}`}
                onClick={() => setLocale(code)}
                aria-pressed={locale === code}
                lang={code}
              >
                {code.toUpperCase()}
              </button>
            ))}
          </div>
          <button
            type="button"
            className="nav-toggle"
            aria-expanded={open}
            aria-controls="nav-mobile"
            aria-label={open ? t("nav.closeMenu") : t("nav.openMenu")}
            onClick={() => setOpen((o) => !o)}
          >
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              animate={{ rotate: open ? 90 : 0 }}
              width="22"
              height="22"
            >
              {open ? (
                <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
              )}
            </motion.svg>
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav
            id="nav-mobile"
            className="nav-mobile"
            aria-label={t("nav.mobileAria")}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: "hidden" }}
          >
            {links.map(({ to, label }, i) => (
              <motion.div
                key={to}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 + i * 0.05 }}
              >
                <NavLink
                  to={to}
                  className={({ isActive }) => (isActive ? "nav-mobile-link active" : "nav-mobile-link")}
                  end={to === "/"}
                  onClick={() => setOpen(false)}
                >
                  {label}
                </NavLink>
              </motion.div>
            ))}
            <div className="lang-switch lang-switch--mobile" role="group" aria-label={t("nav.langPick")}>
              {SUPPORTED.map((code) => (
                <button
                  key={code}
                  type="button"
                  className={`lang-switch__btn${locale === code ? " is-active" : ""}`}
                  onClick={() => {
                    setLocale(code);
                    setOpen(false);
                  }}
                  aria-pressed={locale === code}
                  lang={code}
                >
                  {code.toUpperCase()}
                </button>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
