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
import BinaryFieldAllOf from './BinaryFieldAllOf';
import Field from './Field';

/**
 * The SelectField model module.
 * @module model/SelectField
 * @version 3
 */
class SelectField {
    /**
     * Constructs a new <code>SelectField</code>.
     * @alias module:model/SelectField
     * @extends module:model/Field
     * @implements module:model/Field
     * @implements module:model/BinaryFieldAllOf
     * @param clazz {String} 
     */
    constructor(clazz) { 
        Field.initialize(this, clazz);BinaryFieldAllOf.initialize(this);
        SelectField.initialize(this, clazz);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, clazz) { 
    }

    /**
     * Constructs a <code>SelectField</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SelectField} obj Optional instance to populate.
     * @return {module:model/SelectField} The populated <code>SelectField</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SelectField();
            Field.constructFromObject(data, obj);
            Field.constructFromObject(data, obj);
            BinaryFieldAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('searchable')) {
                obj['searchable'] = ApiClient.convertToType(data['searchable'], 'Boolean');
            }
            if (data.hasOwnProperty('unique')) {
                obj['unique'] = ApiClient.convertToType(data['unique'], 'Boolean');
            }
            if (data.hasOwnProperty('indexed')) {
                obj['indexed'] = ApiClient.convertToType(data['indexed'], 'Boolean');
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
            if (data.hasOwnProperty('dataType')) {
                obj['dataType'] = ApiClient.convertToType(data['dataType'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SelectField</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SelectField</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of SelectField.RequiredProperties) {
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

SelectField.RequiredProperties = ["clazz"];

/**
 * @member {Boolean} searchable
 */
SelectField.prototype['searchable'] = undefined;

/**
 * @member {Boolean} unique
 */
SelectField.prototype['unique'] = undefined;

/**
 * @member {Boolean} indexed
 */
SelectField.prototype['indexed'] = undefined;

/**
 * @member {Boolean} listed
 */
SelectField.prototype['listed'] = undefined;

/**
 * @member {Boolean} readOnly
 */
SelectField.prototype['readOnly'] = undefined;

/**
 * @member {Boolean} forceIncludeInApi
 */
SelectField.prototype['forceIncludeInApi'] = undefined;

/**
 * @member {String} owner
 */
SelectField.prototype['owner'] = undefined;

/**
 * @member {String} id
 */
SelectField.prototype['id'] = undefined;

/**
 * @member {Date} modDate
 */
SelectField.prototype['modDate'] = undefined;

/**
 * @member {String} name
 */
SelectField.prototype['name'] = undefined;

/**
 * @member {String} relationType
 */
SelectField.prototype['relationType'] = undefined;

/**
 * @member {Boolean} required
 */
SelectField.prototype['required'] = undefined;

/**
 * @member {String} variable
 */
SelectField.prototype['variable'] = undefined;

/**
 * @member {Number} sortOrder
 */
SelectField.prototype['sortOrder'] = undefined;

/**
 * @member {String} values
 */
SelectField.prototype['values'] = undefined;

/**
 * @member {String} regexCheck
 */
SelectField.prototype['regexCheck'] = undefined;

/**
 * @member {String} hint
 */
SelectField.prototype['hint'] = undefined;

/**
 * @member {String} defaultValue
 */
SelectField.prototype['defaultValue'] = undefined;

/**
 * @member {Boolean} fixed
 */
SelectField.prototype['fixed'] = undefined;

/**
 * @member {String} contentTypeId
 */
SelectField.prototype['contentTypeId'] = undefined;

/**
 * @member {String} dbColumn
 */
SelectField.prototype['dbColumn'] = undefined;

/**
 * @member {Date} iDate
 */
SelectField.prototype['iDate'] = undefined;

/**
 * @member {module:model/SelectField.DataTypeEnum} dataType
 */
SelectField.prototype['dataType'] = undefined;


// Implement Field interface:
/**
 * @member {Array.<module:model/Field.FieldContentTypePropertiesEnum>} fieldContentTypeProperties
 */
Field.prototype['fieldContentTypeProperties'] = undefined;
/**
 * @member {String} clazz
 */
Field.prototype['clazz'] = undefined;
// Implement BinaryFieldAllOf interface:
/**
 * @member {Boolean} searchable
 */
BinaryFieldAllOf.prototype['searchable'] = undefined;
/**
 * @member {Boolean} unique
 */
BinaryFieldAllOf.prototype['unique'] = undefined;
/**
 * @member {Boolean} indexed
 */
BinaryFieldAllOf.prototype['indexed'] = undefined;
/**
 * @member {Boolean} listed
 */
BinaryFieldAllOf.prototype['listed'] = undefined;
/**
 * @member {Boolean} readOnly
 */
BinaryFieldAllOf.prototype['readOnly'] = undefined;
/**
 * @member {Boolean} forceIncludeInApi
 */
BinaryFieldAllOf.prototype['forceIncludeInApi'] = undefined;
/**
 * @member {String} owner
 */
BinaryFieldAllOf.prototype['owner'] = undefined;
/**
 * @member {String} id
 */
BinaryFieldAllOf.prototype['id'] = undefined;
/**
 * @member {Date} modDate
 */
BinaryFieldAllOf.prototype['modDate'] = undefined;
/**
 * @member {String} name
 */
BinaryFieldAllOf.prototype['name'] = undefined;
/**
 * @member {String} relationType
 */
BinaryFieldAllOf.prototype['relationType'] = undefined;
/**
 * @member {Boolean} required
 */
BinaryFieldAllOf.prototype['required'] = undefined;
/**
 * @member {String} variable
 */
BinaryFieldAllOf.prototype['variable'] = undefined;
/**
 * @member {Number} sortOrder
 */
BinaryFieldAllOf.prototype['sortOrder'] = undefined;
/**
 * @member {String} values
 */
BinaryFieldAllOf.prototype['values'] = undefined;
/**
 * @member {String} regexCheck
 */
BinaryFieldAllOf.prototype['regexCheck'] = undefined;
/**
 * @member {String} hint
 */
BinaryFieldAllOf.prototype['hint'] = undefined;
/**
 * @member {String} defaultValue
 */
BinaryFieldAllOf.prototype['defaultValue'] = undefined;
/**
 * @member {Boolean} fixed
 */
BinaryFieldAllOf.prototype['fixed'] = undefined;
/**
 * @member {String} contentTypeId
 */
BinaryFieldAllOf.prototype['contentTypeId'] = undefined;
/**
 * @member {String} dbColumn
 */
BinaryFieldAllOf.prototype['dbColumn'] = undefined;
/**
 * @member {Date} iDate
 */
BinaryFieldAllOf.prototype['iDate'] = undefined;
/**
 * @member {module:model/BinaryFieldAllOf.DataTypeEnum} dataType
 */
BinaryFieldAllOf.prototype['dataType'] = undefined;



/**
 * Allowed values for the <code>dataType</code> property.
 * @enum {String}
 * @readonly
 */
SelectField['DataTypeEnum'] = {

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



export default SelectField;

