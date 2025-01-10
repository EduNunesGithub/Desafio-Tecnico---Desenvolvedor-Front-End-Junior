import { Button } from "../Button/Button";
import { Highlight } from "./Highlight/Highlight";
import styles from "./Vehicle.module.less";

export const Vehicle = () => (
  <article className={styles.article}>
    <h2 className={styles.article__h2}>
      Descubra o BMW Série 4 Cabrio Cliente On-line tem Condições Especiais e
      aqui na Dealer BMW!
    </h2>

    <span className={styles.article__price}>
      A partir de <strong>R$ 179.950</strong>
    </span>

    <img
      alt=""
      className={styles.article__image}
      src="/Car.webp"
    />

    <article className={styles.highlights}>
      <h3 className={styles.highlights__heading}>Destaques</h3>

      <ul className={styles.highlights__list}>
        <li className={styles["highlights__list-item"]}>
          <Highlight
            description="Consumo"
            heading="14,7 km/l"
            imageProps={{ alt: "", src: "/Icon Consumption.svg" }}
          />
        </li>

        <li className={styles["highlights__list-item"]}>
          <Highlight
            description="Cilindrada"
            heading="999 cm3"
            imageProps={{ alt: "", src: "/Icon Engine Capacity.svg" }}
          />
        </li>

        <li className={styles["highlights__list-item"]}>
          <Highlight
            description="Potência"
            heading="75 cv"
            imageProps={{ alt: "", src: "/Icon Potency.svg" }}
          />
        </li>

        <li className={styles["highlights__list-item"]}>
          <Highlight
            description="Velocidade Máx."
            heading="154 km/h"
            imageProps={{ alt: "", src: "/Icon Velocity.svg" }}
          />
        </li>
      </ul>

      <Button
        color="blue"
        padding="medium"
      >
        TENHO INTERESSE
      </Button>
    </article>
  </article>
);
