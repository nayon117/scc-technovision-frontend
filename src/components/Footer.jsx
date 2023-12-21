import { Link } from "react-router-dom";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer footer-center   p-10 bg-third  rounded">
      <div className=" section-container space-y-4">
        <nav className="grid grid-flow-col gap-4">
          <Link to="/about" className="link link-hover">
            About us
          </Link>
          <Link to="/blog" className="link link-hover">
            Blog
          </Link>
          <Link to="/faq" className="link link-hover">
            FAQ
          </Link>
          <Link to="/contact" className="link link-hover">
            Contact
          </Link>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a
              href="https://www.linkedin.com/in/hasibul-hasan-nayon-3b35362a3/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="text-2xl"/>
            </a>
            <a
              href="https://github.com/nayon117"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="text-2xl"/>
            </a>
            <a
              href="https://web.facebook.com/profile.php?id=100063569796707"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook className="text-2xl"/>
            </a>
          </div>
        </nav>
        <aside>
          <p>Copyright © 2023 - All right reserved by TaskJet</p>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;
