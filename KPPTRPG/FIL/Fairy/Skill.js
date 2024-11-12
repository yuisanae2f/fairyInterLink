/**
 * @typedef {string} KPPTRPG_FIL_SklQueryCond_t Condition Judicator
 * @typedef {number} KPPTRPG_FIL_SklOrd_t
 */

/**
 * @enum {KPPTRPG_FIL_SklOrd_t}
 */
export const skl_ord = {
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
 * @callback KPPTRPG_FIL_fpSklCond_t Condition
 * @param {KPPTRPG_FIL_rAdventurer}
 * @param {KPPTRPG_FIL_rFairy}
 * @returns {number} 
 */

/**
 * @typedef {object} KPPTRPG_FIL_rSkill
 * @property {KPPTRPG_FIL_SklQueryCond_t} dep_qcond Condition Calculating Query (Deprecated Warning)
 * @property {string} desc Description
 * @property {KPPTRPG_FIL_SklOrd_t} ord Order
 * @property {number} range 
 * @property {KPPTRPG_FIL_fpSklCond_t} fpConditionCal
 */