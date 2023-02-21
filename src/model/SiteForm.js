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
 * The SiteForm model module.
 * @module model/SiteForm
 * @version 3
 */
class SiteForm {
    /**
     * Constructs a new <code>SiteForm</code>.
     * @alias module:model/SiteForm
     */
    constructor() { 
        
        SiteForm.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SiteForm</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SiteForm} obj Optional instance to populate.
     * @return {module:model/SiteForm} The populated <code>SiteForm</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SiteForm();

            if (data.hasOwnProperty('aliases')) {
                obj['aliases'] = ApiClient.convertToType(data['aliases'], 'String');
            }
            if (data.hasOwnProperty('siteName')) {
                obj['siteName'] = ApiClient.convertToType(data['siteName'], 'String');
            }
            if (data.hasOwnProperty('tagStorage')) {
                obj['tagStorage'] = ApiClient.convertToType(data['tagStorage'], 'String');
            }
            if (data.hasOwnProperty('siteThumbnail')) {
                obj['siteThumbnail'] = ApiClient.convertToType(data['siteThumbnail'], 'String');
            }
            if (data.hasOwnProperty('runDashboard')) {
                obj['runDashboard'] = ApiClient.convertToType(data['runDashboard'], 'Boolean');
            }
            if (data.hasOwnProperty('keywords')) {
                obj['keywords'] = ApiClient.convertToType(data['keywords'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('googleMap')) {
                obj['googleMap'] = ApiClient.convertToType(data['googleMap'], 'String');
            }
            if (data.hasOwnProperty('googleAnalytics')) {
                obj['googleAnalytics'] = ApiClient.convertToType(data['googleAnalytics'], 'String');
            }
            if (data.hasOwnProperty('addThis')) {
                obj['addThis'] = ApiClient.convertToType(data['addThis'], 'String');
            }
            if (data.hasOwnProperty('proxyUrlForEditMode')) {
                obj['proxyUrlForEditMode'] = ApiClient.convertToType(data['proxyUrlForEditMode'], 'String');
            }
            if (data.hasOwnProperty('embeddedDashboard')) {
                obj['embeddedDashboard'] = ApiClient.convertToType(data['embeddedDashboard'], 'String');
            }
            if (data.hasOwnProperty('languageId')) {
                obj['languageId'] = ApiClient.convertToType(data['languageId'], 'Number');
            }
            if (data.hasOwnProperty('identifier')) {
                obj['identifier'] = ApiClient.convertToType(data['identifier'], 'String');
            }
            if (data.hasOwnProperty('inode')) {
                obj['inode'] = ApiClient.convertToType(data['inode'], 'String');
            }
            if (data.hasOwnProperty('forceExecution')) {
                obj['forceExecution'] = ApiClient.convertToType(data['forceExecution'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SiteForm</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SiteForm</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['aliases'] && !(typeof data['aliases'] === 'string' || data['aliases'] instanceof String)) {
            throw new Error("Expected the field `aliases` to be a primitive type in the JSON string but got " + data['aliases']);
        }
        // ensure the json data is a string
        if (data['siteName'] && !(typeof data['siteName'] === 'string' || data['siteName'] instanceof String)) {
            throw new Error("Expected the field `siteName` to be a primitive type in the JSON string but got " + data['siteName']);
        }
        // ensure the json data is a string
        if (data['tagStorage'] && !(typeof data['tagStorage'] === 'string' || data['tagStorage'] instanceof String)) {
            throw new Error("Expected the field `tagStorage` to be a primitive type in the JSON string but got " + data['tagStorage']);
        }
        // ensure the json data is a string
        if (data['siteThumbnail'] && !(typeof data['siteThumbnail'] === 'string' || data['siteThumbnail'] instanceof String)) {
            throw new Error("Expected the field `siteThumbnail` to be a primitive type in the JSON string but got " + data['siteThumbnail']);
        }
        // ensure the json data is a string
        if (data['keywords'] && !(typeof data['keywords'] === 'string' || data['keywords'] instanceof String)) {
            throw new Error("Expected the field `keywords` to be a primitive type in the JSON string but got " + data['keywords']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is a string
        if (data['googleMap'] && !(typeof data['googleMap'] === 'string' || data['googleMap'] instanceof String)) {
            throw new Error("Expected the field `googleMap` to be a primitive type in the JSON string but got " + data['googleMap']);
        }
        // ensure the json data is a string
        if (data['googleAnalytics'] && !(typeof data['googleAnalytics'] === 'string' || data['googleAnalytics'] instanceof String)) {
            throw new Error("Expected the field `googleAnalytics` to be a primitive type in the JSON string but got " + data['googleAnalytics']);
        }
        // ensure the json data is a string
        if (data['addThis'] && !(typeof data['addThis'] === 'string' || data['addThis'] instanceof String)) {
            throw new Error("Expected the field `addThis` to be a primitive type in the JSON string but got " + data['addThis']);
        }
        // ensure the json data is a string
        if (data['proxyUrlForEditMode'] && !(typeof data['proxyUrlForEditMode'] === 'string' || data['proxyUrlForEditMode'] instanceof String)) {
            throw new Error("Expected the field `proxyUrlForEditMode` to be a primitive type in the JSON string but got " + data['proxyUrlForEditMode']);
        }
        // ensure the json data is a string
        if (data['embeddedDashboard'] && !(typeof data['embeddedDashboard'] === 'string' || data['embeddedDashboard'] instanceof String)) {
            throw new Error("Expected the field `embeddedDashboard` to be a primitive type in the JSON string but got " + data['embeddedDashboard']);
        }
        // ensure the json data is a string
        if (data['identifier'] && !(typeof data['identifier'] === 'string' || data['identifier'] instanceof String)) {
            throw new Error("Expected the field `identifier` to be a primitive type in the JSON string but got " + data['identifier']);
        }
        // ensure the json data is a string
        if (data['inode'] && !(typeof data['inode'] === 'string' || data['inode'] instanceof String)) {
            throw new Error("Expected the field `inode` to be a primitive type in the JSON string but got " + data['inode']);
        }

        return true;
    }


}



/**
 * @member {String} aliases
 */
SiteForm.prototype['aliases'] = undefined;

/**
 * @member {String} siteName
 */
SiteForm.prototype['siteName'] = undefined;

/**
 * @member {String} tagStorage
 */
SiteForm.prototype['tagStorage'] = undefined;

/**
 * @member {String} siteThumbnail
 */
SiteForm.prototype['siteThumbnail'] = undefined;

/**
 * @member {Boolean} runDashboard
 */
SiteForm.prototype['runDashboard'] = undefined;

/**
 * @member {String} keywords
 */
SiteForm.prototype['keywords'] = undefined;

/**
 * @member {String} description
 */
SiteForm.prototype['description'] = undefined;

/**
 * @member {String} googleMap
 */
SiteForm.prototype['googleMap'] = undefined;

/**
 * @member {String} googleAnalytics
 */
SiteForm.prototype['googleAnalytics'] = undefined;

/**
 * @member {String} addThis
 */
SiteForm.prototype['addThis'] = undefined;

/**
 * @member {String} proxyUrlForEditMode
 */
SiteForm.prototype['proxyUrlForEditMode'] = undefined;

/**
 * @member {String} embeddedDashboard
 */
SiteForm.prototype['embeddedDashboard'] = undefined;

/**
 * @member {Number} languageId
 */
SiteForm.prototype['languageId'] = undefined;

/**
 * @member {String} identifier
 */
SiteForm.prototype['identifier'] = undefined;

/**
 * @member {String} inode
 */
SiteForm.prototype['inode'] = undefined;

/**
 * @member {Boolean} forceExecution
 */
SiteForm.prototype['forceExecution'] = undefined;






export default SiteForm;
