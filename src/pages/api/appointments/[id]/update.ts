/* eslint-disable camelcase */
import { prisma } from '@/lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'
import error from 'next/error'
import { z } from 'zod'

const updateAppointmentBodySchema = z.object({
  patient_id: z.string().uuid().nullish(),
  isPriority: z.boolean().nullish(),
  status_appointment: z.number().nullish(),
})

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'PATCH') return res.status(405).end()

  const id = String(req.query.id)

  const { patient_id, isPriority, status_appointment } =
    updateAppointmentBodySchema.parse(req.body)

  const findAppointment = await prisma.appointment.findUnique({
    where: {
      id,
    },
  })

  if (!findAppointment) {
    return res.status(401).json({ error: 'Appointment not found' })
  }

  const updatedAppointment = await prisma.appointment.update({
    where: {
      id,
    },
    data: {
      status_appointment:
        status_appointment || findAppointment.status_appointment,
      isPriority: isPriority || findAppointment.isPriority,
      patient_id: patient_id || findAppointment.patient_id,
    },
  })

  return res.json({ updatedAppointment })
}
