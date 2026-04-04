import { motion } from "framer-motion";
import { MENU_PDF_URL, MENU_SECTIONS } from "../data/menuData.js";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.06 * i, duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Menu() {
  return (
    <section className="section page-top">
      <div className="wrap">
        <motion.p className="section-kicker" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          What we serve
        </motion.p>
        <motion.h1 className="section-title" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.05 }}>
          Onze kaart
        </motion.h1>

        <motion.p className="menu-intro" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15, duration: 0.5 }}>
          Hieronder vind je een overzicht per thema én het officiële menu als PDF (met alle prijzen en het volledige aanbod).
        </motion.p>

        <div className="menu-grid">
          {MENU_SECTIONS.map((section, i) => (
            <motion.article key={section.title} className="menu-category-card" custom={i} variants={cardVariants} initial="hidden" animate="show" whileHover={{ y: -3, boxShadow: "0 12px 40px rgba(28, 25, 23, 0.12)" }} transition={{ type: "spring", stiffness: 400, damping: 25 }}>
              <h3>{section.title}</h3>
              <p>{section.description}</p>
              <ul className="menu-examples">
                {section.examples.map((ex) => (
                  <li key={ex}>{ex}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>

        <motion.div className="pdf-panel" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.55 }}>
          <div className="pdf-toolbar">
            <p>
              <strong style={{ color: "var(--color-ink)" }}>Officieel menu (PDF)</strong> — zoom en print via je browser.
            </p>
            <motion.a className="btn btn--primary" href={MENU_PDF_URL} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              Open in nieuw tabblad
            </motion.a>
          </div>
          <div className="pdf-frame-wrap">
            <iframe title="Nesto menu PDF" src={`${MENU_PDF_URL}#view=FitH`} />
          </div>
          <p className="pdf-fallback">
            Zie je geen document?{" "}
            <a href={MENU_PDF_URL} target="_blank" rel="noopener noreferrer">
              Open de PDF hier
            </a>
            .
          </p>
        </motion.div>
      </div>
    </section>
  );
}
