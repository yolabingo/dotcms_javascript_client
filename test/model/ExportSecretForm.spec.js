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
    instance = new DotCmsRestApi.ExportSecretForm();
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

  describe('ExportSecretForm', function() {
    it('should create an instance of ExportSecretForm', function() {
      // uncomment below and update the code to test ExportSecretForm
      //var instance = new DotCmsRestApi.ExportSecretForm();
      //expect(instance).to.be.a(DotCmsRestApi.ExportSecretForm);
    });

    it('should have the property password (base name: "password")', function() {
      // uncomment below and update the code to test the property password
      //var instance = new DotCmsRestApi.ExportSecretForm();
      //expect(instance).to.be();
    });

    it('should have the property exportAll (base name: "exportAll")', function() {
      // uncomment below and update the code to test the property exportAll
      //var instance = new DotCmsRestApi.ExportSecretForm();
      //expect(instance).to.be();
    });

    it('should have the property appKeys (base name: "appKeys")', function() {
      // uncomment below and update the code to test the property appKeys
      //var instance = new DotCmsRestApi.ExportSecretForm();
      //expect(instance).to.be();
    });

    it('should have the property appKeysBySite (base name: "appKeysBySite")', function() {
      // uncomment below and update the code to test the property appKeysBySite
      //var instance = new DotCmsRestApi.ExportSecretForm();
      //expect(instance).to.be();
    });

  });

}));