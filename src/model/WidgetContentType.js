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
import FormContentTypeAllOf from './FormContentTypeAllOf';

/**
 * The WidgetContentType model module.
 * @module model/WidgetContentType
 * @version 3
 */
class WidgetContentType {
    /**
     * Constructs a new <code>WidgetContentType</code>.
     * @alias module:model/WidgetContentType
     * @extends module:model/ContentType
     * @implements module:model/ContentType
     * @implements module:model/FormContentTypeAllOf
     * @param clazz {String} 
     */
    constructor(clazz) { 
        ContentType.initialize(this, clazz);FormContentTypeAllOf.initialize(this);
        WidgetContentType.initialize(this, clazz);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, clazz) { 
    }

    /**
     * Constructs a <code>WidgetContentType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WidgetContentType} obj Optional instance to populate.
     * @return {module:model/WidgetContentType} The populated <code>WidgetContentType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WidgetContentType();
            ContentType.constructFromObject(data, obj);
            ContentType.constructFromObject(data, obj);
            FormContentTypeAllOf.constructFromObject(data, obj);

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
            if (data.hasOwnProperty('multilingualable')) {
                obj['multilingualable'] = ApiClient.convertToType(data['multilingualable'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>WidgetContentType</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WidgetContentType</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of WidgetContentType.RequiredProperties) {
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

WidgetContentType.RequiredProperties = ["clazz"];

/**
 * @member {String} name
 */
WidgetContentType.prototype['name'] = undefined;

/**
 * @member {String} id
 */
WidgetContentType.prototype['id'] = undefined;

/**
 * @member {String} description
 */
WidgetContentType.prototype['description'] = undefined;

/**
 * @member {Boolean} defaultType
 */
WidgetContentType.prototype['defaultType'] = undefined;

/**
 * @member {String} detailPage
 */
WidgetContentType.prototype['detailPage'] = undefined;

/**
 * @member {Boolean} fixed
 */
WidgetContentType.prototype['fixed'] = undefined;

/**
 * @member {Date} iDate
 */
WidgetContentType.prototype['iDate'] = undefined;

/**
 * @member {Boolean} system
 */
WidgetContentType.prototype['system'] = undefined;

/**
 * @member {Boolean} versionable
 */
WidgetContentType.prototype['versionable'] = undefined;

/**
 * @member {String} variable
 */
WidgetContentType.prototype['variable'] = undefined;

/**
 * @member {String} urlMapPattern
 */
WidgetContentType.prototype['urlMapPattern'] = undefined;

/**
 * @member {String} publishDateVar
 */
WidgetContentType.prototype['publishDateVar'] = undefined;

/**
 * @member {String} expireDateVar
 */
WidgetContentType.prototype['expireDateVar'] = undefined;

/**
 * @member {Date} modDate
 */
WidgetContentType.prototype['modDate'] = undefined;

/**
 * @member {String} host
 */
WidgetContentType.prototype['host'] = undefined;

/**
 * @member {String} siteName
 */
WidgetContentType.prototype['siteName'] = undefined;

/**
 * @member {String} icon
 */
WidgetContentType.prototype['icon'] = undefined;

/**
 * @member {Number} sortOrder
 */
WidgetContentType.prototype['sortOrder'] = undefined;

/**
 * @member {String} folder
 */
WidgetContentType.prototype['folder'] = undefined;

/**
 * @member {String} folderPath
 */
WidgetContentType.prototype['folderPath'] = undefined;

/**
 * @member {Boolean} multilingualable
 */
WidgetContentType.prototype['multilingualable'] = undefined;


// Implement ContentType interface:
/**
 * @member {String} owner
 */
ContentType.prototype['owner'] = undefined;
/**
 * @member {String} clazz
 */
ContentType.prototype['clazz'] = undefined;
// Implement FormContentTypeAllOf interface:
/**
 * @member {String} name
 */
FormContentTypeAllOf.prototype['name'] = undefined;
/**
 * @member {String} id
 */
FormContentTypeAllOf.prototype['id'] = undefined;
/**
 * @member {String} description
 */
FormContentTypeAllOf.prototype['description'] = undefined;
/**
 * @member {Boolean} defaultType
 */
FormContentTypeAllOf.prototype['defaultType'] = undefined;
/**
 * @member {String} detailPage
 */
FormContentTypeAllOf.prototype['detailPage'] = undefined;
/**
 * @member {Boolean} fixed
 */
FormContentTypeAllOf.prototype['fixed'] = undefined;
/**
 * @member {Date} iDate
 */
FormContentTypeAllOf.prototype['iDate'] = undefined;
/**
 * @member {Boolean} system
 */
FormContentTypeAllOf.prototype['system'] = undefined;
/**
 * @member {Boolean} versionable
 */
FormContentTypeAllOf.prototype['versionable'] = undefined;
/**
 * @member {String} variable
 */
FormContentTypeAllOf.prototype['variable'] = undefined;
/**
 * @member {String} urlMapPattern
 */
FormContentTypeAllOf.prototype['urlMapPattern'] = undefined;
/**
 * @member {String} publishDateVar
 */
FormContentTypeAllOf.prototype['publishDateVar'] = undefined;
/**
 * @member {String} expireDateVar
 */
FormContentTypeAllOf.prototype['expireDateVar'] = undefined;
/**
 * @member {Date} modDate
 */
FormContentTypeAllOf.prototype['modDate'] = undefined;
/**
 * @member {String} host
 */
FormContentTypeAllOf.prototype['host'] = undefined;
/**
 * @member {String} siteName
 */
FormContentTypeAllOf.prototype['siteName'] = undefined;
/**
 * @member {String} icon
 */
FormContentTypeAllOf.prototype['icon'] = undefined;
/**
 * @member {Number} sortOrder
 */
FormContentTypeAllOf.prototype['sortOrder'] = undefined;
/**
 * @member {String} folder
 */
FormContentTypeAllOf.prototype['folder'] = undefined;
/**
 * @member {String} folderPath
 */
FormContentTypeAllOf.prototype['folderPath'] = undefined;
/**
 * @member {Boolean} multilingualable
 */
FormContentTypeAllOf.prototype['multilingualable'] = undefined;




export default WidgetContentType;

