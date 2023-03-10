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


import ApiClient from "../ApiClient";
import AddVariantForm from '../model/AddVariantForm';
import ExcludedExperimentListForm from '../model/ExcludedExperimentListForm';
import ExperimentForm from '../model/ExperimentForm';
import ExperimentVariantForm from '../model/ExperimentVariantForm';
import ResponseEntityExperimentSelectedView from '../model/ResponseEntityExperimentSelectedView';
import ResponseEntityExperimentView from '../model/ResponseEntityExperimentView';
import ResponseEntitySingleExperimentView from '../model/ResponseEntitySingleExperimentView';
import ResponseEntityViewString from '../model/ResponseEntityViewString';

/**
* Experiment service.
* @module api/ExperimentApi
* @version 3
*/
export default class ExperimentApi {

    /**
    * Constructs a new ExperimentApi. 
    * @alias module:api/ExperimentApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the addVariant operation.
     * @callback module:api/ExperimentApi~addVariantCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResponseEntitySingleExperimentView} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} experimentId 
     * @param {Object} opts Optional parameters
     * @param {module:model/AddVariantForm} opts.addVariantForm 
     * @param {module:api/ExperimentApi~addVariantCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResponseEntitySingleExperimentView}
     */
    addVariant(experimentId, opts, callback) {
      opts = opts || {};
      let postBody = opts['addVariantForm'];
      // verify the required parameter 'experimentId' is set
      if (experimentId === undefined || experimentId === null) {
        throw new Error("Missing the required parameter 'experimentId' when calling addVariant");
      }

      let pathParams = {
        'experimentId': experimentId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json', 'application/javascript'];
      let returnType = ResponseEntitySingleExperimentView;
      return this.apiClient.callApi(
        '/v1/experiments/{experimentId}/variants', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the archive1 operation.
     * @callback module:api/ExperimentApi~archive1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/ResponseEntityExperimentView} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} experimentId 
     * @param {module:api/ExperimentApi~archive1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResponseEntityExperimentView}
     */
    archive1(experimentId, callback) {
      let postBody = null;
      // verify the required parameter 'experimentId' is set
      if (experimentId === undefined || experimentId === null) {
        throw new Error("Missing the required parameter 'experimentId' when calling archive1");
      }

      let pathParams = {
        'experimentId': experimentId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json', 'application/javascript'];
      let returnType = ResponseEntityExperimentView;
      return this.apiClient.callApi(
        '/v1/experiments/{experimentId}/_archive', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the create operation.
     * @callback module:api/ExperimentApi~createCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResponseEntitySingleExperimentView} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {module:model/ExperimentForm} opts.experimentForm 
     * @param {module:api/ExperimentApi~createCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResponseEntitySingleExperimentView}
     */
    create(opts, callback) {
      opts = opts || {};
      let postBody = opts['experimentForm'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json', 'application/javascript'];
      let returnType = ResponseEntitySingleExperimentView;
      return this.apiClient.callApi(
        '/v1/experiments', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the delete4 operation.
     * @callback module:api/ExperimentApi~delete4Callback
     * @param {String} error Error message, if any.
     * @param {module:model/ResponseEntityViewString} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} experimentId 
     * @param {module:api/ExperimentApi~delete4Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResponseEntityViewString}
     */
    delete4(experimentId, callback) {
      let postBody = null;
      // verify the required parameter 'experimentId' is set
      if (experimentId === undefined || experimentId === null) {
        throw new Error("Missing the required parameter 'experimentId' when calling delete4");
      }

      let pathParams = {
        'experimentId': experimentId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json', 'application/javascript'];
      let returnType = ResponseEntityViewString;
      return this.apiClient.callApi(
        '/v1/experiments/{experimentId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteGoal operation.
     * @callback module:api/ExperimentApi~deleteGoalCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResponseEntitySingleExperimentView} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} experimentId 
     * @param {module:api/ExperimentApi~deleteGoalCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResponseEntitySingleExperimentView}
     */
    deleteGoal(experimentId, callback) {
      let postBody = null;
      // verify the required parameter 'experimentId' is set
      if (experimentId === undefined || experimentId === null) {
        throw new Error("Missing the required parameter 'experimentId' when calling deleteGoal");
      }

      let pathParams = {
        'experimentId': experimentId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json', 'application/javascript'];
      let returnType = ResponseEntitySingleExperimentView;
      return this.apiClient.callApi(
        '/v1/experiments/{experimentId}/goals/primary', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteTargetingCondition operation.
     * @callback module:api/ExperimentApi~deleteTargetingConditionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResponseEntitySingleExperimentView} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} experimentId 
     * @param {String} id 
     * @param {module:api/ExperimentApi~deleteTargetingConditionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResponseEntitySingleExperimentView}
     */
    deleteTargetingCondition(experimentId, id, callback) {
      let postBody = null;
      // verify the required parameter 'experimentId' is set
      if (experimentId === undefined || experimentId === null) {
        throw new Error("Missing the required parameter 'experimentId' when calling deleteTargetingCondition");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteTargetingCondition");
      }

      let pathParams = {
        'experimentId': experimentId,
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json', 'application/javascript'];
      let returnType = ResponseEntitySingleExperimentView;
      return this.apiClient.callApi(
        '/v1/experiments/{experimentId}/targetingConditions/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteVariant operation.
     * @callback module:api/ExperimentApi~deleteVariantCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResponseEntitySingleExperimentView} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} experimentId 
     * @param {String} name 
     * @param {module:api/ExperimentApi~deleteVariantCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResponseEntitySingleExperimentView}
     */
    deleteVariant(experimentId, name, callback) {
      let postBody = null;
      // verify the required parameter 'experimentId' is set
      if (experimentId === undefined || experimentId === null) {
        throw new Error("Missing the required parameter 'experimentId' when calling deleteVariant");
      }
      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling deleteVariant");
      }

      let pathParams = {
        'experimentId': experimentId,
        'name': name
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json', 'application/javascript'];
      let returnType = ResponseEntitySingleExperimentView;
      return this.apiClient.callApi(
        '/v1/experiments/{experimentId}/variants/{name}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the end operation.
     * @callback module:api/ExperimentApi~endCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResponseEntitySingleExperimentView} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} experimentId 
     * @param {module:api/ExperimentApi~endCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResponseEntitySingleExperimentView}
     */
    end(experimentId, callback) {
      let postBody = null;
      // verify the required parameter 'experimentId' is set
      if (experimentId === undefined || experimentId === null) {
        throw new Error("Missing the required parameter 'experimentId' when calling end");
      }

      let pathParams = {
        'experimentId': experimentId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json', 'application/javascript'];
      let returnType = ResponseEntitySingleExperimentView;
      return this.apiClient.callApi(
        '/v1/experiments/{experimentId}/_end', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the get1 operation.
     * @callback module:api/ExperimentApi~get1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/ResponseEntitySingleExperimentView} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} id 
     * @param {module:api/ExperimentApi~get1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResponseEntitySingleExperimentView}
     */
    get1(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling get1");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json', 'application/javascript'];
      let returnType = ResponseEntitySingleExperimentView;
      return this.apiClient.callApi(
        '/v1/experiments/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the isUserIncluded operation.
     * @callback module:api/ExperimentApi~isUserIncludedCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResponseEntityExperimentSelectedView} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {module:model/ExcludedExperimentListForm} opts.excludedExperimentListForm 
     * @param {module:api/ExperimentApi~isUserIncludedCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResponseEntityExperimentSelectedView}
     */
    isUserIncluded(opts, callback) {
      opts = opts || {};
      let postBody = opts['excludedExperimentListForm'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ResponseEntityExperimentSelectedView;
      return this.apiClient.callApi(
        '/v1/experiments/isUserIncluded', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the list1 operation.
     * @callback module:api/ExperimentApi~list1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/ResponseEntityExperimentView} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.pageId 
     * @param {String} opts.name 
     * @param {Array.<module:model/String>} opts.status 
     * @param {module:api/ExperimentApi~list1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResponseEntityExperimentView}
     */
    list1(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'pageId': opts['pageId'],
        'name': opts['name'],
        'status': this.apiClient.buildCollectionParam(opts['status'], 'multi')
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json', 'application/javascript'];
      let returnType = ResponseEntityExperimentView;
      return this.apiClient.callApi(
        '/v1/experiments', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the start operation.
     * @callback module:api/ExperimentApi~startCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResponseEntitySingleExperimentView} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} experimentId 
     * @param {module:api/ExperimentApi~startCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResponseEntitySingleExperimentView}
     */
    start(experimentId, callback) {
      let postBody = null;
      // verify the required parameter 'experimentId' is set
      if (experimentId === undefined || experimentId === null) {
        throw new Error("Missing the required parameter 'experimentId' when calling start");
      }

      let pathParams = {
        'experimentId': experimentId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json', 'application/javascript'];
      let returnType = ResponseEntitySingleExperimentView;
      return this.apiClient.callApi(
        '/v1/experiments/{experimentId}/_start', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the update1 operation.
     * @callback module:api/ExperimentApi~update1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/ResponseEntitySingleExperimentView} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} experimentId 
     * @param {Object} opts Optional parameters
     * @param {module:model/ExperimentForm} opts.experimentForm 
     * @param {module:api/ExperimentApi~update1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResponseEntitySingleExperimentView}
     */
    update1(experimentId, opts, callback) {
      opts = opts || {};
      let postBody = opts['experimentForm'];
      // verify the required parameter 'experimentId' is set
      if (experimentId === undefined || experimentId === null) {
        throw new Error("Missing the required parameter 'experimentId' when calling update1");
      }

      let pathParams = {
        'experimentId': experimentId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json', 'application/javascript'];
      let returnType = ResponseEntitySingleExperimentView;
      return this.apiClient.callApi(
        '/v1/experiments/{experimentId}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateVariant operation.
     * @callback module:api/ExperimentApi~updateVariantCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResponseEntitySingleExperimentView} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} experimentId 
     * @param {String} name 
     * @param {Object} opts Optional parameters
     * @param {module:model/ExperimentVariantForm} opts.experimentVariantForm 
     * @param {module:api/ExperimentApi~updateVariantCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResponseEntitySingleExperimentView}
     */
    updateVariant(experimentId, name, opts, callback) {
      opts = opts || {};
      let postBody = opts['experimentVariantForm'];
      // verify the required parameter 'experimentId' is set
      if (experimentId === undefined || experimentId === null) {
        throw new Error("Missing the required parameter 'experimentId' when calling updateVariant");
      }
      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling updateVariant");
      }

      let pathParams = {
        'experimentId': experimentId,
        'name': name
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json', 'application/javascript'];
      let accepts = ['application/json', 'application/javascript'];
      let returnType = ResponseEntitySingleExperimentView;
      return this.apiClient.callApi(
        '/v1/experiments/{experimentId}/variants/{name}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
