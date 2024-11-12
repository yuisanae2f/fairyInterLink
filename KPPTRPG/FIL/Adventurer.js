/**
 * @typedef {object} KPPTRPG_FIL_rAdventurer
 * @property {KPPTRPG_FIL_rBrood} brood 
 * @property {KPPTRPG_FIL_rIInfoAdv} iinfo
 * @property {KPPTRPG_FIL_rStatusAdv} status
 * @property {KPPTRPG_FIL_rItem[]} storage
 * @property {KPPTRPG_FIL_rItem[]} inv Inventory
 */

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



    //#region Status & Params

    /**
     * @param {string} lbl 
     * @param {number} val 
     */
    function DataStatusSet(lbl, val) {
        r.data.status.push(
            {
                label: lbl,
                value: val,
                max: val
            }
        );
    }

    /**
     * @param {string} lbl 
     * @param {number} val 
     */
    function DataPrmSet(lbl, val) {
        r.data.params.push(
            {
                label: lbl,
                value: val
            }
        )
    }

    DataStatusSet("LP", selfconst.status.LP + selfconst.brood.changes.LP);
    DataStatusSet("SP", selfconst.status.SP + selfconst.brood.changes.SP);
    DataPrmSet("STR", selfconst.status.STR + selfconst.brood.changes.STR);
    DataPrmSet("AGI", selfconst.status.AGI + selfconst.brood.changes.AGI);
    DataPrmSet("CON", selfconst.status.CON + selfconst.brood.changes.CON);
    DataPrmSet("INT", selfconst.status.INT + selfconst.brood.changes.INT);
    DataPrmSet("MOV", selfconst.status.MOV + selfconst.brood.changes.MOV);
    DataPrmSet("G", selfconst.status.G + selfconst.brood.changes.G);

    //#endregion


    return r;
}