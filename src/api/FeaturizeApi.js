/**
 * SeerNet Audio APIs
 * OpenAPI Specification of SeerNet audio APIs
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/AsyncResponse', 'model/Audio'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/AsyncResponse'), require('../model/Audio'));
  } else {
    // Browser globals (root is window)
    if (!root.SeerNetAudioApIs) {
      root.SeerNetAudioApIs = {};
    }
    root.SeerNetAudioApIs.FeaturizeApi = factory(root.SeerNetAudioApIs.ApiClient, root.SeerNetAudioApIs.AsyncResponse, root.SeerNetAudioApIs.Audio);
  }
}(this, function(ApiClient, AsyncResponse, Audio) {
  'use strict';

  /**
   * Featurize service.
   * @module api/FeaturizeApi
   * @version v1
   */

  /**
   * Constructs a new FeaturizeApi. 
   * @alias module:api/FeaturizeApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the asyncFeaturizeAudio operation.
     * @callback module:api/FeaturizeApi~asyncFeaturizeAudioCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AsyncResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * featurize an audio file
     * Extract paralinguistic feature from an audio file.
     * @param {module:model/Audio} body Audio object that needs to be featurized.
     * @param {module:api/FeaturizeApi~asyncFeaturizeAudioCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AsyncResponse}
     */
    this.asyncFeaturizeAudio = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw new Error("Missing the required parameter 'body' when calling asyncFeaturizeAudio");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['UserSecurity'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = AsyncResponse;

      return this.apiClient.callApi(
        '/api/v1/audio/async/featurize', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the syncFeaturizeAudio operation.
     * @callback module:api/FeaturizeApi~syncFeaturizeAudioCallback
     * @param {String} error Error message, if any.
     * @param {Array.<['Number']>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * featurize an audio file
     * Extract paralinguistic feature from an audio file.
     * @param {module:model/Audio} body Audio object that needs to be featurized.
     * @param {module:api/FeaturizeApi~syncFeaturizeAudioCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<['Number']>}
     */
    this.syncFeaturizeAudio = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw new Error("Missing the required parameter 'body' when calling syncFeaturizeAudio");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['UserSecurity'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [['Number']];

      return this.apiClient.callApi(
        '/api/v1/audio/sync/featurize', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
