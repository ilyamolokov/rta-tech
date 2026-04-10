import type { UseQueryResult } from '@tanstack/react-query'
import type { User } from '@/types/user'
import { UserListVirtualized } from './UserListVirtualized'
import { Loader } from '@/components/ui/Loader'
import { ErrorState } from '@/components/ui/ErrorState'
import { EmptyState } from '@/components/ui/EmptyState'
import { Button } from '@/components/ui/Button'

const VIRTUALIZED_HEIGHT = 500

interface UserListAllProps {
  query: UseQueryResult<User[]>
  onCollapse: () => void
}

export function UserListAll({ query, onCollapse }: UserListAllProps) {
  if (query.isLoading) {
    return <Loader />
  }

  if (query.isError) {
    return <ErrorState message="Failed to load users" />
  }

  if (!query.data || query.data.length === 0) {
    return <EmptyState />
  }

  return (
    <>
      <p className="mb-3 text-sm text-gray-500">{query.data.length} users</p>
      <UserListVirtualized users={query.data} height={VIRTUALIZED_HEIGHT} />
      <Button onClick={onCollapse} className="mt-4 w-full">
        Show paginated
      </Button>
    </>
  )
}
