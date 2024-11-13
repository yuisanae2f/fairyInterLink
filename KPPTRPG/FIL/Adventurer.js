/**
 * @typedef {object} KPPTRPG_FIL_rAdventurer
 * @property {KPPTRPG_FIL_rBrood} brood
 * @property {KPPTRPG_FIL_rIInfoAdv} iinfo
 * @property {KPPTRPG_FIL_rStatusAdv} status
 * @property {KPPTRPG_FIL_rItem[]} storage
 * @property {KPPTRPG_FIL_rItem[]} inv Inventory
 */

import { KPPTRPG_FIL_cBrood_Set } from "./Adventurer/Brood.js";
import { KPPTRPG_FIL_cIInfoAdv_Set } from "./Adventurer/IInfo.js";
import { KPPTRPG_FIL_cStatusAdv_Set } from "./Adventurer/Status.js";
import { KPPTRPG_FIL_cStatusAdv_ExportCCF } from "./Adventurer/Status/ExportCCF.js"
import { KPPTRPG_FIL_cIInfoAdv_ExportCCF } from "./Adventurer/IInfo/ExportCCF.js"


/**
 * @param {Partial<KPPTRPG_FIL_rAdventurer>} a 
 * @returns {KPPTRPG_FIL_rAdventurer}
 */
export function KPPTRPG_FIL_cAdv_Set(a) {
    return {
        brood: KPPTRPG_FIL_cBrood_Set(a.brood ?? {}),
        iinfo: KPPTRPG_FIL_cIInfoAdv_Set(a.iinfo ?? {}),
        status: KPPTRPG_FIL_cStatusAdv_Set(a.status ?? {}),
        storage: a.storage ?? [],
        inv: a.inv ?? []
    };
}

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
    r.data.faces = [];
    
    r.data.initiative 
    = selfconst.status.INIT + selfconst.brood.changes.INIT;
    
    //#region Global

    r.data.name = "";
    
    //#endregion

    /// Status & Changes
    KPPTRPG_FIL_cStatusAdv_ExportCCF(r.data, selfconst.status, selfconst.brood.changes);
    KPPTRPG_FIL_cIInfoAdv_ExportCCF(r.data, selfconst.iinfo);
    return r;
}