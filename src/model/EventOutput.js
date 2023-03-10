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
import EventOutputType from './EventOutputType';

/**
 * The EventOutput model module.
 * @module model/EventOutput
 * @version 3
 */
class EventOutput {
    /**
     * Constructs a new <code>EventOutput</code>.
     * @alias module:model/EventOutput
     */
    constructor() { 
        
        EventOutput.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EventOutput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EventOutput} obj Optional instance to populate.
     * @return {module:model/EventOutput} The populated <code>EventOutput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EventOutput();

            if (data.hasOwnProperty('type')) {
                obj['type'] = EventOutputType.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('closed')) {
                obj['closed'] = ApiClient.convertToType(data['closed'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EventOutput</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EventOutput</code>.
     */
    static validateJSON(data) {
        // validate the optional field `type`
        if (data['type']) { // data not null
          EventOutputType.validateJSON(data['type']);
        }

        return true;
    }


}



/**
 * @member {module:model/EventOutputType} type
 */
EventOutput.prototype['type'] = undefined;

/**
 * @member {Boolean} closed
 */
EventOutput.prototype['closed'] = undefined;






export default EventOutput;

