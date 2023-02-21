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
 * The FireMultipleActionForm model module.
 * @module model/FireMultipleActionForm
 * @version 3
 */
class FireMultipleActionForm {
    /**
     * Constructs a new <code>FireMultipleActionForm</code>.
     * @alias module:model/FireMultipleActionForm
     */
    constructor() { 
        
        FireMultipleActionForm.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FireMultipleActionForm</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FireMultipleActionForm} obj Optional instance to populate.
     * @return {module:model/FireMultipleActionForm} The populated <code>FireMultipleActionForm</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FireMultipleActionForm();

            if (data.hasOwnProperty('comments')) {
                obj['comments'] = ApiClient.convertToType(data['comments'], 'String');
            }
            if (data.hasOwnProperty('assign')) {
                obj['assign'] = ApiClient.convertToType(data['assign'], 'String');
            }
            if (data.hasOwnProperty('publishDate')) {
                obj['publishDate'] = ApiClient.convertToType(data['publishDate'], 'String');
            }
            if (data.hasOwnProperty('publishTime')) {
                obj['publishTime'] = ApiClient.convertToType(data['publishTime'], 'String');
            }
            if (data.hasOwnProperty('expireDate')) {
                obj['expireDate'] = ApiClient.convertToType(data['expireDate'], 'String');
            }
            if (data.hasOwnProperty('expireTime')) {
                obj['expireTime'] = ApiClient.convertToType(data['expireTime'], 'String');
            }
            if (data.hasOwnProperty('neverExpire')) {
                obj['neverExpire'] = ApiClient.convertToType(data['neverExpire'], 'String');
            }
            if (data.hasOwnProperty('whereToSend')) {
                obj['whereToSend'] = ApiClient.convertToType(data['whereToSend'], 'String');
            }
            if (data.hasOwnProperty('filterKey')) {
                obj['filterKey'] = ApiClient.convertToType(data['filterKey'], 'String');
            }
            if (data.hasOwnProperty('timezoneId')) {
                obj['timezoneId'] = ApiClient.convertToType(data['timezoneId'], 'String');
            }
            if (data.hasOwnProperty('iwantTo')) {
                obj['iwantTo'] = ApiClient.convertToType(data['iwantTo'], 'String');
            }
            if (data.hasOwnProperty('contentlet')) {
                obj['contentlet'] = ApiClient.convertToType(data['contentlet'], [{'String': Object}]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>FireMultipleActionForm</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>FireMultipleActionForm</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['comments'] && !(typeof data['comments'] === 'string' || data['comments'] instanceof String)) {
            throw new Error("Expected the field `comments` to be a primitive type in the JSON string but got " + data['comments']);
        }
        // ensure the json data is a string
        if (data['assign'] && !(typeof data['assign'] === 'string' || data['assign'] instanceof String)) {
            throw new Error("Expected the field `assign` to be a primitive type in the JSON string but got " + data['assign']);
        }
        // ensure the json data is a string
        if (data['publishDate'] && !(typeof data['publishDate'] === 'string' || data['publishDate'] instanceof String)) {
            throw new Error("Expected the field `publishDate` to be a primitive type in the JSON string but got " + data['publishDate']);
        }
        // ensure the json data is a string
        if (data['publishTime'] && !(typeof data['publishTime'] === 'string' || data['publishTime'] instanceof String)) {
            throw new Error("Expected the field `publishTime` to be a primitive type in the JSON string but got " + data['publishTime']);
        }
        // ensure the json data is a string
        if (data['expireDate'] && !(typeof data['expireDate'] === 'string' || data['expireDate'] instanceof String)) {
            throw new Error("Expected the field `expireDate` to be a primitive type in the JSON string but got " + data['expireDate']);
        }
        // ensure the json data is a string
        if (data['expireTime'] && !(typeof data['expireTime'] === 'string' || data['expireTime'] instanceof String)) {
            throw new Error("Expected the field `expireTime` to be a primitive type in the JSON string but got " + data['expireTime']);
        }
        // ensure the json data is a string
        if (data['neverExpire'] && !(typeof data['neverExpire'] === 'string' || data['neverExpire'] instanceof String)) {
            throw new Error("Expected the field `neverExpire` to be a primitive type in the JSON string but got " + data['neverExpire']);
        }
        // ensure the json data is a string
        if (data['whereToSend'] && !(typeof data['whereToSend'] === 'string' || data['whereToSend'] instanceof String)) {
            throw new Error("Expected the field `whereToSend` to be a primitive type in the JSON string but got " + data['whereToSend']);
        }
        // ensure the json data is a string
        if (data['filterKey'] && !(typeof data['filterKey'] === 'string' || data['filterKey'] instanceof String)) {
            throw new Error("Expected the field `filterKey` to be a primitive type in the JSON string but got " + data['filterKey']);
        }
        // ensure the json data is a string
        if (data['timezoneId'] && !(typeof data['timezoneId'] === 'string' || data['timezoneId'] instanceof String)) {
            throw new Error("Expected the field `timezoneId` to be a primitive type in the JSON string but got " + data['timezoneId']);
        }
        // ensure the json data is a string
        if (data['iwantTo'] && !(typeof data['iwantTo'] === 'string' || data['iwantTo'] instanceof String)) {
            throw new Error("Expected the field `iwantTo` to be a primitive type in the JSON string but got " + data['iwantTo']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['contentlet'])) {
            throw new Error("Expected the field `contentlet` to be an array in the JSON data but got " + data['contentlet']);
        }

        return true;
    }


}



/**
 * @member {String} comments
 */
FireMultipleActionForm.prototype['comments'] = undefined;

/**
 * @member {String} assign
 */
FireMultipleActionForm.prototype['assign'] = undefined;

/**
 * @member {String} publishDate
 */
FireMultipleActionForm.prototype['publishDate'] = undefined;

/**
 * @member {String} publishTime
 */
FireMultipleActionForm.prototype['publishTime'] = undefined;

/**
 * @member {String} expireDate
 */
FireMultipleActionForm.prototype['expireDate'] = undefined;

/**
 * @member {String} expireTime
 */
FireMultipleActionForm.prototype['expireTime'] = undefined;

/**
 * @member {String} neverExpire
 */
FireMultipleActionForm.prototype['neverExpire'] = undefined;

/**
 * @member {String} whereToSend
 */
FireMultipleActionForm.prototype['whereToSend'] = undefined;

/**
 * @member {String} filterKey
 */
FireMultipleActionForm.prototype['filterKey'] = undefined;

/**
 * @member {String} timezoneId
 */
FireMultipleActionForm.prototype['timezoneId'] = undefined;

/**
 * @member {String} iwantTo
 */
FireMultipleActionForm.prototype['iwantTo'] = undefined;

/**
 * @member {Array.<Object.<String, Object>>} contentlet
 */
FireMultipleActionForm.prototype['contentlet'] = undefined;






export default FireMultipleActionForm;

