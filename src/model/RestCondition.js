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
import RestConditionValue from './RestConditionValue';

/**
 * The RestCondition model module.
 * @module model/RestCondition
 * @version 3
 */
class RestCondition {
    /**
     * Constructs a new <code>RestCondition</code>.
     * @alias module:model/RestCondition
     * @param owningGroup {String} 
     * @param conditionlet {String} 
     * @param operator {String} 
     */
    constructor(owningGroup, conditionlet, operator) { 
        
        RestCondition.initialize(this, owningGroup, conditionlet, operator);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, owningGroup, conditionlet, operator) { 
        obj['owningGroup'] = owningGroup;
        obj['conditionlet'] = conditionlet;
        obj['operator'] = operator;
    }

    /**
     * Constructs a <code>RestCondition</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RestCondition} obj Optional instance to populate.
     * @return {module:model/RestCondition} The populated <code>RestCondition</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RestCondition();

            if (data.hasOwnProperty('owningGroup')) {
                obj['owningGroup'] = ApiClient.convertToType(data['owningGroup'], 'String');
            }
            if (data.hasOwnProperty('conditionlet')) {
                obj['conditionlet'] = ApiClient.convertToType(data['conditionlet'], 'String');
            }
            if (data.hasOwnProperty('values')) {
                obj['values'] = ApiClient.convertToType(data['values'], {'String': RestConditionValue});
            }
            if (data.hasOwnProperty('operator')) {
                obj['operator'] = ApiClient.convertToType(data['operator'], 'String');
            }
            if (data.hasOwnProperty('priority')) {
                obj['priority'] = ApiClient.convertToType(data['priority'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RestCondition</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RestCondition</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of RestCondition.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['owningGroup'] && !(typeof data['owningGroup'] === 'string' || data['owningGroup'] instanceof String)) {
            throw new Error("Expected the field `owningGroup` to be a primitive type in the JSON string but got " + data['owningGroup']);
        }
        // ensure the json data is a string
        if (data['conditionlet'] && !(typeof data['conditionlet'] === 'string' || data['conditionlet'] instanceof String)) {
            throw new Error("Expected the field `conditionlet` to be a primitive type in the JSON string but got " + data['conditionlet']);
        }
        // ensure the json data is a string
        if (data['operator'] && !(typeof data['operator'] === 'string' || data['operator'] instanceof String)) {
            throw new Error("Expected the field `operator` to be a primitive type in the JSON string but got " + data['operator']);
        }

        return true;
    }


}

RestCondition.RequiredProperties = ["owningGroup", "conditionlet", "operator"];

/**
 * @member {String} owningGroup
 */
RestCondition.prototype['owningGroup'] = undefined;

/**
 * @member {String} conditionlet
 */
RestCondition.prototype['conditionlet'] = undefined;

/**
 * @member {Object.<String, module:model/RestConditionValue>} values
 */
RestCondition.prototype['values'] = undefined;

/**
 * @member {String} operator
 */
RestCondition.prototype['operator'] = undefined;

/**
 * @member {Number} priority
 */
RestCondition.prototype['priority'] = undefined;






export default RestCondition;
