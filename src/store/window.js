import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import {INITIAL_Z_INDEX, WINDOW_CONFIG} from "#constants/index.js";

const useWindowStore = create(
    immer((set) => ({
        windows: WINDOW_CONFIG,
        nextZIndex: INITIAL_Z_INDEX + 1,

        /**
         * Opens a configured window and brings it to the front.
         *
         * A null or omitted data value preserves the window's existing data.
         *
         * @param {string} windowKey - Key of the window in the store.
         * @param {*} [data=null] - Data to associate with the window.
         * @throws {TypeError} If the window key is not configured.
         */
        openWindow: (windowKey, data = null ) =>
            set((state) => {
                const win = state.windows[windowKey];
                win.isOpen = true;
                win.zIndex = state.nextZIndex
                win.data = data ?? win.data;
                state.nextZIndex++;
            }),


        /**
         * Closes a configured window, clears its data, and resets its stacking order.
         *
         * @param {string} windowKey - Key of the window in the store.
         * @throws {TypeError} If the window key is not configured.
         */
        closeWindow: (windowKey ) => set((state) => {
            const win = state.windows[windowKey];
            win.isOpen = false;
            win.zIndex = INITIAL_Z_INDEX
            win.data = null;
        }),


        /**
         * Brings a configured window to the front of the stacking order.
         *
         * @param {string} windowKey - Key of the window in the store.
         * @throws {TypeError} If the window key is not configured.
         */
        focusWindow: (windowKey) => set((state) => {
            const win = state.windows[windowKey];
            win.zIndex = state.nextZIndex++;
        }),

    })),
);

export default useWindowStore;
