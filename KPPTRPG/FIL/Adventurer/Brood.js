import { KPPTRPG_FIL_cStatusAdv_Set } from "./Status.js";

/**
 * @typedef {object} KPPTRPG_FIL_rBrood
 * @property {string} name Name
 * @property {string} desc Descryption 
 * @property {import("./Status").KPPTRPG_FIL_rStatusAdv} changes Status changing value [Simple Calculation]
 */


/**
 * @type {KPPTRPG_FIL_rBrood[]} Examples
 */
export const KPPTRPG_FIL_Broods = [
    { name: "Human", desc: "Nothing special", changes: KPPTRPG_FIL_cStatusAdv_Set({}) }
]

/**
 * @param {Partial<KPPTRPG_FIL_rBrood>} a 
 * @returns {KPPTRPG_FIL_rBrood}
 */
export function KPPTRPG_FIL_cBrood_Set(a) {
    return {
        name: a?.name ?? "",
        desc: a?.desc ?? "",
        changes: KPPTRPG_FIL_cStatusAdv_Set(a?.changes)
    }
}