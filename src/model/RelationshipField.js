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
import RelationshipFieldAllOf from './RelationshipFieldAllOf';

/**
 * The RelationshipField model module.
 * @module model/RelationshipField
 * @version 3
 */
class RelationshipField {
    /**
     * Constructs a new <code>RelationshipField</code>.
     * @alias module:model/RelationshipField
     * @extends module:model/Field
     * @implements module:model/Field
     * @implements module:model/RelationshipFieldAllOf
     * @param clazz {String} 
     */
    constructor(clazz) { 
        Field.initialize(this, clazz);RelationshipFieldAllOf.initialize(this);
        RelationshipField.initialize(this, clazz);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, clazz) { 
    }

    /**
     * Constructs a <code>RelationshipField</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RelationshipField} obj Optional instance to populate.
     * @return {module:model/RelationshipField} The populated <code>RelationshipField</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RelationshipField();
            Field.constructFromObject(data, obj);
            Field.constructFromObject(data, obj);
            RelationshipFieldAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('searchable')) {
                obj['searchable'] = ApiClient.convertToType(data['searchable'], 'Boolean');
            }
            if (data.hasOwnProperty('unique')) {
                obj['unique'] = ApiClient.convertToType(data['unique'], 'Boolean');
            }
            if (data.hasOwnProperty('listed')) {
                obj['listed'] = ApiClient.convertToType(data['listed'], 'Boolean');
            }
            if (data.hasOwnProperty('readOnly')) {
                obj['readOnly'] = ApiClient.convertToType(data['readOnly'], 'Boolean');
            }
            if (data.hasOwnProperty('forceIncludeInApi')) {
                obj['forceIncludeInApi'] = ApiClient.convertToType(data['forceIncludeInApi'], 'Boolean');
            }
            if (data.hasOwnProperty('owner')) {
                obj['owner'] = ApiClient.convertToType(data['owner'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('modDate')) {
                obj['modDate'] = ApiClient.convertToType(data['modDate'], 'Date');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('relationType')) {
                obj['relationType'] = ApiClient.convertToType(data['relationType'], 'String');
            }
            if (data.hasOwnProperty('required')) {
                obj['required'] = ApiClient.convertToType(data['required'], 'Boolean');
            }
            if (data.hasOwnProperty('variable')) {
                obj['variable'] = ApiClient.convertToType(data['variable'], 'String');
            }
            if (data.hasOwnProperty('sortOrder')) {
                obj['sortOrder'] = ApiClient.convertToType(data['sortOrder'], 'Number');
            }
            if (data.hasOwnProperty('values')) {
                obj['values'] = ApiClient.convertToType(data['values'], 'String');
            }
            if (data.hasOwnProperty('regexCheck')) {
                obj['regexCheck'] = ApiClient.convertToType(data['regexCheck'], 'String');
            }
            if (data.hasOwnProperty('hint')) {
                obj['hint'] = ApiClient.convertToType(data['hint'], 'String');
            }
            if (data.hasOwnProperty('defaultValue')) {
                obj['defaultValue'] = ApiClient.convertToType(data['defaultValue'], 'String');
            }
            if (data.hasOwnProperty('fixed')) {
                obj['fixed'] = ApiClient.convertToType(data['fixed'], 'Boolean');
            }
            if (data.hasOwnProperty('contentTypeId')) {
                obj['contentTypeId'] = ApiClient.convertToType(data['contentTypeId'], 'String');
            }
            if (data.hasOwnProperty('dbColumn')) {
                obj['dbColumn'] = ApiClient.convertToType(data['dbColumn'], 'String');
            }
            if (data.hasOwnProperty('iDate')) {
                obj['iDate'] = ApiClient.convertToType(data['iDate'], 'Date');
            }
            if (data.hasOwnProperty('indexed')) {
                obj['indexed'] = ApiClient.convertToType(data['indexed'], 'Boolean');
            }
            if (data.hasOwnProperty('dataType')) {
                obj['dataType'] = ApiClient.convertToType(data['dataType'], 'String');
            }
            if (data.hasOwnProperty('skipRelationshipCreation')) {
                obj['skipRelationshipCreation'] = ApiClient.convertToType(data['skipRelationshipCreation'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RelationshipField</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RelationshipField</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of RelationshipField.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['owner'] && !(typeof data['owner'] === 'string' || data['owner'] instanceof String)) {
            throw new Error("Expected the field `owner` to be a primitive type in the JSON string but got " + data['owner']);
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['relationType'] && !(typeof data['relationType'] === 'string' || data['relationType'] instanceof String)) {
            throw new Error("Expected the field `relationType` to be a primitive type in the JSON string but got " + data['relationType']);
        }
        // ensure the json data is a string
        if (data['variable'] && !(typeof data['variable'] === 'string' || data['variable'] instanceof String)) {
            throw new Error("Expected the field `variable` to be a primitive type in the JSON string but got " + data['variable']);
        }
        // ensure the json data is a string
        if (data['values'] && !(typeof data['values'] === 'string' || data['values'] instanceof String)) {
            throw new Error("Expected the field `values` to be a primitive type in the JSON string but got " + data['values']);
        }
        // ensure the json data is a string
        if (data['regexCheck'] && !(typeof data['regexCheck'] === 'string' || data['regexCheck'] instanceof String)) {
            throw new Error("Expected the field `regexCheck` to be a primitive type in the JSON string but got " + data['regexCheck']);
        }
        // ensure the json data is a string
        if (data['hint'] && !(typeof data['hint'] === 'string' || data['hint'] instanceof String)) {
            throw new Error("Expected the field `hint` to be a primitive type in the JSON string but got " + data['hint']);
        }
        // ensure the json data is a string
        if (data['defaultValue'] && !(typeof data['defaultValue'] === 'string' || data['defaultValue'] instanceof String)) {
            throw new Error("Expected the field `defaultValue` to be a primitive type in the JSON string but got " + data['defaultValue']);
        }
        // ensure the json data is a string
        if (data['contentTypeId'] && !(typeof data['contentTypeId'] === 'string' || data['contentTypeId'] instanceof String)) {
            throw new Error("Expected the field `contentTypeId` to be a primitive type in the JSON string but got " + data['contentTypeId']);
        }
        // ensure the json data is a string
        if (data['dbColumn'] && !(typeof data['dbColumn'] === 'string' || data['dbColumn'] instanceof String)) {
            throw new Error("Expected the field `dbColumn` to be a primitive type in the JSON string but got " + data['dbColumn']);
        }
        // ensure the json data is a string
        if (data['dataType'] && !(typeof data['dataType'] === 'string' || data['dataType'] instanceof String)) {
            throw new Error("Expected the field `dataType` to be a primitive type in the JSON string but got " + data['dataType']);
        }

        return true;
    }


}

RelationshipField.RequiredProperties = ["clazz"];

/**
 * @member {Boolean} searchable
 */
RelationshipField.prototype['searchable'] = undefined;

/**
 * @member {Boolean} unique
 */
RelationshipField.prototype['unique'] = undefined;

/**
 * @member {Boolean} listed
 */
RelationshipField.prototype['listed'] = undefined;

/**
 * @member {Boolean} readOnly
 */
RelationshipField.prototype['readOnly'] = undefined;

/**
 * @member {Boolean} forceIncludeInApi
 */
RelationshipField.prototype['forceIncludeInApi'] = undefined;

/**
 * @member {String} owner
 */
RelationshipField.prototype['owner'] = undefined;

/**
 * @member {String} id
 */
RelationshipField.prototype['id'] = undefined;

/**
 * @member {Date} modDate
 */
RelationshipField.prototype['modDate'] = undefined;

/**
 * @member {String} name
 */
RelationshipField.prototype['name'] = undefined;

/**
 * @member {String} relationType
 */
RelationshipField.prototype['relationType'] = undefined;

/**
 * @member {Boolean} required
 */
RelationshipField.prototype['required'] = undefined;

/**
 * @member {String} variable
 */
RelationshipField.prototype['variable'] = undefined;

/**
 * @member {Number} sortOrder
 */
RelationshipField.prototype['sortOrder'] = undefined;

/**
 * @member {String} values
 */
RelationshipField.prototype['values'] = undefined;

/**
 * @member {String} regexCheck
 */
RelationshipField.prototype['regexCheck'] = undefined;

/**
 * @member {String} hint
 */
RelationshipField.prototype['hint'] = undefined;

/**
 * @member {String} defaultValue
 */
RelationshipField.prototype['defaultValue'] = undefined;

/**
 * @member {Boolean} fixed
 */
RelationshipField.prototype['fixed'] = undefined;

/**
 * @member {String} contentTypeId
 */
RelationshipField.prototype['contentTypeId'] = undefined;

/**
 * @member {String} dbColumn
 */
RelationshipField.prototype['dbColumn'] = undefined;

/**
 * @member {Date} iDate
 */
RelationshipField.prototype['iDate'] = undefined;

/**
 * @member {Boolean} indexed
 */
RelationshipField.prototype['indexed'] = undefined;

/**
 * @member {module:model/RelationshipField.DataTypeEnum} dataType
 */
RelationshipField.prototype['dataType'] = undefined;

/**
 * @member {Boolean} skipRelationshipCreation
 */
RelationshipField.prototype['skipRelationshipCreation'] = undefined;


// Implement Field interface:
/**
 * @member {Array.<module:model/Field.FieldContentTypePropertiesEnum>} fieldContentTypeProperties
 */
Field.prototype['fieldContentTypeProperties'] = undefined;
/**
 * @member {String} clazz
 */
Field.prototype['clazz'] = undefined;
// Implement RelationshipFieldAllOf interface:
/**
 * @member {Boolean} searchable
 */
RelationshipFieldAllOf.prototype['searchable'] = undefined;
/**
 * @member {Boolean} unique
 */
RelationshipFieldAllOf.prototype['unique'] = undefined;
/**
 * @member {Boolean} listed
 */
RelationshipFieldAllOf.prototype['listed'] = undefined;
/**
 * @member {Boolean} readOnly
 */
RelationshipFieldAllOf.prototype['readOnly'] = undefined;
/**
 * @member {Boolean} forceIncludeInApi
 */
RelationshipFieldAllOf.prototype['forceIncludeInApi'] = undefined;
/**
 * @member {String} owner
 */
RelationshipFieldAllOf.prototype['owner'] = undefined;
/**
 * @member {String} id
 */
RelationshipFieldAllOf.prototype['id'] = undefined;
/**
 * @member {Date} modDate
 */
RelationshipFieldAllOf.prototype['modDate'] = undefined;
/**
 * @member {String} name
 */
RelationshipFieldAllOf.prototype['name'] = undefined;
/**
 * @member {String} relationType
 */
RelationshipFieldAllOf.prototype['relationType'] = undefined;
/**
 * @member {Boolean} required
 */
RelationshipFieldAllOf.prototype['required'] = undefined;
/**
 * @member {String} variable
 */
RelationshipFieldAllOf.prototype['variable'] = undefined;
/**
 * @member {Number} sortOrder
 */
RelationshipFieldAllOf.prototype['sortOrder'] = undefined;
/**
 * @member {String} values
 */
RelationshipFieldAllOf.prototype['values'] = undefined;
/**
 * @member {String} regexCheck
 */
RelationshipFieldAllOf.prototype['regexCheck'] = undefined;
/**
 * @member {String} hint
 */
RelationshipFieldAllOf.prototype['hint'] = undefined;
/**
 * @member {String} defaultValue
 */
RelationshipFieldAllOf.prototype['defaultValue'] = undefined;
/**
 * @member {Boolean} fixed
 */
RelationshipFieldAllOf.prototype['fixed'] = undefined;
/**
 * @member {String} contentTypeId
 */
RelationshipFieldAllOf.prototype['contentTypeId'] = undefined;
/**
 * @member {String} dbColumn
 */
RelationshipFieldAllOf.prototype['dbColumn'] = undefined;
/**
 * @member {Date} iDate
 */
RelationshipFieldAllOf.prototype['iDate'] = undefined;
/**
 * @member {Boolean} indexed
 */
RelationshipFieldAllOf.prototype['indexed'] = undefined;
/**
 * @member {module:model/RelationshipFieldAllOf.DataTypeEnum} dataType
 */
RelationshipFieldAllOf.prototype['dataType'] = undefined;
/**
 * @member {Boolean} skipRelationshipCreation
 */
RelationshipFieldAllOf.prototype['skipRelationshipCreation'] = undefined;



/**
 * Allowed values for the <code>dataType</code> property.
 * @enum {String}
 * @readonly
 */
RelationshipField['DataTypeEnum'] = {

    /**
     * value: "none"
     * @const
     */
    "none": "none",

    /**
     * value: "bool"
     * @const
     */
    "bool": "bool",

    /**
     * value: "date"
     * @const
     */
    "date": "date",

    /**
     * value: "float"
     * @const
     */
    "float": "float",

    /**
     * value: "integer"
     * @const
     */
    "integer": "integer",

    /**
     * value: "text"
     * @const
     */
    "text": "text",

    /**
     * value: "text_area"
     * @const
     */
    "text_area": "text_area",

    /**
     * value: "system_field"
     * @const
     */
    "system_field": "system_field"
};



export default RelationshipField;
