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
    instance = new DotCmsRestApi.CopyContentTypeForm();
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

  describe('CopyContentTypeForm', function() {
    it('should create an instance of CopyContentTypeForm', function() {
      // uncomment below and update the code to test CopyContentTypeForm
      //var instance = new DotCmsRestApi.CopyContentTypeForm();
      //expect(instance).to.be.a(DotCmsRestApi.CopyContentTypeForm);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new DotCmsRestApi.CopyContentTypeForm();
      //expect(instance).to.be();
    });

    it('should have the property variable (base name: "variable")', function() {
      // uncomment below and update the code to test the property variable
      //var instance = new DotCmsRestApi.CopyContentTypeForm();
      //expect(instance).to.be();
    });

    it('should have the property folder (base name: "folder")', function() {
      // uncomment below and update the code to test the property folder
      //var instance = new DotCmsRestApi.CopyContentTypeForm();
      //expect(instance).to.be();
    });

    it('should have the property host (base name: "host")', function() {
      // uncomment below and update the code to test the property host
      //var instance = new DotCmsRestApi.CopyContentTypeForm();
      //expect(instance).to.be();
    });

    it('should have the property icon (base name: "icon")', function() {
      // uncomment below and update the code to test the property icon
      //var instance = new DotCmsRestApi.CopyContentTypeForm();
      //expect(instance).to.be();
    });

  });

}));
