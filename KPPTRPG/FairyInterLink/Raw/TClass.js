/**
 * @template T
 */
export class TClass {
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