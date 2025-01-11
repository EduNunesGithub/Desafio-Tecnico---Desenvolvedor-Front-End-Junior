import styles from "./VehicleDescription.module.less";

export const VehicleDescription = () => (
  <article className={styles.article}>
    <h2 className={styles.article__heading}>
      A vida é melhor quando compartilhada. BMW Série 4 Cabrio
    </h2>

    <p className={styles.article__paragraph}>
      A performance irradia de cada ângulo do design inovador do BMW Série 4
      Cabrio. Começando pela dianteira, que conta com para-choque clássico dos
      modelos BMW. Ao correr os olhos pelo design, nota-se imediatamente o teto
      inclinado e a linha do ombro marcante, que equilibra o centro de gravidade
      do carro. Voltando-se para as laterais, são os robustos arcos de 10 mm e
      as incomuns rodas de 21 polegadas que chamam a atenção. Ao chegar na
      traseira do BMW Série 4 Cabrio, a força do design continua surpreendendo.
      O para-choque com difusão clássica dos modelos BMW, as lâminas horizontais
      e teto com spoiler ganham um toque a mais de amplitude devido ao vidro
      traseiro levemente rebaixado.
    </p>
  </article>
);
