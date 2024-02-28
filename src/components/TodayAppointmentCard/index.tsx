import { faker } from '@faker-js/faker'
import { CallBell, Heartbeat, CheckFat } from '@phosphor-icons/react'
import dayjs from 'dayjs'
import { Avatar } from '../ui/Avatar'
import { Box } from '../ui/Box'
import {
  TodayAppointment,
  InfoAppointment,
  BoxStatus,
  ButtonStatus,
} from './styles'
import { IAppointment } from '@/context/AppointmentContext'
import { Text } from '../Typography'

interface TodayAppointmentCard {
  appointment: IAppointment
  onStartAppointment: (appointment: IAppointment) => void
  onFinishAppointment: (appointment: IAppointment) => void
  onCallAppointment: (appointment: IAppointment) => void
}

const TodayAppointmentCard = ({
  appointment,
  onStartAppointment,
  onCallAppointment,
  onFinishAppointment,
}: TodayAppointmentCard) => {
  return (
    <TodayAppointment key={appointment.id}>
      <span>{dayjs(appointment.created_at).format('hh:mm')}</span>
      <Box>
        <Avatar src={faker.internet.avatar()} alt="Avatar do paciente" />

        <InfoAppointment>
          <Text size="md" color="gray-400">
            {appointment.statusAppointment?.description}
          </Text>
          <Text size="xl">{appointment.patient?.name}</Text>
          <Text size="sm" color="gray-400">
            {appointment.isPriority
              ? 'Atendimento prioritário'
              : 'Atendimento normal'}
          </Text>
        </InfoAppointment>
        <BoxStatus flexDirection="column">
          <Text size="md" color="gray-400">
            Atualizar status do paciente
          </Text>
          <ButtonStatus
            onClick={() => onCallAppointment(appointment)}
            color="orange"
          >
            <Text size="md" color="gray-200">
              Chamar Paciente
            </Text>
            <CallBell size={30} weight="bold" />
          </ButtonStatus>
          {/* <ButtonStatus onClick={()=>handleStatusButton(0,appointment)} color="orange">
          <Text size="md" color="gray-200">
            Atender Paciente
          </Text>
          <ClipboardText size={30} />
        </ButtonStatus> */}
          <ButtonStatus
            onClick={() => onStartAppointment(appointment)}
            color="cyan"
            disabled
          >
            <Text size="md" color="gray-200">
              Iniciar consulta
            </Text>
            <Heartbeat size={30} weight="bold" />
          </ButtonStatus>
          <ButtonStatus
            onClick={() => onFinishAppointment(appointment)}
            color="green"
          >
            <Text size="md" color="gray-200">
              Finalizar consulta
            </Text>
            <CheckFat size={30} weight="bold" />
          </ButtonStatus>
        </BoxStatus>
      </Box>
    </TodayAppointment>
  )
}

export default TodayAppointmentCard
