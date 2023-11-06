import * as yup from "yup";
export const schema = yup
  .object({
    firstName: yup
      .string()
      .required("Име е задолжително")
      .max(20, "Името не смее да биде подолго од 20 карактери"),
    lastName: yup
      .string()
      .matches(/^[A-Za-z]+$/, "Презимето треба да содржи само букви"),
    email: yup
      .string()
      .email("Мора да биде валидна емаил адреса")
      .required("Емаил е задолжителен"),
    password: yup
      .string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Голема буква,мала буква,специјален карактер,бројка."
      )
      .min(8, "Лозинката мора да има најмалку 6 карактери")
      .required("Лозинка е задолжителна"),
    repeatPassword: yup
      .string()
      .oneOf([yup.ref("password"), "null"], "Лозинките мора да се совпаѓаат")
      .required("Потврда на лозинка е задолжителна"),
  })
  .required();