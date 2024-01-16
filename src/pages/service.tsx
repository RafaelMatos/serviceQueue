import { AppointmentsList } from '@/components/AppointmentsList'
import { PatientRegister } from '@/components/PatientRegister'
import {
  AppointmentListWrapper,
  RegistersWrapper,
  ServiceContainer,
} from '@/styles/pages/service'
import { NextPageWithLayout } from './_app'
import { DefaultLayout } from '@/layouts/DefaultLayout'

const ServicePage: NextPageWithLayout = () => {
  return (
    <ServiceContainer>
      <RegistersWrapper>
        <PatientRegister />
      </RegistersWrapper>
      <AppointmentListWrapper>
        <AppointmentsList />
      </AppointmentListWrapper>
      <div>
        <div>Em atendimento</div>
        <div>Proximo</div>
      </div>
    </ServiceContainer>
  )
}

ServicePage.getLayout = (page) => {
  return <DefaultLayout title="Pagina Inicial">{page}</DefaultLayout>
}

export default ServicePage
