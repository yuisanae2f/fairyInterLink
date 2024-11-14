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
 * @property {number} G     Money
 */

/**
 * 
 * @param {KPPTRPG_FIL_rStatusAdv} a 
 */
export function KPPTRPG_FIL_cStatusAdv_INIT(a) {
    const _a = a.AGI * 10 + a.CON - 10;
    if(_a > 100) return 100;
    if(_a < 1) return 1;
    return _a;
}

/**
 * 
 * @param {KPPTRPG_FIL_rStatusAdv} a 
 */
export function KPPTRPG_FIL_cStatusAdv_MOV(a) {
    const _a = a.AGI * 10 - a.CON;
    if(_a > 5) return 5;
    if(_a < 1) return 1;
    return _a;
}

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
        G: a?.G ?? 0,
    }
}