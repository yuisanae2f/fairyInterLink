/**
 * @typedef {string} skl_query_cond_t Condition Judicator
 * @typedef {number} skl_ord_t
 */

/**
 * @enum {skl_ord_t}
 */
const skl_ord = {
    /** Null */
    NIL: 0b0,

    /** Attack */
    ATK: 0b1, 

    /** Defense */
    DEF: 0b10,

    /** Regeneration */
    REG: 0b100,

    /** Support */
    SUP: 0b1000
}

/**
 * @callback fpSklCond Condition
 * @param {rAdventurer}
 * @param {rFairy}
 * @returns {number} 
 */

/**
 * @typedef {object} rSkill
 * @property {skl_query_cond_t} dep_qcond Condition Calculating Query (Deprecated Warning)
 * @property {string} desc Description
 * @property {skl_ord_t} ord Order
 * @property {number} range 
 * @property {fpSklCond} fpConditionCal
 */