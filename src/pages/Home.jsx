import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { food } from "../data/siteImages.js";
import { useI18n } from "../i18n/I18nContext.jsx";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  }),
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

export default function Home() {
  const { t } = useI18n();
  const contentRef = useRef(null);

  const scrollToContent = () => {
    contentRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <motion.section
        className="hero hero--fullbleed"
        aria-label={t("home.heroAria")}
        initial={{ opacity: 0, scale: 1.02 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="hero__media">
          <motion.img
            src="https://nestogent.be/wp-content/uploads/2025/10/nesto-homebanner.jpg"
            alt=""
            width="1125"
            height="750"
            fetchpriority="high"
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
        <div className="hero__overlay" aria-hidden="true" />
        <motion.div className="hero__content" variants={stagger} initial="hidden" animate="show">
          <motion.h1 variants={fadeUp} custom={0}>
            {t("home.heroTitle1")} <br />
            {t("home.heroTitle2")}
          </motion.h1>
          <motion.div className="hero__scroll" variants={fadeUp} custom={1}>
            <motion.button
              type="button"
              className="hero__scroll-btn"
              onClick={scrollToContent}
              aria-label={t("home.scrollAria")}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              {t("home.scrollCta")}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.section>

      <section ref={contentRef} id="home-content" className="section section--tint" tabIndex={-1}>
        <div className="wrap">
          <div className="split">
            <motion.div className="split__visual" initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}>
              <motion.div className="card-image" whileHover={{ y: -4 }} transition={{ type: "spring", stiffness: 300, damping: 22 }}>
                <img src={food.brunchPlate} alt={t("home.imgBrunchAlt")} width="600" height="400" />
              </motion.div>
            </motion.div>
            <motion.div className="prose" initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}>
              <p className="prose-kicker">{t("home.welcomeKicker")}</p>
              <h2>{t("home.welcomeTitle")}</h2>
              <p>{t("home.welcomeText")}</p>
              <div className="btn-row">
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                  <Link className="btn btn--primary" to="/menu">
                    {t("home.menuCta")}
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="home-kids-corner-heading">
        <div className="wrap">
          <div className="split">
            <motion.div className="prose" initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}>
              <p className="prose-kicker">{t("home.kidsKicker")}</p>
              <h2 id="home-kids-corner-heading">{t("home.kidsTitle")}</h2>
              <p className="home-kids-lead">{t("home.kidsLead")}</p>
              <p>{t("home.kidsP1")}</p>
              <p>{t("home.kidsP2")}</p>
              <p className="form-note" style={{ marginBottom: "1.25rem" }}>
                {t("home.kidsNoteBefore")}{" "}
                <Link to="/workshops">{t("nav.workshops")}</Link> {t("home.kidsNoteAfter")}
              </p>
              <div className="btn-row" style={{ marginTop: 0 }}>
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                  <Link className="btn btn--primary" to="/workshops">
                    {t("home.kidsCta")}
                  </Link>
                </motion.div>
              </div>
            </motion.div>
            <motion.div className="split__visual" initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}>
              <motion.div className="card-image" whileHover={{ y: -4 }} transition={{ type: "spring", stiffness: 300, damping: 22 }}>
                <img src={food.kidsCorner} alt={t("home.imgKidsAlt")} width="600" height="400" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section section--tint section--compact" aria-label={t("home.foodMosaicAria")}>
        <div className="wrap home-food-mosaic">
          <motion.figure initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.5 }}>
            <img src={food.pastry} alt={t("home.imgPastryAlt")} width="600" height="450" loading="lazy" />
          </motion.figure>
          <motion.figure initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.5, delay: 0.08 }}>
            <img src={food.coffeeTable} alt={t("home.imgCoffeeAlt")} width="600" height="450" loading="lazy" />
          </motion.figure>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="split split--reverse">
            <motion.div className="prose" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5 }}>
              <p className="prose-kicker">{t("home.visitKicker")}</p>
              <h2>{t("home.visitTitle")}</h2>
              <p>{t("home.visitText")}</p>
              <p>
                <strong>{t("home.hoursLabel")}</strong>
              </p>
              <ul className="hours-list">
                <li>{t("home.hours1")}</li>
                <li>{t("home.hours2")}</li>
                <li>{t("home.hours3")}</li>
              </ul>
              <p className="contact-line">
                <strong>{t("home.telLabel")}</strong>: <a href="tel:+32491339298">+32 491 33 92 98</a>
              </p>
              <p className="contact-line">
                <strong>{t("home.emailLabel")}</strong>: <a href="mailto:info@nestogent.be">info@nestogent.be</a>
              </p>
            </motion.div>
            <motion.div className="split__visual" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5, delay: 0.08 }}>
              <div className="map-card">
                <iframe
                  title={t("home.mapTitle")}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://maps.google.com/maps?width=100%25&amp;height=100%25&amp;q=Zwartezustersstraat%2032%209000%20Gent&amp;t=&amp;z=15&amp;hl=nl&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
