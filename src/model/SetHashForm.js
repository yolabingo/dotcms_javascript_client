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
 * The SetHashForm model module.
 * @module model/SetHashForm
 * @version 3
 */
class SetHashForm {
    /**
     * Constructs a new <code>SetHashForm</code>.
     * @alias module:model/SetHashForm
     * @param key {String} 
     * @param fields {Object.<String, Object>} 
     */
    constructor(key, fields) { 
        
        SetHashForm.initialize(this, key, fields);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, key, fields) { 
        obj['key'] = key;
        obj['fields'] = fields;
    }

    /**
     * Constructs a <code>SetHashForm</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SetHashForm} obj Optional instance to populate.
     * @return {module:model/SetHashForm} The populated <code>SetHashForm</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SetHashForm();

            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('fields')) {
                obj['fields'] = ApiClient.convertToType(data['fields'], {'String': Object});
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SetHashForm</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SetHashForm</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of SetHashForm.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['key'] && !(typeof data['key'] === 'string' || data['key'] instanceof String)) {
            throw new Error("Expected the field `key` to be a primitive type in the JSON string but got " + data['key']);
        }

        return true;
    }


}

SetHashForm.RequiredProperties = ["key", "fields"];

/**
 * @member {String} key
 */
SetHashForm.prototype['key'] = undefined;

/**
 * @member {Object.<String, Object>} fields
 */
SetHashForm.prototype['fields'] = undefined;






export default SetHashForm;

