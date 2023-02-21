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
 * The ErrorEntity model module.
 * @module model/ErrorEntity
 * @version 3
 */
class ErrorEntity {
    /**
     * Constructs a new <code>ErrorEntity</code>.
     * @alias module:model/ErrorEntity
     */
    constructor() { 
        
        ErrorEntity.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ErrorEntity</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ErrorEntity} obj Optional instance to populate.
     * @return {module:model/ErrorEntity} The populated <code>ErrorEntity</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ErrorEntity();

            if (data.hasOwnProperty('errorCode')) {
                obj['errorCode'] = ApiClient.convertToType(data['errorCode'], 'String');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('fieldName')) {
                obj['fieldName'] = ApiClient.convertToType(data['fieldName'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ErrorEntity</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ErrorEntity</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['errorCode'] && !(typeof data['errorCode'] === 'string' || data['errorCode'] instanceof String)) {
            throw new Error("Expected the field `errorCode` to be a primitive type in the JSON string but got " + data['errorCode']);
        }
        // ensure the json data is a string
        if (data['message'] && !(typeof data['message'] === 'string' || data['message'] instanceof String)) {
            throw new Error("Expected the field `message` to be a primitive type in the JSON string but got " + data['message']);
        }
        // ensure the json data is a string
        if (data['fieldName'] && !(typeof data['fieldName'] === 'string' || data['fieldName'] instanceof String)) {
            throw new Error("Expected the field `fieldName` to be a primitive type in the JSON string but got " + data['fieldName']);
        }

        return true;
    }


}



/**
 * @member {String} errorCode
 */
ErrorEntity.prototype['errorCode'] = undefined;

/**
 * @member {String} message
 */
ErrorEntity.prototype['message'] = undefined;

/**
 * @member {String} fieldName
 */
ErrorEntity.prototype['fieldName'] = undefined;






export default ErrorEntity;

