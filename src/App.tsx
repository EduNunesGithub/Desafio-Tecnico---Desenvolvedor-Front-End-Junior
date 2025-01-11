import { clsx } from "clsx";
import { Breadcrumbs } from "./components/Breadcrumbs/Breadcrumbs";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { LegalText } from "./components/LegalText/LegalText";
import { Showcase } from "./components/Showcase/Showcase";
import { Vehicle } from "./components/Vehicle/Vehicle";
import { VehicleDescription } from "./components/VehicleDescription/VehicleDescription";
import styles from "./App.module.less";

const App = () => (
  <>
    <Header />

    <main className={styles.main}>
      <section className={styles["breadcrumbs-section"]}>
        <div className={styles["breadcrumbs-section__container"]}>
          <Breadcrumbs />
        </div>
      </section>

      <section className={styles["vehicle-section"]}>
        <div className={styles["vehicle-section__container"]}>
          <Vehicle />
        </div>
      </section>

      <div className={styles["light-background"]}>
        <div className={styles.divider}>
          <div
            className={clsx(
              styles.divider__line,
              styles["divider__line--strong"],
            )}
          />
        </div>

        <section className={styles["vehicle-description-section"]}>
          <div className={styles["vehicle-description-section__container"]}>
            <VehicleDescription />
          </div>
        </section>

        <div className={styles.divider}>
          <div className={styles.divider__line} />
        </div>

        <section className={styles["showcase-section"]}>
          <div className={styles["showcase-section__container"]}>
            <Showcase />
          </div>
        </section>

        <div className={styles.divider}>
          <div className={styles.divider__line} />
        </div>

        <section className={styles["legal-text-section"]}>
          <div className={styles["legal-text-section__container"]}>
            <LegalText />
          </div>
        </section>
      </div>
    </main>

    <Footer />
  </>
);

export default App;
