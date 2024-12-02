import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAuthStore = create(
  persist(
    (set) => ({
      user: null, 
      login: (userInfo) => {
        set({ user: userInfo });
      },
      logout: () => {
        set({ user: null });
      },
    }),
    {
      name: "auth", 
    }
  )
);

export default useAuthStore;
