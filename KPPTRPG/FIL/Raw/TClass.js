/**
 * @template T
 */
export class KPPTRPG_FIL_TClass {
    /**
     * @param {T} data
     */
    constructor(data) {
        /**
         * @type {T}
         */
        this.data = data
    }

    /**
     * 
     * @returns {T}
     */
    gData() {
        return this.data;
    }
}