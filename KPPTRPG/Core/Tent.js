/** @template T */
export class KPPTRPG_Core_Tent {
    /** * 
     * @param {string} pre
     * @param {T?} par 
     *  */
    constructor(pre, par = null) {
        /** @type {string}  */
        this.pre = pre;
        /** @type {T} parent object */
        this.par = par;
    }

    /**
     * @param {string} post 
     * @returns {string}
     */
    gword(post) { return this.pre + post; }
}