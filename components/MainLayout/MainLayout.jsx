// Components
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Aside from "../Aside/Aside";

// Styles
import styles from "./MainLayout.module.css";

const MainLayout = ({ children }) => (
  <div className={styles["container-home"]}>
    <Aside />
    <div className={styles["container-content"]}>
      <Header />
      <main className={styles["main-container"]}>{children}</main>
      <Footer />
    </div>
  </div>
);
export default MainLayout;
