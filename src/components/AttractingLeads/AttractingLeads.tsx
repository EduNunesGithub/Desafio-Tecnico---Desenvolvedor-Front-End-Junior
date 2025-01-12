import {
  Description,
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogProps,
  DialogTitle,
} from "@headlessui/react";
import { clsx } from "clsx";
import { useFormLeads } from "../../hooks/FormLeads/FormLeads";
import { Button } from "../Button/Button";
import { TextField } from "../TextField/TextField";
import styles from "./AttractingLeads.module.less";

export type AttractingLeadsProps = DialogProps;

export const AttractingLeads = ({
  onClose,
  ...props
}: AttractingLeadsProps) => {
  const { formState, handleSubmit, register } = useFormLeads();

  return (
    <Dialog
      {...props}
      onClose={onClose}
    >
      <DialogBackdrop
        transition
        className={clsx(
          "data-[closed]:opacity-0",
          styles["backdrop-component"],
        )}
      />

      <div className={styles.backdrop}>
        <DialogPanel
          className={clsx(
            "data-[closed]:opacity-0 data-[closed]:scale-75 data-[closed]:translate-y-1/4",
            styles.panel,
          )}
          transition
        >
          <DialogTitle className={styles.panel__title}>
            Tenho Interesse
          </DialogTitle>

          <Description className={styles.panel__description}>
            Preencha os seus dados para que nossa equipe entre em contato com
            você.
          </Description>

          <form
            className={styles.form}
            onSubmit={handleSubmit(() => {
              alert("Done!");
              onClose(true);
            })}
          >
            <TextField
              {...register("name")}
              disableMask
              error={formState.errors.name?.message}
              label="Nome"
              placeholder="e.g Beorththae"
            />

            <TextField
              {...register("e-mail")}
              disableMask
              error={formState.errors["e-mail"]?.message}
              label="E-mail"
              placeholder="e.g beorththae@email.com"
            />

            <TextField
              {...register("phone")}
              error={formState.errors.phone?.message}
              label="Telefone"
              mask="(__) _ ____-____"
              placeholder="e.g (12) 9 1234-5678"
              replacement={{ _: /\d/ }}
            />

            <Button
              color="blue"
              type="submit"
            >
              Enviar
            </Button>
          </form>
        </DialogPanel>
      </div>
    </Dialog>
  );
};
