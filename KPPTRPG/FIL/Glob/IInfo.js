/**
 * @typedef {object} KPPTRPG_FIL_rIInfoGlob
 * @property {string} name
 * @property {string} PLName
 * @property {KPPTRPG_CCF_StrNil_t} profile
 * @property {string} background
 * @property {string} etc
 */

/**
 * @param {Partial<KPPTRPG_FIL_rIInfoGlob>} a 
 * @returns {KPPTRPG_FIL_rIInfoGlob}
 */
export function KPPTRPG_FIL_cIInfoGlob_Set(a) {
    /** @type {KPPTRPG_FIL_rIInfoGlob} */
    return {
        name: a?.name ?? "",
        PLName: a?.PLName ?? "",
        profile: a?.profile ?? "",
        background: a?.background ?? "",
        etc: a?.etc ?? ""
    };
}