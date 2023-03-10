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
    instance = new DotCmsRestApi.WorkflowActionClass();
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

  describe('WorkflowActionClass', function() {
    it('should create an instance of WorkflowActionClass', function() {
      // uncomment below and update the code to test WorkflowActionClass
      //var instance = new DotCmsRestApi.WorkflowActionClass();
      //expect(instance).to.be.a(DotCmsRestApi.WorkflowActionClass);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new DotCmsRestApi.WorkflowActionClass();
      //expect(instance).to.be();
    });

    it('should have the property actionId (base name: "actionId")', function() {
      // uncomment below and update the code to test the property actionId
      //var instance = new DotCmsRestApi.WorkflowActionClass();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new DotCmsRestApi.WorkflowActionClass();
      //expect(instance).to.be();
    });

    it('should have the property order (base name: "order")', function() {
      // uncomment below and update the code to test the property order
      //var instance = new DotCmsRestApi.WorkflowActionClass();
      //expect(instance).to.be();
    });

    it('should have the property clazz (base name: "clazz")', function() {
      // uncomment below and update the code to test the property clazz
      //var instance = new DotCmsRestApi.WorkflowActionClass();
      //expect(instance).to.be();
    });

    it('should have the property actionlet (base name: "actionlet")', function() {
      // uncomment below and update the code to test the property actionlet
      //var instance = new DotCmsRestApi.WorkflowActionClass();
      //expect(instance).to.be();
    });

  });

}));
