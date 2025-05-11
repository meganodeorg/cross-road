import { create } from "zustand";
import { generateRows } from "../utilities/generateRows";

const useStore = create((set) => ({
  rows: generateRows(20),
  addRows: () => {
    const newRows = generateRows(20);
    set((state) => ({ rows: [...state.rows, ...newRows] }));
  },
  reset: () => {
    // Generate new rows with new vehicle positions
    const newRows = generateRows(20);
    set({ rows: newRows });
  }
}));

export default useStore;