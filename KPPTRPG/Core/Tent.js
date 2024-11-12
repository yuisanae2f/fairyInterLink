export class KPPTRPG_Core_Tent {
    /** * @param {string} pre */
    constructor(pre) {
        /** @type {string}  */
        this.pre = pre;
    }

    /**
     * 
     * @param {string} post 
     * @returns {string}
     */
    gword(post) {
        return this.pre + post;
    }
}