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
    define(['ApiClient', 'model/AsyncResponse', 'model/Audio', 'model/DiarizeAudio'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/AsyncResponse'), require('../model/Audio'), require('../model/DiarizeAudio'));
  } else {
    // Browser globals (root is window)
    if (!root.SeerNetAudioApIs) {
      root.SeerNetAudioApIs = {};
    }
    root.SeerNetAudioApIs.DiarizeApi = factory(root.SeerNetAudioApIs.ApiClient, root.SeerNetAudioApIs.AsyncResponse, root.SeerNetAudioApIs.Audio, root.SeerNetAudioApIs.DiarizeAudio);
  }
}(this, function(ApiClient, AsyncResponse, Audio, DiarizeAudio) {
  'use strict';

  /**
   * Diarize service.
   * @module api/DiarizeApi
   * @version v1
   */

  /**
   * Constructs a new DiarizeApi. 
   * @alias module:api/DiarizeApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the asyncDiarizeAudio operation.
     * @callback module:api/DiarizeApi~asyncDiarizeAudioCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AsyncResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Diarize an audio file
     * Diarize an audio file.
     * @param {module:model/DiarizeAudio} body Audio object that needs to be diarized.
     * @param {module:api/DiarizeApi~asyncDiarizeAudioCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AsyncResponse}
     */
    this.asyncDiarizeAudio = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw new Error("Missing the required parameter 'body' when calling asyncDiarizeAudio");
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
        '/api/v1/audio/async/diarize', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the syncDiarizeAudio operation.
     * @callback module:api/DiarizeApi~syncDiarizeAudioCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Audio>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Diarize an audio file
     * Diarize an audio file.
     * @param {module:model/DiarizeAudio} body Audio object that needs to be diarized.
     * @param {module:api/DiarizeApi~syncDiarizeAudioCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Audio>}
     */
    this.syncDiarizeAudio = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body == undefined || body == null) {
        throw new Error("Missing the required parameter 'body' when calling syncDiarizeAudio");
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
      var returnType = [Audio];

      return this.apiClient.callApi(
        '/api/v1/audio/sync/diarize', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
