/**
 * @typedef {object} KPPTRPG_CCF_Msg_DiceEl_t
 * @property {string} kind
 * @property {number} value
 * @property {number} faces
 */

/**
 * @typedef {object} KPPTRPG_CCF_Msg_ExtRollNil_t
 * @property {string} result
 * @property {KPPTRPG_CCF_Msg_DiceEl_t[]} dices
 * @property {boolean} secret
 * @property {boolean} success
 * @property {boolean} failure
 * @property {boolean} critical
 * @property {boolean} fumble
 */

/**
 * @typedef {object} KPPTRPG_CCF_Msg_Ext_t
 * @property {KPPTRPG_CCF_Msg_ExtRollNil_t?} roll
 */

/**
 * @typedef {Date} KPPTRPG_CCF_TStmp_t TS Timestamp type
 */

/**
 * @typedef {object} KPPTRPG_CCF_Msg
 * @property {KPPTRPG_CCF_StrNil_t} to
 * @property {string} toName
 * @property {string} from
 * @property {string} name
 * @property {KPPTRPG_CCF_StrNil_t} iconUrl
 * @property {string} color
 * @property {KPPTRPG_CCF_StrNil_t} imageUrl
 * @property {string} text
 * @property {"text" | "note" | "system"} type
 * @property {KPPTRPG_CCF_Msg_Ext_t} extend
 * @property {boolean} removed
 * @property {boolean} edited
 * @property {string} channel
 * @property {string} channelName
 * @property {KPPTRPG_CCF_TStmp_t} createdAt
 * @property {KPPTRPG_CCF_TStmp_t} updatedAt
 */