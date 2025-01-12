import { useQuery } from "@tanstack/react-query";
import { clsx } from "clsx";
import Skeleton from "react-loading-skeleton";
import { api } from "../../lib/api/api";
import styles from "./Breadcrumbs.module.less";

export const Breadcrumbs = () => {
  const { data, status } = useQuery({
    queryKey: ["vehicle"],
    queryFn: api.vehicle,
  });

  return (
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

      <h1 className={styles.container__heading}>
        {status === "success" ? data.name : <Skeleton count={0.25} />}
      </h1>
    </div>
  );
};
