import { useQuery } from "@tanstack/react-query";
import { api } from "../../lib/api/api";
import { Button } from "../Button/Button";
import styles from "./Header.module.less";

export const Header = () => {
  const { data, status } = useQuery({
    queryKey: ["company"],
    queryFn: api.company,
  });

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logos}>
          <a
            className={styles.logos__link}
            href="/"
          >
            <img
              alt="Dealer"
              className={styles.logos__dealer}
              src="/Dealer Logo.svg"
            />
          </a>

          <div className={styles.logos__decoration} />

          <img
            alt="BMW"
            className={styles.logos__bmw}
            src="/BMW Logo.svg"
          />
        </div>

        <div className={styles.buttons}>
          <Button
            color="blue"
            onClick={() => {
              if (status !== "success") return;
              else window.location.href = `tel:+55${data.phone}`;
            }}
          >
            <img
              alt=""
              src="/Icon Phone.svg"
            />
            LIGUE AGORA
          </Button>

          <Button
            onClick={() => {
              if (status !== "success") return;
              window.open(`https://wa.me/${data.whatsapp}`, "_blank");
            }}
          >
            <img
              alt=""
              src="/Icon WhatsApp.svg"
            />
            WHATSAPP
          </Button>
        </div>
      </header>
    </div>
  );
};
