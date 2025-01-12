import { useQuery } from "@tanstack/react-query";
import { api } from "../../lib/api/api";
import styles from "./Showcase.module.less";

export const Showcase = () => {
  const { data, status } = useQuery({
    queryKey: ["vehicle"],
    queryFn: api.vehicle,
  });

  return (
    <article className={styles.article}>
      <h2 className={styles.article__heading}>Conheça o BMW Série 4 Cabrio</h2>

      <div className={styles["video-container"]}>
        <iframe
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className={styles["video-container__image"]}
          height="315"
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          src={status === "success" ? data.video : undefined}
          title="YouTube video player"
          width="560"
        />
      </div>
    </article>
  );
};
