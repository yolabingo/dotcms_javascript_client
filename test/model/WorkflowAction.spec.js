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
    instance = new DotCmsRestApi.WorkflowAction();
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

  describe('WorkflowAction', function() {
    it('should create an instance of WorkflowAction', function() {
      // uncomment below and update the code to test WorkflowAction
      //var instance = new DotCmsRestApi.WorkflowAction();
      //expect(instance).to.be.a(DotCmsRestApi.WorkflowAction);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new DotCmsRestApi.WorkflowAction();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new DotCmsRestApi.WorkflowAction();
      //expect(instance).to.be();
    });

    it('should have the property schemeId (base name: "schemeId")', function() {
      // uncomment below and update the code to test the property schemeId
      //var instance = new DotCmsRestApi.WorkflowAction();
      //expect(instance).to.be();
    });

    it('should have the property condition (base name: "condition")', function() {
      // uncomment below and update the code to test the property condition
      //var instance = new DotCmsRestApi.WorkflowAction();
      //expect(instance).to.be();
    });

    it('should have the property nextStep (base name: "nextStep")', function() {
      // uncomment below and update the code to test the property nextStep
      //var instance = new DotCmsRestApi.WorkflowAction();
      //expect(instance).to.be();
    });

    it('should have the property nextAssign (base name: "nextAssign")', function() {
      // uncomment below and update the code to test the property nextAssign
      //var instance = new DotCmsRestApi.WorkflowAction();
      //expect(instance).to.be();
    });

    it('should have the property icon (base name: "icon")', function() {
      // uncomment below and update the code to test the property icon
      //var instance = new DotCmsRestApi.WorkflowAction();
      //expect(instance).to.be();
    });

    it('should have the property roleHierarchyForAssign (base name: "roleHierarchyForAssign")', function() {
      // uncomment below and update the code to test the property roleHierarchyForAssign
      //var instance = new DotCmsRestApi.WorkflowAction();
      //expect(instance).to.be();
    });

    it('should have the property assignable (base name: "assignable")', function() {
      // uncomment below and update the code to test the property assignable
      //var instance = new DotCmsRestApi.WorkflowAction();
      //expect(instance).to.be();
    });

    it('should have the property commentable (base name: "commentable")', function() {
      // uncomment below and update the code to test the property commentable
      //var instance = new DotCmsRestApi.WorkflowAction();
      //expect(instance).to.be();
    });

    it('should have the property order (base name: "order")', function() {
      // uncomment below and update the code to test the property order
      //var instance = new DotCmsRestApi.WorkflowAction();
      //expect(instance).to.be();
    });

    it('should have the property saveActionlet (base name: "saveActionlet")', function() {
      // uncomment below and update the code to test the property saveActionlet
      //var instance = new DotCmsRestApi.WorkflowAction();
      //expect(instance).to.be();
    });

    it('should have the property publishActionlet (base name: "publishActionlet")', function() {
      // uncomment below and update the code to test the property publishActionlet
      //var instance = new DotCmsRestApi.WorkflowAction();
      //expect(instance).to.be();
    });

    it('should have the property unpublishActionlet (base name: "unpublishActionlet")', function() {
      // uncomment below and update the code to test the property unpublishActionlet
      //var instance = new DotCmsRestApi.WorkflowAction();
      //expect(instance).to.be();
    });

    it('should have the property archiveActionlet (base name: "archiveActionlet")', function() {
      // uncomment below and update the code to test the property archiveActionlet
      //var instance = new DotCmsRestApi.WorkflowAction();
      //expect(instance).to.be();
    });

    it('should have the property pushPublishActionlet (base name: "pushPublishActionlet")', function() {
      // uncomment below and update the code to test the property pushPublishActionlet
      //var instance = new DotCmsRestApi.WorkflowAction();
      //expect(instance).to.be();
    });

    it('should have the property unarchiveActionlet (base name: "unarchiveActionlet")', function() {
      // uncomment below and update the code to test the property unarchiveActionlet
      //var instance = new DotCmsRestApi.WorkflowAction();
      //expect(instance).to.be();
    });

    it('should have the property deleteActionlet (base name: "deleteActionlet")', function() {
      // uncomment below and update the code to test the property deleteActionlet
      //var instance = new DotCmsRestApi.WorkflowAction();
      //expect(instance).to.be();
    });

    it('should have the property destroyActionlet (base name: "destroyActionlet")', function() {
      // uncomment below and update the code to test the property destroyActionlet
      //var instance = new DotCmsRestApi.WorkflowAction();
      //expect(instance).to.be();
    });

    it('should have the property moveActionlet (base name: "moveActionlet")', function() {
      // uncomment below and update the code to test the property moveActionlet
      //var instance = new DotCmsRestApi.WorkflowAction();
      //expect(instance).to.be();
    });

    it('should have the property owner (base name: "owner")', function() {
      // uncomment below and update the code to test the property owner
      //var instance = new DotCmsRestApi.WorkflowAction();
      //expect(instance).to.be();
    });

    it('should have the property moveActionletHashPath (base name: "moveActionletHashPath")', function() {
      // uncomment below and update the code to test the property moveActionletHashPath
      //var instance = new DotCmsRestApi.WorkflowAction();
      //expect(instance).to.be();
    });

    it('should have the property nextStepCurrentStep (base name: "nextStepCurrentStep")', function() {
      // uncomment below and update the code to test the property nextStepCurrentStep
      //var instance = new DotCmsRestApi.WorkflowAction();
      //expect(instance).to.be();
    });

    it('should have the property showOn (base name: "showOn")', function() {
      // uncomment below and update the code to test the property showOn
      //var instance = new DotCmsRestApi.WorkflowAction();
      //expect(instance).to.be();
    });

  });

}));
