import { useQuery } from "@tanstack/react-query";
import Skeleton from "react-loading-skeleton";
import { api } from "../../lib/api/api";
import styles from "./VehicleDescription.module.less";

export const VehicleDescription = () => {
  const { data, status } = useQuery({
    queryKey: ["vehicle"],
    queryFn: api.vehicle,
  });

  return (
    <article className={styles.article}>
      <h2 className={styles.article__heading}>
        {status === "success" ?
          data.description.heading
        : <Skeleton count={2} />}
      </h2>

      <p className={styles.article__paragraph}>
        {status === "success" ?
          data.description.paragraph
        : <Skeleton count={11} />}
      </p>
    </article>
  );
};
