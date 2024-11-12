/**
 * @module KPPTRPG_FIL_Status_js
 */

/**
 * @typedef {object} KPPTRPG_FIL_rStatusAdv
 * @property {number} LP    LP
 * @property {number} SP    SP
 * @property {number} STR   Strength
 * @property {number} AGI   Agility
 * @property {number} CON   Constitution
 * @property {number} INT   Intelligence
 * @property {number} MOV   Move Point
 * @property {number} G     Money
 * @property {number} INIT  Initiative
 */

/** 
 * @param {Partial<KPPTRPG_FIL_rStatusAdv>} a 
 * @returns {KPPTRPG_FIL_rStatusAdv}
 */
export function KPPTRPG_FIL_cStatusAdv_Set(a) {
    return {
        LP: a?.LP ?? 0,
        SP: a?.SP ?? 0,
        STR: a?.STR ?? 0,
        AGI: a?.AGI ?? 0,
        CON: a?.CON ?? 0,
        INT: a?.INT ?? 0,
        MOV: a?.MOV ?? 0,
        G: a?.G ?? 0,
        INIT: a?.INIT ?? 0
    }
}