import type { UseQueryResult } from '@tanstack/react-query'
import type { UsersResponse } from '@/types/user'
import { UserCard } from './UserCard'
import { Loader } from '@/components/ui/Loader'
import { ErrorState } from '@/components/ui/ErrorState'
import { EmptyState } from '@/components/ui/EmptyState'
import { Button } from '@/components/ui/Button'

interface UserListPagedProps {
  query: UseQueryResult<UsersResponse>
  page: number
  totalPages: number
  onPrev: () => void
  onNext: () => void
  onShowAll: () => void
}

export function UserListPaged({ query, page, totalPages, onPrev, onNext, onShowAll }: UserListPagedProps) {
  if (query.isLoading) {
    return <Loader />
  }

  if (query.isError) {
    return <ErrorState message="Failed to load users" />
  }

  if (!query.data || query.data.users.length === 0) {
    return <EmptyState />
  }

  return (
    <>
      <p className="mb-3 text-sm text-gray-500">
        {query.data.total} users · page {page} of {totalPages}
      </p>
      <div className="flex flex-col gap-3">
        {query.data.users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
      <div className="mt-6 flex items-center justify-between gap-2">
        <Button onClick={onPrev} disabled={page === 1}>
          Previous
        </Button>
        <Button variant="primary" onClick={onShowAll}>
          Show all ({query.data.total})
        </Button>
        <Button onClick={onNext} disabled={page === totalPages}>
          Next
        </Button>
      </div>
    </>
  )
}
