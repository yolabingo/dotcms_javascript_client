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
import Field from './Field';
import UserAPI from './UserAPI';

/**
 * The Persona model module.
 * @module model/Persona
 * @version 3
 */
class Persona {
    /**
     * Constructs a new <code>Persona</code>.
     * @alias module:model/Persona
     */
    constructor() { 
        
        Persona.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Persona</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Persona} obj Optional instance to populate.
     * @return {module:model/Persona} The populated <code>Persona</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Persona();

            if (data.hasOwnProperty('map')) {
                obj['map'] = ApiClient.convertToType(data['map'], {'String': Object});
            }
            if (data.hasOwnProperty('lowIndexPriority')) {
                obj['lowIndexPriority'] = ApiClient.convertToType(data['lowIndexPriority'], 'Boolean');
            }
            if (data.hasOwnProperty('userAPI')) {
                obj['userAPI'] = UserAPI.constructFromObject(data['userAPI']);
            }
            if (data.hasOwnProperty('indexPolicyDependencies')) {
                obj['indexPolicyDependencies'] = ApiClient.convertToType(data['indexPolicyDependencies'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], 'String');
            }
            if (data.hasOwnProperty('keyTag')) {
                obj['keyTag'] = ApiClient.convertToType(data['keyTag'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('identifier')) {
                obj['identifier'] = ApiClient.convertToType(data['identifier'], 'String');
            }
            if (data.hasOwnProperty('inode')) {
                obj['inode'] = ApiClient.convertToType(data['inode'], 'String');
            }
            if (data.hasOwnProperty('live')) {
                obj['live'] = ApiClient.convertToType(data['live'], 'Boolean');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('working')) {
                obj['working'] = ApiClient.convertToType(data['working'], 'Boolean');
            }
            if (data.hasOwnProperty('archived')) {
                obj['archived'] = ApiClient.convertToType(data['archived'], 'Boolean');
            }
            if (data.hasOwnProperty('versionType')) {
                obj['versionType'] = ApiClient.convertToType(data['versionType'], 'String');
            }
            if (data.hasOwnProperty('modDate')) {
                obj['modDate'] = ApiClient.convertToType(data['modDate'], 'Date');
            }
            if (data.hasOwnProperty('versionId')) {
                obj['versionId'] = ApiClient.convertToType(data['versionId'], 'String');
            }
            if (data.hasOwnProperty('modUser')) {
                obj['modUser'] = ApiClient.convertToType(data['modUser'], 'String');
            }
            if (data.hasOwnProperty('locked')) {
                obj['locked'] = ApiClient.convertToType(data['locked'], 'Boolean');
            }
            if (data.hasOwnProperty('owner')) {
                obj['owner'] = ApiClient.convertToType(data['owner'], 'String');
            }
            if (data.hasOwnProperty('permissionId')) {
                obj['permissionId'] = ApiClient.convertToType(data['permissionId'], 'String');
            }
            if (data.hasOwnProperty('permissionType')) {
                obj['permissionType'] = ApiClient.convertToType(data['permissionType'], 'String');
            }
            if (data.hasOwnProperty('host')) {
                obj['host'] = ApiClient.convertToType(data['host'], 'String');
            }
            if (data.hasOwnProperty('new')) {
                obj['new'] = ApiClient.convertToType(data['new'], 'Boolean');
            }
            if (data.hasOwnProperty('variantId')) {
                obj['variantId'] = ApiClient.convertToType(data['variantId'], 'String');
            }
            if (data.hasOwnProperty('languageId')) {
                obj['languageId'] = ApiClient.convertToType(data['languageId'], 'Number');
            }
            if (data.hasOwnProperty('folder')) {
                obj['folder'] = ApiClient.convertToType(data['folder'], 'String');
            }
            if (data.hasOwnProperty('fileAsset')) {
                obj['fileAsset'] = ApiClient.convertToType(data['fileAsset'], 'Boolean');
            }
            if (data.hasOwnProperty('structureInode')) {
                obj['structureInode'] = ApiClient.convertToType(data['structureInode'], 'String');
            }
            if (data.hasOwnProperty('systemHost')) {
                obj['systemHost'] = ApiClient.convertToType(data['systemHost'], 'Boolean');
            }
            if (data.hasOwnProperty('categoryId')) {
                obj['categoryId'] = ApiClient.convertToType(data['categoryId'], 'String');
            }
            if (data.hasOwnProperty('contentTypeId')) {
                obj['contentTypeId'] = ApiClient.convertToType(data['contentTypeId'], 'String');
            }
            if (data.hasOwnProperty('sortOrder')) {
                obj['sortOrder'] = ApiClient.convertToType(data['sortOrder'], 'Number');
            }
            if (data.hasOwnProperty('titleImage')) {
                obj['titleImage'] = Field.constructFromObject(data['titleImage']);
            }
            if (data.hasOwnProperty('htmlpage')) {
                obj['htmlpage'] = ApiClient.convertToType(data['htmlpage'], 'Boolean');
            }
            if (data.hasOwnProperty('dotAsset')) {
                obj['dotAsset'] = ApiClient.convertToType(data['dotAsset'], 'Boolean');
            }
            if (data.hasOwnProperty('persona')) {
                obj['persona'] = ApiClient.convertToType(data['persona'], 'Boolean');
            }
            if (data.hasOwnProperty('form')) {
                obj['form'] = ApiClient.convertToType(data['form'], 'Boolean');
            }
            if (data.hasOwnProperty('vanityUrl')) {
                obj['vanityUrl'] = ApiClient.convertToType(data['vanityUrl'], 'Boolean');
            }
            if (data.hasOwnProperty('keyValue')) {
                obj['keyValue'] = ApiClient.convertToType(data['keyValue'], 'Boolean');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Persona</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Persona</code>.
     */
    static validateJSON(data) {
        // validate the optional field `userAPI`
        if (data['userAPI']) { // data not null
          UserAPI.validateJSON(data['userAPI']);
        }
        // ensure the json data is a string
        if (data['indexPolicyDependencies'] && !(typeof data['indexPolicyDependencies'] === 'string' || data['indexPolicyDependencies'] instanceof String)) {
            throw new Error("Expected the field `indexPolicyDependencies` to be a primitive type in the JSON string but got " + data['indexPolicyDependencies']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is a string
        if (data['tags'] && !(typeof data['tags'] === 'string' || data['tags'] instanceof String)) {
            throw new Error("Expected the field `tags` to be a primitive type in the JSON string but got " + data['tags']);
        }
        // ensure the json data is a string
        if (data['keyTag'] && !(typeof data['keyTag'] === 'string' || data['keyTag'] instanceof String)) {
            throw new Error("Expected the field `keyTag` to be a primitive type in the JSON string but got " + data['keyTag']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
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
        if (data['title'] && !(typeof data['title'] === 'string' || data['title'] instanceof String)) {
            throw new Error("Expected the field `title` to be a primitive type in the JSON string but got " + data['title']);
        }
        // ensure the json data is a string
        if (data['versionType'] && !(typeof data['versionType'] === 'string' || data['versionType'] instanceof String)) {
            throw new Error("Expected the field `versionType` to be a primitive type in the JSON string but got " + data['versionType']);
        }
        // ensure the json data is a string
        if (data['versionId'] && !(typeof data['versionId'] === 'string' || data['versionId'] instanceof String)) {
            throw new Error("Expected the field `versionId` to be a primitive type in the JSON string but got " + data['versionId']);
        }
        // ensure the json data is a string
        if (data['modUser'] && !(typeof data['modUser'] === 'string' || data['modUser'] instanceof String)) {
            throw new Error("Expected the field `modUser` to be a primitive type in the JSON string but got " + data['modUser']);
        }
        // ensure the json data is a string
        if (data['owner'] && !(typeof data['owner'] === 'string' || data['owner'] instanceof String)) {
            throw new Error("Expected the field `owner` to be a primitive type in the JSON string but got " + data['owner']);
        }
        // ensure the json data is a string
        if (data['permissionId'] && !(typeof data['permissionId'] === 'string' || data['permissionId'] instanceof String)) {
            throw new Error("Expected the field `permissionId` to be a primitive type in the JSON string but got " + data['permissionId']);
        }
        // ensure the json data is a string
        if (data['permissionType'] && !(typeof data['permissionType'] === 'string' || data['permissionType'] instanceof String)) {
            throw new Error("Expected the field `permissionType` to be a primitive type in the JSON string but got " + data['permissionType']);
        }
        // ensure the json data is a string
        if (data['host'] && !(typeof data['host'] === 'string' || data['host'] instanceof String)) {
            throw new Error("Expected the field `host` to be a primitive type in the JSON string but got " + data['host']);
        }
        // ensure the json data is a string
        if (data['variantId'] && !(typeof data['variantId'] === 'string' || data['variantId'] instanceof String)) {
            throw new Error("Expected the field `variantId` to be a primitive type in the JSON string but got " + data['variantId']);
        }
        // ensure the json data is a string
        if (data['folder'] && !(typeof data['folder'] === 'string' || data['folder'] instanceof String)) {
            throw new Error("Expected the field `folder` to be a primitive type in the JSON string but got " + data['folder']);
        }
        // ensure the json data is a string
        if (data['structureInode'] && !(typeof data['structureInode'] === 'string' || data['structureInode'] instanceof String)) {
            throw new Error("Expected the field `structureInode` to be a primitive type in the JSON string but got " + data['structureInode']);
        }
        // ensure the json data is a string
        if (data['categoryId'] && !(typeof data['categoryId'] === 'string' || data['categoryId'] instanceof String)) {
            throw new Error("Expected the field `categoryId` to be a primitive type in the JSON string but got " + data['categoryId']);
        }
        // ensure the json data is a string
        if (data['contentTypeId'] && !(typeof data['contentTypeId'] === 'string' || data['contentTypeId'] instanceof String)) {
            throw new Error("Expected the field `contentTypeId` to be a primitive type in the JSON string but got " + data['contentTypeId']);
        }
        // validate the optional field `titleImage`
        if (data['titleImage']) { // data not null
          Field.validateJSON(data['titleImage']);
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }

        return true;
    }


}



/**
 * @member {Object.<String, Object>} map
 */
Persona.prototype['map'] = undefined;

/**
 * @member {Boolean} lowIndexPriority
 */
Persona.prototype['lowIndexPriority'] = undefined;

/**
 * @member {module:model/UserAPI} userAPI
 */
Persona.prototype['userAPI'] = undefined;

/**
 * @member {module:model/Persona.IndexPolicyDependenciesEnum} indexPolicyDependencies
 */
Persona.prototype['indexPolicyDependencies'] = undefined;

/**
 * @member {String} description
 */
Persona.prototype['description'] = undefined;

/**
 * @member {String} tags
 */
Persona.prototype['tags'] = undefined;

/**
 * @member {String} keyTag
 */
Persona.prototype['keyTag'] = undefined;

/**
 * @member {String} name
 */
Persona.prototype['name'] = undefined;

/**
 * @member {String} identifier
 */
Persona.prototype['identifier'] = undefined;

/**
 * @member {String} inode
 */
Persona.prototype['inode'] = undefined;

/**
 * @member {Boolean} live
 */
Persona.prototype['live'] = undefined;

/**
 * @member {String} title
 */
Persona.prototype['title'] = undefined;

/**
 * @member {Boolean} working
 */
Persona.prototype['working'] = undefined;

/**
 * @member {Boolean} archived
 */
Persona.prototype['archived'] = undefined;

/**
 * @member {String} versionType
 */
Persona.prototype['versionType'] = undefined;

/**
 * @member {Date} modDate
 */
Persona.prototype['modDate'] = undefined;

/**
 * @member {String} versionId
 */
Persona.prototype['versionId'] = undefined;

/**
 * @member {String} modUser
 */
Persona.prototype['modUser'] = undefined;

/**
 * @member {Boolean} locked
 */
Persona.prototype['locked'] = undefined;

/**
 * @member {String} owner
 */
Persona.prototype['owner'] = undefined;

/**
 * @member {String} permissionId
 */
Persona.prototype['permissionId'] = undefined;

/**
 * @member {String} permissionType
 */
Persona.prototype['permissionType'] = undefined;

/**
 * @member {String} host
 */
Persona.prototype['host'] = undefined;

/**
 * @member {Boolean} new
 */
Persona.prototype['new'] = undefined;

/**
 * @member {String} variantId
 */
Persona.prototype['variantId'] = undefined;

/**
 * @member {Number} languageId
 */
Persona.prototype['languageId'] = undefined;

/**
 * @member {String} folder
 */
Persona.prototype['folder'] = undefined;

/**
 * @member {Boolean} fileAsset
 */
Persona.prototype['fileAsset'] = undefined;

/**
 * @member {String} structureInode
 */
Persona.prototype['structureInode'] = undefined;

/**
 * @member {Boolean} systemHost
 */
Persona.prototype['systemHost'] = undefined;

/**
 * @member {String} categoryId
 */
Persona.prototype['categoryId'] = undefined;

/**
 * @member {String} contentTypeId
 */
Persona.prototype['contentTypeId'] = undefined;

/**
 * @member {Number} sortOrder
 */
Persona.prototype['sortOrder'] = undefined;

/**
 * @member {module:model/Field} titleImage
 */
Persona.prototype['titleImage'] = undefined;

/**
 * @member {Boolean} htmlpage
 */
Persona.prototype['htmlpage'] = undefined;

/**
 * @member {Boolean} dotAsset
 */
Persona.prototype['dotAsset'] = undefined;

/**
 * @member {Boolean} persona
 */
Persona.prototype['persona'] = undefined;

/**
 * @member {Boolean} form
 */
Persona.prototype['form'] = undefined;

/**
 * @member {Boolean} vanityUrl
 */
Persona.prototype['vanityUrl'] = undefined;

/**
 * @member {Boolean} keyValue
 */
Persona.prototype['keyValue'] = undefined;

/**
 * @member {String} type
 */
Persona.prototype['type'] = undefined;





/**
 * Allowed values for the <code>indexPolicyDependencies</code> property.
 * @enum {String}
 * @readonly
 */
Persona['IndexPolicyDependenciesEnum'] = {

    /**
     * value: "DEFER"
     * @const
     */
    "DEFER": "DEFER",

    /**
     * value: "WAIT_FOR"
     * @const
     */
    "WAIT_FOR": "WAIT_FOR",

    /**
     * value: "FORCE"
     * @const
     */
    "FORCE": "FORCE"
};



export default Persona;
