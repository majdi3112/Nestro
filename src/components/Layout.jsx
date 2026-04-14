import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import { useI18n } from "../i18n/I18nContext.jsx";

export default function Layout({ children }) {
  const { t } = useI18n();
  return (
    <div className="app-root">
      <a className="skip-link" href="#main">
        {t("layout.skip")}
      </a>
      <Header />
      <main id="main" className="main-fill">
        {children}
      </main>
      <Footer />
    </div>
  );
}
