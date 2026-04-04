import { useCallback } from "react";
import { motion } from "framer-motion";

export default function Workshops() {
  const onSubmit = useCallback((e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const body =
      "Kids Craft & Brunch — reservatieaanvraag\r\n\r\n" +
      "Naam: " +
      (fd.get("your-name") || "") +
      "\r\n" +
      "E-mail: " +
      (fd.get("your-email") || "") +
      "\r\n" +
      "Telefoon: " +
      (fd.get("your-phone") || "") +
      "\r\n" +
      "Gekozen slot: " +
      (fd.get("Date") || "") +
      "\r\n" +
      "Aantal volwassenen: " +
      (fd.get("booking-persons") || "") +
      "\r\n" +
      "Aantal kinderen: " +
      (fd.get("booking-kids") || "") +
      "\r\n\r\n" +
      "Bericht / opmerkingen:\r\n" +
      (fd.get("your-message") || "");
    window.location.href =
      "mailto:info@nestogent.be?subject=" +
      encodeURIComponent("Workshop booking — nesto") +
      "&body=" +
      encodeURIComponent(body);
  }, []);

  return (
    <section className="section page-top">
      <div className="wrap">
        <motion.p className="section-kicker" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
          Quality time
        </motion.p>
        <motion.h1 className="section-title" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}>
          Kids Craft &amp; Brunch
        </motion.h1>

        <div className="split" style={{ marginBottom: "2.5rem" }}>
          <motion.div className="split__visual" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <motion.div className="card-image" whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 280, damping: 20 }}>
              <img src="https://nestogent.be/wp-content/uploads/2025/11/jt-2.png" alt="Kinderen aan het knutselen bij nesto" width="600" height="400" />
            </motion.div>
          </motion.div>
          <motion.div className="prose" initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.65rem", marginTop: 0 }}>Creative fun for kids, a relaxed moment for parents.</h2>
            <p>
              Looking for a fun and meaningful afternoon activity? At nesto, we pair a guided creative workshop for kids with a calm, cosy moment for parents.
            </p>
            <p>
              While your little creators dive into colours, paint, glitter and imagination, you can slow down and enjoy a breakfast, brunch, coffee, tea or sweet
              treats in a relaxed atmosphere. A perfect balance of creativity for them and downtime for you.
            </p>
          </motion.div>
        </div>

        <div className="split split--reverse" style={{ marginBottom: "2.5rem" }}>
          <motion.div className="prose" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="workshop-block" style={{ marginBottom: 0 }}>
              <h3>How it works</h3>
              <p>
                <strong>A creative workshop for kids</strong>
                <br />
                Our craft sessions are led by a friendly and experienced host who guides kids from <strong>4 to 9 years old</strong> through a fun activity they can
                take home.
              </p>
              <p>
                <strong>Price: €18 per child</strong>
                <br />
                Includes craft materials + waffle + drink (Apple Juice or Fristi).
              </p>
              <p>
                <strong>Relaxed time for parents</strong>
                <br />
                Enjoy a lunch or brunch in our cosy interior while the kids craft away in a dedicated creative space.
              </p>
              <p>
                <strong>Duration</strong>
                <br />
                The workshop lasts 1 hour.
              </p>
              <p>
                <strong>Dates</strong>
                <br />
                The craft workshops take place on selected Saturdays &amp; Sundays.
              </p>
              <ul>
                <li>Sunday 19 April 2026: 09:00 – 10:00</li>
                <li>Sunday 19 April 2026: 10:30 – 11:30</li>
              </ul>
            </div>
          </motion.div>
          <motion.div className="split__visual" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.06 }}>
            <motion.div className="card-image" whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 280, damping: 20 }}>
              <img src="https://nestogent.be/wp-content/uploads/2025/11/jt-3.png" alt="Workshop sfeer bij nesto" width="600" height="400" />
            </motion.div>
          </motion.div>
        </div>

        <div className="split">
          <motion.div className="prose" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.65rem" }}>Book your spot</h2>
            <p>Because places are limited, booking is required.</p>
            <p>
              Reserve your child&apos;s workshop spot and your table at the same time using the form. Fill in your details, pick a date, and mention how many kids
              &amp; adults you want to register. We&apos;ll confirm your reservation via email.
            </p>
            <p className="form-note">
              Dit formulier opent je mailapp met een vooraf ingevulde e-mail naar info@nestogent.be. Voor tafelreservaties kun je ook de groene booking-knop gebruiken.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.08 }}>
            <div className="workshop-block">
              <form className="booking-form" onSubmit={onSubmit}>
                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="your-name">Your full name</label>
                    <input id="your-name" name="your-name" type="text" required autoComplete="name" />
                  </div>
                  <div className="form-field">
                    <label htmlFor="your-email">Your e-mail</label>
                    <input id="your-email" name="your-email" type="email" required autoComplete="email" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="your-phone">Your phone number</label>
                    <input id="your-phone" name="your-phone" type="tel" required placeholder="+32 …" autoComplete="tel" />
                  </div>
                  <div className="form-field">
                    <label htmlFor="Date">Choose a date and workshop</label>
                    <select id="Date" name="Date" required>
                      <option value="Sunday 19 April 2026, 09:00 - 10:00">Sunday 19 April 2026, 09:00 – 10:00</option>
                      <option value="Sunday 19 April 2026, 10:30 - 11:30">Sunday 19 April 2026, 10:30 – 11:30</option>
                    </select>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="booking-persons">Number of adults</label>
                    <input id="booking-persons" name="booking-persons" type="number" min="1" max="12" required placeholder="2" />
                  </div>
                  <div className="form-field">
                    <label htmlFor="booking-kids">Number of kids</label>
                    <input id="booking-kids" name="booking-kids" type="number" min="1" max="8" required placeholder="2" />
                  </div>
                </div>
                <div className="form-field">
                  <label htmlFor="your-message">Message / special request (optional)</label>
                  <textarea id="your-message" name="your-message" maxLength={2000} placeholder="Allergies, other requests, …" />
                </div>
                <motion.button type="submit" className="btn btn--primary" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  Request your spot
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
