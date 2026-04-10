import type { User } from '@/types/user'

interface UserCardProps {
  user: User
}

export function UserCard({ user }: UserCardProps) {
  const fullName = `${user.name.title} ${user.name.first} ${user.name.last}`

  return (
    <div className="flex items-center gap-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md">
      <img
        src={user.picture.medium}
        alt={fullName}
        className="h-14 w-14 rounded-full object-cover"
        loading="lazy"
      />
      <div className="min-w-0 flex-1">
        <p className="truncate font-semibold text-gray-900">{fullName}</p>
        <p className="truncate text-sm text-gray-500">{user.email}</p>
        <p className="text-sm text-gray-400">
          {user.location.city}, {user.location.country}
        </p>
      </div>
      <span className="shrink-0 rounded-full bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-700">
        {user.nat}
      </span>
    </div>
  )
}
