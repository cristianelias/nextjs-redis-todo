// Dependencies
import Image from "next/image";
import Link from "next/link";

// Assets
import logo from "../../public/true-north.svg";

// Styles
import styles from "./Header.module.css";

const Header = () => (
  <header className={styles.header}>
    <div className={styles["header-logo"]}>
      <Link href="/">
        <a>
          <Image
            src={logo}
            layout="responsive"
            objectFit="cover"
            alt="True North logo"
          />
        </a>
      </Link>
    </div>
  </header>
);

export default Header;
