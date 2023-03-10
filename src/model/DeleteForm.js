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
 * The DeleteForm model module.
 * @module model/DeleteForm
 * @version 3
 */
class DeleteForm {
    /**
     * Constructs a new <code>DeleteForm</code>.
     * @alias module:model/DeleteForm
     * @param items {Array.<String>} 
     */
    constructor(items) { 
        
        DeleteForm.initialize(this, items);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, items) { 
        obj['items'] = items;
    }

    /**
     * Constructs a <code>DeleteForm</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteForm} obj Optional instance to populate.
     * @return {module:model/DeleteForm} The populated <code>DeleteForm</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeleteForm();

            if (data.hasOwnProperty('items')) {
                obj['items'] = ApiClient.convertToType(data['items'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DeleteForm</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DeleteForm</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of DeleteForm.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is an array
        if (!Array.isArray(data['items'])) {
            throw new Error("Expected the field `items` to be an array in the JSON data but got " + data['items']);
        }

        return true;
    }


}

DeleteForm.RequiredProperties = ["items"];

/**
 * @member {Array.<String>} items
 */
DeleteForm.prototype['items'] = undefined;






export default DeleteForm;

