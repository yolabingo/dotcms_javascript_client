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
import SiteForm from './SiteForm';

/**
 * The CopySiteForm model module.
 * @module model/CopySiteForm
 * @version 3
 */
class CopySiteForm {
    /**
     * Constructs a new <code>CopySiteForm</code>.
     * @alias module:model/CopySiteForm
     */
    constructor() { 
        
        CopySiteForm.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CopySiteForm</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CopySiteForm} obj Optional instance to populate.
     * @return {module:model/CopySiteForm} The populated <code>CopySiteForm</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CopySiteForm();

            if (data.hasOwnProperty('copyFromSiteId')) {
                obj['copyFromSiteId'] = ApiClient.convertToType(data['copyFromSiteId'], 'String');
            }
            if (data.hasOwnProperty('copyAll')) {
                obj['copyAll'] = ApiClient.convertToType(data['copyAll'], 'Boolean');
            }
            if (data.hasOwnProperty('copyTemplatesContainers')) {
                obj['copyTemplatesContainers'] = ApiClient.convertToType(data['copyTemplatesContainers'], 'Boolean');
            }
            if (data.hasOwnProperty('copyContentOnPages')) {
                obj['copyContentOnPages'] = ApiClient.convertToType(data['copyContentOnPages'], 'Boolean');
            }
            if (data.hasOwnProperty('copyFolders')) {
                obj['copyFolders'] = ApiClient.convertToType(data['copyFolders'], 'Boolean');
            }
            if (data.hasOwnProperty('copyContentOnSite')) {
                obj['copyContentOnSite'] = ApiClient.convertToType(data['copyContentOnSite'], 'Boolean');
            }
            if (data.hasOwnProperty('copyLinks')) {
                obj['copyLinks'] = ApiClient.convertToType(data['copyLinks'], 'Boolean');
            }
            if (data.hasOwnProperty('copySiteVariables')) {
                obj['copySiteVariables'] = ApiClient.convertToType(data['copySiteVariables'], 'Boolean');
            }
            if (data.hasOwnProperty('site')) {
                obj['site'] = SiteForm.constructFromObject(data['site']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CopySiteForm</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CopySiteForm</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['copyFromSiteId'] && !(typeof data['copyFromSiteId'] === 'string' || data['copyFromSiteId'] instanceof String)) {
            throw new Error("Expected the field `copyFromSiteId` to be a primitive type in the JSON string but got " + data['copyFromSiteId']);
        }
        // validate the optional field `site`
        if (data['site']) { // data not null
          SiteForm.validateJSON(data['site']);
        }

        return true;
    }


}



/**
 * @member {String} copyFromSiteId
 */
CopySiteForm.prototype['copyFromSiteId'] = undefined;

/**
 * @member {Boolean} copyAll
 */
CopySiteForm.prototype['copyAll'] = undefined;

/**
 * @member {Boolean} copyTemplatesContainers
 */
CopySiteForm.prototype['copyTemplatesContainers'] = undefined;

/**
 * @member {Boolean} copyContentOnPages
 */
CopySiteForm.prototype['copyContentOnPages'] = undefined;

/**
 * @member {Boolean} copyFolders
 */
CopySiteForm.prototype['copyFolders'] = undefined;

/**
 * @member {Boolean} copyContentOnSite
 */
CopySiteForm.prototype['copyContentOnSite'] = undefined;

/**
 * @member {Boolean} copyLinks
 */
CopySiteForm.prototype['copyLinks'] = undefined;

/**
 * @member {Boolean} copySiteVariables
 */
CopySiteForm.prototype['copySiteVariables'] = undefined;

/**
 * @member {module:model/SiteForm} site
 */
CopySiteForm.prototype['site'] = undefined;






export default CopySiteForm;

