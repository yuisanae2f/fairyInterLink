/**
 * @typedef {number} KPPTRPG_FIL_BiasEnum_t
 */

/**
 * @enum {KPPTRPG_FIL_BiasEnum_t}
 * 
 */
export const KPPTRPG_FIL_BiasEnumBuilder = {
    CHAOS:       0b0010,

    /**
     * Order
     */
    KHASSAR:     0b0001, 

    /**
     * @brief
     * Evil
     */
    EVL:         0b1000,

    /**
     * @brief
     * Good
     */
    TEMPLARI:    0b0100,
    NEUTRAL:     0
}