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
 * The BrowserQueryForm model module.
 * @module model/BrowserQueryForm
 * @version 3
 */
class BrowserQueryForm {
    /**
     * Constructs a new <code>BrowserQueryForm</code>.
     * @alias module:model/BrowserQueryForm
     */
    constructor() { 
        
        BrowserQueryForm.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BrowserQueryForm</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BrowserQueryForm} obj Optional instance to populate.
     * @return {module:model/BrowserQueryForm} The populated <code>BrowserQueryForm</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BrowserQueryForm();

            if (data.hasOwnProperty('hostFolderId')) {
                obj['hostFolderId'] = ApiClient.convertToType(data['hostFolderId'], 'String');
            }
            if (data.hasOwnProperty('filter')) {
                obj['filter'] = ApiClient.convertToType(data['filter'], 'String');
            }
            if (data.hasOwnProperty('sortBy')) {
                obj['sortBy'] = ApiClient.convertToType(data['sortBy'], 'String');
            }
            if (data.hasOwnProperty('offset')) {
                obj['offset'] = ApiClient.convertToType(data['offset'], 'Number');
            }
            if (data.hasOwnProperty('maxResults')) {
                obj['maxResults'] = ApiClient.convertToType(data['maxResults'], 'Number');
            }
            if (data.hasOwnProperty('showWorking')) {
                obj['showWorking'] = ApiClient.convertToType(data['showWorking'], 'Boolean');
            }
            if (data.hasOwnProperty('showArchived')) {
                obj['showArchived'] = ApiClient.convertToType(data['showArchived'], 'Boolean');
            }
            if (data.hasOwnProperty('showFolders')) {
                obj['showFolders'] = ApiClient.convertToType(data['showFolders'], 'Boolean');
            }
            if (data.hasOwnProperty('showFiles')) {
                obj['showFiles'] = ApiClient.convertToType(data['showFiles'], 'Boolean');
            }
            if (data.hasOwnProperty('showPages')) {
                obj['showPages'] = ApiClient.convertToType(data['showPages'], 'Boolean');
            }
            if (data.hasOwnProperty('sortByDesc')) {
                obj['sortByDesc'] = ApiClient.convertToType(data['sortByDesc'], 'Boolean');
            }
            if (data.hasOwnProperty('showLinks')) {
                obj['showLinks'] = ApiClient.convertToType(data['showLinks'], 'Boolean');
            }
            if (data.hasOwnProperty('showDotAssets')) {
                obj['showDotAssets'] = ApiClient.convertToType(data['showDotAssets'], 'Boolean');
            }
            if (data.hasOwnProperty('languageId')) {
                obj['languageId'] = ApiClient.convertToType(data['languageId'], 'Number');
            }
            if (data.hasOwnProperty('extensions')) {
                obj['extensions'] = ApiClient.convertToType(data['extensions'], ['String']);
            }
            if (data.hasOwnProperty('mimeTypes')) {
                obj['mimeTypes'] = ApiClient.convertToType(data['mimeTypes'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>BrowserQueryForm</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BrowserQueryForm</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['hostFolderId'] && !(typeof data['hostFolderId'] === 'string' || data['hostFolderId'] instanceof String)) {
            throw new Error("Expected the field `hostFolderId` to be a primitive type in the JSON string but got " + data['hostFolderId']);
        }
        // ensure the json data is a string
        if (data['filter'] && !(typeof data['filter'] === 'string' || data['filter'] instanceof String)) {
            throw new Error("Expected the field `filter` to be a primitive type in the JSON string but got " + data['filter']);
        }
        // ensure the json data is a string
        if (data['sortBy'] && !(typeof data['sortBy'] === 'string' || data['sortBy'] instanceof String)) {
            throw new Error("Expected the field `sortBy` to be a primitive type in the JSON string but got " + data['sortBy']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['extensions'])) {
            throw new Error("Expected the field `extensions` to be an array in the JSON data but got " + data['extensions']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['mimeTypes'])) {
            throw new Error("Expected the field `mimeTypes` to be an array in the JSON data but got " + data['mimeTypes']);
        }

        return true;
    }


}



/**
 * @member {String} hostFolderId
 */
BrowserQueryForm.prototype['hostFolderId'] = undefined;

/**
 * @member {String} filter
 */
BrowserQueryForm.prototype['filter'] = undefined;

/**
 * @member {String} sortBy
 */
BrowserQueryForm.prototype['sortBy'] = undefined;

/**
 * @member {Number} offset
 */
BrowserQueryForm.prototype['offset'] = undefined;

/**
 * @member {Number} maxResults
 */
BrowserQueryForm.prototype['maxResults'] = undefined;

/**
 * @member {Boolean} showWorking
 */
BrowserQueryForm.prototype['showWorking'] = undefined;

/**
 * @member {Boolean} showArchived
 */
BrowserQueryForm.prototype['showArchived'] = undefined;

/**
 * @member {Boolean} showFolders
 */
BrowserQueryForm.prototype['showFolders'] = undefined;

/**
 * @member {Boolean} showFiles
 */
BrowserQueryForm.prototype['showFiles'] = undefined;

/**
 * @member {Boolean} showPages
 */
BrowserQueryForm.prototype['showPages'] = undefined;

/**
 * @member {Boolean} sortByDesc
 */
BrowserQueryForm.prototype['sortByDesc'] = undefined;

/**
 * @member {Boolean} showLinks
 */
BrowserQueryForm.prototype['showLinks'] = undefined;

/**
 * @member {Boolean} showDotAssets
 */
BrowserQueryForm.prototype['showDotAssets'] = undefined;

/**
 * @member {Number} languageId
 */
BrowserQueryForm.prototype['languageId'] = undefined;

/**
 * @member {Array.<String>} extensions
 */
BrowserQueryForm.prototype['extensions'] = undefined;

/**
 * @member {Array.<String>} mimeTypes
 */
BrowserQueryForm.prototype['mimeTypes'] = undefined;






export default BrowserQueryForm;

