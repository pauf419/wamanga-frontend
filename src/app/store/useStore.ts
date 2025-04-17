import type { User } from "@/api/types/user";
import { create } from "zustand";

interface State {
  user: User | undefined;
  isAuth: boolean;
  setAuth: (_: User) => void;
}

export const useStore = create<State>((set) => ({
  user: undefined,
  isAuth: false,
  setAuth: (_: User) => set((state) => ({ isAuth: true, user: _ })),
}));
