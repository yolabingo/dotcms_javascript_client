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
import ContainerUUID from './ContainerUUID';

/**
 * The TemplateLayoutColumnView model module.
 * @module model/TemplateLayoutColumnView
 * @version 3
 */
class TemplateLayoutColumnView {
    /**
     * Constructs a new <code>TemplateLayoutColumnView</code>.
     * @alias module:model/TemplateLayoutColumnView
     */
    constructor() { 
        
        TemplateLayoutColumnView.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TemplateLayoutColumnView</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TemplateLayoutColumnView} obj Optional instance to populate.
     * @return {module:model/TemplateLayoutColumnView} The populated <code>TemplateLayoutColumnView</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TemplateLayoutColumnView();

            if (data.hasOwnProperty('containers')) {
                obj['containers'] = ApiClient.convertToType(data['containers'], [ContainerUUID]);
            }
            if (data.hasOwnProperty('width')) {
                obj['width'] = ApiClient.convertToType(data['width'], 'Number');
            }
            if (data.hasOwnProperty('leftOffset')) {
                obj['leftOffset'] = ApiClient.convertToType(data['leftOffset'], 'Number');
            }
            if (data.hasOwnProperty('styleClass')) {
                obj['styleClass'] = ApiClient.convertToType(data['styleClass'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TemplateLayoutColumnView</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TemplateLayoutColumnView</code>.
     */
    static validateJSON(data) {
        if (data['containers']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['containers'])) {
                throw new Error("Expected the field `containers` to be an array in the JSON data but got " + data['containers']);
            }
            // validate the optional field `containers` (array)
            for (const item of data['containers']) {
                ContainerUUID.validateJSON(item);
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
 * @member {Array.<module:model/ContainerUUID>} containers
 */
TemplateLayoutColumnView.prototype['containers'] = undefined;

/**
 * @member {Number} width
 */
TemplateLayoutColumnView.prototype['width'] = undefined;

/**
 * @member {Number} leftOffset
 */
TemplateLayoutColumnView.prototype['leftOffset'] = undefined;

/**
 * @member {String} styleClass
 */
TemplateLayoutColumnView.prototype['styleClass'] = undefined;






export default TemplateLayoutColumnView;

