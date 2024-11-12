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
 * @extends {KPPTRPG_FIL_TClass<KPPTRPG_FIL_lpLink>}
 */
export class KPPTRPG_FIL_Link extends KPPTRPG_FIL_TClass {
    /** * @param {KPPTRPG_FIL_lpLink} data  */
    constructor(data) {
        super(data);
    }

    /**
     * @returns {void}
     */
    sort() {
        this.data.sort(
            (a, b) => a.bond - b.bond
        );
    }

    /**
     * @returns {KPPTRPG_FIL_rLinkEl}
     */
    favourite() {
        this.sort();
        return this.data[0];
    }
}