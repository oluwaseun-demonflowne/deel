import { create } from "zustand";
type AuthState = {
  showLoginModal: boolean;
  showRegisterModal: boolean;
};

type AuthAction = {
  setShowLoginModal: (state: boolean) => void;
  setShowRegisterModal: (state: boolean) => void;
};

export const useAuthModalState = create<AuthState & AuthAction>((set) => ({
  showLoginModal: false,
  showRegisterModal: false,
  setShowLoginModal: (state) => {
    set(() => ({ showLoginModal: state }));
  },
  setShowRegisterModal: (state) => set(() => ({ showRegisterModal: state })),
}));
