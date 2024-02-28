import {
  AppointmentDateHeader,
  BoxAppointmentPainel,
  BoxCallPainelItem,
  ServiceContainer,
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
// import { Avatar } from '@/components/ui/Avatar'
// import { faker } from '@faker-js/faker'
// import { CallBell, CheckFat, Heartbeat } from '@phosphor-icons/react'
// import { Box } from '@/components/ui/Box'
import BoxHeader from '@/components/BoxHeader'
import TodayAppointmentCard from '@/components/TodayAppointmentCard'

const ServicePage: NextPageWithLayout = () => {
  const { CALLED, INSERVICE, COMPLETED } = Status

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

  const priorityAppointments = todayAppointments?.filter(
    (appointment) => appointment.isPriority,
  )

  const normalAppointments = todayAppointments?.filter(
    (appointment) => !appointment.isPriority,
  )

  const calledAppointments = appointmentList?.filter(
    (called) => called.status_appointment === CALLED,
  )

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
        {priorityAppointments && priorityAppointments.length > 0 ? (
          priorityAppointments.map((appointment) => {
            return (
              <TodayAppointmentCard
                key={appointment.id}
                appointment={appointment}
                onCallAppointment={handleCallPatient}
                onStartAppointment={handleStartAppointment}
                onFinishAppointment={handleFinishAppointment}
              />
            )
          })
        ) : (
          <Text size="md" color="gray-400">
            Sem atendimento prioritário!
          </Text>
        )}
        {normalAppointments && normalAppointments.length > 0 ? (
          normalAppointments.map((appointment) => {
            return (
              <TodayAppointmentCard
                key={appointment.id}
                appointment={appointment}
                onCallAppointment={handleCallPatient}
                onStartAppointment={handleStartAppointment}
                onFinishAppointment={handleFinishAppointment}
              />
            )
          })
        ) : (
          <Text size="md" color="gray-400">
            Sem mais consultas!
          </Text>
        )}
      </TodayAppointments>
      <BoxAppointmentPainel flexDirection="column">
        <BoxHeader title="Painel de chamadas" />
        {calledAppointments && calledAppointments.length > 0 ? (
          calledAppointments.map((called) => {
            return (
              <BoxCallPainelItem key={called.id}>
                <Text>{called.patient?.name} </Text>
                <span>
                  {' '}
                  {called.isPriority
                    ? 'Atendimento prioritário'
                    : 'Atendimento normal'}
                </span>
              </BoxCallPainelItem>
            )
          })
        ) : (
          <Text color="gray-400">Sem agendamentos</Text>
        )}
      </BoxAppointmentPainel>
    </ServiceContainer>
  )
}

ServicePage.getLayout = (page) => {
  return <DefaultLayout title="Página Inicial">{page}</DefaultLayout>
}

export default ServicePage
