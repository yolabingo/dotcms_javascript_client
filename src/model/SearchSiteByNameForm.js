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
 * The SearchSiteByNameForm model module.
 * @module model/SearchSiteByNameForm
 * @version 3
 */
class SearchSiteByNameForm {
    /**
     * Constructs a new <code>SearchSiteByNameForm</code>.
     * @alias module:model/SearchSiteByNameForm
     */
    constructor() { 
        
        SearchSiteByNameForm.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SearchSiteByNameForm</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SearchSiteByNameForm} obj Optional instance to populate.
     * @return {module:model/SearchSiteByNameForm} The populated <code>SearchSiteByNameForm</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SearchSiteByNameForm();

            if (data.hasOwnProperty('siteName')) {
                obj['siteName'] = ApiClient.convertToType(data['siteName'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SearchSiteByNameForm</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SearchSiteByNameForm</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['siteName'] && !(typeof data['siteName'] === 'string' || data['siteName'] instanceof String)) {
            throw new Error("Expected the field `siteName` to be a primitive type in the JSON string but got " + data['siteName']);
        }

        return true;
    }


}



/**
 * @member {String} siteName
 */
SearchSiteByNameForm.prototype['siteName'] = undefined;






export default SearchSiteByNameForm;
