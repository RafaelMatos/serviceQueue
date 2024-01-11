import { prisma } from '@/lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') return res.status(405).end()

  const cpf = String(req.query.cpf)

  const employee = await prisma.employee.findUnique({
    where: {
      cpf,
    },
    include: {
      genderType: true,
    },
  })

  console.log('employee', employee)

  if (!employee) {
    return res.status(400).json({
      error: 'Funcionario não encontrado',
    })
  }

  return res.json({ user: employee })
}
