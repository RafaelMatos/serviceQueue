import { AppointmentsList } from '@/components/AppointmentsList'
import { AppointmentsContainer } from '@/styles/pages/appointments'
import { NextPageWithLayout } from './_app'
import { DefaultLayout } from '@/layouts/DefaultLayout'

const AppointmentsPage: NextPageWithLayout = () => {
  return (
    <AppointmentsContainer>
      <AppointmentsList />
      {/* <RegistersWrapper>
        <PatientRegister />
      </RegistersWrapper> */}
      {/* <AppointmentListWrapper>
        <AppointmentsList />
      </AppointmentListWrapper> */}
      {/* <div>
        <div>Em atendimento</div>
        <div>Proximo</div>
      </div> */}
    </AppointmentsContainer>
  )
}

AppointmentsPage.getLayout = (page) => {
  return <DefaultLayout title="Consultas">{page}</DefaultLayout>
}

export default AppointmentsPage
