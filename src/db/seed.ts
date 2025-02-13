import { PrismaClient } from '@prisma/client'
import sampleData from '@/db/sample-data'

const prisma = new PrismaClient()

async function main() {
  await prisma.product.deleteMany()
  await prisma.product.createMany({ data: sampleData.products })

  console.log('Database seeded successfully!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(() => {
    prisma.$disconnect()
  })