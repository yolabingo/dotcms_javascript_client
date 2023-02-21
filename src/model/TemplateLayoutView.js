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
import BodyView from './BodyView';
import SidebarView from './SidebarView';

/**
 * The TemplateLayoutView model module.
 * @module model/TemplateLayoutView
 * @version 3
 */
class TemplateLayoutView {
    /**
     * Constructs a new <code>TemplateLayoutView</code>.
     * @alias module:model/TemplateLayoutView
     */
    constructor() { 
        
        TemplateLayoutView.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TemplateLayoutView</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TemplateLayoutView} obj Optional instance to populate.
     * @return {module:model/TemplateLayoutView} The populated <code>TemplateLayoutView</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TemplateLayoutView();

            if (data.hasOwnProperty('width')) {
                obj['width'] = ApiClient.convertToType(data['width'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('header')) {
                obj['header'] = ApiClient.convertToType(data['header'], 'Boolean');
            }
            if (data.hasOwnProperty('footer')) {
                obj['footer'] = ApiClient.convertToType(data['footer'], 'Boolean');
            }
            if (data.hasOwnProperty('body')) {
                obj['body'] = BodyView.constructFromObject(data['body']);
            }
            if (data.hasOwnProperty('sidebar')) {
                obj['sidebar'] = SidebarView.constructFromObject(data['sidebar']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TemplateLayoutView</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TemplateLayoutView</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['width'] && !(typeof data['width'] === 'string' || data['width'] instanceof String)) {
            throw new Error("Expected the field `width` to be a primitive type in the JSON string but got " + data['width']);
        }
        // ensure the json data is a string
        if (data['title'] && !(typeof data['title'] === 'string' || data['title'] instanceof String)) {
            throw new Error("Expected the field `title` to be a primitive type in the JSON string but got " + data['title']);
        }
        // validate the optional field `body`
        if (data['body']) { // data not null
          BodyView.validateJSON(data['body']);
        }
        // validate the optional field `sidebar`
        if (data['sidebar']) { // data not null
          SidebarView.validateJSON(data['sidebar']);
        }

        return true;
    }


}



/**
 * @member {String} width
 */
TemplateLayoutView.prototype['width'] = undefined;

/**
 * @member {String} title
 */
TemplateLayoutView.prototype['title'] = undefined;

/**
 * @member {Boolean} header
 */
TemplateLayoutView.prototype['header'] = undefined;

/**
 * @member {Boolean} footer
 */
TemplateLayoutView.prototype['footer'] = undefined;

/**
 * @member {module:model/BodyView} body
 */
TemplateLayoutView.prototype['body'] = undefined;

/**
 * @member {module:model/SidebarView} sidebar
 */
TemplateLayoutView.prototype['sidebar'] = undefined;






export default TemplateLayoutView;

