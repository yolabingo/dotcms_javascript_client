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
    instance = new DotCmsRestApi.WorkflowScheme();
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

  describe('WorkflowScheme', function() {
    it('should create an instance of WorkflowScheme', function() {
      // uncomment below and update the code to test WorkflowScheme
      //var instance = new DotCmsRestApi.WorkflowScheme();
      //expect(instance).to.be.a(DotCmsRestApi.WorkflowScheme);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new DotCmsRestApi.WorkflowScheme();
      //expect(instance).to.be();
    });

    it('should have the property creationDate (base name: "creationDate")', function() {
      // uncomment below and update the code to test the property creationDate
      //var instance = new DotCmsRestApi.WorkflowScheme();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new DotCmsRestApi.WorkflowScheme();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new DotCmsRestApi.WorkflowScheme();
      //expect(instance).to.be();
    });

    it('should have the property archived (base name: "archived")', function() {
      // uncomment below and update the code to test the property archived
      //var instance = new DotCmsRestApi.WorkflowScheme();
      //expect(instance).to.be();
    });

    it('should have the property mandatory (base name: "mandatory")', function() {
      // uncomment below and update the code to test the property mandatory
      //var instance = new DotCmsRestApi.WorkflowScheme();
      //expect(instance).to.be();
    });

    it('should have the property defaultScheme (base name: "defaultScheme")', function() {
      // uncomment below and update the code to test the property defaultScheme
      //var instance = new DotCmsRestApi.WorkflowScheme();
      //expect(instance).to.be();
    });

    it('should have the property modDate (base name: "modDate")', function() {
      // uncomment below and update the code to test the property modDate
      //var instance = new DotCmsRestApi.WorkflowScheme();
      //expect(instance).to.be();
    });

    it('should have the property entryActionId (base name: "entryActionId")', function() {
      // uncomment below and update the code to test the property entryActionId
      //var instance = new DotCmsRestApi.WorkflowScheme();
      //expect(instance).to.be();
    });

    it('should have the property system (base name: "system")', function() {
      // uncomment below and update the code to test the property system
      //var instance = new DotCmsRestApi.WorkflowScheme();
      //expect(instance).to.be();
    });

  });

}));