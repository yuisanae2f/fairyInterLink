import { KPPTRPG_Core_Tent } from "../../Core/Tent.js";
import { KPPTRPG_FIL_cIInfoGlob_Set } from "../Glob/IInfo.js";
import { KPPTRPG_FIL_cBrood_Set } from "./Brood.js";
import { KPPTRPG_FIL_Bias_ToString, KPPTRPG_FIL_BiasEnumBuilder } from "./IInfo/Bias.js";

/**
 * @typedef {object} KPPTRPG_FIL_rIInfoAdv
 * @property {KPPTRPG_FIL_rIInfoGlob} glob
 * @property {number} height
 * @property {number} weight
 * @property {number} age
 * @property {string} gender
 * @property {import("./IInfo/Bias").KPPTRPG_FIL_BiasEnum_t} bias
 * @property {KPPTRPG_FIL_rBrood} brood
 */


export class KPPTRPG_FIL_IInfoAdv_TentId extends KPPTRPG_Core_Tent {
    /** @param {string} pre */
    constructor(pre) { super(pre) }

    Height() { return super.gword("h") }
    Weight() { return super.gword("w") }
    Age() { return super.gword("a") }
    Gender() { return super.gword("g") }
    Bias0() { return super.gword("b0") }
    Bias1() { return super.gword("b1") }
}

/**
 * @param {Partial<KPPTRPG_FIL_rIInfoAdv>} a 
 * @returns {KPPTRPG_FIL_rIInfoAdv}
 */
export function KPPTRPG_FIL_cIInfoAdv_Set(a) {
    return {
        glob: KPPTRPG_FIL_cIInfoGlob_Set(a.glob),
        height: a.height ?? 0,
        weight: a.weight ?? 0,
        age: a.age ?? 0,
        gender: a.gender ?? 0,
        bias: a.bias ?? 0,
        brood: KPPTRPG_FIL_cBrood_Set(a.brood)
    }
}

/**
 * @todo glob imp
 * @param {KPPTRPG_FIL_IInfoAdv_TentId} idI 
 * @returns {KPPTRPG_FIL_rIInfoAdv}
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
        height: parseInt(gByID(idI.Height()) ?? 0),
        weight: parseInt(gByID(idI.Weight()) ?? 0),
        age: parseInt(gByID(idI.Age()) ?? 0),
        gender: gByID(idI.Gender()),
        bias: parseInt(gByID(idI.Bias0()) ?? 0) | parseInt(gByID(idI.Bias1()) ?? 0),
    });
}

/**
 * @param {KPPTRPG_FIL_rIInfoAdv} a 
 * @returns {string}
 */
export function KPPTRPG_FIL_cIInfoAdv_MkStr(a) {
    return btoa(JSON.stringify(a));
}

/**
 * 
 * @param {string} a 
 * @returns {KPPTRPG_FIL_rIInfoAdv}
 */
export function KPPTRPG_FIL_cInfoAdv_RdStr(a) {
    return JSON.parse(atob(a));
}


/**
 * 
 * @param {KPPTRPG_FIL_IInfoAdv_TentId} idI 
 * @param {KPPTRPG_FIL_IInfoAdv_TentId} idO 
 */
function _UpdateAll(idI, idO) {

    const got = KPPTRPG_FIL_cIInfoAdv_MkHTML(idI);

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
            _UpdateAll(idI, idO);
        }

        rootI.appendChild(el);
        rootI.appendChild(document.createElement('br'));
        rootI.appendChild(document.createElement('br'));
    } // submit button

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