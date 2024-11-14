/**
 * @typedef {number} KPPTRPG_FIL_BiasEnum_t
 */

/**
 * @enum {KPPTRPG_FIL_BiasEnum_t}
 * 
 */
export const KPPTRPG_FIL_BiasEnumBuilder = {
    CHAOS:       0b0010,

    /**
     * Order
     */
    KHASSAR:     0b0001, 

    /**
     * @brief
     * Evil
     */
    EVL:         0b1000,

    /**
     * @brief
     * Good
     */
    TEMPLARI:    0b0100,
    NEUTRAL:     0
}

/**
 * @param {KPPTRPG_FIL_BiasEnum_t} a 
 * @returns {string}
 */
export function KPPTRPG_FIL_Bias_ToString(a) {
    const eBias = KPPTRPG_FIL_BiasEnumBuilder;

    if(!a) return "Complete Neutral";

    let rtn0 = "", rtn1 = "";

    if(a & eBias.CHAOS) rtn0 = "Chaos";
    else if(a & eBias.KHASSAR) rtn0 = "Ordered";
    else rtn0 = "Neutral";

    if(a & eBias.EVL) rtn1 = "Evil";
    else if(a & eBias.TEMPLARI) rtn1 = "Good";
    else rtn1 = "Neutral";

    return `${rtn0} ${rtn1}`
}