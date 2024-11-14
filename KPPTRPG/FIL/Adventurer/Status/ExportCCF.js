import { KPPTRPG_FIL_cStatusAdv_MOV } from "../Status.js";

/**
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
                value: `${val}`
            }
        )
    }

    DataStatusSet("LP", src0.LP + src1.LP);
    DataStatusSet("SP", src0.SP + src1.SP);
    DataPrmSet("STR", src0.STR + src1.STR);
    DataPrmSet("AGI", src0.AGI + src1.AGI);
    DataPrmSet("CON", src0.CON + src1.CON);
    DataPrmSet("INT", src0.INT + src1.INT);
    DataPrmSet("MOV", KPPTRPG_FIL_cStatusAdv_MOV(src0)); // exception
    DataPrmSet("G", src0.G + src1.G);
}