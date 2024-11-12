import { KPPTRPG_FIL_TClass } from "./Raw/TClass";

/**
 * @typedef {object} KPPTRPG_FIL_rLinkEl
 * @property {number} bond 
 * @property {KPPTRPG_FIL_rFairy} fairy
 */

/**
 * @typedef {KPPTRPG_FIL_rLinkEl[]} KPPTRPG_FIL_lpLink List type for @see KPPTRPG_FIL_rLinkEl
 */

/**
 * @param {KPPTRPG_Core_Ptr_t<KPPTRPG_FIL_lpLink>} self
 */
export function KPPTRPG_FIL_cLink_Sort(self) {
    self.mem.sort(
        (a, b) => a.bond - b.bond
    );
}

/**
 * Returns the favourite member (in a type of link)
 * @param {KPPTRPG_Core_Ptr_t<KPPTRPG_FIL_lpLink>} self 
 * @param {number} memi
 * @returns {KPPTRPG_FIL_rLinkEl}
 */
export function KPPTRPG_FIL_cLink_Favourite(self, memi = 0) {
    KPPTRPG_FIL_Link_Sort(self);
    return self.mem[memi];
}