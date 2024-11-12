import { KPPTRPG_Core_Tent } from "../../Core/Tent.js"
import { KPPTRPG_FIL_IInfoAdv_TentId, KPPTRPG_FIL_cIInfoAdv_Tent } from "./IInfo.js";

export class KPPTRPG_FIL_Adv_Tent_IdDiv0
    extends KPPTRPG_Core_Tent {
    /** @param {string} pre  */
    constructor(pre) { super(pre) }

    /** * @returns {string} */
    Comp() { return super.gword("comp"); }
}

export class KPPTRPG_FIL_Adv_Tent_Ids 
    extends KPPTRPG_Core_Tent {
    /** * @param {string} pre  */
    constructor(pre) { super(pre) }

    /** @returns {KPPTRPG_FIL_Adv_Tent_IdDiv0}  */
    CompI() { return new KPPTRPG_FIL_Adv_Tent_IdDiv0(super.gword("compI")); }
    /** @returns {KPPTRPG_FIL_Adv_Tent_IdDiv0}  */
    CompO() { return new KPPTRPG_FIL_Adv_Tent_IdDiv0(super.gword("compO")); }

    /** @returns {KPPTRPG_FIL_IInfoAdv_TentId} */
    IInfoAdvI() { return new KPPTRPG_FIL_IInfoAdv_TentId(super.gword("iiadvI")); }
    /** @returns {KPPTRPG_FIL_IInfoAdv_TentId} */
    IInfoAdvO() { return new KPPTRPG_FIL_IInfoAdv_TentId(super.gword("iiadvO")); }
}

/**
 * Makes the elements to start
 * @param {KPPTRPG_FIL_Adv_Tent_Ids} ids 
 * @param {HTMLDivElement} divI
 * @param {HTMLDivElement} divO
 */
export function KPPTRPG_FIL_Adv_cTent_Init(ids, divI, divO) {
    {
        for(const div0 of [divI, divO])
        {
            const el = document.createElement("h2");
            el.innerHTML = "Data save-load section";
            div0.appendChild(el);

            const desc = document.createElement("p");
            desc.innerHTML = "Compression Key. Directly generates thy character from scratch.";
            div0.appendChild(desc);
        }

        {
            const gap = document.createElement("span");
            gap.innerHTML += " "

            const el = document.createElement("input"); 
            el.id = ids.CompI().Comp();
            divI.appendChild(el);

            const button = document.createElement("button");
            divI.appendChild(gap)

            button.innerHTML = "submit"
            button.onclick = function (ev) { alert("check") }
            divI.appendChild(button);

        }

        {
            const out = document.createElement("p");
            out.id = ids.CompO().Comp();
            out.innerHTML = "";
            divO.appendChild(out);
        }
    }

    KPPTRPG_FIL_cIInfoAdv_Tent(ids.IInfoAdvI(), ids.IInfoAdvO(), divI, divO);
}