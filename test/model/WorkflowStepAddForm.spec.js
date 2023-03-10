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
    instance = new DotCmsRestApi.WorkflowStepAddForm();
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

  describe('WorkflowStepAddForm', function() {
    it('should create an instance of WorkflowStepAddForm', function() {
      // uncomment below and update the code to test WorkflowStepAddForm
      //var instance = new DotCmsRestApi.WorkflowStepAddForm();
      //expect(instance).to.be.a(DotCmsRestApi.WorkflowStepAddForm);
    });

    it('should have the property schemeId (base name: "schemeId")', function() {
      // uncomment below and update the code to test the property schemeId
      //var instance = new DotCmsRestApi.WorkflowStepAddForm();
      //expect(instance).to.be();
    });

    it('should have the property stepName (base name: "stepName")', function() {
      // uncomment below and update the code to test the property stepName
      //var instance = new DotCmsRestApi.WorkflowStepAddForm();
      //expect(instance).to.be();
    });

    it('should have the property enableEscalation (base name: "enableEscalation")', function() {
      // uncomment below and update the code to test the property enableEscalation
      //var instance = new DotCmsRestApi.WorkflowStepAddForm();
      //expect(instance).to.be();
    });

    it('should have the property escalationAction (base name: "escalationAction")', function() {
      // uncomment below and update the code to test the property escalationAction
      //var instance = new DotCmsRestApi.WorkflowStepAddForm();
      //expect(instance).to.be();
    });

    it('should have the property escalationTime (base name: "escalationTime")', function() {
      // uncomment below and update the code to test the property escalationTime
      //var instance = new DotCmsRestApi.WorkflowStepAddForm();
      //expect(instance).to.be();
    });

    it('should have the property stepResolved (base name: "stepResolved")', function() {
      // uncomment below and update the code to test the property stepResolved
      //var instance = new DotCmsRestApi.WorkflowStepAddForm();
      //expect(instance).to.be();
    });

  });

}));
