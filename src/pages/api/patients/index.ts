import { prisma } from '@/lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'
import { z } from 'zod'

// type Data = {
//   name: string
// }

export default async function handler(
  req: NextApiRequest,
  // res: NextApiResponse<Data>,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') return res.status(405).end()

  const bodySchema = z.object({
    name: z
      .string()
      .min(3, { message: 'O nome deve conter ao min. 3 letras' })
      .regex(/^[a-zA-Z\s]*$/, {
        message: 'O nome deve conter apenas letras',
      })
      .transform((name) => {
        return name
          .trim()
          .split(' ')
          .map((word) => {
            return word[0].toUpperCase().concat(word.substring(1))
          })
          .join(' ')
      }),
    age: z.coerce
      .number()
      .min(0, { message: 'Preencha o campo de idade' })
      .max(110, { message: 'Idade máxima é 110' }),
    gender: z.coerce.number().min(0).max(2),
    pcd: z.coerce.boolean(),
    cpf: z
      .string()
      .length(11, { message: 'CPF possui 11 digitos' })
      .regex(/^[0-9]*$/, {
        message: 'CPF deve conter apenas numeros',
      }),
  })

  const { name, age, gender, pcd, cpf } = bodySchema.parse(req.body)

  if (!cpf) {
    return res.status(400).json({
      error: 'Missing patient CPF data',
    })
  }

  const patientAlreadyExist = await prisma.patient.findFirst({
    where: {
      cpf,
    },
  })

  if (patientAlreadyExist) {
    return res.status(400).json({
      error: 'Patient already registed',
    })
  }

  const patient = await prisma.patient.create({
    data: {
      name,
      age,
      gender,
      pcd,
      cpf,
    },
  })

  res.status(200).json({ patient })
}
