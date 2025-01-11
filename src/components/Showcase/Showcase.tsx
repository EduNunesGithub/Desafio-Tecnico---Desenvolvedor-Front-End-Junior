import styles from "./Showcase.module.less";

export const Showcase = () => (
  <article className={styles.article}>
    <h2 className={styles.article__heading}>Conheça o BMW Série 4 Cabrio</h2>

    <div className={styles["video-container"]}>
      <img
        alt=""
        className={styles["video-container__image"]}
        src="/Car 2.webp"
      />

      <button className={styles["video-container__button"]}>
        <img
          alt="Play"
          src="/Icon Play.svg"
        />
      </button>
    </div>
  </article>
);
