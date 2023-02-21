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
 * The UpdateTagForm model module.
 * @module model/UpdateTagForm
 * @version 3
 */
class UpdateTagForm {
    /**
     * Constructs a new <code>UpdateTagForm</code>.
     * @alias module:model/UpdateTagForm
     * @param siteId {String} 
     * @param tagName {String} 
     * @param tagId {String} 
     */
    constructor(siteId, tagName, tagId) { 
        
        UpdateTagForm.initialize(this, siteId, tagName, tagId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, siteId, tagName, tagId) { 
        obj['siteId'] = siteId;
        obj['tagName'] = tagName;
        obj['tagId'] = tagId;
    }

    /**
     * Constructs a <code>UpdateTagForm</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateTagForm} obj Optional instance to populate.
     * @return {module:model/UpdateTagForm} The populated <code>UpdateTagForm</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateTagForm();

            if (data.hasOwnProperty('siteId')) {
                obj['siteId'] = ApiClient.convertToType(data['siteId'], 'String');
            }
            if (data.hasOwnProperty('tagName')) {
                obj['tagName'] = ApiClient.convertToType(data['tagName'], 'String');
            }
            if (data.hasOwnProperty('tagId')) {
                obj['tagId'] = ApiClient.convertToType(data['tagId'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UpdateTagForm</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UpdateTagForm</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of UpdateTagForm.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['siteId'] && !(typeof data['siteId'] === 'string' || data['siteId'] instanceof String)) {
            throw new Error("Expected the field `siteId` to be a primitive type in the JSON string but got " + data['siteId']);
        }
        // ensure the json data is a string
        if (data['tagName'] && !(typeof data['tagName'] === 'string' || data['tagName'] instanceof String)) {
            throw new Error("Expected the field `tagName` to be a primitive type in the JSON string but got " + data['tagName']);
        }
        // ensure the json data is a string
        if (data['tagId'] && !(typeof data['tagId'] === 'string' || data['tagId'] instanceof String)) {
            throw new Error("Expected the field `tagId` to be a primitive type in the JSON string but got " + data['tagId']);
        }

        return true;
    }


}

UpdateTagForm.RequiredProperties = ["siteId", "tagName", "tagId"];

/**
 * @member {String} siteId
 */
UpdateTagForm.prototype['siteId'] = undefined;

/**
 * @member {String} tagName
 */
UpdateTagForm.prototype['tagName'] = undefined;

/**
 * @member {String} tagId
 */
UpdateTagForm.prototype['tagId'] = undefined;






export default UpdateTagForm;
