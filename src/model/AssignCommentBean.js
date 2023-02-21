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
 * The AssignCommentBean model module.
 * @module model/AssignCommentBean
 * @version 3
 */
class AssignCommentBean {
    /**
     * Constructs a new <code>AssignCommentBean</code>.
     * @alias module:model/AssignCommentBean
     */
    constructor() { 
        
        AssignCommentBean.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AssignCommentBean</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AssignCommentBean} obj Optional instance to populate.
     * @return {module:model/AssignCommentBean} The populated <code>AssignCommentBean</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AssignCommentBean();

            if (data.hasOwnProperty('assign')) {
                obj['assign'] = ApiClient.convertToType(data['assign'], 'String');
            }
            if (data.hasOwnProperty('comment')) {
                obj['comment'] = ApiClient.convertToType(data['comment'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AssignCommentBean</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AssignCommentBean</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['assign'] && !(typeof data['assign'] === 'string' || data['assign'] instanceof String)) {
            throw new Error("Expected the field `assign` to be a primitive type in the JSON string but got " + data['assign']);
        }
        // ensure the json data is a string
        if (data['comment'] && !(typeof data['comment'] === 'string' || data['comment'] instanceof String)) {
            throw new Error("Expected the field `comment` to be a primitive type in the JSON string but got " + data['comment']);
        }

        return true;
    }


}



/**
 * @member {String} assign
 */
AssignCommentBean.prototype['assign'] = undefined;

/**
 * @member {String} comment
 */
AssignCommentBean.prototype['comment'] = undefined;






export default AssignCommentBean;

