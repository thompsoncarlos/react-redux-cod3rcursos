import { redirect } from "next/dist/server/api-utils";

export default function handler(req, res) {
  res.status(200).json({
    id: redirect.quey.codigo,
    nome: `Cadu ${codigo}`,
    email: `cadu${codigo}@meuemail.com`
  })
}