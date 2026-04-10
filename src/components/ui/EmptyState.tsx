interface EmptyStateProps {
  message?: string
}

export function EmptyState({ message = 'No users found' }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      <div className="mb-3 text-4xl">🔍</div>
      <p className="text-lg font-medium text-gray-500">{message}</p>
    </div>
  )
}
