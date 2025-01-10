import { useState } from "react";
import { Header } from "./components/Header/Header";
import { Vehicle } from "./components/Vehicle/Vehicle";
import styles from "./App.module.less";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />

      <main className={styles.main}>
        <section className={styles["vehicle-section"]}>
          <div className={styles["vehicle-section__container"]}>
            <Vehicle />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
