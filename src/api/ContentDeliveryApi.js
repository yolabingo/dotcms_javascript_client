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
import SearchForm from '../model/SearchForm';

/**
* ContentDelivery service.
* @module api/ContentDeliveryApi
* @version 3
*/
export default class ContentDeliveryApi {

    /**
    * Constructs a new ContentDeliveryApi. 
    * @alias module:api/ContentDeliveryApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the canLockContent operation.
     * @callback module:api/ContentDeliveryApi~canLockContentCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} params 
     * @param {module:api/ContentDeliveryApi~canLockContentCallback} callback The callback function, accepting three arguments: error, data, response
     */
    canLockContent(params, callback) {
      let postBody = null;
      // verify the required parameter 'params' is set
      if (params === undefined || params === null) {
        throw new Error("Missing the required parameter 'params' when calling canLockContent");
      }

      let pathParams = {
        'params': params
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/content/canLock/{params}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getContent operation.
     * @callback module:api/ContentDeliveryApi~getContentCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} params 
     * @param {module:api/ContentDeliveryApi~getContentCallback} callback The callback function, accepting three arguments: error, data, response
     */
    getContent(params, callback) {
      let postBody = null;
      // verify the required parameter 'params' is set
      if (params === undefined || params === null) {
        throw new Error("Missing the required parameter 'params' when calling getContent");
      }

      let pathParams = {
        'params': params
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/content/{params}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the indexCount operation.
     * @callback module:api/ContentDeliveryApi~indexCountCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} query 
     * @param {String} type 
     * @param {String} callback 
     * @param {module:api/ContentDeliveryApi~indexCountCallback} callback The callback function, accepting three arguments: error, data, response
     */
    indexCount(query, type, callback, callback) {
      let postBody = null;
      // verify the required parameter 'query' is set
      if (query === undefined || query === null) {
        throw new Error("Missing the required parameter 'query' when calling indexCount");
      }
      // verify the required parameter 'type' is set
      if (type === undefined || type === null) {
        throw new Error("Missing the required parameter 'type' when calling indexCount");
      }
      // verify the required parameter 'callback' is set
      if (callback === undefined || callback === null) {
        throw new Error("Missing the required parameter 'callback' when calling indexCount");
      }

      let pathParams = {
        'query': query,
        'type': type,
        'callback': callback
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['text/plain'];
      let returnType = null;
      return this.apiClient.callApi(
        '/content/indexcount/{query}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the indexSearch operation.
     * @callback module:api/ContentDeliveryApi~indexSearchCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} query 
     * @param {String} sortby 
     * @param {Number} limit 
     * @param {Number} offset 
     * @param {String} type 
     * @param {String} callback 
     * @param {module:api/ContentDeliveryApi~indexSearchCallback} callback The callback function, accepting three arguments: error, data, response
     */
    indexSearch(query, sortby, limit, offset, type, callback, callback) {
      let postBody = null;
      // verify the required parameter 'query' is set
      if (query === undefined || query === null) {
        throw new Error("Missing the required parameter 'query' when calling indexSearch");
      }
      // verify the required parameter 'sortby' is set
      if (sortby === undefined || sortby === null) {
        throw new Error("Missing the required parameter 'sortby' when calling indexSearch");
      }
      // verify the required parameter 'limit' is set
      if (limit === undefined || limit === null) {
        throw new Error("Missing the required parameter 'limit' when calling indexSearch");
      }
      // verify the required parameter 'offset' is set
      if (offset === undefined || offset === null) {
        throw new Error("Missing the required parameter 'offset' when calling indexSearch");
      }
      // verify the required parameter 'type' is set
      if (type === undefined || type === null) {
        throw new Error("Missing the required parameter 'type' when calling indexSearch");
      }
      // verify the required parameter 'callback' is set
      if (callback === undefined || callback === null) {
        throw new Error("Missing the required parameter 'callback' when calling indexSearch");
      }

      let pathParams = {
        'query': query,
        'sortby': sortby,
        'limit': limit,
        'offset': offset,
        'type': type,
        'callback': callback
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/content/indexsearch/{query}/sortby/{sortby}/limit/{limit}/offset/{offset}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the lockContent operation.
     * @callback module:api/ContentDeliveryApi~lockContentCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} params 
     * @param {module:api/ContentDeliveryApi~lockContentCallback} callback The callback function, accepting three arguments: error, data, response
     */
    lockContent(params, callback) {
      let postBody = null;
      // verify the required parameter 'params' is set
      if (params === undefined || params === null) {
        throw new Error("Missing the required parameter 'params' when calling lockContent");
      }

      let pathParams = {
        'params': params
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/content/lock/{params}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the search operation.
     * @callback module:api/ContentDeliveryApi~searchCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {module:model/SearchForm} opts.searchForm 
     * @param {module:api/ContentDeliveryApi~searchCallback} callback The callback function, accepting three arguments: error, data, response
     */
    search(opts, callback) {
      opts = opts || {};
      let postBody = opts['searchForm'];

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
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/content/_search', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the singlePOST operation.
     * @callback module:api/ContentDeliveryApi~singlePOSTCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} params 
     * @param {module:api/ContentDeliveryApi~singlePOSTCallback} callback The callback function, accepting three arguments: error, data, response
     */
    singlePOST(params, callback) {
      let postBody = null;
      // verify the required parameter 'params' is set
      if (params === undefined || params === null) {
        throw new Error("Missing the required parameter 'params' when calling singlePOST");
      }

      let pathParams = {
        'params': params
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json', 'text/plain'];
      let returnType = null;
      return this.apiClient.callApi(
        '/content/{params}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the singlePUT operation.
     * @callback module:api/ContentDeliveryApi~singlePUTCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} params 
     * @param {module:api/ContentDeliveryApi~singlePUTCallback} callback The callback function, accepting three arguments: error, data, response
     */
    singlePUT(params, callback) {
      let postBody = null;
      // verify the required parameter 'params' is set
      if (params === undefined || params === null) {
        throw new Error("Missing the required parameter 'params' when calling singlePUT");
      }

      let pathParams = {
        'params': params
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json', 'text/plain'];
      let returnType = null;
      return this.apiClient.callApi(
        '/content/{params}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the unlockContent operation.
     * @callback module:api/ContentDeliveryApi~unlockContentCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} params 
     * @param {module:api/ContentDeliveryApi~unlockContentCallback} callback The callback function, accepting three arguments: error, data, response
     */
    unlockContent(params, callback) {
      let postBody = null;
      // verify the required parameter 'params' is set
      if (params === undefined || params === null) {
        throw new Error("Missing the required parameter 'params' when calling unlockContent");
      }

      let pathParams = {
        'params': params
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/content/unlock/{params}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}