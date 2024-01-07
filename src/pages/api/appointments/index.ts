import type { NextApiRequest, NextApiResponse } from 'next'
import { z } from 'zod'
import dayjs from 'dayjs'
import { prisma } from '@/lib/prisma'

// type Data = {
//   name: string
// }

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') return res.status(405).end()

  const bodySchema = z.object({
    id: z.string().uuid(),
    isPriority: z.boolean(),
    statusAppointment: z.number().min(0).max(4),
  })

  const { id, isPriority, statusAppointment } = bodySchema.parse(req.body)

  const appointment = await prisma.appointment.create({
    data: {
      patient_id: id,
      status_appointment: statusAppointment || 0,
      isPriority,
    },
  })

  res.status(200).json({ appointment })
}
