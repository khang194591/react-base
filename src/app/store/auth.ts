import { create } from "zustand";

export interface UserDto {
  id: number;
  email: string;
}

type State = {
  user: UserDto | null;
};

export const useAuthStore = create<State>((set) => ({
  user: null,
}));
