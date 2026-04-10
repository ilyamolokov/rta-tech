import type { User } from '@/types/user'

const FIRST_NAMES_MALE = [
  'James', 'Luca', 'Kenji', 'Noah', 'Carlos', 'Oliver', 'Ethan', 'Mohammed',
  'Wei', 'Ivan', 'Diego', 'Mateus', 'Ali', 'Hiroshi', 'Felix', 'Adrian',
  'Samuel', 'Victor', 'Leon', 'Patrick',
]

const FIRST_NAMES_FEMALE = [
  'Emily', 'Sofia', 'Amelia', 'Olivia', 'Aisha', 'Emma', 'Chloe', 'Yuki',
  'Mei', 'Anna', 'Isabella', 'Laura', 'Sara', 'Fatima', 'Elena', 'Nina',
  'Clara', 'Mia', 'Zoe', 'Petra',
]

const LAST_NAMES = [
  'Wilson', 'Johnson', 'Rossi', 'García', 'Tanaka', 'Schmidt', 'Martin',
  'Brown', 'Silva', 'Khan', 'Müller', 'Dubois', 'Fernandez', 'Nakamura',
  'Andersen', 'Kowalski', 'Nguyen', 'Petrov', 'Ali', 'Costa', 'Becker',
  'Reyes', 'Yamamoto', 'Okafor', 'Johansson', 'Patel', 'Moreau', 'Romano',
  'Fischer', 'Lindqvist',
]

interface LocationTemplate {
  city: string
  country: string
  nat: string
}

const LOCATIONS: LocationTemplate[] = [
  { city: 'New York', country: 'United States', nat: 'US' },
  { city: 'London', country: 'United Kingdom', nat: 'GB' },
  { city: 'Rome', country: 'Italy', nat: 'IT' },
  { city: 'Madrid', country: 'Spain', nat: 'ES' },
  { city: 'Tokyo', country: 'Japan', nat: 'JP' },
  { city: 'Berlin', country: 'Germany', nat: 'DE' },
  { city: 'Paris', country: 'France', nat: 'FR' },
  { city: 'Sydney', country: 'Australia', nat: 'AU' },
  { city: 'São Paulo', country: 'Brazil', nat: 'BR' },
  { city: 'Karachi', country: 'Pakistan', nat: 'PK' },
  { city: 'Toronto', country: 'Canada', nat: 'CA' },
  { city: 'Amsterdam', country: 'Netherlands', nat: 'NL' },
  { city: 'Stockholm', country: 'Sweden', nat: 'SE' },
  { city: 'Seoul', country: 'South Korea', nat: 'KR' },
  { city: 'Lagos', country: 'Nigeria', nat: 'NG' },
  { city: 'Mumbai', country: 'India', nat: 'IN' },
  { city: 'Warsaw', country: 'Poland', nat: 'PL' },
  { city: 'Cairo', country: 'Egypt', nat: 'EG' },
  { city: 'Hanoi', country: 'Vietnam', nat: 'VN' },
  { city: 'Moscow', country: 'Russia', nat: 'RU' },
]

function generateUser(index: number): User {
  const isMale = index % 2 === 0
  const gender: 'male' | 'female' = isMale ? 'male' : 'female'
  const firstNames = isMale ? FIRST_NAMES_MALE : FIRST_NAMES_FEMALE
  const firstName = firstNames[index % firstNames.length]
  const lastName = LAST_NAMES[index % LAST_NAMES.length]
  const location = LOCATIONS[index % LOCATIONS.length]
  const portraitIndex = (index % 99) + 1
  const portraitGender = isMale ? 'men' : 'women'

  const suffix = index > 0 ? String(index) : ''
  const emailFirst = firstName.toLowerCase()
  const emailLast = lastName.toLowerCase().replace(/[^a-z]/g, '')
  const email = `${emailFirst}.${emailLast}${suffix}@example.com`

  return {
    id: String(index + 1),
    name: { title: isMale ? 'Mr' : 'Ms', first: firstName, last: lastName },
    email,
    phone: `+00 ${String(index + 1).padStart(3, '0')}-${String((index * 7 + 13) % 900 + 100)}-${String((index * 31 + 47) % 9000 + 1000)}`,
    picture: {
      large: `https://randomuser.me/api/portraits/${portraitGender}/${portraitIndex}.jpg`,
      medium: `https://randomuser.me/api/portraits/med/${portraitGender}/${portraitIndex}.jpg`,
      thumbnail: `https://randomuser.me/api/portraits/thumb/${portraitGender}/${portraitIndex}.jpg`,
    },
    location: { city: location.city, country: location.country },
    gender,
    nat: location.nat,
  }
}

export const MOCK_USERS: User[] = Array.from({ length: 1000 }, (_, i) => generateUser(i))
