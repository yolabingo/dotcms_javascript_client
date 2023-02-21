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
 * The DeleteSecretForm model module.
 * @module model/DeleteSecretForm
 * @version 3
 */
class DeleteSecretForm {
    /**
     * Constructs a new <code>DeleteSecretForm</code>.
     * @alias module:model/DeleteSecretForm
     * @param key {String} 
     * @param siteId {String} 
     * @param params {Array.<String>} 
     */
    constructor(key, siteId, params) { 
        
        DeleteSecretForm.initialize(this, key, siteId, params);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, key, siteId, params) { 
        obj['key'] = key;
        obj['siteId'] = siteId;
        obj['params'] = params;
    }

    /**
     * Constructs a <code>DeleteSecretForm</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteSecretForm} obj Optional instance to populate.
     * @return {module:model/DeleteSecretForm} The populated <code>DeleteSecretForm</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeleteSecretForm();

            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('siteId')) {
                obj['siteId'] = ApiClient.convertToType(data['siteId'], 'String');
            }
            if (data.hasOwnProperty('params')) {
                obj['params'] = ApiClient.convertToType(data['params'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DeleteSecretForm</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DeleteSecretForm</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of DeleteSecretForm.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['key'] && !(typeof data['key'] === 'string' || data['key'] instanceof String)) {
            throw new Error("Expected the field `key` to be a primitive type in the JSON string but got " + data['key']);
        }
        // ensure the json data is a string
        if (data['siteId'] && !(typeof data['siteId'] === 'string' || data['siteId'] instanceof String)) {
            throw new Error("Expected the field `siteId` to be a primitive type in the JSON string but got " + data['siteId']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['params'])) {
            throw new Error("Expected the field `params` to be an array in the JSON data but got " + data['params']);
        }

        return true;
    }


}

DeleteSecretForm.RequiredProperties = ["key", "siteId", "params"];

/**
 * @member {String} key
 */
DeleteSecretForm.prototype['key'] = undefined;

/**
 * @member {String} siteId
 */
DeleteSecretForm.prototype['siteId'] = undefined;

/**
 * @member {Array.<String>} params
 */
DeleteSecretForm.prototype['params'] = undefined;






export default DeleteSecretForm;
