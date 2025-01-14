import { useId } from "react";
import { useQuery } from "@tanstack/react-query";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router";
import { api } from "../../lib/api/api";
import styles from "./Footer.module.less";

export const Footer = () => {
  const id = useId();

  const { data, status } = useQuery({
    queryKey: ["company"],
    queryFn: api.company,
  });

  return (
    <div className={styles.container}>
      <footer className={styles.footer}>
        <Link
          className={styles.link}
          to="/"
        >
          <img
            alt="Dealer"
            className={styles.link__logo}
            height={24}
            src="/Dealer Logo White.svg"
            width={130}
          />
        </Link>

        <article className={styles.social}>
          <span
            className={styles.social__heading}
            id={id}
          >
            SIGA-NOS:
          </span>

          <ul
            aria-labelledby={id}
            className={styles["social-links"]}
          >
            <li className={styles["social-links__list-item"]}>
              <a
                aria-label="Ir para Instagram"
                className={styles["social-links__anchor"]}
                href="https://www.instagram.com/autoforcebr/"
                target="_blank"
              >
                <img
                  alt=""
                  className={styles["social-links__image"]}
                  src="/Icon Instagram.svg"
                />
              </a>
            </li>
            <li className={styles["social-links__list-item"]}>
              <a
                aria-label="Ir para LinkedIn"
                className={styles["social-links__anchor"]}
                href="https://www.linkedin.com/company/autoforcebrasil/?originalSubdomain=br"
                target="_blank"
              >
                <img
                  alt=""
                  className={styles["social-links__image"]}
                  src="/Icon LinkedIn.svg"
                />
              </a>
            </li>
            <li className={styles["social-links__list-item"]}>
              <a
                aria-label="Ir para YouTube"
                className={styles["social-links__anchor"]}
                href="https://www.youtube.com/channel/UCLI4tg1oh_oLiJJteExJdUQ"
                target="_blank"
              >
                <img
                  alt=""
                  className={styles["social-links__image"]}
                  src="/Icon YouTube.svg"
                />
              </a>
            </li>
          </ul>
        </article>

        <div className={styles.footer__decoration} />

        <address className={styles.footer__address}>
          <span>
            {status === "success" ?
              <>
                <strong>Razão Social:</strong> {data.company_name}
              </>
            : <Skeleton count={0.25} />}
          </span>
          <span>
            {status === "success" ?
              <>
                <strong>CNPJ:</strong> {data.cnpj}
              </>
            : <Skeleton count={0.25} />}
          </span>
          <span>
            {status === "success" ?
              <>
                <strong>Endereço Matriz:</strong> {data.address}
              </>
            : <Skeleton count={0.25} />}
          </span>
        </address>

        <div className={styles.footer__decoration} />

        <img
          alt="Autoforce"
          className={styles["footer__af-logo"]}
          height={32}
          src="AF Logo.svg"
          width={80}
        />

        <div className={styles.footer__copyright}>
          <p>© Copyright 2021 - AutoForce - Todos os direitos reservados</p>
          <p>Confira a nossa Politica de privacidade.</p>
        </div>
      </footer>
    </div>
  );
};
