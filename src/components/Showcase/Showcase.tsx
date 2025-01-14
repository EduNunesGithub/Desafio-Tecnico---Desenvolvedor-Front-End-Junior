import { useEffect, useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { api } from "../../lib/api/api";
import styles from "./Showcase.module.less";

export const Showcase = () => {
  const [isIntersecting, setIsIntersecting] = useState<boolean>(false);

  const { data, status } = useQuery({
    queryKey: ["vehicle"],
    queryFn: api.vehicle,
  });

  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const article = ref.current;
    if (article === null) return;

    const observer = new IntersectionObserver(
      (event) => {
        if (isIntersecting === false && event[0].isIntersecting === true)
          setIsIntersecting(true);
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0,
      },
    );

    observer.observe(article);

    return () => observer.disconnect();
  }, []);

  return (
    <article
      className={styles.article}
      ref={ref}
    >
      <h2 className={styles.article__heading}>Conheça o BMW Série 4 Cabrio</h2>

      <div className={styles["video-container"]}>
        {isIntersecting === true ?
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
        : <div className={styles["video-container__image"]} />}
      </div>
    </article>
  );
};
