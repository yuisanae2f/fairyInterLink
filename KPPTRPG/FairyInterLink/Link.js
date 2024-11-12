/**
 * @typedef {object} rLinkEl
 * @property {number} bond 
 * @property {rFairy} fairy
 */

import { TClass } from "./Raw/TClass";


/**
 * @typedef {rLinkEl[]} lpLink List type for @see rLinkEl
 */

/**
 * @extends {TClass<lpLink>}
 */
class Link extends TClass {
    /** * @param {lpLink} data  */
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
     * @returns {rLinkEl}
     */
    favourite() {
        this.sort();
        return this.data[0];
    }
}