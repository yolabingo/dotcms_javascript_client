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
import TemplateLayoutView from './TemplateLayoutView';

/**
 * The TemplateForm model module.
 * @module model/TemplateForm
 * @version 3
 */
class TemplateForm {
    /**
     * Constructs a new <code>TemplateForm</code>.
     * @alias module:model/TemplateForm
     * @param title {String} 
     */
    constructor(title) { 
        
        TemplateForm.initialize(this, title);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, title) { 
        obj['title'] = title;
    }

    /**
     * Constructs a <code>TemplateForm</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TemplateForm} obj Optional instance to populate.
     * @return {module:model/TemplateForm} The populated <code>TemplateForm</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TemplateForm();

            if (data.hasOwnProperty('siteId')) {
                obj['siteId'] = ApiClient.convertToType(data['siteId'], 'String');
            }
            if (data.hasOwnProperty('identifier')) {
                obj['identifier'] = ApiClient.convertToType(data['identifier'], 'String');
            }
            if (data.hasOwnProperty('inode')) {
                obj['inode'] = ApiClient.convertToType(data['inode'], 'String');
            }
            if (data.hasOwnProperty('body')) {
                obj['body'] = ApiClient.convertToType(data['body'], 'String');
            }
            if (data.hasOwnProperty('selectedimage')) {
                obj['selectedimage'] = ApiClient.convertToType(data['selectedimage'], 'String');
            }
            if (data.hasOwnProperty('image')) {
                obj['image'] = ApiClient.convertToType(data['image'], 'String');
            }
            if (data.hasOwnProperty('drawed')) {
                obj['drawed'] = ApiClient.convertToType(data['drawed'], 'Boolean');
            }
            if (data.hasOwnProperty('showOnMenu')) {
                obj['showOnMenu'] = ApiClient.convertToType(data['showOnMenu'], 'Boolean');
            }
            if (data.hasOwnProperty('drawedBody')) {
                obj['drawedBody'] = ApiClient.convertToType(data['drawedBody'], 'String');
            }
            if (data.hasOwnProperty('countAddContainer')) {
                obj['countAddContainer'] = ApiClient.convertToType(data['countAddContainer'], 'Number');
            }
            if (data.hasOwnProperty('countContainers')) {
                obj['countContainers'] = ApiClient.convertToType(data['countContainers'], 'Number');
            }
            if (data.hasOwnProperty('headCode')) {
                obj['headCode'] = ApiClient.convertToType(data['headCode'], 'String');
            }
            if (data.hasOwnProperty('theme')) {
                obj['theme'] = ApiClient.convertToType(data['theme'], 'String');
            }
            if (data.hasOwnProperty('themeName')) {
                obj['themeName'] = ApiClient.convertToType(data['themeName'], 'String');
            }
            if (data.hasOwnProperty('footer')) {
                obj['footer'] = ApiClient.convertToType(data['footer'], 'String');
            }
            if (data.hasOwnProperty('friendlyName')) {
                obj['friendlyName'] = ApiClient.convertToType(data['friendlyName'], 'String');
            }
            if (data.hasOwnProperty('header')) {
                obj['header'] = ApiClient.convertToType(data['header'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('sortOrder')) {
                obj['sortOrder'] = ApiClient.convertToType(data['sortOrder'], 'Number');
            }
            if (data.hasOwnProperty('headerCheck')) {
                obj['headerCheck'] = ApiClient.convertToType(data['headerCheck'], 'Boolean');
            }
            if (data.hasOwnProperty('footerCheck')) {
                obj['footerCheck'] = ApiClient.convertToType(data['footerCheck'], 'Boolean');
            }
            if (data.hasOwnProperty('layout')) {
                obj['layout'] = TemplateLayoutView.constructFromObject(data['layout']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TemplateForm</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TemplateForm</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of TemplateForm.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['siteId'] && !(typeof data['siteId'] === 'string' || data['siteId'] instanceof String)) {
            throw new Error("Expected the field `siteId` to be a primitive type in the JSON string but got " + data['siteId']);
        }
        // ensure the json data is a string
        if (data['identifier'] && !(typeof data['identifier'] === 'string' || data['identifier'] instanceof String)) {
            throw new Error("Expected the field `identifier` to be a primitive type in the JSON string but got " + data['identifier']);
        }
        // ensure the json data is a string
        if (data['inode'] && !(typeof data['inode'] === 'string' || data['inode'] instanceof String)) {
            throw new Error("Expected the field `inode` to be a primitive type in the JSON string but got " + data['inode']);
        }
        // ensure the json data is a string
        if (data['body'] && !(typeof data['body'] === 'string' || data['body'] instanceof String)) {
            throw new Error("Expected the field `body` to be a primitive type in the JSON string but got " + data['body']);
        }
        // ensure the json data is a string
        if (data['selectedimage'] && !(typeof data['selectedimage'] === 'string' || data['selectedimage'] instanceof String)) {
            throw new Error("Expected the field `selectedimage` to be a primitive type in the JSON string but got " + data['selectedimage']);
        }
        // ensure the json data is a string
        if (data['image'] && !(typeof data['image'] === 'string' || data['image'] instanceof String)) {
            throw new Error("Expected the field `image` to be a primitive type in the JSON string but got " + data['image']);
        }
        // ensure the json data is a string
        if (data['drawedBody'] && !(typeof data['drawedBody'] === 'string' || data['drawedBody'] instanceof String)) {
            throw new Error("Expected the field `drawedBody` to be a primitive type in the JSON string but got " + data['drawedBody']);
        }
        // ensure the json data is a string
        if (data['headCode'] && !(typeof data['headCode'] === 'string' || data['headCode'] instanceof String)) {
            throw new Error("Expected the field `headCode` to be a primitive type in the JSON string but got " + data['headCode']);
        }
        // ensure the json data is a string
        if (data['theme'] && !(typeof data['theme'] === 'string' || data['theme'] instanceof String)) {
            throw new Error("Expected the field `theme` to be a primitive type in the JSON string but got " + data['theme']);
        }
        // ensure the json data is a string
        if (data['themeName'] && !(typeof data['themeName'] === 'string' || data['themeName'] instanceof String)) {
            throw new Error("Expected the field `themeName` to be a primitive type in the JSON string but got " + data['themeName']);
        }
        // ensure the json data is a string
        if (data['footer'] && !(typeof data['footer'] === 'string' || data['footer'] instanceof String)) {
            throw new Error("Expected the field `footer` to be a primitive type in the JSON string but got " + data['footer']);
        }
        // ensure the json data is a string
        if (data['friendlyName'] && !(typeof data['friendlyName'] === 'string' || data['friendlyName'] instanceof String)) {
            throw new Error("Expected the field `friendlyName` to be a primitive type in the JSON string but got " + data['friendlyName']);
        }
        // ensure the json data is a string
        if (data['header'] && !(typeof data['header'] === 'string' || data['header'] instanceof String)) {
            throw new Error("Expected the field `header` to be a primitive type in the JSON string but got " + data['header']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['title'] && !(typeof data['title'] === 'string' || data['title'] instanceof String)) {
            throw new Error("Expected the field `title` to be a primitive type in the JSON string but got " + data['title']);
        }
        // validate the optional field `layout`
        if (data['layout']) { // data not null
          TemplateLayoutView.validateJSON(data['layout']);
        }

        return true;
    }


}

TemplateForm.RequiredProperties = ["title"];

/**
 * @member {String} siteId
 */
TemplateForm.prototype['siteId'] = undefined;

/**
 * @member {String} identifier
 */
TemplateForm.prototype['identifier'] = undefined;

/**
 * @member {String} inode
 */
TemplateForm.prototype['inode'] = undefined;

/**
 * @member {String} body
 */
TemplateForm.prototype['body'] = undefined;

/**
 * @member {String} selectedimage
 */
TemplateForm.prototype['selectedimage'] = undefined;

/**
 * @member {String} image
 */
TemplateForm.prototype['image'] = undefined;

/**
 * @member {Boolean} drawed
 */
TemplateForm.prototype['drawed'] = undefined;

/**
 * @member {Boolean} showOnMenu
 */
TemplateForm.prototype['showOnMenu'] = undefined;

/**
 * @member {String} drawedBody
 */
TemplateForm.prototype['drawedBody'] = undefined;

/**
 * @member {Number} countAddContainer
 */
TemplateForm.prototype['countAddContainer'] = undefined;

/**
 * @member {Number} countContainers
 */
TemplateForm.prototype['countContainers'] = undefined;

/**
 * @member {String} headCode
 */
TemplateForm.prototype['headCode'] = undefined;

/**
 * @member {String} theme
 */
TemplateForm.prototype['theme'] = undefined;

/**
 * @member {String} themeName
 */
TemplateForm.prototype['themeName'] = undefined;

/**
 * @member {String} footer
 */
TemplateForm.prototype['footer'] = undefined;

/**
 * @member {String} friendlyName
 */
TemplateForm.prototype['friendlyName'] = undefined;

/**
 * @member {String} header
 */
TemplateForm.prototype['header'] = undefined;

/**
 * @member {String} name
 */
TemplateForm.prototype['name'] = undefined;

/**
 * @member {String} title
 */
TemplateForm.prototype['title'] = undefined;

/**
 * @member {Number} sortOrder
 */
TemplateForm.prototype['sortOrder'] = undefined;

/**
 * @member {Boolean} headerCheck
 */
TemplateForm.prototype['headerCheck'] = undefined;

/**
 * @member {Boolean} footerCheck
 */
TemplateForm.prototype['footerCheck'] = undefined;

/**
 * @member {module:model/TemplateLayoutView} layout
 */
TemplateForm.prototype['layout'] = undefined;






export default TemplateForm;
