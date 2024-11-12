import { KPPTRPG_FIL_cIInfoGlob_Set } from "../Glob/IInfo.js";
import { KPPTRPG_FIL_cBrood_Set } from "./Brood.js";


/**
 * @typedef {object} KPPTRPG_FIL_rIInfoAdv
 * @property {import("../Glob/IInfo.js").KPPTRPG_FIL_rIInfoGlob} glob
 * @property {number} height
 * @property {number} weight
 * @property {number} age
 * @property {string} gender
 * @property {import("./IInfo/Bias").KPPTRPG_FIL_BiasEnum_t} bias
 * @property {KPPTRPG_FIL_rBrood} brood
 */

/**
 * @param {Partial<KPPTRPG_FIL_rIInfoAdv>} a 
 * @returns {KPPTRPG_FIL_rIInfoAdv}
 */
export function KPPTRPG_FIL_cIInfoAdv_Set(a) {
    return {
        glob: KPPTRPG_FIL_cIInfoGlob_Set(a.glob),
        height: a.height ?? 0,
        weight: a.weight ?? 0,
        age: a.age ?? 0,
        gender: a.gender ?? 0,
        bias: a.bias ?? 0,
        brood: KPPTRPG_FIL_cBrood_Set(a.brood)
    }
}