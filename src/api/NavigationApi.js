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

/**
* Navigation service.
* @module api/NavigationApi
* @version 3
*/
export default class NavigationApi {

    /**
    * Constructs a new NavigationApi. 
    * @alias module:api/NavigationApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the loadJson1 operation.
     * @callback module:api/NavigationApi~loadJson1Callback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} uri 
     * @param {Object} opts Optional parameters
     * @param {String} opts.depth 
     * @param {String} opts.languageId 
     * @param {module:api/NavigationApi~loadJson1Callback} callback The callback function, accepting three arguments: error, data, response
     */
    loadJson1(uri, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'uri' is set
      if (uri === undefined || uri === null) {
        throw new Error("Missing the required parameter 'uri' when calling loadJson1");
      }

      let pathParams = {
        'uri': uri
      };
      let queryParams = {
        'depth': opts['depth'],
        'languageId': opts['languageId']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json', 'application/javascript'];
      let returnType = null;
      return this.apiClient.callApi(
        '/v1/nav/{uri}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
