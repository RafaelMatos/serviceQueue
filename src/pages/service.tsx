import { AppointmentsList } from '@/components/AppointmentsList'
import { PatientRegister } from '@/components/PatientRegister'
import {
  AppointmentListWrapper,
  RegistersWrapper,
  ServiceContainer,
} from '@/styles/pages/service'

export default function ServicePage() {
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
