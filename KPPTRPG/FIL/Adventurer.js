/**
 * @typedef {object} KPPTRPG_FIL_rAdventurer
 * @property {KPPTRPG_FIL_rBrood} brood 
 * @property {KPPTRPG_FIL_rIInfoAdv} iinfo
 * @property {KPPTRPG_FIL_rStatusAdv} status
 * @property {KPPTRPG_FIL_rItem[]} storage
 * @property {KPPTRPG_FIL_rItem[]} inv Inventory
 */

import { KPPTRPG_FIL_cStatusAdv_ExportCCF } from "./Adventurer/Status";

/**
 * @param {KPPTRPG_FIL_rAdventurer} selfconst
 * @returns {KPPTRPG_CCF_CharData}
 */
export function KPPTRPG_FIL_cAdventurer_ExportCCF(selfconst) {
    /**
     * @type {KPPTRPG_CCF_CharData}
     */
    let r = {};

    r.kind = "character";
    r.data = {};

    r.data.status = [];
    r.data.params = [];
    
    
    r.data.initiative 
    = selfconst.status.INIT + selfconst.brood.changes.INIT;

    
    //#region Global

    r.data.name = selfconst.iinfo.glob.name;

    r.data.faces = [];
    r.data.faces.push(
        {
            label: "default",
            iconUrl: selfconst.iinfo.glob.profile
        }
    );

    r.data.iconUrl = selfconst.iinfo.glob.profile;
    
    //#endregion

    /// Status & Changes
    KPPTRPG_FIL_cStatusAdv_ExportCCF(r.data, selfconst.status, selfconst.brood.changes);
    

    return r;
}