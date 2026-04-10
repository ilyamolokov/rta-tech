import { useState } from 'react'
import { useUsers, useAllUsers } from '@/hooks/useUsers'
import { useDebounce } from '@/hooks/useDebounce'
import { UserListAll } from './UserListAll'
import { UserListPaged } from './UserListPaged'
import { Input } from '@/components/ui/Input'

const PAGE_SIZE = 5

export function UserList() {
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)
  const [showAll, setShowAll] = useState(false)

  const debouncedSearch = useDebounce(search, 300)

  const pagedQuery = useUsers({ page, pageSize: PAGE_SIZE, search: debouncedSearch })
  const allQuery = useAllUsers(debouncedSearch)

  const handleSearch = (value: string) => {
    setSearch(value)
    setPage(1)
    setShowAll(false)
  }

  const totalPages = pagedQuery.data ? Math.ceil(pagedQuery.data.total / PAGE_SIZE) : 0

  return (
    <div className="mx-auto max-w-2xl px-4 py-8">
      <h1 className="mb-6 text-2xl font-bold text-gray-900">Users</h1>

      <Input
        type="search"
        value={search}
        onChange={(e) => handleSearch(e.target.value)}
        placeholder="Search by name, email or city..."
        aria-label="Search users"
        className="mb-6"
      />

      {showAll ? (
        <UserListAll query={allQuery} onCollapse={() => setShowAll(false)} />
      ) : (
        <UserListPaged
          query={pagedQuery}
          page={page}
          totalPages={totalPages}
          onPrev={() => setPage((p) => Math.max(1, p - 1))}
          onNext={() => setPage((p) => Math.min(totalPages, p + 1))}
          onShowAll={() => setShowAll(true)}
        />
      )}
    </div>
  )
}
