import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.mainFrame}>
      <div className={styles.header}>
        <div className={styles.headerGroup}>
          <img
            className={styles.logoIcon}
            loading="eager"
            alt=""
            src="/logo.svg"
          />
          <div className={styles.navigation}>
            <div className={styles.navLinks}>Home</div>
            <div className={styles.navLinks1}>Stays</div>
            <div className={styles.navLinks2}>Become a host</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
