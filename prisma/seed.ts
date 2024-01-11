import { PrismaClient } from '@prisma/client'
import { status } from './constants/status'
import { employees } from './constants/employees'
import { genders } from './constants/genders'
const prisma = new PrismaClient()

async function main() {
  // await prisma.appointmentStatus.deleteMany()
  await prisma.employee.deleteMany()
  await prisma.gender.deleteMany()

  // const statusSeed = status.map((s) => {
  //   return prisma.appointmentStatus.create({
  //     data: {
  //       type: s.type,
  //       name: s.name,
  //       description: s.description,
  //     },
  //   })
  // })
  const gendersSeed = genders.map((s) => {
    return prisma.gender.create({
      data: {
        type: s.type,
        description: s.description,
      },
    })
  })
  const employeesSeed = employees.map((s) => {
    return prisma.employee.create({
      data: {
        id: s.id,
        age: s.age,
        first_name: s.first_name,
        last_name: s.last_name,
        cpf: s.cpf,
        gender: s.gender,
      },
    })
  })

  await prisma.$transaction([
    // [...statusSeed]
    ...employeesSeed,
    ...gendersSeed,
  ])
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
