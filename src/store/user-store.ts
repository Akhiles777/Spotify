import {create} from 'zustand';

interface UserStore {
    counter: number;
setCounter: () => void;
}


export const useUserStore = create<UserStore>((set) => ({
    counter: 0,
    setCounter: () => set((state) => ({ counter: state.counter + 1 })),
}));


