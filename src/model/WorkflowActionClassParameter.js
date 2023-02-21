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

/**
 * The WorkflowActionClassParameter model module.
 * @module model/WorkflowActionClassParameter
 * @version 3
 */
class WorkflowActionClassParameter {
    /**
     * Constructs a new <code>WorkflowActionClassParameter</code>.
     * @alias module:model/WorkflowActionClassParameter
     */
    constructor() { 
        
        WorkflowActionClassParameter.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WorkflowActionClassParameter</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WorkflowActionClassParameter} obj Optional instance to populate.
     * @return {module:model/WorkflowActionClassParameter} The populated <code>WorkflowActionClassParameter</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WorkflowActionClassParameter();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('actionClassId')) {
                obj['actionClassId'] = ApiClient.convertToType(data['actionClassId'], 'String');
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>WorkflowActionClassParameter</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WorkflowActionClassParameter</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['actionClassId'] && !(typeof data['actionClassId'] === 'string' || data['actionClassId'] instanceof String)) {
            throw new Error("Expected the field `actionClassId` to be a primitive type in the JSON string but got " + data['actionClassId']);
        }
        // ensure the json data is a string
        if (data['key'] && !(typeof data['key'] === 'string' || data['key'] instanceof String)) {
            throw new Error("Expected the field `key` to be a primitive type in the JSON string but got " + data['key']);
        }
        // ensure the json data is a string
        if (data['value'] && !(typeof data['value'] === 'string' || data['value'] instanceof String)) {
            throw new Error("Expected the field `value` to be a primitive type in the JSON string but got " + data['value']);
        }

        return true;
    }


}



/**
 * @member {String} id
 */
WorkflowActionClassParameter.prototype['id'] = undefined;

/**
 * @member {String} actionClassId
 */
WorkflowActionClassParameter.prototype['actionClassId'] = undefined;

/**
 * @member {String} key
 */
WorkflowActionClassParameter.prototype['key'] = undefined;

/**
 * @member {String} value
 */
WorkflowActionClassParameter.prototype['value'] = undefined;






export default WorkflowActionClassParameter;

