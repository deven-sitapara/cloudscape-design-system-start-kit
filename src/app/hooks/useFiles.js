import { useQuery } from '@tanstack/react-query'

export function useFiles() {
  return useQuery({
    queryKey: ['files'],
    queryFn: async () => {
      const response = await fetch('/api/files')
      return response.json()
    }
  })
}
