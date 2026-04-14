import { useCallback } from "react";
import { motion } from "framer-motion";
import { useI18n } from "../i18n/I18nContext.jsx";

export default function Workshops() {
  const { t } = useI18n();

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const fd = new FormData(e.target);
      const slotKey = fd.get("Date");
      const slotLabel = slotKey === "2" ? t("workshops.slot2") : t("workshops.slot1");
      const body =
        t("workshops.mailIntro") +
        "\r\n\r\n" +
        t("workshops.mailName") +
        ": " +
        (fd.get("your-name") || "") +
        "\r\n" +
        t("workshops.mailEmail") +
        ": " +
        (fd.get("your-email") || "") +
        "\r\n" +
        t("workshops.mailPhone") +
        ": " +
        (fd.get("your-phone") || "") +
        "\r\n" +
        t("workshops.mailSlot") +
        ": " +
        slotLabel +
        "\r\n" +
        t("workshops.mailAdults") +
        ": " +
        (fd.get("booking-persons") || "") +
        "\r\n" +
        t("workshops.mailKids") +
        ": " +
        (fd.get("booking-kids") || "") +
        "\r\n\r\n" +
        t("workshops.mailMsg") +
        ":\r\n" +
        (fd.get("your-message") || "");
      window.location.href =
        "mailto:info@nestogent.be?subject=" + encodeURIComponent(t("workshops.mailSubject")) + "&body=" + encodeURIComponent(body);
    },
    [t]
  );

  return (
    <section className="section page-top">
      <div className="wrap">
        <motion.p className="section-kicker" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
          {t("workshops.kicker")}
        </motion.p>
        <motion.h1 className="section-title" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}>
          {t("workshops.title")}
        </motion.h1>

        <div className="split" style={{ marginBottom: "2.5rem" }}>
          <motion.div className="split__visual" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <motion.div className="card-image" whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 280, damping: 20 }}>
              <img src="https://nestogent.be/wp-content/uploads/2025/11/jt-2.png" alt={t("workshops.imgCraftAlt")} width="600" height="400" />
            </motion.div>
          </motion.div>
          <motion.div className="prose" initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="workshop-subtitle">{t("workshops.introTitle")}</h2>
            <p>{t("workshops.introP1")}</p>
            <p>{t("workshops.introP2")}</p>
          </motion.div>
        </div>

        <div className="split split--reverse" style={{ marginBottom: "2.5rem" }}>
          <motion.div className="prose" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="workshop-block" style={{ marginBottom: 0 }}>
              <h3>{t("workshops.howTitle")}</h3>
              <p>
                <strong>{t("workshops.howWTitle")}</strong>
                <br />
                {t("workshops.howWText")}
              </p>
              <p>
                <strong>{t("workshops.howPriceTitle")}</strong>
                <br />
                {t("workshops.howPriceText")}
              </p>
              <p>
                <strong>{t("workshops.howParentsTitle")}</strong>
                <br />
                {t("workshops.howParentsText")}
              </p>
              <p>
                <strong>{t("workshops.howDurationTitle")}</strong>
                <br />
                {t("workshops.howDurationText")}
              </p>
              <p>
                <strong>{t("workshops.howDatesTitle")}</strong>
                <br />
                {t("workshops.howDatesText")}
              </p>
              <ul>
                <li>{t("workshops.slot1")}</li>
                <li>{t("workshops.slot2")}</li>
              </ul>
            </div>
          </motion.div>
          <motion.div className="split__visual" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.06 }}>
            <motion.div className="card-image" whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 280, damping: 20 }}>
              <img src="https://nestogent.be/wp-content/uploads/2025/11/jt-3.png" alt={t("workshops.imgMoodAlt")} width="600" height="400" />
            </motion.div>
          </motion.div>
        </div>

        <div className="split">
          <motion.div className="prose" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="workshop-subtitle">{t("workshops.bookTitle")}</h2>
            <p>{t("workshops.bookP1")}</p>
            <p>{t("workshops.bookP2")}</p>
            <p className="form-note">{t("workshops.bookNote")}</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.08 }}>
            <div className="workshop-block">
              <form className="booking-form" onSubmit={onSubmit}>
                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="your-name">{t("workshops.formName")}</label>
                    <input id="your-name" name="your-name" type="text" required autoComplete="name" />
                  </div>
                  <div className="form-field">
                    <label htmlFor="your-email">{t("workshops.formEmail")}</label>
                    <input id="your-email" name="your-email" type="email" required autoComplete="email" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="your-phone">{t("workshops.formPhone")}</label>
                    <input id="your-phone" name="your-phone" type="tel" required placeholder="+32 …" autoComplete="tel" />
                  </div>
                  <div className="form-field">
                    <label htmlFor="Date">{t("workshops.formSlot")}</label>
                    <select id="Date" name="Date" required>
                      <option value="1">{t("workshops.slot1")}</option>
                      <option value="2">{t("workshops.slot2")}</option>
                    </select>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="booking-persons">{t("workshops.formAdults")}</label>
                    <input id="booking-persons" name="booking-persons" type="number" min="1" max="12" required placeholder="2" />
                  </div>
                  <div className="form-field">
                    <label htmlFor="booking-kids">{t("workshops.formKids")}</label>
                    <input id="booking-kids" name="booking-kids" type="number" min="1" max="8" required placeholder="2" />
                  </div>
                </div>
                <div className="form-field">
                  <label htmlFor="your-message">{t("workshops.formMessage")}</label>
                  <textarea id="your-message" name="your-message" maxLength={2000} placeholder={t("workshops.formMessagePh")} />
                </div>
                <motion.button type="submit" className="btn btn--primary" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  {t("workshops.formSubmit")}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
