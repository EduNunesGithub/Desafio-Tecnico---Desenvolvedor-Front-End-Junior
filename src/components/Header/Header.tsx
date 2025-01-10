import { Button } from "../Button/Button";
import styles from "./Header.module.less";

export const Header = () => (
  <div className={styles.container}>
    <header className={styles.header}>
      <div className={styles.logos}>
        <a
          className={styles.logos__link}
          href="/"
        >
          <img
            alt="Dealer"
            className={styles.logos__dealer}
            src="/Dealer Logo.svg"
          />
        </a>

        <div className={styles.logos__decoration} />

        <img
          alt="BMW"
          className={styles.logos__bmw}
          src="/BMW Logo.svg"
        />
      </div>

      <div className={styles.buttons}>
        <Button color="blue">LIGUE AGORA</Button>

        <Button>WHATSAPP</Button>
      </div>
    </header>
  </div>
);
