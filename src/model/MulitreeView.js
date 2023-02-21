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
 * The MulitreeView model module.
 * @module model/MulitreeView
 * @version 3
 */
class MulitreeView {
    /**
     * Constructs a new <code>MulitreeView</code>.
     * @alias module:model/MulitreeView
     */
    constructor() { 
        
        MulitreeView.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MulitreeView</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MulitreeView} obj Optional instance to populate.
     * @return {module:model/MulitreeView} The populated <code>MulitreeView</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MulitreeView();

            if (data.hasOwnProperty('pageId')) {
                obj['pageId'] = ApiClient.convertToType(data['pageId'], 'String');
            }
            if (data.hasOwnProperty('containerId')) {
                obj['containerId'] = ApiClient.convertToType(data['containerId'], 'String');
            }
            if (data.hasOwnProperty('contentId')) {
                obj['contentId'] = ApiClient.convertToType(data['contentId'], 'String');
            }
            if (data.hasOwnProperty('relationType')) {
                obj['relationType'] = ApiClient.convertToType(data['relationType'], 'String');
            }
            if (data.hasOwnProperty('treeOrder')) {
                obj['treeOrder'] = ApiClient.convertToType(data['treeOrder'], 'Number');
            }
            if (data.hasOwnProperty('personalization')) {
                obj['personalization'] = ApiClient.convertToType(data['personalization'], 'String');
            }
            if (data.hasOwnProperty('variantId')) {
                obj['variantId'] = ApiClient.convertToType(data['variantId'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>MulitreeView</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>MulitreeView</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['pageId'] && !(typeof data['pageId'] === 'string' || data['pageId'] instanceof String)) {
            throw new Error("Expected the field `pageId` to be a primitive type in the JSON string but got " + data['pageId']);
        }
        // ensure the json data is a string
        if (data['containerId'] && !(typeof data['containerId'] === 'string' || data['containerId'] instanceof String)) {
            throw new Error("Expected the field `containerId` to be a primitive type in the JSON string but got " + data['containerId']);
        }
        // ensure the json data is a string
        if (data['contentId'] && !(typeof data['contentId'] === 'string' || data['contentId'] instanceof String)) {
            throw new Error("Expected the field `contentId` to be a primitive type in the JSON string but got " + data['contentId']);
        }
        // ensure the json data is a string
        if (data['relationType'] && !(typeof data['relationType'] === 'string' || data['relationType'] instanceof String)) {
            throw new Error("Expected the field `relationType` to be a primitive type in the JSON string but got " + data['relationType']);
        }
        // ensure the json data is a string
        if (data['personalization'] && !(typeof data['personalization'] === 'string' || data['personalization'] instanceof String)) {
            throw new Error("Expected the field `personalization` to be a primitive type in the JSON string but got " + data['personalization']);
        }
        // ensure the json data is a string
        if (data['variantId'] && !(typeof data['variantId'] === 'string' || data['variantId'] instanceof String)) {
            throw new Error("Expected the field `variantId` to be a primitive type in the JSON string but got " + data['variantId']);
        }

        return true;
    }


}



/**
 * @member {String} pageId
 */
MulitreeView.prototype['pageId'] = undefined;

/**
 * @member {String} containerId
 */
MulitreeView.prototype['containerId'] = undefined;

/**
 * @member {String} contentId
 */
MulitreeView.prototype['contentId'] = undefined;

/**
 * @member {String} relationType
 */
MulitreeView.prototype['relationType'] = undefined;

/**
 * @member {Number} treeOrder
 */
MulitreeView.prototype['treeOrder'] = undefined;

/**
 * @member {String} personalization
 */
MulitreeView.prototype['personalization'] = undefined;

/**
 * @member {String} variantId
 */
MulitreeView.prototype['variantId'] = undefined;






export default MulitreeView;

