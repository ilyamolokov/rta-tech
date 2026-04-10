import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { UsersPage } from '@/pages/UsersPage'

const queryClient = new QueryClient()

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <UsersPage />
    </QueryClientProvider>
  )
}
