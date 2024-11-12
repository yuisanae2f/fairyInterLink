import { TClass } from "../../Raw/TClass"

/**
 * @typedef {number} BiasEnum_t
 */

/**
 * @enum {BiasEnum_t}
 * 
 * @brief \
 * Bitmaskers for Bias
 */
const BiasEnumBuilder = {
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