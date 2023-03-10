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
    instance = new DotCmsRestApi.ContainerForm();
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

  describe('ContainerForm', function() {
    it('should create an instance of ContainerForm', function() {
      // uncomment below and update the code to test ContainerForm
      //var instance = new DotCmsRestApi.ContainerForm();
      //expect(instance).to.be.a(DotCmsRestApi.ContainerForm);
    });

    it('should have the property identifier (base name: "identifier")', function() {
      // uncomment below and update the code to test the property identifier
      //var instance = new DotCmsRestApi.ContainerForm();
      //expect(instance).to.be();
    });

    it('should have the property title (base name: "title")', function() {
      // uncomment below and update the code to test the property title
      //var instance = new DotCmsRestApi.ContainerForm();
      //expect(instance).to.be();
    });

    it('should have the property friendlyName (base name: "friendlyName")', function() {
      // uncomment below and update the code to test the property friendlyName
      //var instance = new DotCmsRestApi.ContainerForm();
      //expect(instance).to.be();
    });

    it('should have the property maxContentlets (base name: "maxContentlets")', function() {
      // uncomment below and update the code to test the property maxContentlets
      //var instance = new DotCmsRestApi.ContainerForm();
      //expect(instance).to.be();
    });

    it('should have the property code (base name: "code")', function() {
      // uncomment below and update the code to test the property code
      //var instance = new DotCmsRestApi.ContainerForm();
      //expect(instance).to.be();
    });

    it('should have the property notes (base name: "notes")', function() {
      // uncomment below and update the code to test the property notes
      //var instance = new DotCmsRestApi.ContainerForm();
      //expect(instance).to.be();
    });

    it('should have the property preLoop (base name: "preLoop")', function() {
      // uncomment below and update the code to test the property preLoop
      //var instance = new DotCmsRestApi.ContainerForm();
      //expect(instance).to.be();
    });

    it('should have the property postLoop (base name: "postLoop")', function() {
      // uncomment below and update the code to test the property postLoop
      //var instance = new DotCmsRestApi.ContainerForm();
      //expect(instance).to.be();
    });

    it('should have the property showOnMenu (base name: "showOnMenu")', function() {
      // uncomment below and update the code to test the property showOnMenu
      //var instance = new DotCmsRestApi.ContainerForm();
      //expect(instance).to.be();
    });

    it('should have the property sortOrder (base name: "sortOrder")', function() {
      // uncomment below and update the code to test the property sortOrder
      //var instance = new DotCmsRestApi.ContainerForm();
      //expect(instance).to.be();
    });

    it('should have the property sortContentletsBy (base name: "sortContentletsBy")', function() {
      // uncomment below and update the code to test the property sortContentletsBy
      //var instance = new DotCmsRestApi.ContainerForm();
      //expect(instance).to.be();
    });

    it('should have the property structureInode (base name: "structureInode")', function() {
      // uncomment below and update the code to test the property structureInode
      //var instance = new DotCmsRestApi.ContainerForm();
      //expect(instance).to.be();
    });

    it('should have the property containerStructures (base name: "containerStructures")', function() {
      // uncomment below and update the code to test the property containerStructures
      //var instance = new DotCmsRestApi.ContainerForm();
      //expect(instance).to.be();
    });

    it('should have the property owner (base name: "owner")', function() {
      // uncomment below and update the code to test the property owner
      //var instance = new DotCmsRestApi.ContainerForm();
      //expect(instance).to.be();
    });

    it('should have the property hostId (base name: "hostId")', function() {
      // uncomment below and update the code to test the property hostId
      //var instance = new DotCmsRestApi.ContainerForm();
      //expect(instance).to.be();
    });

    it('should have the property staticify (base name: "staticify")', function() {
      // uncomment below and update the code to test the property staticify
      //var instance = new DotCmsRestApi.ContainerForm();
      //expect(instance).to.be();
    });

    it('should have the property useDiv (base name: "useDiv")', function() {
      // uncomment below and update the code to test the property useDiv
      //var instance = new DotCmsRestApi.ContainerForm();
      //expect(instance).to.be();
    });

    it('should have the property dynamic (base name: "dynamic")', function() {
      // uncomment below and update the code to test the property dynamic
      //var instance = new DotCmsRestApi.ContainerForm();
      //expect(instance).to.be();
    });

  });

}));
