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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.DotCmsRestApi);
  }
}(this, function(expect, DotCmsRestApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new DotCmsRestApi.ResponseEntityExperimentSelectedView();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('ResponseEntityExperimentSelectedView', function() {
    it('should create an instance of ResponseEntityExperimentSelectedView', function() {
      // uncomment below and update the code to test ResponseEntityExperimentSelectedView
      //var instance = new DotCmsRestApi.ResponseEntityExperimentSelectedView();
      //expect(instance).to.be.a(DotCmsRestApi.ResponseEntityExperimentSelectedView);
    });

    it('should have the property errors (base name: "errors")', function() {
      // uncomment below and update the code to test the property errors
      //var instance = new DotCmsRestApi.ResponseEntityExperimentSelectedView();
      //expect(instance).to.be();
    });

    it('should have the property entity (base name: "entity")', function() {
      // uncomment below and update the code to test the property entity
      //var instance = new DotCmsRestApi.ResponseEntityExperimentSelectedView();
      //expect(instance).to.be();
    });

    it('should have the property messages (base name: "messages")', function() {
      // uncomment below and update the code to test the property messages
      //var instance = new DotCmsRestApi.ResponseEntityExperimentSelectedView();
      //expect(instance).to.be();
    });

    it('should have the property i18nMessagesMap (base name: "i18nMessagesMap")', function() {
      // uncomment below and update the code to test the property i18nMessagesMap
      //var instance = new DotCmsRestApi.ResponseEntityExperimentSelectedView();
      //expect(instance).to.be();
    });

    it('should have the property permissions (base name: "permissions")', function() {
      // uncomment below and update the code to test the property permissions
      //var instance = new DotCmsRestApi.ResponseEntityExperimentSelectedView();
      //expect(instance).to.be();
    });

  });

}));
