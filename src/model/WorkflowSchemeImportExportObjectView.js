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
import SystemActionWorkflowActionMapping from './SystemActionWorkflowActionMapping';
import WorkflowAction from './WorkflowAction';
import WorkflowActionClass from './WorkflowActionClass';
import WorkflowActionClassParameter from './WorkflowActionClassParameter';
import WorkflowScheme from './WorkflowScheme';
import WorkflowStep from './WorkflowStep';

/**
 * The WorkflowSchemeImportExportObjectView model module.
 * @module model/WorkflowSchemeImportExportObjectView
 * @version 3
 */
class WorkflowSchemeImportExportObjectView {
    /**
     * Constructs a new <code>WorkflowSchemeImportExportObjectView</code>.
     * @alias module:model/WorkflowSchemeImportExportObjectView
     */
    constructor() { 
        
        WorkflowSchemeImportExportObjectView.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WorkflowSchemeImportExportObjectView</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WorkflowSchemeImportExportObjectView} obj Optional instance to populate.
     * @return {module:model/WorkflowSchemeImportExportObjectView} The populated <code>WorkflowSchemeImportExportObjectView</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WorkflowSchemeImportExportObjectView();

            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'String');
            }
            if (data.hasOwnProperty('schemes')) {
                obj['schemes'] = ApiClient.convertToType(data['schemes'], [WorkflowScheme]);
            }
            if (data.hasOwnProperty('steps')) {
                obj['steps'] = ApiClient.convertToType(data['steps'], [WorkflowStep]);
            }
            if (data.hasOwnProperty('actions')) {
                obj['actions'] = ApiClient.convertToType(data['actions'], [WorkflowAction]);
            }
            if (data.hasOwnProperty('actionSteps')) {
                obj['actionSteps'] = ApiClient.convertToType(data['actionSteps'], [{'String': 'String'}]);
            }
            if (data.hasOwnProperty('actionClasses')) {
                obj['actionClasses'] = ApiClient.convertToType(data['actionClasses'], [WorkflowActionClass]);
            }
            if (data.hasOwnProperty('actionClassParams')) {
                obj['actionClassParams'] = ApiClient.convertToType(data['actionClassParams'], [WorkflowActionClassParameter]);
            }
            if (data.hasOwnProperty('schemeSystemActionWorkflowActionMappings')) {
                obj['schemeSystemActionWorkflowActionMappings'] = ApiClient.convertToType(data['schemeSystemActionWorkflowActionMappings'], [SystemActionWorkflowActionMapping]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>WorkflowSchemeImportExportObjectView</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WorkflowSchemeImportExportObjectView</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['version'] && !(typeof data['version'] === 'string' || data['version'] instanceof String)) {
            throw new Error("Expected the field `version` to be a primitive type in the JSON string but got " + data['version']);
        }
        if (data['schemes']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['schemes'])) {
                throw new Error("Expected the field `schemes` to be an array in the JSON data but got " + data['schemes']);
            }
            // validate the optional field `schemes` (array)
            for (const item of data['schemes']) {
                WorkflowScheme.validateJSON(item);
            };
        }
        if (data['steps']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['steps'])) {
                throw new Error("Expected the field `steps` to be an array in the JSON data but got " + data['steps']);
            }
            // validate the optional field `steps` (array)
            for (const item of data['steps']) {
                WorkflowStep.validateJSON(item);
            };
        }
        if (data['actions']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['actions'])) {
                throw new Error("Expected the field `actions` to be an array in the JSON data but got " + data['actions']);
            }
            // validate the optional field `actions` (array)
            for (const item of data['actions']) {
                WorkflowAction.validateJSON(item);
            };
        }
        // ensure the json data is an array
        if (!Array.isArray(data['actionSteps'])) {
            throw new Error("Expected the field `actionSteps` to be an array in the JSON data but got " + data['actionSteps']);
        }
        if (data['actionClasses']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['actionClasses'])) {
                throw new Error("Expected the field `actionClasses` to be an array in the JSON data but got " + data['actionClasses']);
            }
            // validate the optional field `actionClasses` (array)
            for (const item of data['actionClasses']) {
                WorkflowActionClass.validateJSON(item);
            };
        }
        if (data['actionClassParams']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['actionClassParams'])) {
                throw new Error("Expected the field `actionClassParams` to be an array in the JSON data but got " + data['actionClassParams']);
            }
            // validate the optional field `actionClassParams` (array)
            for (const item of data['actionClassParams']) {
                WorkflowActionClassParameter.validateJSON(item);
            };
        }
        if (data['schemeSystemActionWorkflowActionMappings']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['schemeSystemActionWorkflowActionMappings'])) {
                throw new Error("Expected the field `schemeSystemActionWorkflowActionMappings` to be an array in the JSON data but got " + data['schemeSystemActionWorkflowActionMappings']);
            }
            // validate the optional field `schemeSystemActionWorkflowActionMappings` (array)
            for (const item of data['schemeSystemActionWorkflowActionMappings']) {
                SystemActionWorkflowActionMapping.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {String} version
 */
WorkflowSchemeImportExportObjectView.prototype['version'] = undefined;

/**
 * @member {Array.<module:model/WorkflowScheme>} schemes
 */
WorkflowSchemeImportExportObjectView.prototype['schemes'] = undefined;

/**
 * @member {Array.<module:model/WorkflowStep>} steps
 */
WorkflowSchemeImportExportObjectView.prototype['steps'] = undefined;

/**
 * @member {Array.<module:model/WorkflowAction>} actions
 */
WorkflowSchemeImportExportObjectView.prototype['actions'] = undefined;

/**
 * @member {Array.<Object.<String, String>>} actionSteps
 */
WorkflowSchemeImportExportObjectView.prototype['actionSteps'] = undefined;

/**
 * @member {Array.<module:model/WorkflowActionClass>} actionClasses
 */
WorkflowSchemeImportExportObjectView.prototype['actionClasses'] = undefined;

/**
 * @member {Array.<module:model/WorkflowActionClassParameter>} actionClassParams
 */
WorkflowSchemeImportExportObjectView.prototype['actionClassParams'] = undefined;

/**
 * @member {Array.<module:model/SystemActionWorkflowActionMapping>} schemeSystemActionWorkflowActionMappings
 */
WorkflowSchemeImportExportObjectView.prototype['schemeSystemActionWorkflowActionMappings'] = undefined;






export default WorkflowSchemeImportExportObjectView;
