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
import ContainerStructure from './ContainerStructure';

/**
 * The ContainerForm model module.
 * @module model/ContainerForm
 * @version 3
 */
class ContainerForm {
    /**
     * Constructs a new <code>ContainerForm</code>.
     * @alias module:model/ContainerForm
     */
    constructor() { 
        
        ContainerForm.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ContainerForm</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ContainerForm} obj Optional instance to populate.
     * @return {module:model/ContainerForm} The populated <code>ContainerForm</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ContainerForm();

            if (data.hasOwnProperty('identifier')) {
                obj['identifier'] = ApiClient.convertToType(data['identifier'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('friendlyName')) {
                obj['friendlyName'] = ApiClient.convertToType(data['friendlyName'], 'String');
            }
            if (data.hasOwnProperty('maxContentlets')) {
                obj['maxContentlets'] = ApiClient.convertToType(data['maxContentlets'], 'Number');
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('notes')) {
                obj['notes'] = ApiClient.convertToType(data['notes'], 'String');
            }
            if (data.hasOwnProperty('preLoop')) {
                obj['preLoop'] = ApiClient.convertToType(data['preLoop'], 'String');
            }
            if (data.hasOwnProperty('postLoop')) {
                obj['postLoop'] = ApiClient.convertToType(data['postLoop'], 'String');
            }
            if (data.hasOwnProperty('showOnMenu')) {
                obj['showOnMenu'] = ApiClient.convertToType(data['showOnMenu'], 'Boolean');
            }
            if (data.hasOwnProperty('sortOrder')) {
                obj['sortOrder'] = ApiClient.convertToType(data['sortOrder'], 'Number');
            }
            if (data.hasOwnProperty('sortContentletsBy')) {
                obj['sortContentletsBy'] = ApiClient.convertToType(data['sortContentletsBy'], 'String');
            }
            if (data.hasOwnProperty('structureInode')) {
                obj['structureInode'] = ApiClient.convertToType(data['structureInode'], 'String');
            }
            if (data.hasOwnProperty('containerStructures')) {
                obj['containerStructures'] = ApiClient.convertToType(data['containerStructures'], [ContainerStructure]);
            }
            if (data.hasOwnProperty('owner')) {
                obj['owner'] = ApiClient.convertToType(data['owner'], 'String');
            }
            if (data.hasOwnProperty('hostId')) {
                obj['hostId'] = ApiClient.convertToType(data['hostId'], 'String');
            }
            if (data.hasOwnProperty('staticify')) {
                obj['staticify'] = ApiClient.convertToType(data['staticify'], 'Boolean');
            }
            if (data.hasOwnProperty('useDiv')) {
                obj['useDiv'] = ApiClient.convertToType(data['useDiv'], 'Boolean');
            }
            if (data.hasOwnProperty('dynamic')) {
                obj['dynamic'] = ApiClient.convertToType(data['dynamic'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ContainerForm</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ContainerForm</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['identifier'] && !(typeof data['identifier'] === 'string' || data['identifier'] instanceof String)) {
            throw new Error("Expected the field `identifier` to be a primitive type in the JSON string but got " + data['identifier']);
        }
        // ensure the json data is a string
        if (data['title'] && !(typeof data['title'] === 'string' || data['title'] instanceof String)) {
            throw new Error("Expected the field `title` to be a primitive type in the JSON string but got " + data['title']);
        }
        // ensure the json data is a string
        if (data['friendlyName'] && !(typeof data['friendlyName'] === 'string' || data['friendlyName'] instanceof String)) {
            throw new Error("Expected the field `friendlyName` to be a primitive type in the JSON string but got " + data['friendlyName']);
        }
        // ensure the json data is a string
        if (data['code'] && !(typeof data['code'] === 'string' || data['code'] instanceof String)) {
            throw new Error("Expected the field `code` to be a primitive type in the JSON string but got " + data['code']);
        }
        // ensure the json data is a string
        if (data['notes'] && !(typeof data['notes'] === 'string' || data['notes'] instanceof String)) {
            throw new Error("Expected the field `notes` to be a primitive type in the JSON string but got " + data['notes']);
        }
        // ensure the json data is a string
        if (data['preLoop'] && !(typeof data['preLoop'] === 'string' || data['preLoop'] instanceof String)) {
            throw new Error("Expected the field `preLoop` to be a primitive type in the JSON string but got " + data['preLoop']);
        }
        // ensure the json data is a string
        if (data['postLoop'] && !(typeof data['postLoop'] === 'string' || data['postLoop'] instanceof String)) {
            throw new Error("Expected the field `postLoop` to be a primitive type in the JSON string but got " + data['postLoop']);
        }
        // ensure the json data is a string
        if (data['sortContentletsBy'] && !(typeof data['sortContentletsBy'] === 'string' || data['sortContentletsBy'] instanceof String)) {
            throw new Error("Expected the field `sortContentletsBy` to be a primitive type in the JSON string but got " + data['sortContentletsBy']);
        }
        // ensure the json data is a string
        if (data['structureInode'] && !(typeof data['structureInode'] === 'string' || data['structureInode'] instanceof String)) {
            throw new Error("Expected the field `structureInode` to be a primitive type in the JSON string but got " + data['structureInode']);
        }
        if (data['containerStructures']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['containerStructures'])) {
                throw new Error("Expected the field `containerStructures` to be an array in the JSON data but got " + data['containerStructures']);
            }
            // validate the optional field `containerStructures` (array)
            for (const item of data['containerStructures']) {
                ContainerStructure.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['owner'] && !(typeof data['owner'] === 'string' || data['owner'] instanceof String)) {
            throw new Error("Expected the field `owner` to be a primitive type in the JSON string but got " + data['owner']);
        }
        // ensure the json data is a string
        if (data['hostId'] && !(typeof data['hostId'] === 'string' || data['hostId'] instanceof String)) {
            throw new Error("Expected the field `hostId` to be a primitive type in the JSON string but got " + data['hostId']);
        }

        return true;
    }


}



/**
 * @member {String} identifier
 */
ContainerForm.prototype['identifier'] = undefined;

/**
 * @member {String} title
 */
ContainerForm.prototype['title'] = undefined;

/**
 * @member {String} friendlyName
 */
ContainerForm.prototype['friendlyName'] = undefined;

/**
 * @member {Number} maxContentlets
 */
ContainerForm.prototype['maxContentlets'] = undefined;

/**
 * @member {String} code
 */
ContainerForm.prototype['code'] = undefined;

/**
 * @member {String} notes
 */
ContainerForm.prototype['notes'] = undefined;

/**
 * @member {String} preLoop
 */
ContainerForm.prototype['preLoop'] = undefined;

/**
 * @member {String} postLoop
 */
ContainerForm.prototype['postLoop'] = undefined;

/**
 * @member {Boolean} showOnMenu
 */
ContainerForm.prototype['showOnMenu'] = undefined;

/**
 * @member {Number} sortOrder
 */
ContainerForm.prototype['sortOrder'] = undefined;

/**
 * @member {String} sortContentletsBy
 */
ContainerForm.prototype['sortContentletsBy'] = undefined;

/**
 * @member {String} structureInode
 */
ContainerForm.prototype['structureInode'] = undefined;

/**
 * @member {Array.<module:model/ContainerStructure>} containerStructures
 */
ContainerForm.prototype['containerStructures'] = undefined;

/**
 * @member {String} owner
 */
ContainerForm.prototype['owner'] = undefined;

/**
 * @member {String} hostId
 */
ContainerForm.prototype['hostId'] = undefined;

/**
 * @member {Boolean} staticify
 */
ContainerForm.prototype['staticify'] = undefined;

/**
 * @member {Boolean} useDiv
 */
ContainerForm.prototype['useDiv'] = undefined;

/**
 * @member {Boolean} dynamic
 */
ContainerForm.prototype['dynamic'] = undefined;






export default ContainerForm;
