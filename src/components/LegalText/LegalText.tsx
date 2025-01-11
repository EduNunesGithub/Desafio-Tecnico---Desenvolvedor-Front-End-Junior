import { useQuery } from "@tanstack/react-query";
import Skeleton from "react-loading-skeleton";
import { api } from "../../lib/api/api";
import styles from "./LegalText.module.less";

export const LegalText = () => {
  const { data, status } = useQuery({
    queryKey: ["vehicle"],
    queryFn: api.vehicle,
  });

  return (
    <article className={styles.article}>
      <h2 className={styles.article__heading}>
        {status === "success" ? "Texto Legal:" : <Skeleton count={1} />}
      </h2>

      <p className={styles.article__paragraph}>
        {status === "success" ? data.legal_text : <Skeleton count={2} />}
      </p>
    </article>
  );
};
