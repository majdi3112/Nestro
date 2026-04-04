import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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
  const contentRef = useRef(null);

  const scrollToContent = () => {
    contentRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <motion.section
        className="hero hero--fullbleed"
        aria-label="Welcome"
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
            nesto – a new brunch place <br />
            in the heart of Ghent.
          </motion.h1>
          <motion.div className="hero__scroll" variants={fadeUp} custom={1}>
            <motion.button
              type="button"
              className="hero__scroll-btn"
              onClick={scrollToContent}
              aria-label="Scroll naar de rest van de pagina"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Meer ontdekken
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
                <img src="https://nestogent.be/wp-content/uploads/2025/11/Ontwerp-zonder-titel.jpg" alt="Brunch en gebak bij nesto" width="600" height="400" />
              </motion.div>
            </motion.div>
            <motion.div className="prose" initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}>
              <p className="prose-kicker">All day brunch &amp; sweets</p>
              <h2>Welcome to nesto</h2>
              <p>
                Fresh breakfast, tasty brunch, easy lunches and delicious drinks – all served in a warm, cosy interior
                in the heart of Ghent. That&apos;s nesto.
              </p>
              <div className="btn-row">
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                  <Link className="btn btn--primary" to="/menu">
                    Bekijk het menu
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="split split--reverse">
            <motion.div className="prose" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5 }}>
              <p className="prose-kicker">Visit us</p>
              <h2>Find us in the heart of Ghent</h2>
              <p>
                Find us at Zwartezustersstraat 32, 9000 Ghent — a quiet corner in the heart of the city, perfect for slow
                mornings, good company, and great food.
              </p>
              <p>
                <strong>Opening hours</strong>
              </p>
              <ul className="hours-list">
                <li>Tuesday – Friday: 08:00 – 17:30</li>
                <li>Saturday &amp; Sunday: 08:30 – 17:30</li>
                <li>Monday closed</li>
              </ul>
              <p className="contact-line">
                <strong>Tel</strong>: <a href="tel:+32491339298">+32 491 33 92 98</a>
              </p>
              <p className="contact-line">
                <strong>Email</strong>: <a href="mailto:info@nestogent.be">info@nestogent.be</a>
              </p>
            </motion.div>
            <motion.div className="split__visual" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5, delay: 0.08 }}>
              <div className="map-card">
                <iframe
                  title="nesto op de kaart"
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
