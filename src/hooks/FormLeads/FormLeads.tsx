import { zodResolver } from "@hookform/resolvers/zod";
import {
  FormState,
  useForm,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import * as zod from "zod";

export type FormLeads = zod.infer<typeof schema>;

export type UseFormLeads = () => UseFormLeadsObject;

export type UseFormLeadsObject = {
  formState: FormState<FormLeads>;
  handleSubmit: UseFormHandleSubmit<FormLeads, undefined>;
  register: UseFormRegister<FormLeads>;
};

const schema = zod.object({
  "e-mail": zod
    .string()
    .min(1, "Esse campo é obrigatório")
    .email("Precisa ser um e-mail válido"),
  name: zod.string().min(1, "Esse campo é obrigatório"),
  phone: zod
    .string()
    .min(1, "Esse campo é obrigatório")
    .regex(/^\(\d{2}\) \d \d{4}-\d{4}$/, {
      message: "Precisa ser um telefone válido",
    }),
});

export const useFormLeads: UseFormLeads = () => {
  const { formState, handleSubmit, register, watch } = useForm<FormLeads>({
    defaultValues: {
      "e-mail": "",
      name: "",
      phone: "",
    },
    resolver: zodResolver(schema),
  });

  return {
    formState,
    handleSubmit,
    register,
  };
};
