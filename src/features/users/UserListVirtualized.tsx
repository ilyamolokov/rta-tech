import { FixedSizeList, type ListChildComponentProps } from 'react-window'
import type { User } from '@/types/user'
import { UserCard } from './UserCard'

const ITEM_HEIGHT = 90

interface UserListVirtualizedProps {
  users: User[]
  height: number
}

function Row({ index, style, data }: ListChildComponentProps<User[]>) {
  const user = data[index]
  return (
    <div style={{ ...style, paddingBottom: 8 }}>
      <UserCard user={user} />
    </div>
  )
}

export function UserListVirtualized({ users, height }: UserListVirtualizedProps) {
  return (
    <FixedSizeList
      height={height}
      itemCount={users.length}
      itemSize={ITEM_HEIGHT}
      itemData={users}
      width="100%"
      className="scrollbar-thin"
    >
      {Row}
    </FixedSizeList>
  )
}
