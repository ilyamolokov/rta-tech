import type { User, UsersQueryParams, UsersResponse } from '@/types/user'
import { MOCK_USERS } from './mock-users'

function filterUsers(users: User[], search: string): User[] {
  const q = search.toLowerCase().trim()
  if (!q) return users
  return users.filter(
    (u) =>
      u.name.first.toLowerCase().includes(q) ||
      u.name.last.toLowerCase().includes(q) ||
      u.email.toLowerCase().includes(q) ||
      u.location.city.toLowerCase().includes(q) ||
      u.location.country.toLowerCase().includes(q),
  )
}

export function getUsers(params: UsersQueryParams): UsersResponse {
  const filtered = filterUsers(MOCK_USERS, params.search ?? '')
  const start = (params.page - 1) * params.pageSize
  const users = filtered.slice(start, start + params.pageSize)

  return { users, total: filtered.length }
}

export function getAllUsers(search?: string): User[] {
  return filterUsers(MOCK_USERS, search ?? '')
}
