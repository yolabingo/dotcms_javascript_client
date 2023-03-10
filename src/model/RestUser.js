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
 * The RestUser model module.
 * @module model/RestUser
 * @version 3
 */
class RestUser {
    /**
     * Constructs a new <code>RestUser</code>.
     * @alias module:model/RestUser
     */
    constructor() { 
        
        RestUser.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RestUser</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RestUser} obj Optional instance to populate.
     * @return {module:model/RestUser} The populated <code>RestUser</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RestUser();

            if (data.hasOwnProperty('userId')) {
                obj['userId'] = ApiClient.convertToType(data['userId'], 'String');
            }
            if (data.hasOwnProperty('givenName')) {
                obj['givenName'] = ApiClient.convertToType(data['givenName'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('surname')) {
                obj['surname'] = ApiClient.convertToType(data['surname'], 'String');
            }
            if (data.hasOwnProperty('roleId')) {
                obj['roleId'] = ApiClient.convertToType(data['roleId'], 'String');
            }
            if (data.hasOwnProperty('loginAs')) {
                obj['loginAs'] = ApiClient.convertToType(data['loginAs'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RestUser</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RestUser</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['userId'] && !(typeof data['userId'] === 'string' || data['userId'] instanceof String)) {
            throw new Error("Expected the field `userId` to be a primitive type in the JSON string but got " + data['userId']);
        }
        // ensure the json data is a string
        if (data['givenName'] && !(typeof data['givenName'] === 'string' || data['givenName'] instanceof String)) {
            throw new Error("Expected the field `givenName` to be a primitive type in the JSON string but got " + data['givenName']);
        }
        // ensure the json data is a string
        if (data['email'] && !(typeof data['email'] === 'string' || data['email'] instanceof String)) {
            throw new Error("Expected the field `email` to be a primitive type in the JSON string but got " + data['email']);
        }
        // ensure the json data is a string
        if (data['surname'] && !(typeof data['surname'] === 'string' || data['surname'] instanceof String)) {
            throw new Error("Expected the field `surname` to be a primitive type in the JSON string but got " + data['surname']);
        }
        // ensure the json data is a string
        if (data['roleId'] && !(typeof data['roleId'] === 'string' || data['roleId'] instanceof String)) {
            throw new Error("Expected the field `roleId` to be a primitive type in the JSON string but got " + data['roleId']);
        }

        return true;
    }


}



/**
 * @member {String} userId
 */
RestUser.prototype['userId'] = undefined;

/**
 * @member {String} givenName
 */
RestUser.prototype['givenName'] = undefined;

/**
 * @member {String} email
 */
RestUser.prototype['email'] = undefined;

/**
 * @member {String} surname
 */
RestUser.prototype['surname'] = undefined;

/**
 * @member {String} roleId
 */
RestUser.prototype['roleId'] = undefined;

/**
 * @member {Boolean} loginAs
 */
RestUser.prototype['loginAs'] = undefined;






export default RestUser;

