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
import ContainerEntry from './ContainerEntry';

/**
 * The PageContainerForm model module.
 * @module model/PageContainerForm
 * @version 3
 */
class PageContainerForm {
    /**
     * Constructs a new <code>PageContainerForm</code>.
     * @alias module:model/PageContainerForm
     */
    constructor() { 
        
        PageContainerForm.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PageContainerForm</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PageContainerForm} obj Optional instance to populate.
     * @return {module:model/PageContainerForm} The populated <code>PageContainerForm</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PageContainerForm();

            if (data.hasOwnProperty('requestJson')) {
                obj['requestJson'] = ApiClient.convertToType(data['requestJson'], 'String');
            }
            if (data.hasOwnProperty('containerEntries')) {
                obj['containerEntries'] = ApiClient.convertToType(data['containerEntries'], [ContainerEntry]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PageContainerForm</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PageContainerForm</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['requestJson'] && !(typeof data['requestJson'] === 'string' || data['requestJson'] instanceof String)) {
            throw new Error("Expected the field `requestJson` to be a primitive type in the JSON string but got " + data['requestJson']);
        }
        if (data['containerEntries']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['containerEntries'])) {
                throw new Error("Expected the field `containerEntries` to be an array in the JSON data but got " + data['containerEntries']);
            }
            // validate the optional field `containerEntries` (array)
            for (const item of data['containerEntries']) {
                ContainerEntry.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {String} requestJson
 */
PageContainerForm.prototype['requestJson'] = undefined;

/**
 * @member {Array.<module:model/ContainerEntry>} containerEntries
 */
PageContainerForm.prototype['containerEntries'] = undefined;






export default PageContainerForm;
