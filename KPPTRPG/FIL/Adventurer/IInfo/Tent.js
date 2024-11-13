import { KPPTRPG_FIL_Bias_ToString, KPPTRPG_FIL_BiasEnumBuilder } from "../IInfo/Bias.js";
import { KPPTRPG_Core_Tent } from "../../../Core/Tent.js";
import { KPPTRPG_FIL_cIInfoGlob_Tent, KPPTRPG_FIL_IInfoGlob_TentId, KPPTRPG_FIL_cIInfoGlob_MkHTML } from "../../Glob/IInfo/Tent.js";
import { KPPTRPG_FIL_cIInfoAdv_Set } from "../IInfo.js"
import { KPPTRPG_FIL_TentAdv_Ids } from "../Tent.js"
import { KPPTRPG_Fil_cAdvO, KPPTRPG_FIL_cAdvI } from "../IO.js"
import { KPPTRPG_FIL_cAdventurer_ExportCCF } from "../../Adventurer.js"

/** @extends {KPPTRPG_Core_Tent<KPPTRPG_FIL_TentAdv_Ids>} */
export class KPPTRPG_FIL_IInfoAdv_TentId extends KPPTRPG_Core_Tent {
    /** 
     * @param {string} pre 
     * @param {KPPTRPG_FIL_TentAdv_Ids} par
     * */
    constructor(pre, par) { super(pre, par) }

    Height() { return super.gword("h") }
    Weight() { return super.gword("w") }
    Age() { return super.gword("a") }
    Gender() { return super.gword("g") }
    Bias0() { return super.gword("b0") }
    Bias1() { return super.gword("b1") }
    Glob() { return new KPPTRPG_FIL_IInfoGlob_TentId(super.gword("g_")); }
}

/**
 * @param {KPPTRPG_FIL_IInfoAdv_TentId} idI 
 * @returns {import("../IInfo.js").KPPTRPG_FIL_rIInfoAdv}
 */
export function KPPTRPG_FIL_cIInfoAdv_MkHTML(idI) {
    /** @param {string | undefined} id  */
    function gByID(id) {
        /** @type {HTMLInputElement} */
        const _in = document.getElementById(id);
        if (_in.value == "") return undefined;
        return _in.value;
    }

    
    return KPPTRPG_FIL_cIInfoAdv_Set({
        glob: KPPTRPG_FIL_cIInfoGlob_MkHTML(idI.Glob()),
        height: parseInt(gByID(idI.Height()) ?? 0),
        weight: parseInt(gByID(idI.Weight()) ?? 0),
        age: parseInt(gByID(idI.Age()) ?? 0),
        gender: gByID(idI.Gender()),
        bias: parseInt(gByID(idI.Bias0()) ?? 0) | parseInt(gByID(idI.Bias1()) ?? 0),
    });
}

/**
 * 
 * @param {import("../IInfo.js").KPPTRPG_FIL_rIInfoAdv} got 
 * @param {KPPTRPG_FIL_IInfoAdv_TentId} idO 
 */
export function PPTRPG_FIL_cIInfoAdv_UpAll(got, idO) {
    document.getElementById(idO.Height()).innerHTML
    = got.height;

    document.getElementById(idO.Weight()).innerHTML
    = got.weight;

    document.getElementById(idO.Age()).innerHTML
    = got.age;

    document.getElementById(idO.Gender()).innerHTML
    = got.gender;

    document.getElementById(idO.Bias0()).innerHTML
    = KPPTRPG_FIL_Bias_ToString(got.bias)

    document.getElementById(idO.Glob().Name()).innerHTML
    = got.glob.name;

    document.getElementById(idO.Glob().PLName()).innerHTML
    = got.glob.PLName;

    /**@type {HTMLImageElement} */
    document.getElementById(idO.Glob().Profile()).src
    = got.glob.profile;

    document.getElementById(idO.Glob().Background()).innerHTML
    = got.glob.background;

    document.getElementById(idO.Glob().Etc()).innerHTML
    = got.glob.etc;
}
/**
 * @summary Basic Info Section
 * @param {KPPTRPG_FIL_IInfoAdv_TentId} idI
 * @param {KPPTRPG_FIL_IInfoAdv_TentId} idO
 * @param {HTMLDivElement} rootI
 * @param {HTMLDivElement} rootO
 */
export function KPPTRPG_FIL_cIInfoAdv_Tent(idI, idO, rootI, rootO) {
    // root.id = ids.pre;
    for (const root of [rootI, rootO])
    {
        const el = document.createElement("h2");
        el.innerHTML = "Basic Info Section"

        const desc = document.createElement("p");
        desc.innerHTML = "Basic information about thy character.";
        root.appendChild(el);
        root.appendChild(desc);
    } // title

    {
        const el = document.createElement('button');
        el.innerHTML = "submit"
        el.onclick = () => {
            const got = KPPTRPG_FIL_cIInfoAdv_MkHTML(idI);
            PPTRPG_FIL_cIInfoAdv_UpAll(got, idO);
            
            const c = document.getElementById(idI.par.CompO().Comp())

            const got0 = KPPTRPG_FIL_cAdvI(c.innerHTML == "" ? btoa("{}") : c.innerHTML);
            got0.iinfo = got;

            c.innerHTML = KPPTRPG_Fil_cAdvO(got0);

            const ccf = KPPTRPG_FIL_cAdventurer_ExportCCF(got0);
            document.getElementById(idI.par.JsonO()).innerHTML = JSON.stringify(ccf);
        }

        rootI.appendChild(el);
        rootI.appendChild(document.createElement('br'));
        rootI.appendChild(document.createElement('br'));
    } // submit button

    KPPTRPG_FIL_cIInfoGlob_Tent(idI.Glob(), idO.Glob(), rootI, rootO);

    {
        for(const root of [rootI, rootO]) {
            const titleHeight = document.createElement("span");
            titleHeight.innerHTML = "Height: ";
            root.appendChild(titleHeight);            
        }

        const el = document.createElement('input');
        el.id = idI.Height();

        rootI.appendChild(el);
        rootI.appendChild(document.createElement("br"));

        const out = document.createElement('span');
        out.id = idO.Height();
        rootO.appendChild(out);
        rootO.appendChild(document.createElement("br"));
    } // height

    {
        for(const root of [rootI, rootO]) {
            const titleHeight = document.createElement("span");
            titleHeight.innerHTML = "Weight: ";
            root.appendChild(titleHeight);            
        }
        const el = document.createElement('input');
        el.id = idI.Weight();

        rootI.appendChild(el);
        rootI.appendChild(document.createElement("br"));

        const out = document.createElement('span');
        out.id = idO.Weight();
        rootO.appendChild(out);
        rootO.appendChild(document.createElement("br"));
    } // weight

    {
        for(const root of [rootI, rootO]) {
            const titleHeight = document.createElement("span");
            titleHeight.innerHTML = "Age: ";
            root.appendChild(titleHeight);            
        }
        const el = document.createElement('input');
        el.id = idI.Age();

        rootI.appendChild(el);
        rootI.appendChild(document.createElement("br"));

        const out = document.createElement('span');
        out.id = idO.Age();
        rootO.appendChild(out);
        rootO.appendChild(document.createElement("br"));
    } // Age

    {
        for(const root of [rootI, rootO]) {
            const titleHeight = document.createElement("span");
            titleHeight.innerHTML = "Gender: ";
            root.appendChild(titleHeight);            
        }
        const el = document.createElement('input');
        el.id = idI.Gender();

        rootI.appendChild(el);
        rootI.appendChild(document.createElement("br"));

        const out = document.createElement('span');
        out.id = idO.Gender();
        rootO.appendChild(out);
        rootO.appendChild(document.createElement("br"));
    } // Gender

    {
        for(const root of [rootI, rootO]) {
            const titleHeight = document.createElement("span");
            titleHeight.innerHTML = "Bias: ";
            root.appendChild(titleHeight);
        }

        const 
        lbl0 = document.createElement("span"), 
        lbl1 = document.createElement('span');

        lbl0.innerHTML = "val 0: "
        lbl1.innerHTML = " val 1: "

        const 
        rtn0 = document.createElement('select');
        rtn0.id = idI.Bias0();

        const 
        rtn1 = document.createElement('select');
        rtn1.id = idI.Bias1();

        {
            const Bias = KPPTRPG_FIL_BiasEnumBuilder;
            /** 
             * @private
             * @typedef {object} i_t 
             * @property {number} a
             * @property {string} l
             */

            /** @type {i_t} */
            for(const i of [
                { a: Bias.NEUTRAL,  l: "Neutral"},
                { a: Bias.CHAOS,    l: "Chaos"},
                { a: Bias.KHASSAR,  l: "Ordered"},
            ]) {
                const el = document.createElement('option');
                el.value = i.a;
                el.innerHTML = i.l;

                if(!i.a) {
                    el.selected = true;
                }

                rtn0.appendChild(el);
            }

            /** @type {i_t} */
            for(const i of [
                { a: Bias.NEUTRAL,  l: "Neutral"},
                { a: Bias.EVL,    l: "Evil"},
                { a: Bias.TEMPLARI,  l: "Good"},
            ]) {
                const el = document.createElement('option');
                el.value = i.a;
                el.innerHTML = i.l;

                if(!i.a) {
                    el.selected = true;
                }

                rtn1.appendChild(el);
            }
        }

        rootI.appendChild(lbl0)
        rootI.appendChild(rtn0)
        rootI.appendChild(lbl1)
        rootI.appendChild(rtn1)

        const out = document.createElement('span');
        out.id = idO.Bias0();
        rootO.appendChild(out);
        rootO.appendChild(document.createElement("br"));
    } // Bias
}