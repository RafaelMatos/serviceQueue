import * as Dialog from '@radix-ui/react-dialog'
import { Text } from '../../Typography'
import { DialogContent } from '../../ui/DialogContent'

import BoxHeader from '../../BoxHeader'
import { PatientRegistered } from '../../PatientRegister'
import { useState } from 'react'
import { useAppointment } from '@/hooks/useAppointment'
import { api } from '@/lib/axios'
import { AppointmentRegister } from '../../AppointmentRegister'

interface ConfirmPatientAppointmentProps {
  patient: PatientRegistered
}

const DialogConfirmPatientAppointment = ({
  patient,
}: ConfirmPatientAppointmentProps) => {
  const { name, age, isPcd, id } = patient
  const isPriority = isPcd || age >= 60
  const [output, setOutput] = useState('')
  const [registerErro, setRegisterErro] = useState<string | null>(null)
  const [registerSuccess, setRegisterSuccess] = useState<string | null>(null)
  const { addToAppointments } = useAppointment()
  const handleRegisterAppointment = async () => {
    try {
      const response = await api.post('/appointments', {
        id,
        isPriority,
        statusAppointment: 0,
      })
      const appointment = response.data.appointment
      if (appointment) {
        addToAppointments({
          id: appointment.id,
          isPriority: appointment.isPriority,
          created_at: appointment.created_at,
          patient_id: appointment.patient_id,
          status_appointment: appointment.status_appointment,
        })
      }
      setOutput(JSON.stringify(response, null, 2))
      setRegisterSuccess('Consulta marcada!')
    } catch (err) {
      setRegisterErro('Erro ao cadastrar Consulta')
      console.log(err)
    }
  }

  const descriptionMessage = `Deseja confirmar a consulta para o paciente ${
    patient.name ?? 'Nome do paciente'
  } ?`
  return (
    <Dialog.Portal>
      <DialogContent
        title="Confirmar consulta de paciente"
        description={descriptionMessage}
      >
        <AppointmentRegister
          patient={patient}
          // cancelAppointmentRegister={() => setPatientRegistered(null)}
        />
      </DialogContent>
    </Dialog.Portal>
  )
}

export default DialogConfirmPatientAppointment
