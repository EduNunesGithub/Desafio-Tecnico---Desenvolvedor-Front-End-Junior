import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { LegalText } from "./components/LegalText/LegalText";
import { Vehicle } from "./components/Vehicle/Vehicle";
import styles from "./App.module.less";

const App = () => (
  <>
    <Header />

    <main className={styles.main}>
      <section className={styles["vehicle-section"]}>
        <div className={styles["vehicle-section__container"]}>
          <Vehicle />
        </div>
      </section>

      <section className={styles["legal-text-section"]}>
        <div className={styles["legal-text-section__container"]}>
          <LegalText />
        </div>
      </section>
    </main>

    <Footer />
  </>
);

export default App;
