import { KPPTRPG_Core_Tent } from "../../../Core/Tent.js"
import { KPPTRPG_FIL_cStatusAdv_Set } from "../Status.js"
import { KPPTRPG_FIL_TentAdv_Ids } from "../Tent.js"

import { KPPTRPG_FIL_cAdvI, KPPTRPG_Fil_cAdvO } from "../IO.js"
import { KPPTRPG_FIL_cAdventurer_ExportCCF } from "../../Adventurer.js"

/** @extends { KPPTRPG_Core_Tent<KPPTRPG_FIL_TentAdv_Ids>} */
export class KPPTRPG_FIL_StatusAdv_Id extends KPPTRPG_Core_Tent {
    /** 
     * @param {string} p  
     * @param {KPPTRPG_FIL_TentAdv_Ids} s
     * */
    constructor(p, s) { super(p,s) }
    LP() { return super.gword('lp') }
    SP() { return super.gword('sp') }
    STR() { return super.gword('str') }
    AGI() { return super.gword('agi') }
    CON() { return super.gword('con') }
    INT() { return super.gword('int') }
    MOV() { return super.gword('mov') }
    G() { return super.gword('g') }
    INIT() { return super.gword('i') }
}

/** * @param {KPPTRPG_FIL_StatusAdv_Id} idI */
export function KPPTRPG_FIL_cStatusAdv_MkHTML(idI) {
    /** @param {string | undefined} id  */
    function gByID(id) {
        /** @type {HTMLInputElement} */
        const _in = document.getElementById(id);
        if (_in.value == "") return undefined;
        return _in.value;
    }

    return KPPTRPG_FIL_cStatusAdv_Set({
        LP: parseInt(gByID(idI.LP()) ?? 0),
        SP: parseInt(gByID(idI.SP()) ?? 0),
        STR: parseInt(gByID(idI.STR()) ?? 0),
        AGI: parseInt(gByID(idI.AGI()) ?? 0),
        CON: parseInt(gByID(idI.CON()) ?? 0),
        INT: parseInt(gByID(idI.INT()) ?? 0),
        MOV: parseInt(gByID(idI.MOV()) ?? 0),
        G: parseInt(gByID(idI.G()) ?? 0),
        INIT: parseInt(gByID(idI.INIT()) ?? 0)
    });
}

/**
 * 
 * @param {import("../Status.js").KPPTRPG_FIL_rStatusAdv} got Object 
 * @param {KPPTRPG_FIL_StatusAdv_Id} idO 
 */
export function KPPTRPG_FIL_cStatusAdv_UpAll(got, idO) {
    document.getElementById(idO.LP()).innerHTML
    = got.LP;

    document.getElementById(idO.SP()).innerHTML
    = got.SP;

    document.getElementById(idO.STR()).innerHTML
    = got.STR;

    document.getElementById(idO.AGI()).innerHTML
    = got.AGI;

    document.getElementById(idO.CON()).innerHTML
    = got.CON;

    document.getElementById(idO.INT()).innerHTML
    = got.INT;

    document.getElementById(idO.MOV()).innerHTML
    = got.MOV;

    document.getElementById(idO.G()).innerHTML
    = got.G;

    document.getElementById(idO.INIT()).innerHTML
    = got.INIT;
}

/** 
 * @param {KPPTRPG_FIL_StatusAdv_Id} idI 
 * @param {KPPTRPG_FIL_StatusAdv_Id} idO 
 * @param {HTMLDivElement} rootI 
 * @param {HTMLDivElement} rootO 
 */
export function KPPTRPG_FIL_cStatusAdv_Tent(idI, idO, rootI, rootO) {
    for (const el of [rootI, rootO]) {
        const h = document.createElement('h2');
        h.innerHTML = "Status Section";
        el.appendChild(h);
    } // title

    {
        const el = document.createElement('button');
        el.innerHTML = "submit"
        el.onclick = () => {
            const got = KPPTRPG_FIL_cStatusAdv_MkHTML(idI);
            KPPTRPG_FIL_cStatusAdv_UpAll(got, idO);

            const c = document.getElementById(idI.par.CompO().Comp())

            const got0 = KPPTRPG_FIL_cAdvI(c.innerHTML == "" ? btoa("{}") : c.innerHTML)
            got0.status = got;
            
            c.innerHTML = KPPTRPG_Fil_cAdvO(got0);

            const ccf = KPPTRPG_FIL_cAdventurer_ExportCCF(got0);
            document.getElementById(idI.par.JsonO()).innerHTML = JSON.stringify(ccf);
        }

        rootI.appendChild(el);
        rootI.appendChild(document.createElement('br'));
        rootI.appendChild(document.createElement('br'));
    } // submit button


    {
        for(const root of [rootI, rootO]) {
            const title = document.createElement("span");
            title.innerHTML = "LP: ";
            root.appendChild(title);
        }

        const el = document.createElement('input');
        el.id = idI.LP();

        rootI.appendChild(el);
        rootI.appendChild(document.createElement("br"));

        const out = document.createElement('span');
        out.id = idO.LP();
        rootO.appendChild(out);
        rootO.appendChild(document.createElement("br"));
    } // LP

    {
        for(const root of [rootI, rootO]) {
            const title = document.createElement("span");
            title.innerHTML = "SP: ";
            root.appendChild(title);
        }

        const el = document.createElement('input');
        el.id = idI.SP();

        rootI.appendChild(el);
        rootI.appendChild(document.createElement("br"));

        const out = document.createElement('span');
        out.id = idO.SP();
        rootO.appendChild(out);
        rootO.appendChild(document.createElement("br"));
    } // SP

    {
        for(const root of [rootI, rootO]) {
            const title = document.createElement("span");
            title.innerHTML = "STR: ";
            root.appendChild(title);
        }

        const el = document.createElement('input');
        el.id = idI.STR();

        rootI.appendChild(el);
        rootI.appendChild(document.createElement("br"));

        const out = document.createElement('span');
        out.id = idO.STR();
        rootO.appendChild(out);
        rootO.appendChild(document.createElement("br"));
    } // STR

    {
        for(const root of [rootI, rootO]) {
            const title = document.createElement("span");
            title.innerHTML = "AGI: ";
            root.appendChild(title);
        }

        const el = document.createElement('input');
        el.id = idI.AGI();

        rootI.appendChild(el);
        rootI.appendChild(document.createElement("br"));

        const out = document.createElement('span');
        out.id = idO.AGI();
        rootO.appendChild(out);
        rootO.appendChild(document.createElement("br"));
    } // AGI

    {
        for(const root of [rootI, rootO]) {
            const title = document.createElement("span");
            title.innerHTML = "CON: ";
            root.appendChild(title);
        }

        const el = document.createElement('input');
        el.id = idI.CON();

        rootI.appendChild(el);
        rootI.appendChild(document.createElement("br"));

        const out = document.createElement('span');
        out.id = idO.CON();
        rootO.appendChild(out);
        rootO.appendChild(document.createElement("br"));
    } // CON

    {
        for(const root of [rootI, rootO]) {
            const title = document.createElement("span");
            title.innerHTML = "INT: ";
            root.appendChild(title);
        }

        const el = document.createElement('input');
        el.id = idI.INT();

        rootI.appendChild(el);
        rootI.appendChild(document.createElement("br"));

        const out = document.createElement('span');
        out.id = idO.INT();
        rootO.appendChild(out);
        rootO.appendChild(document.createElement("br"));
    } // INT

    {
        for(const root of [rootI, rootO]) {
            const title = document.createElement("span");
            title.innerHTML = "MOV: ";
            root.appendChild(title);
        }

        const el = document.createElement('input');
        el.id = idI.MOV();

        rootI.appendChild(el);
        rootI.appendChild(document.createElement("br"));

        const out = document.createElement('span');
        out.id = idO.MOV();
        rootO.appendChild(out);
        rootO.appendChild(document.createElement("br"));
    } // MOV

    {
        for(const root of [rootI, rootO]) {
            const title = document.createElement("span");
            title.innerHTML = "Gold: ";
            root.appendChild(title);
        }

        const el = document.createElement('input');
        el.id = idI.G();

        rootI.appendChild(el);
        rootI.appendChild(document.createElement("br"));

        const out = document.createElement('span');
        out.id = idO.G();
        rootO.appendChild(out);
        rootO.appendChild(document.createElement("br"));
    } // G

    {
        for(const root of [rootI, rootO]) {
            const title = document.createElement("span");
            title.innerHTML = "INIT: ";
            root.appendChild(title);
        }

        const el = document.createElement('input');
        el.id = idI.INIT();

        rootI.appendChild(el);
        rootI.appendChild(document.createElement("br"));

        const out = document.createElement('span');
        out.id = idO.INIT();
        rootO.appendChild(out);
        rootO.appendChild(document.createElement("br"));
    } // INIT
}