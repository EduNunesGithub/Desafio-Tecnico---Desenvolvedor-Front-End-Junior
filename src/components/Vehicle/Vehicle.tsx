import React from "react";
import { useQuery } from "@tanstack/react-query";
import Skeleton from "react-loading-skeleton";
import { api } from "../../lib/api/api";
import { AttractingLeads } from "../AttractingLeads/AttractingLeads";
import { Button } from "../Button/Button";
import { Highlight } from "./Highlight/Highlight";
import styles from "./Vehicle.module.less";

export const Vehicle = () => {
  const [modalLeads, setModalLeads] = React.useState<boolean>(false);

  const { data, status } = useQuery({
    queryKey: ["vehicle"],
    queryFn: api.vehicle,
  });

  return (
    <>
      <article className={styles.article}>
        <h2 className={styles.article__h2}>
          {status === "success" ? data.subheading : <Skeleton count={1} />}
        </h2>

        <span className={styles.article__price}>
          {status === "success" ?
            <>
              A partir de{" "}
              <strong>
                {new Intl.NumberFormat("pt-BR", {
                  currency: "BRL",
                  style: "currency",
                }).format(data.price)}
              </strong>
            </>
          : <>
              <Skeleton count={0.5} />
            </>
          }
        </span>

        <img
          alt=""
          className={styles.article__image}
          src={status === "success" ? data.image : undefined}
        />

        <article className={styles.highlights}>
          <h3 className={styles.highlights__heading}>Destaques</h3>

          <ul className={styles.highlights__list}>
            <li className={styles["highlights__list-item"]}>
              <Highlight
                description="Consumo"
                heading={
                  status === "success" ?
                    data.features.consumption
                  : <Skeleton count={1} />
                }
                imageProps={{ alt: "", src: "/Icon Consumption.svg" }}
              />
            </li>

            <li className={styles["highlights__list-item"]}>
              <Highlight
                description="Cilindrada"
                heading={
                  status === "success" ?
                    data.features.engine
                  : <Skeleton count={1} />
                }
                imageProps={{ alt: "", src: "/Icon Engine Capacity.svg" }}
              />
            </li>

            <li className={styles["highlights__list-item"]}>
              <Highlight
                description="Potência"
                heading={
                  status === "success" ?
                    data.features.power
                  : <Skeleton count={1} />
                }
                imageProps={{ alt: "", src: "/Icon Potency.svg" }}
              />
            </li>

            <li className={styles["highlights__list-item"]}>
              <Highlight
                description="Velocidade Máx."
                heading={
                  status === "success" ?
                    data.features.speed
                  : <Skeleton count={1} />
                }
                imageProps={{ alt: "", src: "/Icon Velocity.svg" }}
              />
            </li>
          </ul>

          <Button
            color="blue"
            onClick={() => setModalLeads(true)}
            padding="medium"
          >
            TENHO INTERESSE
          </Button>
        </article>
      </article>

      <AttractingLeads
        onClose={() => setModalLeads(false)}
        open={modalLeads}
      />
    </>
  );
};
