import {
  AppointmentDateHeader,
  BoxAppointment,
  BoxStatusAppointment,
  ButtonStatus,
  InfoAppointment,
  ServiceContainer,
  TodayAppointment,
  TodayAppointments,
} from '@/styles/pages/service'
import { NextPageWithLayout } from './_app'
import { DefaultLayout } from '@/layouts/DefaultLayout'
import dayjs from 'dayjs'
import { Text } from '@/components/Typography'
import { useAppointment } from '@/hooks/useAppointment'
import { api } from '@/lib/axios'
import { useQuery } from '@tanstack/react-query'
import { IAppointment, Status } from '@/context/AppointmentContext'
import { Avatar } from '@/components/ui/Avatar'
import { faker } from '@faker-js/faker'
import { CallBell, CheckFat, Heartbeat } from '@phosphor-icons/react'

const ServicePage: NextPageWithLayout = () => {
  const { appointmentList, handleSetAppointmentList, updateAppointment } =
    useAppointment()

  const { data: appointments } = useQuery<IAppointment[]>({
    queryKey: ['appointments'],
    queryFn: async () => {
      const { data } = await api.get('/appointments/list')
      handleSetAppointmentList(data?.appointments)
      return data?.appointments ?? []
    },
  })

  const todayAppointments = appointments?.filter(
    (appointment) =>
      dayjs(appointment.created_at).format('DD/MM/YYYY') ===
      dayjs().format('DD/MM/YYYY'),
  )

  const { CALLED, INSERVICE, COMPLETED } = Status

  const changeAppointmentStatusState = (
    appointment: IAppointment,
    status: number,
  ) => {
    const editedAppointments = appointmentList.map((appointmentItem) => {
      if (appointmentItem.id === appointment.id) {
        appointmentItem.status_appointment = status
        return appointmentItem
      }
      return appointmentItem
    })
    handleSetAppointmentList(editedAppointments)
  }
  const handleCallPatient = (handledAppointment: IAppointment) => {
    changeAppointmentStatusState(handledAppointment, CALLED)
    updateAppointment(handledAppointment.id, {
      status_appointment: CALLED,
    })
  }
  const handleStartAppointment = (handledAppointment: IAppointment) => {
    changeAppointmentStatusState(handledAppointment, INSERVICE)
    updateAppointment(handledAppointment.id, {
      status_appointment: INSERVICE,
    })
  }
  const handleFinishAppointment = (handledAppointment: IAppointment) => {
    changeAppointmentStatusState(handledAppointment, COMPLETED)
    updateAppointment(handledAppointment.id, {
      status_appointment: COMPLETED,
    })
  }
  return (
    <ServiceContainer>
      <TodayAppointments>
        <AppointmentDateHeader>
          <Text size="sm" color="gray-400">
            {dayjs().format('[Hoje, ] DD[ de ]MMMM')}
          </Text>
        </AppointmentDateHeader>
        {/* {JSON.stringify(appointments)} */}
        {appointments ? (
          appointments.map((appointment) => {
            return (
              <TodayAppointment key={appointment.id}>
                <span>{dayjs(appointment.created_at).format('hh:mm')}</span>
                <BoxAppointment>
                  <Avatar
                    src={faker.internet.avatar()}
                    alt="Avatar do paciente"
                  />

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
                  <BoxStatusAppointment>
                    <Text size="md" color="gray-400">
                      Atualizar status do paciente
                    </Text>
                    <ButtonStatus
                      onClick={() => handleCallPatient(appointment)}
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
                      onClick={() => handleStartAppointment(appointment)}
                      color="cyan"
                      disabled
                    >
                      <Text size="md" color="gray-200">
                        Iniciar consulta
                      </Text>
                      <Heartbeat size={30} weight="bold" />
                    </ButtonStatus>
                    <ButtonStatus
                      onClick={() => handleFinishAppointment(appointment)}
                      color="green"
                    >
                      <Text size="md" color="gray-200">
                        Finalizar consulta
                      </Text>
                      <CheckFat size={30} weight="bold" />
                    </ButtonStatus>
                  </BoxStatusAppointment>
                </BoxAppointment>
              </TodayAppointment>
            )
          })
        ) : (
          <Text size="md" color="gray-400">
            Sem agendamentos para hoje!
          </Text>
        )}
      </TodayAppointments>
      <BoxAppointment>
        {appointmentList.map((appoint) => {
          return (
            <Text key={appoint.id}>
              {appoint.patient?.name} / {appoint.status_appointment}
            </Text>
          )
        })}
      </BoxAppointment>
    </ServiceContainer>
  )
}

ServicePage.getLayout = (page) => {
  return <DefaultLayout title="Página Inicial">{page}</DefaultLayout>
}

export default ServicePage
