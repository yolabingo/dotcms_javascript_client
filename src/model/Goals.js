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
import Metric from './Metric';

/**
 * The Goals model module.
 * @module model/Goals
 * @version 3
 */
class Goals {
    /**
     * Constructs a new <code>Goals</code>.
     * @alias module:model/Goals
     */
    constructor() { 
        
        Goals.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Goals</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Goals} obj Optional instance to populate.
     * @return {module:model/Goals} The populated <code>Goals</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Goals();

            if (data.hasOwnProperty('primary')) {
                obj['primary'] = Metric.constructFromObject(data['primary']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Goals</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Goals</code>.
     */
    static validateJSON(data) {
        // validate the optional field `primary`
        if (data['primary']) { // data not null
          Metric.validateJSON(data['primary']);
        }

        return true;
    }


}



/**
 * @member {module:model/Metric} primary
 */
Goals.prototype['primary'] = undefined;






export default Goals;

