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

/**
 * 
 * @param {KPPTRPG_CCF_Char_t} dest
 * @param {KPPTRPG_FIL_rStatusAdv} src0
 * @param {KPPTRPG_FIL_rStatusAdv} src1
 * @returns {void}
 */
export function KPPTRPG_FIL_cStatusAdv_ExportCCF(dest, src0, src1) {
    /**
     * @param {string} lbl 
     * @param {number} val 
     */
    function DataStatusSet(lbl, val) {
        dest.status.push(
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
        dest.params.push(
            {
                label: lbl,
                value: val
            }
        )
    }

    DataStatusSet("LP", src0.LP + src1.LP);
    DataStatusSet("SP", src0.SP + src1.SP);
    DataPrmSet("STR", src0.STR + src1.STR);
    DataPrmSet("AGI", src0.AGI + src1.AGI);
    DataPrmSet("CON", src0.CON + src1.CON);
    DataPrmSet("INT", src0.INT + src1.INT);
    DataPrmSet("MOV", src0.MOV + src1.MOV);
    DataPrmSet("G", src0.G + src1.G);
}