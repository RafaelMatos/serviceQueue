import { AppointmentsList } from '@/components/AppointmentsList'
import { PatientRegister } from '@/components/PatientRegister'
import {
  AppointmentDateHeader,
  BoxAppointment,
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
import { IAppointment } from '@/context/AppointmentContext'
import { Avatar } from '@/components/ui/Avatar'
import { faker } from '@faker-js/faker'
import { Button } from '@/components/Form/Button'
import { Heart, Heartbeat } from '@phosphor-icons/react'

const ServicePage: NextPageWithLayout = () => {
  const { appointmentList } = useAppointment()

  const { data: appointments } = useQuery<IAppointment[]>({
    queryKey: ['appointments'],
    queryFn: async () => {
      const { data } = await api.get('/appointments/list')
      return data?.appointments ?? []
    },
  })

  const todayAppointments = appointments?.filter(
    (appointment) =>
      dayjs(appointment.created_at).format('DD/MM/YYYY') ===
      dayjs().format('DD/MM/YYYY'),
  )
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
                  <Button text="Em atendimento" icon={<Heartbeat />} />
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
    </ServiceContainer>
  )
}

ServicePage.getLayout = (page) => {
  return <DefaultLayout title="Página Inicial">{page}</DefaultLayout>
}

export default ServicePage
