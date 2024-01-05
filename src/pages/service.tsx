import { PatientRegister } from '@/components/PatientRegister'
import { ServiceContainer } from '@/styles/pages/service'

export default function ServicePage() {
  return (
    <ServiceContainer>
      <PatientRegister />
      <div>Lista de consultas</div>
      <div>
        <div>Em atendimento</div>
        <div>Proximo</div>
      </div>
    </ServiceContainer>
  )
}
