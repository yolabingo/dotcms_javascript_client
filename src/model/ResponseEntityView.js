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
import ErrorEntity from './ErrorEntity';
import MessageEntity from './MessageEntity';

/**
 * The ResponseEntityView model module.
 * @module model/ResponseEntityView
 * @version 3
 */
class ResponseEntityView {
    /**
     * Constructs a new <code>ResponseEntityView</code>.
     * @alias module:model/ResponseEntityView
     */
    constructor() { 
        
        ResponseEntityView.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ResponseEntityView</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ResponseEntityView} obj Optional instance to populate.
     * @return {module:model/ResponseEntityView} The populated <code>ResponseEntityView</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ResponseEntityView();

            if (data.hasOwnProperty('errors')) {
                obj['errors'] = ApiClient.convertToType(data['errors'], [ErrorEntity]);
            }
            if (data.hasOwnProperty('entity')) {
                obj['entity'] = ApiClient.convertToType(data['entity'], Object);
            }
            if (data.hasOwnProperty('messages')) {
                obj['messages'] = ApiClient.convertToType(data['messages'], [MessageEntity]);
            }
            if (data.hasOwnProperty('i18nMessagesMap')) {
                obj['i18nMessagesMap'] = ApiClient.convertToType(data['i18nMessagesMap'], {'String': 'String'});
            }
            if (data.hasOwnProperty('permissions')) {
                obj['permissions'] = ApiClient.convertToType(data['permissions'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ResponseEntityView</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ResponseEntityView</code>.
     */
    static validateJSON(data) {
        if (data['errors']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['errors'])) {
                throw new Error("Expected the field `errors` to be an array in the JSON data but got " + data['errors']);
            }
            // validate the optional field `errors` (array)
            for (const item of data['errors']) {
                ErrorEntity.validateJSON(item);
            };
        }
        if (data['messages']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['messages'])) {
                throw new Error("Expected the field `messages` to be an array in the JSON data but got " + data['messages']);
            }
            // validate the optional field `messages` (array)
            for (const item of data['messages']) {
                MessageEntity.validateJSON(item);
            };
        }
        // ensure the json data is an array
        if (!Array.isArray(data['permissions'])) {
            throw new Error("Expected the field `permissions` to be an array in the JSON data but got " + data['permissions']);
        }

        return true;
    }


}



/**
 * @member {Array.<module:model/ErrorEntity>} errors
 */
ResponseEntityView.prototype['errors'] = undefined;

/**
 * @member {Object} entity
 */
ResponseEntityView.prototype['entity'] = undefined;

/**
 * @member {Array.<module:model/MessageEntity>} messages
 */
ResponseEntityView.prototype['messages'] = undefined;

/**
 * @member {Object.<String, String>} i18nMessagesMap
 */
ResponseEntityView.prototype['i18nMessagesMap'] = undefined;

/**
 * @member {Array.<String>} permissions
 */
ResponseEntityView.prototype['permissions'] = undefined;






export default ResponseEntityView;

