import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const socialHover = { scale: 1.08, backgroundColor: "rgba(255,255,255,0.15)" };

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div>
          <span className="footer-brand">nesto</span>
          <p className="footer-copy">© 2026 nesto – belamavo bv – 1027927.212</p>
        </div>
        <div className="footer-nav">
          <Link to="/menu">Menu</Link>
          <div className="socials">
            <motion.a
              href="https://www.facebook.com/profile.php?id=61582396942827"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              whileHover={socialHover}
              whileTap={{ scale: 0.95 }}
            >
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M12 2C6.5 2 2 6.5 2 12c0 5 3.7 9.1 8.4 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7C18.3 21.1 22 17 22 12c0-5.5-4.5-10-10-10z" />
              </svg>
            </motion.a>
            <motion.a
              href="https://www.instagram.com/nesto.gent"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              whileHover={socialHover}
              whileTap={{ scale: 0.95 }}
            >
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M12 7.378c-2.552 0-4.622 2.069-4.622 4.622S9.448 16.622 12 16.622s4.622-2.069 4.622-4.622S14.552 7.378 12 7.378zM12 15c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3zm4.804-8.884a1.08 1.08 0 100 2.16 1.08 1.08 0 000-2.16zM12 3C9.556 3 9.249 3.01 8.289 3.054 7.331 3.098 6.677 3.25 6.105 3.472 5.513 3.702 5.011 4.01 4.511 4.511c-.5.5-.808 1.002-1.038 1.594C3.25 6.677 3.098 7.331 3.054 8.289 3.01 9.249 3 9.556 3 12c0 2.444.01 2.751.054 3.711.044.958.196 1.612.418 2.185.23.592.538 1.094 1.038 1.594.5.5 1.002.808 1.594 1.038.572.222 1.227.375 2.185.418C9.249 20.99 9.556 21 12 21s2.751-.01 3.711-.054c.958-.044 1.612-.196 2.185-.418.592-.23 1.094-.538 1.594-1.038.5-.5.808-1.002 1.038-1.594.222-.572.375-1.227.418-2.185C20.99 14.751 21 14.444 21 12s-.01-2.751-.054-3.711c-.044-.958-.196-1.612-.418-2.185-.23-.592-.538-1.094-1.038-1.594-.5-.5-1.002-.808-1.594-1.038-.572-.222-1.227-.375-2.185-.418C14.751 3.01 14.444 3 12 3z" />
              </svg>
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
}
