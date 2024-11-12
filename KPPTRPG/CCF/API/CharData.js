/**
 * @typedef {string | null} KPPTRPG_CCF_StrNil_t String or null selectable
 */

/**
 * @typedef {object} KPPTRPG_CCF_CharStatus_t
 * @property {string} label
 * @property {number} value 
 * @property {number} max
 */

/**
 * @typedef {object} KPPTRPG_CCF_CharPrm_t
 * @property {string} label
 * @property {string} value
 */

/**
 * @typedef {object} KPPTRPG_CCF_CharF_t
 * @property {KPPTRPG_CCF_StrNil_t} iconUrl
 * @property {string} label
 */

/**
 * @typedef {object} KPPTRPG_CCF_Char_t
 * @property {string} name
 * @property {string} memo
 * @property {number} initiative
 * @property {string} externalUrl
 * @property {KPPTRPG_CCF_CharStatus_t[]} status
 * @property {KPPTRPG_CCF_CharPrm_t[]} params
 * @property {KPPTRPG_CCF_StrNil_t}  iconUrl [!]
 * @property {KPPTRPG_CCF_CharF_t[]} faces [!]
 * @property {number} x [!]
 * @property {number} y [!]
 * @property {number} angle
 * @property {number} width
 * @property {number} height
 * @property {boolean} active [!]
 * @property {boolean} secret
 * @property {boolean} invisible
 * @property {boolean} hideStatus
 * @property {string} color
 * @property {string} commands
 * @property {KPPTRPG_CCF_StrNil_t} owner
 */

/**
 * @typedef {object} KPPTRPG_CCF_CharData
 * @property {string} kind
 * @property {Partial<KPPTRPG_CCF_Char_t>} data
 */