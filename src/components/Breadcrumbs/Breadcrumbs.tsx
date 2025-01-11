import { clsx } from "clsx";
import styles from "./Breadcrumbs.module.less";

export const Breadcrumbs = () => (
  <div className={styles.container}>
    <ul className={styles["links-list"]}>
      <li className={styles["links-list__list-item"]}>
        <a
          className={clsx(
            styles["links-list__link"],
            styles["links-list__link--disabled"],
          )}
          href="/"
        >
          Ofertas
        </a>
      </li>
      <li className={styles["links-list__list-item"]}>→</li>
      <li className={styles["links-list__list-item"]}>
        <a
          className={styles["links-list__link"]}
          href="/"
        >
          Novo Série 1
        </a>
      </li>
    </ul>

    <a
      className={styles.container__link}
      href="/"
    >
      Voltar para página anterior
    </a>

    <h1 className={styles.container__heading}>BMW Série 4 Cabrio</h1>
  </div>
);
