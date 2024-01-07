import { PrismaClient } from '@prisma/client'
import { status } from './constants/status'
const prisma = new PrismaClient()

async function main() {
  await prisma.appointmentStatus.deleteMany()

  const statusSeed = status.map((s) => {
    return prisma.appointmentStatus.create({
      data: {
        type: s.type,
        name: s.name,
        description: s.description,
      },
    })
  })

  await prisma.$transaction([...statusSeed])
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
