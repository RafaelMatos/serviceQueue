import { faker } from '@faker-js/faker'

export const employees = [
  {
    id: faker.string.uuid(),
    first_name: 'Rafael',
    last_name: 'Ibiapina Matos',
    gender: 0,
    cpf: '01067296328',
    created_at: new Date(),
    age: 33,
  },
  {
    id: faker.string.uuid(),
    first_name: 'Lívia',
    last_name: 'Maria Pereira Nunes',
    gender: 1,
    cpf: '05217167300',
    created_at: new Date(),
    age: 27,
  },
]
