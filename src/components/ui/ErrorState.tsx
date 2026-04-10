interface ErrorStateProps {
  message?: string
}

export function ErrorState({ message = 'Something went wrong' }: ErrorStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      <div className="mb-3 text-4xl">⚠️</div>
      <p className="text-lg font-medium text-red-600">{message}</p>
    </div>
  )
}
