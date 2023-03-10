/**
 * dotCMS REST API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import ExperimentVariant from './ExperimentVariant';

/**
 * The TrafficProportion model module.
 * @module model/TrafficProportion
 * @version 3
 */
class TrafficProportion {
    /**
     * Constructs a new <code>TrafficProportion</code>.
     * @alias module:model/TrafficProportion
     */
    constructor() { 
        
        TrafficProportion.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TrafficProportion</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TrafficProportion} obj Optional instance to populate.
     * @return {module:model/TrafficProportion} The populated <code>TrafficProportion</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TrafficProportion();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('variants')) {
                obj['variants'] = ApiClient.convertToType(data['variants'], [ExperimentVariant]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TrafficProportion</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TrafficProportion</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }
        if (data['variants']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['variants'])) {
                throw new Error("Expected the field `variants` to be an array in the JSON data but got " + data['variants']);
            }
            // validate the optional field `variants` (array)
            for (const item of data['variants']) {
                ExperimentVariant.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {module:model/TrafficProportion.TypeEnum} type
 */
TrafficProportion.prototype['type'] = undefined;

/**
 * @member {Array.<module:model/ExperimentVariant>} variants
 */
TrafficProportion.prototype['variants'] = undefined;





/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
TrafficProportion['TypeEnum'] = {

    /**
     * value: "SPLIT_EVENLY"
     * @const
     */
    "SPLIT_EVENLY": "SPLIT_EVENLY",

    /**
     * value: "CUSTOM_PERCENTAGES"
     * @const
     */
    "CUSTOM_PERCENTAGES": "CUSTOM_PERCENTAGES"
};



export default TrafficProportion;

