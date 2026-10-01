import { SOCIAL } from '../config';

export default function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <p className="copyright">© {new Date().getFullYear()} Balakirushnan Jashvanth. All rights reserved</p>

        <div className="footer-links">
          <a href={SOCIAL.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <i className="fa-brands fa-github" />
          </a>
          <a href={SOCIAL.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <i className="fa-brands fa-linkedin-in" />
          </a>
          <a href={SOCIAL.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <i className="fa-brands fa-whatsapp" />
          </a>
          <a href={SOCIAL.email} aria-label="Email">
            <i className="fa-solid fa-envelope" />
          </a>
        </div>
      </div>
    </footer>
  );
}
