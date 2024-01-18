import { NextPageWithLayout } from './_app'
import { DefaultLayout } from '@/layouts/DefaultLayout'
import { PatientsContainer } from '@/styles/pages/patients'
import { PatientRegister } from '@/components/PatientRegister'

const PatientsPage: NextPageWithLayout = () => {
  return (
    <PatientsContainer>
      <PatientRegister />
    </PatientsContainer>
  )
}

PatientsPage.getLayout = (page) => {
  return <DefaultLayout title="Pacientes">{page}</DefaultLayout>
}

export default PatientsPage
