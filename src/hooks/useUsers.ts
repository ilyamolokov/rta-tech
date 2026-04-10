import { useQuery } from '@tanstack/react-query'
import { getUsers, getAllUsers } from '@/api/users'
import type { UsersQueryParams } from '@/types/user'

export function useUsers(params: UsersQueryParams) {
  return useQuery({
    queryKey: ['users', params],
    queryFn: () => getUsers(params),
  })
}

export function useAllUsers(search?: string) {
  return useQuery({
    queryKey: ['users', 'all', search],
    queryFn: () => getAllUsers(search),
  })
}
