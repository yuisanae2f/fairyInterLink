
/**
 * 
 * @param {KPPTRPG_CCF_Char_t} dest 
 * @param {import("../IInfo").KPPTRPG_FIL_rIInfoAdv} src 
 */
export function KPPTRPG_FIL_cIInfoAdv_ExportCCF(dest, src) {
    dest.name = src.glob.name;
    dest.iconUrl = src.glob.profile;
    dest.owner = src.glob.PLName;

    dest.memo = `
# Background:
${src.glob.background}


# ETC:
${src.glob.etc}
`
}