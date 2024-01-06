import { AppointmentRegister } from '@/components/AppointmentRegister'
import { PatientRegister } from '@/components/PatientRegister'
import { RegistersWrapper, ServiceContainer } from '@/styles/pages/service'

export default function ServicePage() {
  return (
    <ServiceContainer>
      <RegistersWrapper>
        <PatientRegister />
        {/* <AppointmentRegister /> */}
      </RegistersWrapper>
      <div>Lista de consultas</div>
      <div>
        <div>Em atendimento</div>
        <div>Proximo</div>
      </div>
    </ServiceContainer>
  )
}
