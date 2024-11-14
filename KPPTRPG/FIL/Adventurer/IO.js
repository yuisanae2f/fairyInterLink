import { KPPTRPG_FIL_cAdv_Set } from "../Adventurer.js";

/**
 * @param {string} a 
 * @returns {import("../Adventurer.js").KPPTRPG_FIL_rAdventurer}
 */
export function KPPTRPG_FIL_cAdvI(a) {
    return KPPTRPG_FIL_cAdv_Set(JSON.parse(a))
}


/**
 * @param {import("../Adventurer.js").KPPTRPG_FIL_rAdventurer} a 
 * @returns {string}
 */
export function KPPTRPG_Fil_cAdvO(a) {
    return JSON.stringify(a);
}