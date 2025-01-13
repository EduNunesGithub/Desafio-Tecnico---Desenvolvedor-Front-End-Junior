import { Leads as LeadsClass } from "../../lib/leads/leads";
import styles from "./Leads.module.less";

const leads = new LeadsClass();

export const Leads = () => {
  const data = leads.getLeads();

  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <article className={styles.article}>
          <h1 className={styles.article__heading}>Contactos Captados</h1>

          <table className={styles.table}>
            <thead className={styles.table__thead}>
              <tr>
                <th>Nome</th>
                <th>E-mail</th>
                <th>Telefone</th>
              </tr>
            </thead>

            <tbody className={styles.table__tbody}>
              {data.map((lead, index) => (
                <tr key={index}>
                  <td>{lead.name}</td>
                  <td>{lead["e-mail"]}</td>
                  <td>{lead.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </article>
      </section>
    </main>
  );
};
