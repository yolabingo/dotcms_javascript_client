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
import Condition from './Condition';

/**
 * The ImmutableListCondition model module.
 * @module model/ImmutableListCondition
 * @version 3
 */
class ImmutableListCondition extends Array {
    /**
     * Constructs a new <code>ImmutableListCondition</code>.
     * @alias module:model/ImmutableListCondition
     * @extends Array
     */
    constructor() { 
        super();
        
        
        ImmutableListCondition.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ImmutableListCondition</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ImmutableListCondition} obj Optional instance to populate.
     * @return {module:model/ImmutableListCondition} The populated <code>ImmutableListCondition</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ImmutableListCondition();

            ApiClient.constructFromObject(data, obj, 'Condition');
            

        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ImmutableListCondition</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ImmutableListCondition</code>.
     */
    static validateJSON(data) {

        return true;
    }


}








export default ImmutableListCondition;

