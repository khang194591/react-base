import { localStg } from '@/shared/utils/storage'
import { create } from 'zustand'

export interface UserDto {
  id: number
  email: string
}

type State = {
  user: UserDto | null
}

type Action = {
  fetchUserFromStg: () => void
}

const getUserFromStg = () => {
  const rawUser = localStg.get('user')
  if (rawUser) {
    return JSON.parse(rawUser) as UserDto
  } else {
    return null
  }
}

export const useAuthStore = create<State & Action>((set) => ({
  user: getUserFromStg(),
  fetchUserFromStg: () => set({ user: getUserFromStg() }),
}))
