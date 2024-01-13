import type { NextApiRequest, NextApiResponse } from 'next'

import { prisma } from '@/lib/prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') return res.status(405).end()

  const appointments = await prisma.appointment.findMany({
    orderBy: {
      created_at: 'asc',
    },
    include: {
      patient: true,
      statusAppointment: true,
    },
  })
  const priorityAppointments = appointments.filter(
    (appointment) => appointment.isPriority === true,
  )

  console.log('priprityAppointments:', priorityAppointments)

  res.status(200).json({ appointments })
}
