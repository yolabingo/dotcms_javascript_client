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
import RestConditionGroup from './RestConditionGroup';

/**
 * The RestRule model module.
 * @module model/RestRule
 * @version 3
 */
class RestRule {
    /**
     * Constructs a new <code>RestRule</code>.
     * @alias module:model/RestRule
     * @param name {String} 
     */
    constructor(name) { 
        
        RestRule.initialize(this, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name) { 
        obj['name'] = name;
    }

    /**
     * Constructs a <code>RestRule</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RestRule} obj Optional instance to populate.
     * @return {module:model/RestRule} The populated <code>RestRule</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RestRule();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('fireOn')) {
                obj['fireOn'] = ApiClient.convertToType(data['fireOn'], 'String');
            }
            if (data.hasOwnProperty('shortCircuit')) {
                obj['shortCircuit'] = ApiClient.convertToType(data['shortCircuit'], 'Boolean');
            }
            if (data.hasOwnProperty('priority')) {
                obj['priority'] = ApiClient.convertToType(data['priority'], 'Number');
            }
            if (data.hasOwnProperty('enabled')) {
                obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
            }
            if (data.hasOwnProperty('conditionGroups')) {
                obj['conditionGroups'] = ApiClient.convertToType(data['conditionGroups'], {'String': RestConditionGroup});
            }
            if (data.hasOwnProperty('ruleActions')) {
                obj['ruleActions'] = ApiClient.convertToType(data['ruleActions'], {'String': 'Boolean'});
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RestRule</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RestRule</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of RestRule.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['fireOn'] && !(typeof data['fireOn'] === 'string' || data['fireOn'] instanceof String)) {
            throw new Error("Expected the field `fireOn` to be a primitive type in the JSON string but got " + data['fireOn']);
        }

        return true;
    }


}

RestRule.RequiredProperties = ["name"];

/**
 * @member {String} name
 */
RestRule.prototype['name'] = undefined;

/**
 * @member {String} fireOn
 */
RestRule.prototype['fireOn'] = undefined;

/**
 * @member {Boolean} shortCircuit
 */
RestRule.prototype['shortCircuit'] = undefined;

/**
 * @member {Number} priority
 */
RestRule.prototype['priority'] = undefined;

/**
 * @member {Boolean} enabled
 */
RestRule.prototype['enabled'] = undefined;

/**
 * @member {Object.<String, module:model/RestConditionGroup>} conditionGroups
 */
RestRule.prototype['conditionGroups'] = undefined;

/**
 * @member {Object.<String, Boolean>} ruleActions
 */
RestRule.prototype['ruleActions'] = undefined;






export default RestRule;

