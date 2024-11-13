import { KPPTRPG_Core_Tent } from "../../Core/Tent.js"
import { KPPTRPG_FIL_cAdventurer_ExportCCF } from "../Adventurer.js";
import { KPPTRPG_FIL_IInfoAdv_TentId, KPPTRPG_FIL_cIInfoAdv_Tent, PPTRPG_FIL_cIInfoAdv_UpAll } from "./IInfo/Tent.js";
import { KPPTRPG_FIL_cAdvI } from "./IO.js";
import { KPPTRPG_FIL_cStatusAdv_Tent, KPPTRPG_FIL_cStatusAdv_UpAll, KPPTRPG_FIL_StatusAdv_Id } from "./Status/Tent.js";

/** @extends {KPPTRPG_Core_Tent<KPPTRPG_FIL_TentAdv_Ids>} */
export class KPPTRPG_FIL_TentAdv_IdDiv0
    extends KPPTRPG_Core_Tent {
    /** 
     * @param {string} pre  
     * @param {KPPTRPG_FIL_TentAdv_Ids} obj
     */
    constructor(pre, obj) { super(pre, obj) }

    /** * @returns {string} */
    Comp() { return super.gword("comp"); }
}

export class KPPTRPG_FIL_TentAdv_Ids 
    extends KPPTRPG_Core_Tent {
    /** * @param {string} pre  */
    constructor(pre) { super(pre) }

    /** @returns {KPPTRPG_FIL_TentAdv_IdDiv0}  */
    CompI() { return new KPPTRPG_FIL_TentAdv_IdDiv0(super.gword("compI"), this); }
    /** @returns {KPPTRPG_FIL_TentAdv_IdDiv0}  */
    CompO() { return new KPPTRPG_FIL_TentAdv_IdDiv0(super.gword("compO"), this); }

    /** @returns {KPPTRPG_FIL_IInfoAdv_TentId} */
    IInfoAdvI() { return new KPPTRPG_FIL_IInfoAdv_TentId(super.gword("iiadvI"), this); }
    /** @returns {KPPTRPG_FIL_IInfoAdv_TentId} */
    IInfoAdvO() { return new KPPTRPG_FIL_IInfoAdv_TentId(super.gword("iiadvO"), this); }

    StatusI() { return new KPPTRPG_FIL_StatusAdv_Id(super.gword("statI"), this); }
    StatusO() { return new KPPTRPG_FIL_StatusAdv_Id(super.gword("statO"), this); }

    JsonO() { return super.gword("jo"); }
}

/**
 * Makes the elements to start
 * @param {KPPTRPG_FIL_TentAdv_Ids} ids 
 * @param {HTMLDivElement} divI
 * @param {HTMLDivElement} divO
 */
export function KPPTRPG_FIL_cTentAdv_Init(ids, divI, divO) {
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
        gap.innerHTML += " ";

        const el = document.createElement("input");
        el.id = ids.CompI().Comp();
        divI.appendChild(el);

        const button = document.createElement("button");
        divI.appendChild(gap);

        button.innerHTML = "submit"
        button.onclick = function (ev) {
            /** @type {HTMLInputElement} */
            const ci = document.getElementById(ids.CompI().Comp());
            const co = document.getElementById(ids.CompO().Comp());


            co.innerHTML = ci.value == "" ? btoa("{}") : ci.value;
            const obj = KPPTRPG_FIL_cAdvI(co.innerHTML);
            PPTRPG_FIL_cIInfoAdv_UpAll(obj.iinfo, ids.IInfoAdvO());
            KPPTRPG_FIL_cStatusAdv_UpAll(obj.status, ids.StatusO());

            const ccf = KPPTRPG_FIL_cAdventurer_ExportCCF(obj);
            document.getElementById(ids.JsonO()).innerHTML = JSON.stringify(ccf);
        }
        divI.appendChild(button);
    }

    {
        const out = document.createElement("details");
        const outt = document.createElement('div');

        outt.id = ids.CompO().Comp();
        outt.innerHTML = "";
        out.appendChild(outt);

        const outitle = document.createElement("summary");
        outitle.innerHTML = "Comp Key Out";
        out.appendChild(outitle);

        divO.appendChild(out);
    }

    {
        const out = document.createElement("details");
        const outt = document.createElement("div");
        const outitle = document.createElement('summary');
        outitle.innerHTML = "CCF Export JSON";

        out.appendChild(outitle);
        out.appendChild(outt);
        divO.appendChild(out);
        outt.id = ids.JsonO();
    }

    KPPTRPG_FIL_cIInfoAdv_Tent(ids.IInfoAdvI(), ids.IInfoAdvO(), divI, divO);
    KPPTRPG_FIL_cStatusAdv_Tent(ids.StatusI(), ids.StatusO(), divI, divO);
}