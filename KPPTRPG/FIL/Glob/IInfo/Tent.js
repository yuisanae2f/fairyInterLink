import { KPPTRPG_Core_Tent } from "../../../Core/Tent.js";
import { KPPTRPG_FIL_cIInfoGlob_Set } from "../IInfo.js";

export class KPPTRPG_FIL_IInfoGlob_TentId extends KPPTRPG_Core_Tent {
    /** @param {string} a  */
    constructor(a) {
        super(a);
    }

    Name() { return super.gword("n"); }
    PLName() { return super.gword("pn"); }
    Profile() { return super.gword("pf"); }
    Background() { return super.gword("bg"); }
    Etc() { return super.gword("etc"); }
}

/**
 * @param {KPPTRPG_FIL_IInfoGlob_TentId} idi 
 * @returns {KPPTRPG_FIL_rIInfoGlob}
 */
export function KPPTRPG_FIL_cIInfoGlob_MkHTML(idi) {
    /** @param {string | undefined} id  */
    function gByID(id) {
        /** @type {HTMLInputElement} */
        const _in = document.getElementById(id);
        if (_in.value == "") return undefined;
        return _in.value;
    }

    function gByInner(id) {
        const _in = document.getElementById(id);
        return _in.innerHTML;
    }

    return KPPTRPG_FIL_cIInfoGlob_Set({
        name: gByID(idi.Name()),
        PLName: gByID(idi.PLName()),
        profile: gByID(idi.Profile()),
        background: gByID(idi.Background()),
        etc: gByID(idi.Etc())
    });
}

/**
 * @summary Basic Info Section
 * @param {KPPTRPG_FIL_IInfoGlob_TentId} idI
 * @param {KPPTRPG_FIL_IInfoGlob_TentId} idO
 * @param {HTMLDivElement} rootI
 * @param {HTMLDivElement} rootO
 */
export function KPPTRPG_FIL_cIInfoGlob_Tent(idI, idO, rootI, rootO) {
    {
        for(const root of [rootI, rootO]) {
            const titleHeight = document.createElement("span");
            titleHeight.innerHTML = "Name: ";
            root.appendChild(titleHeight);            
        }

        const el = document.createElement('input');
        el.id = idI.Name();

        rootI.appendChild(el);
        rootI.appendChild(document.createElement("br"));

        const out = document.createElement('span');
        out.id = idO.Name();
        rootO.appendChild(out);
        rootO.appendChild(document.createElement("br"));
    } // Name

    {
        for(const root of [rootI, rootO]) {
            const titleHeight = document.createElement("span");
            titleHeight.innerHTML = "Player Name: ";
            root.appendChild(titleHeight);            
        }

        const el = document.createElement('input');
        el.id = idI.PLName();

        rootI.appendChild(el);
        rootI.appendChild(document.createElement("br"));

        const out = document.createElement('span');
        out.id = idO.PLName();
        rootO.appendChild(out);
        rootO.appendChild(document.createElement("br"));
    } // PLName

    {
        for(const root of [rootI, rootO]) {
            const titleHeight = document.createElement("span");
            titleHeight.innerHTML = "Profile: ";
            root.appendChild(titleHeight);            
        }

        const el = document.createElement('input');
        el.id = idI.Profile();

        rootI.appendChild(el);
        rootI.appendChild(document.createElement("br"));

        const out = document.createElement('img');
        out.id = idO.Profile();
        out.alt = "Profile Picture Link";
        rootO.appendChild(out);
        rootO.appendChild(document.createElement("br"));
    } // Profile

    {
        for(const root of [rootI, rootO]) {
            const titleHeight = document.createElement("span");
            titleHeight.innerHTML = "Background Story: <br/>";
            root.appendChild(titleHeight);            
        }

        const el = document.createElement('textarea');
        el.id = idI.Background();
        el.rows = 10
        el.cols = 30

        rootI.appendChild(el);
        rootI.appendChild(document.createElement("br"));

        const out = document.createElement('pre');
        out.id = idO.Background();
        rootO.appendChild(out);
        rootO.appendChild(document.createElement("br"));
    } // Background

    {
        for(const root of [rootI, rootO]) {
            const titleHeight = document.createElement("span");
            titleHeight.innerHTML = "Etc: <br/>";
            root.appendChild(titleHeight);            
        }

        const el = document.createElement('textarea');
        el.id = idI.Etc();
        el.rows = 10
        el.cols = 30

        rootI.appendChild(el);
        rootI.appendChild(document.createElement("br"));

        const out = document.createElement('pre');
        out.id = idO.Etc();
        rootO.appendChild(out);
        rootO.appendChild(document.createElement("br"));
    } // Etc
}