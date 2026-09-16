import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import {INITIAL_Z_INDEX, WINDOW_CONFIG} from "#constants/index.js";

const useWindowStore = create(
    immer((set) => ({
        windows: WINDOW_CONFIG,
        nextZIndex: INITIAL_Z_INDEX + 1,

        /**
         * Opens a window, brings it to the front, and associates non-nullish data.
         *
         * @param {string} windowKey - Key of the configured window to open.
         * @param {*} [data=null] - Data to associate; nullish values preserve existing data.
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
         * Closes a window, restores its base stacking order, and clears its data.
         *
         * @param {string} windowKey - Key of the configured window to close.
         */
        closeWindow: (windowKey ) => set((state) => {
            const win = state.windows[windowKey];
            win.isOpen = false;
            win.zIndex = INITIAL_Z_INDEX
            win.data = null;
        }),


        /**
         * Brings a window to the front without changing whether it is open.
         *
         * @param {string} windowKey - Key of the configured window to focus.
         */
        focusWindow: (windowKey) => set((state) => {
            const win = state.windows[windowKey];
            win.zIndex = state.nextZIndex++;
        }),

    })),
);

export default useWindowStore;