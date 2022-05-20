// Dependencies
import Image from "next/image";
import Link from "next/link";

// Styles
import styles from "./Footer.module.css";

// Assets
import logo from "../../public/true-north-small.svg";

const Footer = () => (
  <footer className={styles["container-nav-footer"]}>
    <nav className={styles["nav-footer"]}>
      <div className={styles["nav-footer__container-logo"]}>
        <Link href="/">
          <a>
            <Image
              src={logo}
              layout="intrinsic"
              objectFit="cover"
              alt="True North logo"
            />
          </a>
        </Link>
      </div>
      <div className={styles["nav-footer__container-links"]}>
        <a
          className={styles["nav-footer__link"]}
          href="https://github.com/cristianelias"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        <a
          className={styles["nav-footer__link"]}
          href="https://www.frontendmentor.io/profile/cristianelias"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
      </div>
      <a
        className={styles["nav-footer__button"]}
        href="https://www.linkedin.com/in/cristianelias/"
        target="_blank"
        rel="noreferrer"
      >
        Visit my LinkedIn
      </a>
    </nav>
  </footer>
);

export default Footer;
