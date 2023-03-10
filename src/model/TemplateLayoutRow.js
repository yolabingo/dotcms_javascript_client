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
import TemplateLayoutColumn from './TemplateLayoutColumn';

/**
 * The TemplateLayoutRow model module.
 * @module model/TemplateLayoutRow
 * @version 3
 */
class TemplateLayoutRow {
    /**
     * Constructs a new <code>TemplateLayoutRow</code>.
     * @alias module:model/TemplateLayoutRow
     */
    constructor() { 
        
        TemplateLayoutRow.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TemplateLayoutRow</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TemplateLayoutRow} obj Optional instance to populate.
     * @return {module:model/TemplateLayoutRow} The populated <code>TemplateLayoutRow</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TemplateLayoutRow();

            if (data.hasOwnProperty('columns')) {
                obj['columns'] = ApiClient.convertToType(data['columns'], [TemplateLayoutColumn]);
            }
            if (data.hasOwnProperty('styleClass')) {
                obj['styleClass'] = ApiClient.convertToType(data['styleClass'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TemplateLayoutRow</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TemplateLayoutRow</code>.
     */
    static validateJSON(data) {
        if (data['columns']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['columns'])) {
                throw new Error("Expected the field `columns` to be an array in the JSON data but got " + data['columns']);
            }
            // validate the optional field `columns` (array)
            for (const item of data['columns']) {
                TemplateLayoutColumn.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['styleClass'] && !(typeof data['styleClass'] === 'string' || data['styleClass'] instanceof String)) {
            throw new Error("Expected the field `styleClass` to be a primitive type in the JSON string but got " + data['styleClass']);
        }

        return true;
    }


}



/**
 * @member {Array.<module:model/TemplateLayoutColumn>} columns
 */
TemplateLayoutRow.prototype['columns'] = undefined;

/**
 * @member {String} styleClass
 */
TemplateLayoutRow.prototype['styleClass'] = undefined;






export default TemplateLayoutRow;

