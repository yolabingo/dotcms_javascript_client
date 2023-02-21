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
    instance = new DotCmsRestApi.RestCondition();
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

  describe('RestCondition', function() {
    it('should create an instance of RestCondition', function() {
      // uncomment below and update the code to test RestCondition
      //var instance = new DotCmsRestApi.RestCondition();
      //expect(instance).to.be.a(DotCmsRestApi.RestCondition);
    });

    it('should have the property owningGroup (base name: "owningGroup")', function() {
      // uncomment below and update the code to test the property owningGroup
      //var instance = new DotCmsRestApi.RestCondition();
      //expect(instance).to.be();
    });

    it('should have the property conditionlet (base name: "conditionlet")', function() {
      // uncomment below and update the code to test the property conditionlet
      //var instance = new DotCmsRestApi.RestCondition();
      //expect(instance).to.be();
    });

    it('should have the property values (base name: "values")', function() {
      // uncomment below and update the code to test the property values
      //var instance = new DotCmsRestApi.RestCondition();
      //expect(instance).to.be();
    });

    it('should have the property operator (base name: "operator")', function() {
      // uncomment below and update the code to test the property operator
      //var instance = new DotCmsRestApi.RestCondition();
      //expect(instance).to.be();
    });

    it('should have the property priority (base name: "priority")', function() {
      // uncomment below and update the code to test the property priority
      //var instance = new DotCmsRestApi.RestCondition();
      //expect(instance).to.be();
    });

  });

}));
