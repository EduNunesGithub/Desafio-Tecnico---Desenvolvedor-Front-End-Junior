import React from "react";
import { useQuery } from "@tanstack/react-query";
import Skeleton from "react-loading-skeleton";
import { api } from "../../lib/api/api";
import styles from "./Footer.module.less";

export const Footer = () => {
  const id = React.useId();

  const { data, status } = useQuery({
    queryKey: ["company"],
    queryFn: api.company,
  });

  return (
    <div className={styles.container}>
      <footer className={styles.footer}>
        <a
          className={styles.link}
          href="/"
        >
          <img
            alt="Dealer"
            className={styles.link__logo}
            src="/Dealer Logo White.svg"
          />
        </a>

        <article className={styles.social}>
          <h4
            className={styles.social__heading}
            id={id}
          >
            SIGA-NOS:
          </h4>

          <ul
            aria-labelledby={id}
            className={styles["social-links"]}
          >
            <li className={styles["social-links__list-item"]}>
              <a
                className={styles["social-links__anchor"]}
                href=""
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
                className={styles["social-links__anchor"]}
                href=""
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
                className={styles["social-links__anchor"]}
                href=""
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
          src="AF Logo.svg"
        />

        <div className={styles.footer__copyright}>
          <p>© Copyright 2021 - AutoForce - Todos os direitos reservados</p>
          <p>Confira a nossa Politica de privacidade.</p>
        </div>
      </footer>
    </div>
  );
};
