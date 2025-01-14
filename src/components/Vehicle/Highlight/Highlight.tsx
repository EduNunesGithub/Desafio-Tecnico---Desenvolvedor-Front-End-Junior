import { clsx } from "clsx";
import styles from "./Highlight.module.less";

export type HighlightProps = {
  description: React.ReactNode;
  heading: React.ReactNode;
  imageProps: React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >;
};

export const Highlight = ({
  description,
  heading,
  imageProps,
}: HighlightProps) => (
  <span className={styles.highlight}>
    <img
      {...imageProps}
      className={clsx(styles.highlight__img, imageProps.className)}
    />

    <strong className={styles.highlight__heading}>{heading}</strong>

    <span className={styles.highlight__description}>{description}</span>
  </span>
);
