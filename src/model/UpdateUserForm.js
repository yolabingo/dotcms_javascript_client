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
 * The UpdateUserForm model module.
 * @module model/UpdateUserForm
 * @version 3
 */
class UpdateUserForm {
    /**
     * Constructs a new <code>UpdateUserForm</code>.
     * @alias module:model/UpdateUserForm
     * @param userId {String} 
     * @param givenName {String} 
     * @param surname {String} 
     */
    constructor(userId, givenName, surname) { 
        
        UpdateUserForm.initialize(this, userId, givenName, surname);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, userId, givenName, surname) { 
        obj['userId'] = userId;
        obj['givenName'] = givenName;
        obj['surname'] = surname;
    }

    /**
     * Constructs a <code>UpdateUserForm</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateUserForm} obj Optional instance to populate.
     * @return {module:model/UpdateUserForm} The populated <code>UpdateUserForm</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateUserForm();

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
            if (data.hasOwnProperty('currentPassword')) {
                obj['currentPassword'] = ApiClient.convertToType(data['currentPassword'], 'String');
            }
            if (data.hasOwnProperty('newPassword')) {
                obj['newPassword'] = ApiClient.convertToType(data['newPassword'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UpdateUserForm</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UpdateUserForm</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of UpdateUserForm.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
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
        if (data['currentPassword'] && !(typeof data['currentPassword'] === 'string' || data['currentPassword'] instanceof String)) {
            throw new Error("Expected the field `currentPassword` to be a primitive type in the JSON string but got " + data['currentPassword']);
        }
        // ensure the json data is a string
        if (data['newPassword'] && !(typeof data['newPassword'] === 'string' || data['newPassword'] instanceof String)) {
            throw new Error("Expected the field `newPassword` to be a primitive type in the JSON string but got " + data['newPassword']);
        }

        return true;
    }


}

UpdateUserForm.RequiredProperties = ["userId", "givenName", "surname"];

/**
 * @member {String} userId
 */
UpdateUserForm.prototype['userId'] = undefined;

/**
 * @member {String} givenName
 */
UpdateUserForm.prototype['givenName'] = undefined;

/**
 * @member {String} email
 */
UpdateUserForm.prototype['email'] = undefined;

/**
 * @member {String} surname
 */
UpdateUserForm.prototype['surname'] = undefined;

/**
 * @member {String} currentPassword
 */
UpdateUserForm.prototype['currentPassword'] = undefined;

/**
 * @member {String} newPassword
 */
UpdateUserForm.prototype['newPassword'] = undefined;






export default UpdateUserForm;

