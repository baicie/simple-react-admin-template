import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { getStoreKey } from "./index";

interface GlobalState {
  local: string;
  setLocal: (local: string) => void;
}

const useGlobalStore = create<GlobalState>()(
  persist(
    (set) => ({
      local: "zh-cn",
      setLocal: (local) => set(() => ({ local: local })),
    }),
    {
      name: getStoreKey("global"),
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useGlobalStore;