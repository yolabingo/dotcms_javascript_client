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
import ContentType from './ContentType';
import DotAssetContentTypeAllOf from './DotAssetContentTypeAllOf';

/**
 * The VanityUrlContentType model module.
 * @module model/VanityUrlContentType
 * @version 3
 */
class VanityUrlContentType {
    /**
     * Constructs a new <code>VanityUrlContentType</code>.
     * @alias module:model/VanityUrlContentType
     * @extends module:model/ContentType
     * @implements module:model/ContentType
     * @implements module:model/DotAssetContentTypeAllOf
     * @param clazz {String} 
     */
    constructor(clazz) { 
        ContentType.initialize(this, clazz);DotAssetContentTypeAllOf.initialize(this);
        VanityUrlContentType.initialize(this, clazz);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, clazz) { 
    }

    /**
     * Constructs a <code>VanityUrlContentType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VanityUrlContentType} obj Optional instance to populate.
     * @return {module:model/VanityUrlContentType} The populated <code>VanityUrlContentType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VanityUrlContentType();
            ContentType.constructFromObject(data, obj);
            ContentType.constructFromObject(data, obj);
            DotAssetContentTypeAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('defaultType')) {
                obj['defaultType'] = ApiClient.convertToType(data['defaultType'], 'Boolean');
            }
            if (data.hasOwnProperty('detailPage')) {
                obj['detailPage'] = ApiClient.convertToType(data['detailPage'], 'String');
            }
            if (data.hasOwnProperty('fixed')) {
                obj['fixed'] = ApiClient.convertToType(data['fixed'], 'Boolean');
            }
            if (data.hasOwnProperty('iDate')) {
                obj['iDate'] = ApiClient.convertToType(data['iDate'], 'Date');
            }
            if (data.hasOwnProperty('system')) {
                obj['system'] = ApiClient.convertToType(data['system'], 'Boolean');
            }
            if (data.hasOwnProperty('versionable')) {
                obj['versionable'] = ApiClient.convertToType(data['versionable'], 'Boolean');
            }
            if (data.hasOwnProperty('multilingualable')) {
                obj['multilingualable'] = ApiClient.convertToType(data['multilingualable'], 'Boolean');
            }
            if (data.hasOwnProperty('variable')) {
                obj['variable'] = ApiClient.convertToType(data['variable'], 'String');
            }
            if (data.hasOwnProperty('urlMapPattern')) {
                obj['urlMapPattern'] = ApiClient.convertToType(data['urlMapPattern'], 'String');
            }
            if (data.hasOwnProperty('publishDateVar')) {
                obj['publishDateVar'] = ApiClient.convertToType(data['publishDateVar'], 'String');
            }
            if (data.hasOwnProperty('expireDateVar')) {
                obj['expireDateVar'] = ApiClient.convertToType(data['expireDateVar'], 'String');
            }
            if (data.hasOwnProperty('modDate')) {
                obj['modDate'] = ApiClient.convertToType(data['modDate'], 'Date');
            }
            if (data.hasOwnProperty('host')) {
                obj['host'] = ApiClient.convertToType(data['host'], 'String');
            }
            if (data.hasOwnProperty('siteName')) {
                obj['siteName'] = ApiClient.convertToType(data['siteName'], 'String');
            }
            if (data.hasOwnProperty('icon')) {
                obj['icon'] = ApiClient.convertToType(data['icon'], 'String');
            }
            if (data.hasOwnProperty('sortOrder')) {
                obj['sortOrder'] = ApiClient.convertToType(data['sortOrder'], 'Number');
            }
            if (data.hasOwnProperty('folder')) {
                obj['folder'] = ApiClient.convertToType(data['folder'], 'String');
            }
            if (data.hasOwnProperty('folderPath')) {
                obj['folderPath'] = ApiClient.convertToType(data['folderPath'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>VanityUrlContentType</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>VanityUrlContentType</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of VanityUrlContentType.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is a string
        if (data['detailPage'] && !(typeof data['detailPage'] === 'string' || data['detailPage'] instanceof String)) {
            throw new Error("Expected the field `detailPage` to be a primitive type in the JSON string but got " + data['detailPage']);
        }
        // ensure the json data is a string
        if (data['variable'] && !(typeof data['variable'] === 'string' || data['variable'] instanceof String)) {
            throw new Error("Expected the field `variable` to be a primitive type in the JSON string but got " + data['variable']);
        }
        // ensure the json data is a string
        if (data['urlMapPattern'] && !(typeof data['urlMapPattern'] === 'string' || data['urlMapPattern'] instanceof String)) {
            throw new Error("Expected the field `urlMapPattern` to be a primitive type in the JSON string but got " + data['urlMapPattern']);
        }
        // ensure the json data is a string
        if (data['publishDateVar'] && !(typeof data['publishDateVar'] === 'string' || data['publishDateVar'] instanceof String)) {
            throw new Error("Expected the field `publishDateVar` to be a primitive type in the JSON string but got " + data['publishDateVar']);
        }
        // ensure the json data is a string
        if (data['expireDateVar'] && !(typeof data['expireDateVar'] === 'string' || data['expireDateVar'] instanceof String)) {
            throw new Error("Expected the field `expireDateVar` to be a primitive type in the JSON string but got " + data['expireDateVar']);
        }
        // ensure the json data is a string
        if (data['host'] && !(typeof data['host'] === 'string' || data['host'] instanceof String)) {
            throw new Error("Expected the field `host` to be a primitive type in the JSON string but got " + data['host']);
        }
        // ensure the json data is a string
        if (data['siteName'] && !(typeof data['siteName'] === 'string' || data['siteName'] instanceof String)) {
            throw new Error("Expected the field `siteName` to be a primitive type in the JSON string but got " + data['siteName']);
        }
        // ensure the json data is a string
        if (data['icon'] && !(typeof data['icon'] === 'string' || data['icon'] instanceof String)) {
            throw new Error("Expected the field `icon` to be a primitive type in the JSON string but got " + data['icon']);
        }
        // ensure the json data is a string
        if (data['folder'] && !(typeof data['folder'] === 'string' || data['folder'] instanceof String)) {
            throw new Error("Expected the field `folder` to be a primitive type in the JSON string but got " + data['folder']);
        }
        // ensure the json data is a string
        if (data['folderPath'] && !(typeof data['folderPath'] === 'string' || data['folderPath'] instanceof String)) {
            throw new Error("Expected the field `folderPath` to be a primitive type in the JSON string but got " + data['folderPath']);
        }

        return true;
    }


}

VanityUrlContentType.RequiredProperties = ["clazz"];

/**
 * @member {String} name
 */
VanityUrlContentType.prototype['name'] = undefined;

/**
 * @member {String} id
 */
VanityUrlContentType.prototype['id'] = undefined;

/**
 * @member {String} description
 */
VanityUrlContentType.prototype['description'] = undefined;

/**
 * @member {Boolean} defaultType
 */
VanityUrlContentType.prototype['defaultType'] = undefined;

/**
 * @member {String} detailPage
 */
VanityUrlContentType.prototype['detailPage'] = undefined;

/**
 * @member {Boolean} fixed
 */
VanityUrlContentType.prototype['fixed'] = undefined;

/**
 * @member {Date} iDate
 */
VanityUrlContentType.prototype['iDate'] = undefined;

/**
 * @member {Boolean} system
 */
VanityUrlContentType.prototype['system'] = undefined;

/**
 * @member {Boolean} versionable
 */
VanityUrlContentType.prototype['versionable'] = undefined;

/**
 * @member {Boolean} multilingualable
 */
VanityUrlContentType.prototype['multilingualable'] = undefined;

/**
 * @member {String} variable
 */
VanityUrlContentType.prototype['variable'] = undefined;

/**
 * @member {String} urlMapPattern
 */
VanityUrlContentType.prototype['urlMapPattern'] = undefined;

/**
 * @member {String} publishDateVar
 */
VanityUrlContentType.prototype['publishDateVar'] = undefined;

/**
 * @member {String} expireDateVar
 */
VanityUrlContentType.prototype['expireDateVar'] = undefined;

/**
 * @member {Date} modDate
 */
VanityUrlContentType.prototype['modDate'] = undefined;

/**
 * @member {String} host
 */
VanityUrlContentType.prototype['host'] = undefined;

/**
 * @member {String} siteName
 */
VanityUrlContentType.prototype['siteName'] = undefined;

/**
 * @member {String} icon
 */
VanityUrlContentType.prototype['icon'] = undefined;

/**
 * @member {Number} sortOrder
 */
VanityUrlContentType.prototype['sortOrder'] = undefined;

/**
 * @member {String} folder
 */
VanityUrlContentType.prototype['folder'] = undefined;

/**
 * @member {String} folderPath
 */
VanityUrlContentType.prototype['folderPath'] = undefined;


// Implement ContentType interface:
/**
 * @member {String} owner
 */
ContentType.prototype['owner'] = undefined;
/**
 * @member {String} clazz
 */
ContentType.prototype['clazz'] = undefined;
// Implement DotAssetContentTypeAllOf interface:
/**
 * @member {String} name
 */
DotAssetContentTypeAllOf.prototype['name'] = undefined;
/**
 * @member {String} id
 */
DotAssetContentTypeAllOf.prototype['id'] = undefined;
/**
 * @member {String} description
 */
DotAssetContentTypeAllOf.prototype['description'] = undefined;
/**
 * @member {Boolean} defaultType
 */
DotAssetContentTypeAllOf.prototype['defaultType'] = undefined;
/**
 * @member {String} detailPage
 */
DotAssetContentTypeAllOf.prototype['detailPage'] = undefined;
/**
 * @member {Boolean} fixed
 */
DotAssetContentTypeAllOf.prototype['fixed'] = undefined;
/**
 * @member {Date} iDate
 */
DotAssetContentTypeAllOf.prototype['iDate'] = undefined;
/**
 * @member {Boolean} system
 */
DotAssetContentTypeAllOf.prototype['system'] = undefined;
/**
 * @member {Boolean} versionable
 */
DotAssetContentTypeAllOf.prototype['versionable'] = undefined;
/**
 * @member {Boolean} multilingualable
 */
DotAssetContentTypeAllOf.prototype['multilingualable'] = undefined;
/**
 * @member {String} variable
 */
DotAssetContentTypeAllOf.prototype['variable'] = undefined;
/**
 * @member {String} urlMapPattern
 */
DotAssetContentTypeAllOf.prototype['urlMapPattern'] = undefined;
/**
 * @member {String} publishDateVar
 */
DotAssetContentTypeAllOf.prototype['publishDateVar'] = undefined;
/**
 * @member {String} expireDateVar
 */
DotAssetContentTypeAllOf.prototype['expireDateVar'] = undefined;
/**
 * @member {Date} modDate
 */
DotAssetContentTypeAllOf.prototype['modDate'] = undefined;
/**
 * @member {String} host
 */
DotAssetContentTypeAllOf.prototype['host'] = undefined;
/**
 * @member {String} siteName
 */
DotAssetContentTypeAllOf.prototype['siteName'] = undefined;
/**
 * @member {String} icon
 */
DotAssetContentTypeAllOf.prototype['icon'] = undefined;
/**
 * @member {Number} sortOrder
 */
DotAssetContentTypeAllOf.prototype['sortOrder'] = undefined;
/**
 * @member {String} folder
 */
DotAssetContentTypeAllOf.prototype['folder'] = undefined;
/**
 * @member {String} folderPath
 */
DotAssetContentTypeAllOf.prototype['folderPath'] = undefined;




export default VanityUrlContentType;
